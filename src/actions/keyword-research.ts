"use server";

export type KeywordData = {
  keyword: string;
  searchVolume: number;
  cpc: number;
  competition: number;
  competitionLevel: "LOW" | "MEDIUM" | "HIGH";
  intent: "informational" | "commercial" | "transactional" | "navigational";
};

export type KeywordResearchResult = {
  success: boolean;
  keywords?: KeywordData[];
  error?: string;
};

/**
 * Fetch keyword suggestions from DataForSEO API
 * Uses the Google Ads Keywords for Keywords endpoint
 */
export async function getKeywordSuggestions(
  seedKeyword: string,
  limit: number = 20
): Promise<KeywordResearchResult> {
  const login = process.env.DATAFORSEO_LOGIN;
  const password = process.env.DATAFORSEO_PASSWORD;

  if (!login || !password) {
    return {
      success: false,
      error: "DataForSEO credentials not configured. Add DATAFORSEO_LOGIN and DATAFORSEO_PASSWORD to .env.local",
    };
  }

  const credentials = Buffer.from(`${login}:${password}`).toString("base64");

  try {
    // Use Keywords for Keywords endpoint to get related keywords
    const response = await fetch(
      "https://api.dataforseo.com/v3/keywords_data/google_ads/keywords_for_keywords/live",
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${credentials}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          {
            keywords: [seedKeyword],
            location_code: 2840, // United States
            language_code: "en",
            include_seed_keyword: true,
            sort_by: "search_volume",
          },
        ]),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      return {
        success: false,
        error: `DataForSEO API error: ${response.status} - ${errorText}`,
      };
    }

    const data = await response.json();

    if (data.status_code !== 20000) {
      return {
        success: false,
        error: `DataForSEO error: ${data.status_message}`,
      };
    }

    const results = data.tasks?.[0]?.result || [];

    // Transform and filter keywords
    const keywords: KeywordData[] = results
      .filter((item: Record<string, unknown>) => (item.search_volume as number) > 0)
      .slice(0, limit)
      .map((item: Record<string, unknown>) => ({
        keyword: item.keyword as string,
        searchVolume: item.search_volume as number,
        cpc: (item.cpc as number) ?? 0,
        competition: (item.competition as number) ?? 0,
        competitionLevel: mapCompetitionLevel((item.competition as number) ?? 0),
        intent: inferIntent(item.keyword as string),
      }));

    return {
      success: true,
      keywords,
    };
  } catch (error) {
    return {
      success: false,
      error: `Failed to fetch keywords: ${error instanceof Error ? error.message : "Unknown error"}`,
    };
  }
}

/**
 * Get search volume data for specific keywords
 * Uses the Google Ads Search Volume endpoint
 */
export async function getSearchVolume(
  keywords: string[]
): Promise<KeywordResearchResult> {
  const login = process.env.DATAFORSEO_LOGIN;
  const password = process.env.DATAFORSEO_PASSWORD;

  if (!login || !password) {
    return {
      success: false,
      error: "DataForSEO credentials not configured",
    };
  }

  const credentials = Buffer.from(`${login}:${password}`).toString("base64");

  try {
    const response = await fetch(
      "https://api.dataforseo.com/v3/keywords_data/google_ads/search_volume/live",
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${credentials}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          {
            keywords: keywords.slice(0, 1000), // API limit
            location_code: 2840, // United States
            language_code: "en",
          },
        ]),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      return {
        success: false,
        error: `DataForSEO API error: ${response.status} - ${errorText}`,
      };
    }

    const data = await response.json();

    if (data.status_code !== 20000) {
      return {
        success: false,
        error: `DataForSEO error: ${data.status_message}`,
      };
    }

    const results = data.tasks?.[0]?.result || [];

    const keywordData: KeywordData[] = results.map((item: Record<string, unknown>) => ({
      keyword: item.keyword as string,
      searchVolume: item.search_volume as number ?? 0,
      cpc: item.cpc as number ?? 0,
      competition: item.competition as number ?? 0,
      competitionLevel: mapCompetitionLevel(item.competition as number),
      intent: inferIntent(item.keyword as string),
    }));

    return {
      success: true,
      keywords: keywordData,
    };
  } catch (error) {
    return {
      success: false,
      error: `Failed to fetch search volume: ${error instanceof Error ? error.message : "Unknown error"}`,
    };
  }
}

// Helper to map competition score to level
function mapCompetitionLevel(competition: number): "LOW" | "MEDIUM" | "HIGH" {
  if (competition < 0.33) return "LOW";
  if (competition < 0.66) return "MEDIUM";
  return "HIGH";
}

// Simple intent inference based on keyword patterns
function inferIntent(keyword: string): "informational" | "commercial" | "transactional" | "navigational" {
  const kw = keyword.toLowerCase();

  // Transactional signals
  if (kw.includes("template") || kw.includes("form") || kw.includes("generator") ||
      kw.includes("maker") || kw.includes("builder") || kw.includes("free") ||
      kw.includes("download") || kw.includes("create") || kw.includes("online")) {
    return "transactional";
  }

  // Commercial signals
  if (kw.includes("best") || kw.includes("vs") || kw.includes("alternative") ||
      kw.includes("review") || kw.includes("pricing") || kw.includes("compare")) {
    return "commercial";
  }

  // Informational signals
  if (kw.includes("how to") || kw.includes("what is") || kw.includes("guide") ||
      kw.includes("example") || kw.includes("tips")) {
    return "informational";
  }

  // Default to transactional for form-related queries
  return "transactional";
}
