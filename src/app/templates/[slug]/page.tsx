import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getTemplatePage, templatePages, type TemplatePage } from "@/lib/template-pages";

export async function generateStaticParams() {
  return templatePages.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getTemplatePage(slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.metaDescription,
  };
}

export default async function TemplateSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getTemplatePage(slug);
  if (!page) notFound();

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-8 flex items-center gap-2">
          <Link href="/templates" className="hover:text-foreground">Templates</Link>
          <span>/</span>
          <span>{page.h1}</span>
        </nav>

        {/* Hero */}
        <div className="mb-12">
          <Badge variant="secondary" className="mb-3">{page.category}</Badge>
          <h1 className="text-4xl font-bold mb-4">{page.h1}</h1>
          <p className="text-lg text-muted-foreground mb-4 max-w-2xl">
            {page.metaDescription}
          </p>
          <p className="text-base text-muted-foreground mb-6 max-w-2xl">
            {page.intro}
          </p>
          <div className="flex gap-3">
            <Button size="lg">Use this template free</Button>
            <Button size="lg" variant="outline">Preview</Button>
          </div>
        </div>

        {/* Mock form preview */}
        <Card className="mb-12 border-2">
          <CardHeader className="border-b bg-muted/30">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-2 text-xs text-muted-foreground">formcraft.io/f/preview</span>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <h2 className="text-xl font-semibold mb-6">{page.h1}</h2>
            <div className="space-y-4 max-w-md">
              {page.fields.slice(0, 5).map((field) => (
                <div key={field}>
                  <label className="text-sm font-medium block mb-1">{field}</label>
                  <div className="h-9 rounded-md border bg-muted/30 w-full" />
                </div>
              ))}
              {page.fields.length > 5 && (
                <p className="text-sm text-muted-foreground">
                  +{page.fields.length - 5} more fields
                </p>
              )}
              <div className="pt-2">
                <div className="h-9 w-32 rounded-md bg-primary opacity-80" />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Fields */}
          <Card>
            <CardHeader>
              <h2 className="font-semibold">Fields included</h2>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {page.fields.map((field) => (
                  <li key={field} className="flex items-center gap-2 text-sm">
                    <span className="text-primary font-bold">✓</span>
                    {field}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Use cases */}
          <Card>
            <CardHeader>
              <h2 className="font-semibold">Common use cases</h2>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {page.useCases.map((use) => (
                  <li key={use} className="flex items-center gap-2 text-sm">
                    <span className="text-primary font-bold">→</span>
                    {use}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* FAQs */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently asked questions</h2>
          <div className="space-y-4">
            {page.faqs.map((faq) => (
              <Card key={faq.q}>
                <CardContent className="pt-5">
                  <p className="font-semibold mb-1">{faq.q}</p>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Related templates */}
        {page.relatedSlugs.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Related templates</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {page.relatedSlugs
                .map((s) => templatePages.find((t) => t.slug === s))
                .filter((t): t is TemplatePage => Boolean(t))
                .map((related) => (
                  <Link
                    key={related.slug}
                    href={`/templates/${related.slug}`}
                    className="group"
                  >
                    <Card className="h-full transition-colors group-hover:border-primary/60">
                      <CardContent className="pt-5">
                        <Badge variant="secondary" className="mb-2 text-xs">
                          {related.category}
                        </Badge>
                        <p className="font-semibold text-sm mb-1 group-hover:text-primary">
                          {related.h1}
                        </p>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {related.metaDescription}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <Card className="bg-primary text-primary-foreground border-0">
          <CardContent className="pt-8 pb-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Start with this template for free</h2>
            <p className="mb-6 opacity-80">Customize it, publish it, and start collecting responses in minutes.</p>
            <Button size="lg" variant="secondary">Use this template</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
