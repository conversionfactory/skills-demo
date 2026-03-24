import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const features = [
  {
    icon: "⬡",
    title: "Drag & Drop Builder",
    description: "Build any form in minutes without touching code. Rearrange, style, and publish — all in the browser.",
  },
  {
    icon: "◈",
    title: "Conditional Logic",
    description: "Show only what's relevant. Smart branching cuts visible fields while collecting the same data.",
  },
  {
    icon: "⟳",
    title: "100+ Integrations",
    description: "Every submission lands where you work — Slack, Salesforce, HubSpot, Sheets. Set once, forget forever.",
  },
  {
    icon: "◉",
    title: "Built-in Payments",
    description: "Stripe baked in from day one. Collect deposits, subscriptions, or one-time fees inside any form.",
  },
  {
    icon: "◫",
    title: "White-Label Branding",
    description: "Your logo, your colors, your domain. Clients never need to know what's powering their forms.",
  },
  {
    icon: "△",
    title: "Real Analytics",
    description: "See where respondents drop off. Track completion rates by source, device, and time of day.",
  },
];

const testimonials = [
  {
    quote: "We rebuilt our lead gen form in FormCraft and went from 12% to 68% completion rate. Same traffic, 3× the leads.",
    name: "Sarah Johnson",
    role: "Marketing Manager",
    company: "TechCorp",
    metric: "3× leads",
  },
  {
    quote: "The white-label branding is the killer feature for us. Our clients get a polished experience with our branding throughout.",
    name: "Mike Chen",
    role: "Agency Owner",
    company: "Studio XYZ",
    metric: "20+ clients",
  },
  {
    quote: "Stripe integration alone saved us thousands in custom dev work. FormCraft paid for itself in the first week.",
    name: "Lisa Park",
    role: "Operations Lead",
    company: "GrowthCo",
    metric: "Week 1 ROI",
  },
];

const skills = [
  {
    href: "/email-sequence",
    label: "Email Sequence",
    description: "7-email activation flow — free to Pro",
    tag: "Built with /email-sequence",
  },
  {
    href: "/ad-creative",
    label: "Ad Creative",
    description: "Google, Meta & LinkedIn ads via Gemini",
    tag: "Built with /ad-creative",
  },
  {
    href: "/programmatic-seo",
    label: "Programmatic SEO",
    description: "12 pages · 87,300 monthly searches",
    tag: "Built with /programmatic-seo",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative hero-grid overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative container mx-auto px-6 py-32 md:py-44 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-primary border border-primary/20 bg-primary/5 rounded-full px-4 py-1.5 mb-10 animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Now with built-in Stripe payments
          </div>

          <h1 className="font-display text-6xl md:text-8xl italic leading-[0.9] tracking-tight text-foreground mb-8 animate-fade-up animate-fade-up-delay-1">
            Forms that feel<br />
            <span className="text-primary">effortless.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed animate-fade-up animate-fade-up-delay-2">
            Beautiful forms with conditional logic, Stripe payments, and white-label branding — built for freelancers and agencies who care about craft.
          </p>

          <div className="flex gap-3 justify-center flex-wrap animate-fade-up animate-fade-up-delay-3">
            <Button size="lg" className="glow-amber text-base px-8">
              Start building free
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 border-border/60">
              See a demo
            </Button>
          </div>

          <p className="mt-5 text-xs text-muted-foreground animate-fade-up animate-fade-up-delay-4">
            Free plan available · No credit card · Live in 2 minutes
          </p>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="border-y border-border/50 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">Trusted by 10,000+ teams</p>
            {["Acme Inc", "Globex", "Initech", "Umbrella Corp", "Wayne Enterprises"].map((co) => (
              <span key={co} className="text-sm font-medium text-muted-foreground/40">{co}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-xs uppercase tracking-widest text-primary mb-4">Features</p>
            <h2 className="font-display text-5xl italic leading-tight mb-4">
              Everything you need,<br />nothing you don&apos;t.
            </h2>
            <p className="text-muted-foreground text-lg">
              FormCraft is built around one idea: completion rate is the only metric that matters.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/50 rounded-xl overflow-hidden border border-border/50">
            {features.map((feature) => (
              <div key={feature.title} className="bg-card p-8 hover:bg-accent/30 transition-colors">
                <span className="text-2xl text-primary mb-4 block">{feature.icon}</span>
                <h3 className="font-semibold text-base mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 border-t border-border/50">
        <div className="container mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-primary mb-4 text-center">Results</p>
          <h2 className="font-display text-5xl italic text-center mb-16">What customers say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="bg-card border-border/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 px-4 py-2 bg-primary/10 text-primary text-xs font-mono font-medium">
                  {t.metric}
                </div>
                <CardContent className="pt-10 pb-6">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="border-t border-border/50 pt-4">
                    <p className="font-medium text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{t.role} · {t.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Skills showcase */}
      <section className="py-28 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-widest text-primary mb-4">Demo</p>
            <h2 className="font-display text-5xl italic leading-tight mb-4">
              Built with<br />Claude Code skills.
            </h2>
            <p className="text-muted-foreground text-lg">
              Every marketing asset on this site was generated by a Claude Code skill in a single session. No agencies. No weeks of work.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <Link key={skill.href} href={skill.href}>
                <Card className="bg-card border-border/50 hover:border-primary/40 transition-all hover:bg-accent/20 h-full group">
                  <CardHeader className="pb-2">
                    <p className="text-xs font-mono text-primary/60 mb-2">{skill.tag}</p>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">{skill.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 border-t border-border/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-6xl italic mb-6">
            Ready to <span className="text-primary">craft</span><br />better forms?
          </h2>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto text-lg">
            Join 10,000 teams who stopped fighting their form builder and started converting.
          </p>
          <div className="flex gap-3 justify-center">
            <Button size="lg" className="glow-amber text-base px-8">Start free — no card needed</Button>
            <Button size="lg" variant="outline" className="text-base px-8 border-border/60">View pricing</Button>
          </div>
        </div>
      </section>
    </>
  );
}
