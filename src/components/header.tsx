import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-xl italic text-primary">Form</span>
          <span className="text-xl font-semibold tracking-tight">Craft</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </Link>
          <Link href="/templates" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Templates
          </Link>
          <Link href="/ad-creative" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Ad Creative
          </Link>
          <Link href="/programmatic-seo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Programmatic SEO
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            Log in
          </Button>
          <Button size="sm" className="glow-amber">
            Start free
          </Button>
        </div>
      </div>
    </header>
  );
}
