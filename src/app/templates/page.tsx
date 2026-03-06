import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const templates = [
  {
    title: "Contact Form",
    category: "General",
    description: "A simple contact form with name, email, and message fields.",
  },
  {
    title: "Customer Feedback Survey",
    category: "Survey",
    description:
      "Collect feedback from your customers about their experience with your product or service.",
  },
  {
    title: "Job Application",
    category: "HR",
    description:
      "A job application form with resume upload, work history, and references.",
  },
  {
    title: "Event Registration",
    category: "Events",
    description:
      "Let attendees register for your event with meal preferences, t-shirt size, and more.",
  },
  {
    title: "Lead Generation",
    category: "Marketing",
    description:
      "Capture leads with a form that collects name, email, company, and role.",
  },
  {
    title: "Customer Support Request",
    category: "Support",
    description:
      "Let customers submit support tickets with priority level and file attachments.",
  },
];

export default function TemplatesPage() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Templates</h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Get started quickly with one of our pre-built form templates. Customize
          them to fit your needs.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {templates.map((template) => (
            <Card key={template.title}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{template.title}</CardTitle>
                  <Badge variant="secondary">{template.category}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {template.description}
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Use template
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
