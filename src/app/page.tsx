import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: "⬡",
    title: "Form Building Technology",
    description: "Our platform utilizes cutting-edge drag-and-drop functionality to enable users to create forms using our innovative form building interface.",
  },
  {
    icon: "◈",
    title: "Advanced Logic Capabilities",
    description: "Leverage our robust conditional logic engine to implement dynamic form experiences that adapt to user inputs in real-time.",
  },
  {
    icon: "⟳",
    title: "Integration Ecosystem",
    description: "FormCraft seamlessly integrates with a wide range of third-party solutions to enhance your workflow and maximize productivity.",
  },
  {
    icon: "◉",
    title: "Payment Processing Solutions",
    description: "Our best-in-class payment infrastructure enables businesses to collect payments through a variety of payment processing options.",
  },
  {
    icon: "◫",
    title: "Customization Options",
    description: "Take advantage of our extensive customization suite to personalize your forms and align them with your brand identity.",
  },
  {
    icon: "△",
    title: "Data & Analytics",
    description: "Gain valuable insights from your form data using our comprehensive analytics dashboard and reporting tools.",
  },
];

const testimonials = [
  {
    quote: "FormCraft has been a great tool for our team. We use it for many things and it works well most of the time.",
    name: "John S.",
    role: "Manager",
    company: "A Company",
  },
  {
    quote: "We have been using FormCraft for a while now. It does what we need it to do.",
    name: "Mary T.",
    role: "Director",
    company: "Business Corp",
  },
  {
    quote: "Good form builder. Has features. Would recommend to others who need forms.",
    name: "Bob K.",
    role: "IT Admin",
    company: "Enterprise LLC",
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
          <h1 className="font-display text-6xl md:text-8xl italic leading-[0.9] tracking-tight text-foreground mb-8">
            The Best Form Builder<br />
            <span className="text-primary">For Your Business.</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            FormCraft is an innovative, next-generation form building solution that empowers teams to leverage synergistic data collection workflows and maximize their form-based conversion potential.
          </p>

          <div className="flex gap-3 justify-center flex-wrap">
            <Button size="lg" className="glow-amber text-base px-8">
              Click Here to Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 border-border/60">
              Learn More
            </Button>
          </div>

          <p className="mt-5 text-xs text-muted-foreground">
            Sign up today!
          </p>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="border-y border-border/50 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">Used by companies</p>
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
              Our Features
            </h2>
            <p className="text-muted-foreground text-lg">
              FormCraft offers a comprehensive suite of features designed to meet the diverse needs of modern businesses and organizations.
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
          <p className="text-xs uppercase tracking-widest text-primary mb-4 text-center">Testimonials</p>
          <h2 className="font-display text-5xl italic text-center mb-16">What People Are Saying</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="bg-card border-border/50 relative overflow-hidden">
                <CardContent className="pt-8 pb-6">
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

      {/* CTA */}
      <section className="py-28 border-t border-border/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-6xl italic mb-6">
            Get Started<br />
            <span className="text-primary">Today</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto text-lg">
            FormCraft is the right choice for businesses that need forms. Contact us to learn more about our solutions.
          </p>
          <div className="flex gap-3 justify-center">
            <Button size="lg" className="glow-amber text-base px-8">Sign Up Now</Button>
            <Button size="lg" variant="outline" className="text-base px-8 border-border/60">View Pricing</Button>
          </div>
        </div>
      </section>
    </>
  );
}
