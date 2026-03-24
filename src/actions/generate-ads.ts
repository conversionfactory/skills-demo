"use server";

export type AdVariation = {
  platform: "Google Search" | "Meta" | "LinkedIn";
  headline1: string;
  headline2: string;
  headline3?: string;
  description1: string;
  description2?: string;
  primaryText?: string; // Meta only
};

export type GenerateAdsResult = {
  variations: AdVariation[];
  error?: string;
};

const PROMPT_TEMPLATE = (context: string) => `
You are an expert performance marketer. Generate ad creative for the following SaaS product:

${context}

Create ad variations for 3 platforms. Return ONLY valid JSON in this exact shape, no markdown, no explanation:

{
  "variations": [
    {
      "platform": "Google Search",
      "headline1": "...",
      "headline2": "...",
      "headline3": "...",
      "description1": "...",
      "description2": "..."
    },
    {
      "platform": "Meta",
      "headline1": "...",
      "headline2": "...",
      "description1": "...",
      "primaryText": "..."
    },
    {
      "platform": "LinkedIn",
      "headline1": "...",
      "headline2": "...",
      "description1": "..."
    }
  ]
}

Rules:
- Google Search headlines: max 30 chars each. Descriptions: max 90 chars each.
- Meta headline: max 40 chars. Primary text: 2-3 punchy sentences.
- LinkedIn headline: max 70 chars. Description: max 150 chars.
- Be specific, benefit-driven, and use the product name.
- No generic filler. Make every word count.
`;

export async function generateAds(context: string): Promise<GenerateAdsResult> {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) return { variations: [], error: "Missing GEMINI_API_KEY" };

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-goog-api-key": apiKey,
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: PROMPT_TEMPLATE(context) }] }],
      }),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    return { variations: [], error: `Gemini error: ${err}` };
  }

  const data = await res.json();
  const text: string = data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";

  try {
    // Strip markdown code fences if present
    const cleaned = text.replace(/^```json\s*/i, "").replace(/```\s*$/, "").trim();
    const parsed = JSON.parse(cleaned);
    return { variations: parsed.variations ?? [] };
  } catch {
    return { variations: [], error: `Failed to parse response: ${text.slice(0, 200)}` };
  }
}
