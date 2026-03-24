import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { templatePages } from "@/lib/template-pages";

const DIFFICULTY_COLOR: Record<string, string> = {
  Low: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  Medium: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
  High: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
};

const INTENT_COLOR: Record<string, string> = {
  Transactional: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  Commercial: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  Informational: "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
};

const totalVolume = templatePages.reduce((sum, p) => sum + p.monthlySearchVolume, 0);

export default function ProgrammaticSeoPage() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4">Programmatic SEO</Badge>
          <h1 className="text-4xl font-bold mb-4">One template. {templatePages.length} landing pages.</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            FormCraft targets high-intent search terms at scale by generating unique, SEO-optimized landing pages from a single template and a data file.
          </p>
        </div>

        {/* Strategy overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="text-center">
            <CardContent className="pt-8 pb-6">
              <p className="text-4xl font-bold mb-1">{templatePages.length}</p>
              <p className="text-sm text-muted-foreground">Pages generated</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-8 pb-6">
              <p className="text-4xl font-bold mb-1">{totalVolume.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">Total monthly searches</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-8 pb-6">
              <p className="text-4xl font-bold mb-1">1</p>
              <p className="text-sm text-muted-foreground">Template file to maintain</p>
            </CardContent>
          </Card>
        </div>

        {/* How it works */}
        <Card className="mb-16">
          <CardHeader>
            <h2 className="text-xl font-semibold">How it works</h2>
          </CardHeader>
          <CardContent className="space-y-0">
            <div className="grid md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x">
              <div className="p-6">
                <p className="text-3xl font-bold text-primary mb-2">1</p>
                <p className="font-semibold mb-1">Define the pattern</p>
                <p className="text-sm text-muted-foreground">Identify a repeatable keyword pattern with clear commercial intent — e.g. <em>&ldquo;[type] form template&rdquo;</em> or <em>&ldquo;form builder for [industry]&rdquo;</em>.</p>
              </div>
              <div className="p-6">
                <p className="text-3xl font-bold text-primary mb-2">2</p>
                <p className="font-semibold mb-1">Build the data file</p>
                <p className="text-sm text-muted-foreground">Each row is a page. Columns are keyword, title, description, fields, FAQs, use cases. One data file drives everything.</p>
              </div>
              <div className="p-6">
                <p className="text-3xl font-bold text-primary mb-2">3</p>
                <p className="font-semibold mb-1">Generate at scale</p>
                <p className="text-sm text-muted-foreground">Next.js renders each row into a unique, crawlable URL with proper metadata. Add a row, get a new page — zero dev work.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Page index table */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Generated pages</h2>
          <p className="text-muted-foreground mb-6">
            Each row below is a live, indexed landing page generated from the same template.
          </p>

          <div className="rounded-lg border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/40">
                    <th className="text-left p-3 font-medium">Keyword / URL</th>
                    <th className="text-left p-3 font-medium">Category</th>
                    <th className="text-right p-3 font-medium">Monthly searches</th>
                    <th className="text-left p-3 font-medium">Difficulty</th>
                    <th className="text-left p-3 font-medium">Intent</th>
                    <th className="p-3" />
                  </tr>
                </thead>
                <tbody>
                  {templatePages.map((page, i) => (
                    <tr key={page.slug} className={`border-b last:border-0 ${i % 2 === 0 ? "" : "bg-muted/20"}`}>
                      <td className="p-3">
                        <p className="font-medium">{page.keyword}</p>
                        <p className="text-xs text-muted-foreground">/templates/{page.slug}</p>
                      </td>
                      <td className="p-3">
                        <span className="text-muted-foreground">{page.category}</span>
                      </td>
                      <td className="p-3 text-right font-mono">
                        {page.monthlySearchVolume.toLocaleString()}
                      </td>
                      <td className="p-3">
                        <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${DIFFICULTY_COLOR[page.difficulty]}`}>
                          {page.difficulty}
                        </span>
                      </td>
                      <td className="p-3">
                        <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${INTENT_COLOR[page.intent]}`}>
                          {page.intent}
                        </span>
                      </td>
                      <td className="p-3">
                        <Link href={`/templates/${page.slug}`}>
                          <Button size="sm" variant="ghost">View →</Button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t bg-muted/40">
                    <td className="p-3 font-medium" colSpan={2}>Total</td>
                    <td className="p-3 text-right font-mono font-semibold">{totalVolume.toLocaleString()}</td>
                    <td colSpan={3} />
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>

        {/* Code snippet */}
        <Card className="mb-12">
          <CardHeader>
            <h2 className="font-semibold">The pattern in code</h2>
            <p className="text-sm text-muted-foreground">12 pages. One data file. One route file.</p>
          </CardHeader>
          <CardContent>
            <pre className="rounded-lg bg-zinc-950 text-zinc-100 p-4 text-xs overflow-x-auto leading-relaxed">{`// src/lib/template-pages.ts  ← data file
export const templatePages = [
  { slug: "contact-form-template", keyword: "contact form template",
    monthlySearchVolume: 18100, fields: [...], faqs: [...] },
  { slug: "job-application-form-template", ... },
  // add a row → get a new page
];

// src/app/templates/[slug]/page.tsx  ← one template
export async function generateStaticParams() {
  return templatePages.map(p => ({ slug: p.slug }));
}

export default async function Page({ params }) {
  const page = getTemplatePage(params.slug);
  // render title, fields, FAQs, CTAs from data
}`}</pre>
          </CardContent>
        </Card>

        {/* Example pages */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Example pages</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {templatePages.slice(0, 3).map((page) => (
              <Link key={page.slug} href={`/templates/${page.slug}`}>
                <Card className="hover:border-primary transition-colors h-full">
                  <CardHeader className="pb-2">
                    <Badge variant="secondary" className="w-fit text-xs mb-2">{page.category}</Badge>
                    <p className="font-semibold">{page.h1}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground mb-3">{page.metaDescription}</p>
                    <p className="text-xs text-primary">/templates/{page.slug} →</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
