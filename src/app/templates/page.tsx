import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { templatePages } from "@/lib/template-pages";

export const metadata = {
  title: "Free Form Templates | FormCraft",
  description:
    "Browse free, customizable form templates — order forms, surveys, intake forms, RSVPs, and more. Start with a template and publish in minutes.",
};

export default function TemplatesPage() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Form Templates</h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Start with a template and customize it in minutes. Every template is
          free to use and works on any website.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {templatePages.map((template) => (
            <Link key={template.slug} href={`/templates/${template.slug}`}>
              <Card className="h-full transition-colors hover:border-primary">
                <CardHeader>
                  <div className="flex items-center justify-between mb-1">
                    <Badge variant="secondary">{template.category}</Badge>
                    <span className="text-xs text-muted-foreground">
                      {template.monthlySearchVolume.toLocaleString()} searches/mo
                    </span>
                  </div>
                  <CardTitle className="text-lg">{template.h1}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {template.metaDescription}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Use template
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
