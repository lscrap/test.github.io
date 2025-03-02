import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Mock FAQ data (in a real app, this would come from a database)
const faqs = [
  {
    id: "1",
    question: "How do I join the group?",
    answer:
      "You can join our group by visiting our Roblox group page and clicking the 'Join Group' button. We also recommend joining our Discord server for better communication with other members.",
  },
  {
    id: "2",
    question: "How can I apply for a staff position?",
    answer:
      "You can apply for staff positions through our website's Applications page. Make sure to check if the position you're interested in is currently open for applications.",
  },
  {
    id: "3",
    question: "What are the requirements to get promoted?",
    answer:
      "Promotion requirements vary by rank. Generally, you need to be active, participate in group events, follow the rules, and show dedication to the group. You can find detailed requirements on our Ranks page.",
  },
  {
    id: "4",
    question: "When are group events held?",
    answer:
      "We hold various events throughout the week. Training sessions are usually on weekends, while other events like meetings and game nights are scheduled during the week. Check our Events page for the latest schedule.",
  },
  {
    id: "5",
    question: "How can I report a member for breaking rules?",
    answer:
      "If you need to report a member for breaking rules, please open a ticket in our Discord server. Provide evidence such as screenshots or recordings if possible.",
  },
  {
    id: "6",
    question: "Can I suggest new features for the game?",
    answer:
      "Yes! We welcome suggestions from our community. You can submit your ideas through our Discord server in the designated suggestions channel.",
  },
  {
    id: "7",
    question: "How do I get help with the game?",
    answer:
      "If you need help with the game, you can ask questions in our Discord server. We're always happy to assist our members.",
  },
  {
    id: "8",
    question: "What happens if I'm inactive for a long time?",
    answer:
      "Members who are inactive for extended periods (usually more than 30 days) may be removed from staff positions or demoted. If you know you'll be away, please inform a staff member.",
  },
  {
    id: "9",
    question: "How can I contribute to the group?",
    answer:
      "There are many ways to contribute! You can apply for staff positions, help new members, participate in events, create content related to our group, or simply be active and follow the rules.",
  },
  {
    id: "10",
    question: "Is there a Discord server for the group?",
    answer:
      "Yes, we have an active Discord server where members can communicate, get updates, and participate in discussions. The link to join can be found on our website or in our Roblox group description.",
  },
]

export default function FAQPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Find answers to common questions about our group and game.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}

