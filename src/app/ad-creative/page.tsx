import { Badge } from "@/components/ui/badge";
import { AdCreativeClient } from "./AdCreativeClient";

export default function AdCreativePage() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <Badge className="mb-4">AI Ad Creative</Badge>
          <h1 className="text-4xl font-bold mb-4">Ad Creative Generator</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Paste a product brief and generate platform-specific ad copy for
            Google Search, Meta, and LinkedIn — powered by Gemini Flash.
          </p>
        </div>
        <AdCreativeClient />
      </div>
    </section>
  );
}
