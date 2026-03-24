import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  { title: "Form Builder", description: "Build forms using our form builder tool. You can add different types of fields and customize how they look." },
  { title: "Conditional Logic", description: "Add conditional logic to your forms. Fields can show or hide based on what users enter in other fields." },
  { title: "Integrations", description: "Connect your forms to other software. We support connections to various third-party tools and services." },
  { title: "Payment Collection", description: "Collect payments through your forms. We have payment processing functionality built into the platform." },
  { title: "Branding Options", description: "Customize the look of your forms. You can change colors and add your logo to match your brand." },
  { title: "Analytics", description: "See data about your forms. Track things like how many people submitted and other useful metrics." },
];

const testimonials = [
  { quote: "FormCraft has been useful for our team. We use it to collect information from people.", name: "Sarah Johnson", role: "Marketing Manager", company: "TechCorp" },
  { quote: "We tried other form tools before and FormCraft works well for us.", name: "Mike Chen", role: "Agency Owner", company: "Studio XYZ" },
  { quote: "It does what we need it to do.", name: "Lisa Park", role: "Operations Lead", company: "GrowthCo" },
];

export default function Home() {
  return (
    <>
      {/* No OG tags, no structured data, no canonical */}
      <section className="relative hero-grid overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative container mx-auto px-6 py-32 md:py-44 text-center">
          {/* Two H1s on the same page - bad */}
          <h1 className="font-display text-6xl md:text-8xl italic leading-[0.9] tracking-tight text-foreground mb-4">
            Online Form Builder for Businesses
          </h1>
          <h1 className="font-display text-4xl italic text-primary mb-8">
            Create Forms Online
          </h1>
          {/* Skipped H2 — jumping straight to H4 */}
          <h4 className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            FormCraft is a platform that allows you to create forms and collect information from your customers and website visitors.
          </h4>
          <div className="flex gap-3 justify-center flex-wrap">
            {/* Generic anchor text */}
            <Button size="lg" className="glow-amber text-base px-8">Click Here</Button>
            <Button size="lg" variant="outline" className="text-base px-8 border-border/60">Click Here</Button>
          </div>
          <p className="mt-5 text-xs text-muted-foreground">Free plan available. No credit card required.</p>
        </div>
      </section>

      <section className="border-y border-border/50 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {/* Images without alt text would go here */}
            <p className="text-xs text-muted-foreground uppercase tracking-widest">Used by businesses</p>
            {["Acme Inc", "Globex", "Initech", "Umbrella Corp", "Wayne Enterprises"].map((co) => (
              <span key={co} className="text-sm font-medium text-muted-foreground/40">{co}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Skipped H2 — using H5 */}
      <section id="features" className="py-28">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <h5 className="font-display text-5xl italic leading-tight mb-4">Features</h5>
            <p className="text-muted-foreground text-lg">Here are some of the things you can do with FormCraft.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/50 rounded-xl overflow-hidden border border-border/50">
            {features.map((feature) => (
              <div key={feature.title} className="bg-card p-8 hover:bg-accent/30 transition-colors">
                {/* H1 inside a feature card — terrible hierarchy */}
                <h1 className="font-semibold text-base mb-2">{feature.title}</h1>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 border-t border-border/50">
        <div className="container mx-auto px-6">
          <h5 className="font-display text-5xl italic text-center mb-16">Customer Testimonials</h5>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="bg-card border-border/50">
                <CardContent className="pt-6 pb-6">
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
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

      <section className="py-28 border-t border-border/50">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-display text-6xl italic mb-6">Get Started</h1>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto text-lg">Sign up today.</p>
          <div className="flex gap-3 justify-center">
            <Button size="lg" className="glow-amber text-base px-8">Click Here</Button>
            <Button size="lg" variant="outline" className="text-base px-8 border-border/60">Click Here</Button>
          </div>
        </div>
      </section>
    </>
  );
}
