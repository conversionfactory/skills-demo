import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Drag and Drop Builder",
    description:
      "Our form builder has a drag and drop interface that makes it easy to create forms. You can add fields, rearrange them, and customize the look.",
  },
  {
    title: "Conditional Logic",
    description:
      "Add conditional logic to your forms so that fields show or hide based on previous answers. This helps make forms shorter and more relevant.",
  },
  {
    title: "Integrations",
    description:
      "Connect your forms to other tools you use like Slack, Google Sheets, Salesforce, HubSpot, and more. We have over 100 integrations available.",
  },
  {
    title: "Analytics",
    description:
      "See how your forms are performing with our built-in analytics. Track submissions, completion rates, and drop-off points.",
  },
  {
    title: "File Uploads",
    description:
      "Allow respondents to upload files through your forms. We support images, documents, PDFs, and more with up to 10GB of storage.",
  },
  {
    title: "Team Collaboration",
    description:
      "Work together with your team on forms. Share forms, assign permissions, and collaborate in real-time with team members.",
  },
];

const testimonials = [
  {
    quote:
      "FormFlow has been really helpful for our team. We use it for everything from customer surveys to internal requests.",
    name: "Sarah Johnson",
    role: "Marketing Manager",
    company: "TechCorp",
  },
  {
    quote:
      "We switched from our old form tool to FormFlow and it has been a good experience. The forms look nice and are easy to set up.",
    name: "Mike Chen",
    role: "Product Lead",
    company: "StartupXYZ",
  },
  {
    quote:
      "The integrations are really useful. We can connect our forms directly to Salesforce which saves us a lot of time.",
    name: "Lisa Park",
    role: "Operations Director",
    company: "GrowthCo",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto">
            Build forms for your business
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            FormFlow is an online form builder that helps you create forms,
            surveys, and quizzes. Collect responses and manage your data all in
            one place.
          </p>
          <div className="mt-8 flex gap-3 justify-center">
            <Button size="lg">Get started for free</Button>
            <Button size="lg" variant="outline">
              See a demo
            </Button>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Free plan available. No credit card required.
          </p>
        </div>
      </section>

      {/* Social proof */}
      <section className="py-12 border-y bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground mb-6">
            Used by over 10,000 businesses
          </p>
          <div className="flex justify-center gap-8 md:gap-16 items-center opacity-40">
            <span className="text-lg font-semibold">Acme Inc</span>
            <span className="text-lg font-semibold">Globex</span>
            <span className="text-lg font-semibold">Initech</span>
            <span className="text-lg font-semibold">Umbrella</span>
            <span className="text-lg font-semibold hidden md:block">
              Wayne Enterprises
            </span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Features</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Everything you need to build and manage forms for your business.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card key={feature.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What our customers say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name}>
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground mb-4">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Sign up today and start building forms in minutes. No credit card
            required to get started.
          </p>
          <Button size="lg">Start building forms</Button>
        </div>
      </section>
    </>
  );
}
