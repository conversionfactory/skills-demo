export type TemplatePage = {
  slug: string;
  keyword: string;
  title: string;
  h1: string;
  metaDescription: string;
  intro: string;
  category: string;
  monthlySearchVolume: number;
  cpc: number;
  difficulty: "Low" | "Medium" | "High";
  intent: "Informational" | "Commercial" | "Transactional";
  fields: string[];
  useCases: string[];
  faqs: { q: string; a: string }[];
};

// Empty array - starting point for pSEO demo
// Use keyword research to identify opportunities, then generate pages
export const templatePages: TemplatePage[] = [];

export function getTemplatePage(slug: string): TemplatePage | undefined {
  return templatePages.find((p) => p.slug === slug);
}
