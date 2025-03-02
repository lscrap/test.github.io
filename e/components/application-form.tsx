"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import type { Department } from "@/lib/application-config"
import { submitApplication } from "@/lib/actions"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import { Loader2 } from "lucide-react"

// Create a schema for the application form
const createApplicationSchema = (department: Department) => {
  const baseSchema = {
    robloxUsername: z.string().min(3, {
      message: "Username must be at least 3 characters.",
    }),
    discordUsername: z.string().min(3, {
      message: "Discord username must be at least 3 characters.",
    }),
    age: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Please enter a valid age.",
    }),
    experience: z.string().min(50, {
      message: "Please provide more details about your experience (minimum 50 characters).",
    }),
    whyJoin: z.string().min(50, {
      message: "Please provide more details about why you want to join (minimum 50 characters).",
    }),
  }

  // Add custom questions if they exist
  if (department.questions && department.questions.length > 0) {
    department.questions.forEach((_, index) => {
      baseSchema[`question${index}`] = z.string().min(20, {
        message: "Please provide a more detailed answer (minimum 20 characters).",
      })
    })
  }

  return z.object(baseSchema)
}

type ApplicationFormProps = {
  department: Department
}

export function ApplicationForm({ department }: ApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  // Create the form schema based on the department
  const formSchema = createApplicationSchema(department)

  // Define the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      robloxUsername: "",
      discordUsername: "",
      age: "",
      experience: "",
      whyJoin: "",
      ...(department.questions?.reduce(
        (acc, _, index) => {
          acc[`question${index}`] = ""
          return acc
        },
        {} as Record<string, string>,
      ) || {}),
    },
  })

  // Handle form submission
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    try {
      // Submit the application
      await submitApplication({
        departmentId: department.id,
        departmentName: department.name,
        ...values,
      })

      // Show success message
      toast({
        title: "Application Submitted",
        description: "Your application has been submitted successfully. We'll review it and get back to you soon.",
      })

      // Redirect to confirmation page
      setTimeout(() => {
        router.push("/applications/thank-you")
      }, 2000)
    } catch (error) {
      // Show error message
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again later.",
        variant: "destructive",
      })
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="robloxUsername"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Roblox Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your Roblox username" {...field} />
                </FormControl>
                <FormDescription>Your current Roblox username.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="discordUsername"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Discord Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your Discord username" {...field} />
                </FormControl>
                <FormDescription>Your Discord username for communication.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Enter your age" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Relevant Experience</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe your relevant experience for this position"
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Tell us about your experience related to this position.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="whyJoin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Why do you want to join?</FormLabel>
                <FormControl>
                  <Textarea placeholder="Explain why you want to join our team" className="min-h-[120px]" {...field} />
                </FormControl>
                <FormDescription>Tell us why you're interested in joining our team.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Render custom questions if they exist */}
          {department.questions?.map((question, index) => (
            <FormField
              key={index}
              control={form.control}
              name={`question${index}` as any}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{question}</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Your answer" className="min-h-[120px]" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Application"
            )}
          </Button>
        </form>
      </Form>
      <Toaster />
    </>
  )
}

