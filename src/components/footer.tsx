import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/50 mt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-1 mb-4">
              <span className="font-display text-lg italic text-primary">Form</span>
              <span className="text-lg font-semibold tracking-tight">Craft</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Forms that feel effortless. Built for freelancers, agencies, and small teams who care about craft.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Product</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/#features" className="hover:text-foreground transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
              <li><Link href="/templates" className="hover:text-foreground transition-colors">Templates</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Marketing Skills</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/email-sequence" className="hover:text-foreground transition-colors">Email Sequence</Link></li>
              <li><Link href="/ad-creative" className="hover:text-foreground transition-colors">Ad Creative</Link></li>
                          </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-foreground transition-colors">Privacy</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2026 FormCraft. All rights reserved.</p>
          <p className="text-xs text-muted-foreground/60">Built with Claude Code</p>
        </div>
      </div>
    </footer>
  );
}
