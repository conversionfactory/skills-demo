import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { templatePages } from "@/lib/template-pages";

export const metadata = {
  title: "Free Form Templates | FormCraft",
  description:
    "Free, customizable form templates for waivers, intakes, registrations, RSVPs, donations, and more. Use them online — no Word docs, no PDFs.",
};

export default function TemplatesPage() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Form Templates</h1>
          <p className="text-lg text-muted-foreground">
            Free, customizable forms you can publish in a few clicks. Every
            template is a real working form — not a Word doc you have to print.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {templatePages.map((template) => (
            <Link
              key={template.slug}
              href={`/templates/${template.slug}`}
              className="group"
            >
              <Card className="h-full transition-colors group-hover:border-primary/60">
                <CardHeader>
                  <div className="flex items-center justify-between gap-2">
                    <CardTitle className="text-lg group-hover:text-primary">
                      {template.h1}
                    </CardTitle>
                    <Badge variant="secondary" className="shrink-0 text-xs">
                      {template.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {template.metaDescription}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    View template
                  </Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
