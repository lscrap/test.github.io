"use server"

import { revalidatePath } from "next/cache"
import { getDepartmentById } from "./application-config"

// Type for application data
interface ApplicationData {
  departmentId: string
  departmentName: string
  robloxUsername: string
  discordUsername: string
  age: string
  experience: string
  whyJoin: string
  [key: string]: string // For custom questions
}

// Function to submit application to Discord webhook
export async function submitApplication(data: ApplicationData): Promise<{ success: boolean; message: string }> {
  try {
    const department = getDepartmentById(data.departmentId)

    // If department doesn't exist or webhook URL is not set, throw an error
    if (!department || !department.webhookUrl) {
      console.error("Department not found or webhook URL is not set")
      return { success: false, message: "Configuration error. Please contact an administrator." }
    }

    // Format the application data for Discord
    const embed = {
      title: `New Application: ${data.departmentName}`,
      color: 3447003, // Blue color
      fields: [
        {
          name: "Roblox Username",
          value: data.robloxUsername,
          inline: true,
        },
        {
          name: "Discord Username",
          value: data.discordUsername,
          inline: true,
        },
        {
          name: "Age",
          value: data.age,
          inline: true,
        },
        {
          name: "Experience",
          value: data.experience,
        },
        {
          name: "Why Join",
          value: data.whyJoin,
        },
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: "Application System",
      },
    }

    // Add custom questions to the embed
    department.questions?.forEach((question, index) => {
      const answer = data[`question${index}`]
      if (answer) {
        embed.fields.push({
          name: question,
          value: answer,
        })
      }
    })

    // Send the webhook
    const response = await fetch(department.webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        embeds: [embed],
      }),
    })

    if (!response.ok) {
      throw new Error(`Failed to send webhook: ${response.status}`)
    }

    // Revalidate the applications page
    revalidatePath("/applications")

    return { success: true, message: "Application submitted successfully" }
  } catch (error) {
    console.error("Error submitting application:", error)
    return { success: false, message: "Failed to submit application. Please try again later." }
  }
}

// Function to toggle department application status (for admin use)
export async function toggleDepartmentStatus(
  departmentId: string,
  isOpen: boolean,
): Promise<{ success: boolean; message: string }> {
  try {
    // In a real application, this would update a database
    // For now, we'll just revalidate the path
    revalidatePath("/applications")
    revalidatePath(`/applications/${departmentId}`)

    return {
      success: true,
      message: `Department ${departmentId} is now ${isOpen ? "open" : "closed"} for applications`,
    }
  } catch (error) {
    console.error("Error toggling department status:", error)
    return { success: false, message: "Failed to update department status" }
  }
}

