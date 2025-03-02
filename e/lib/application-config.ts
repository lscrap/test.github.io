// Types for application configuration
export interface Department {
  id: string
  name: string
  description: string
  isOpen: boolean
  requirements?: string[]
  questions?: string[]
  webhookUrl: string
}

// Application departments configuration
export const departments: Department[] = [
  {
    id: "moderation",
    name: "Moderation Team",
    description:
      "Help maintain a safe and friendly environment for all players by enforcing rules and assisting members.",
    isOpen: false,
    requirements: [
      "Must be at least 14 years old",
      "Must have been in the group for at least 2 weeks",
      "Must have a clean moderation record",
    ],
    questions: [
      "Why do you want to join the Moderation Team?",
      "How would you handle a situation where a player is breaking rules?",
      "What experience do you have with moderation?",
    ],
    webhookUrl: process.env.DISCORD_WEBHOOK_URL_MODERATION || "",
  },
  {
    id: "development",
    name: "Development Team",
    description: "Create and improve game features, scripts, and systems to enhance the player experience.",
    isOpen: false,
    requirements: [
      "Must have experience",
      "Must be able to demonstrate previous work",
      "Must be able to work collaboratively with other developers",
    ],
    questions: [
      "What development experience do you have?",
      "Do you have any examples of your work?",
      "What game features would you like to implement?",
      "What type of developer are you? (Modeler, scripter, builder, etc.)",
    ],
    webhookUrl: process.env.DISCORD_WEBHOOK_URL_DEVELOPMENT || "",
  },
  {
    id: "FBI",
    name: "Federal Bureau of Investigation",
    description: "[CLASSIFIED]",
    isOpen: false,
    requirements: ["Must be professional", "Must be 14+", "Must have a good reputation"],
    questions: [
      "Why should we pick you?",
      "Why do you wanna join the FBI?",
      "How long have you been in this group?",
    ],
    webhookUrl: process.env.DISCORD_WEBHOOK_URL_FBI || "",
  },
  {
    id: "events",
    name: "Events Team",
    description: "Plan, organize, and host engaging events for our community.",
    isOpen: false,
    requirements: [
      "Must be at least 14 years old",
      "Must have been in the group for at least 1 month",
      "Must be able to attend events regularly",
    ],
    questions: [
      "Why do you want to join the Events Team?",
      "What types of events would you like to organize?",
      "How would you ensure events run smoothly?",
    ],
    webhookUrl: process.env.DISCORD_WEBHOOK_URL_EVENTS || "",
  },
  {
    id: "community",
    name: "Community Management",
    description: "Engage with our community, manage social media, and help grow our presence.",
    isOpen: false,
    requirements: [
      "Must be at least 16 years old",
      "Must have excellent communication skills",
      "Must be active in our community",
    ],
    questions: [
      "Why do you want to join the Community Management team?",
      "What experience do you have with community engagement?",
      "How would you help grow our community?",
    ],
    webhookUrl: process.env.DISCORD_WEBHOOK_URL_COMMUNITY || "",
  },
  {
    id: "ES",
    name: "Executive Staff",
    description: "The Executive Staff organizes and oversees key events like trainings, shifts, and promotional activities, while also managing and supervising the Secret Service to ensure smooth operations and security.",
    isOpen: false,
    requirements: [
      "Must have been in the group for at least 2 months",
      "Must have excellent communication skills",
      "Must be patient and willing to help others",
    ],
    questions: [
      "Why do you want to join the Executive Staff?",
      "What experience do you have with training others?",
      "How would you approach training new members?",
    ],
    webhookUrl: process.env.DISCORD_WEBHOOK_URL_EXECUTIVE || "",
  },
]

// Function to get a department by ID
export function getDepartmentById(id: string): Department | undefined {
  return departments.find((dept) => dept.id === id)
}

// Function to get all open departments
export function getOpenDepartments(): Department[] {
  return departments.filter((dept) => dept.isOpen)
}

// Function to get all departments
export function getAllDepartments(): Department[] {
  return departments
}

