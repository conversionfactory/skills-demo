"use client";

import { useState, useTransition } from "react";
import { generateAds, type AdVariation } from "@/actions/generate-ads";
import { generateAdImage } from "@/actions/generate-ad-image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

const DEFAULT_CONTEXT = `Product: FormCraft
Tagline: Forms that feel effortless
Target audience: Freelancers, agencies, and small teams who need to collect client info, feedback, and payments without wrestling with clunky tools
Key benefits:
- Beautiful forms in minutes, zero design skills needed
- Built-in payment collection via Stripe
- Smart conditional logic that adapts to each respondent
- Client-facing white-label branding
- Embeds anywhere — websites, emails, Notion
Pricing: Free plan, Pro at $19/mo
CTA goal: Start a free trial`;

const PLATFORM_COLORS: Record<string, string> = {
  "Google Search": "bg-blue-50 border-blue-200 dark:bg-blue-950/30 dark:border-blue-800",
  Meta: "bg-indigo-50 border-indigo-200 dark:bg-indigo-950/30 dark:border-indigo-800",
  LinkedIn: "bg-sky-50 border-sky-200 dark:bg-sky-950/30 dark:border-sky-800",
};

const PLATFORM_BADGE: Record<string, string> = {
  "Google Search": "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  Meta: "bg-indigo-100 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-300",
  LinkedIn: "bg-sky-100 text-sky-700 dark:bg-sky-900 dark:text-sky-300",
};

function GoogleAdPreview({ ad }: { ad: AdVariation }) {
  return (
    <div className="rounded-lg border bg-white dark:bg-zinc-950 p-4 text-sm">
      <p className="text-xs text-green-700 dark:text-green-400 mb-1">Ad · formflow.io</p>
      <p className="text-blue-600 dark:text-blue-400 font-medium leading-snug">
        {[ad.headline1, ad.headline2, ad.headline3].filter(Boolean).join(" | ")}
      </p>
      <p className="text-muted-foreground mt-1 leading-relaxed">
        {[ad.description1, ad.description2].filter(Boolean).join(" ")}
      </p>
    </div>
  );
}

function MetaAdPreview({ ad, imageUrl, onGenerateImage, isGeneratingImage }: {
  ad: AdVariation;
  imageUrl: string | null;
  onGenerateImage: () => void;
  isGeneratingImage: boolean;
}) {
  return (
    <div className="rounded-lg border bg-white dark:bg-zinc-950 p-4 text-sm">
      {ad.primaryText && (
        <p className="text-foreground mb-3 leading-relaxed">{ad.primaryText}</p>
      )}
      {imageUrl ? (
        <div className="rounded overflow-hidden mb-3">
          <Image src={imageUrl} alt="AI-generated ad visual" width={600} height={315} className="w-full object-cover" />
        </div>
      ) : (
        <div className="rounded border bg-muted/20 mb-3 flex items-center justify-center h-36">
          <Button size="sm" variant="outline" onClick={onGenerateImage} disabled={isGeneratingImage}>
            {isGeneratingImage ? "Generating image…" : "Generate image with Imagen"}
          </Button>
        </div>
      )}
      <div className="rounded border bg-muted/40 p-3">
        <p className="text-xs text-muted-foreground mb-1">formcraft.io</p>
        <p className="font-semibold leading-snug">{ad.headline1}</p>
        {ad.description1 && (
          <p className="text-muted-foreground text-xs mt-1">{ad.description1}</p>
        )}
      </div>
    </div>
  );
}

function LinkedInAdPreview({ ad }: { ad: AdVariation }) {
  return (
    <div className="rounded-lg border bg-white dark:bg-zinc-950 p-4 text-sm">
      <p className="font-semibold leading-snug">{ad.headline1}</p>
      {ad.headline2 && (
        <p className="text-muted-foreground text-xs mt-0.5">{ad.headline2}</p>
      )}
      {ad.description1 && (
        <p className="text-muted-foreground mt-2 leading-relaxed">{ad.description1}</p>
      )}
    </div>
  );
}

function AdCard({ ad }: { ad: AdVariation }) {
  const cardClass = PLATFORM_COLORS[ad.platform] ?? "";
  const badgeClass = PLATFORM_BADGE[ad.platform] ?? "";
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isGeneratingImage, startImageTransition] = useTransition();

  function handleGenerateImage() {
    const imagePrompt = `Professional SaaS product advertisement for FormCraft — ${ad.primaryText ?? ad.headline1}. Clean, modern, minimalist style. High quality marketing visual. No text overlaid.`;
    startImageTransition(async () => {
      const url = await generateAdImage(imagePrompt);
      if (url) setImageUrl(url);
    });
  }

  return (
    <Card className={`border ${cardClass}`}>
      <CardHeader className="pb-3">
        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium w-fit ${badgeClass}`}>
          {ad.platform}
        </span>
      </CardHeader>
      <CardContent className="space-y-4">
        {ad.platform === "Google Search" && <GoogleAdPreview ad={ad} />}
        {ad.platform === "Meta" && <MetaAdPreview ad={ad} imageUrl={imageUrl} onGenerateImage={handleGenerateImage} isGeneratingImage={isGeneratingImage} />}
        {ad.platform === "LinkedIn" && <LinkedInAdPreview ad={ad} />}

        <div className="space-y-1 text-xs text-muted-foreground border-t pt-3">
          <p><span className="font-medium text-foreground">H1:</span> {ad.headline1}</p>
          <p><span className="font-medium text-foreground">H2:</span> {ad.headline2}</p>
          {ad.headline3 && <p><span className="font-medium text-foreground">H3:</span> {ad.headline3}</p>}
          <p><span className="font-medium text-foreground">D1:</span> {ad.description1}</p>
          {ad.description2 && <p><span className="font-medium text-foreground">D2:</span> {ad.description2}</p>}
          {ad.primaryText && <p><span className="font-medium text-foreground">Primary text:</span> {ad.primaryText}</p>}
        </div>
      </CardContent>
    </Card>
  );
}

export function AdCreativeClient() {
  const [context, setContext] = useState(DEFAULT_CONTEXT);
  const [ads, setAds] = useState<AdVariation[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleGenerate() {
    setError(null);
    startTransition(async () => {
      const result = await generateAds(context);
      if (result.error) {
        setError(result.error);
      } else {
        setAds(result.variations);
      }
    });
  }

  return (
    <div className="space-y-8">
      {/* Input */}
      <Card>
        <CardHeader className="pb-3">
          <h2 className="font-semibold">Product Brief</h2>
          <p className="text-sm text-muted-foreground">
            Describe your product, audience, and goals. The more specific, the better the output.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            value={context}
            onChange={(e) => setContext(e.target.value)}
            className="min-h-[220px] font-mono text-sm"
          />
          <Button onClick={handleGenerate} disabled={isPending} size="lg">
            {isPending ? "Generating…" : "Generate Ad Creative"}
          </Button>
        </CardContent>
      </Card>

      {/* Error */}
      {error && (
        <Card className="border-destructive bg-destructive/5">
          <CardContent className="pt-4 text-sm text-destructive">{error}</CardContent>
        </Card>
      )}

      {/* Results */}
      {ads.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Generated Ad Creative</h2>
            <Badge variant="secondary">{ads.length} variations · Gemini Flash</Badge>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {ads.map((ad, i) => (
              <AdCard key={i} ad={ad} />
            ))}
          </div>
          <div className="pt-2">
            <Button variant="outline" onClick={handleGenerate} disabled={isPending}>
              {isPending ? "Regenerating…" : "Regenerate"}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
