import { readFileSync } from "fs";
import { resolve } from "path";

// Load credentials from .env.local
const envPath = resolve(process.cwd(), ".env.local");
const envContent = readFileSync(envPath, "utf-8");
const env = Object.fromEntries(
  envContent
    .split("\n")
    .filter((l) => l && !l.startsWith("#"))
    .map((l) => [l.slice(0, l.indexOf("=")), l.slice(l.indexOf("=") + 1)])
);

const login = env.DATAFORSEO_LOGIN;
const password = env.DATAFORSEO_PASSWORD;

if (!login || !password) {
  console.error("Missing DATAFORSEO_LOGIN or DATAFORSEO_PASSWORD in .env.local");
  process.exit(1);
}

const seedKeyword = process.argv[2] || "form template";
const limit = parseInt(process.argv[3]) || 20;

console.log(`\n🔍 Researching keywords for: "${seedKeyword}"\n`);

const credentials = Buffer.from(`${login}:${password}`).toString("base64");

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

const data = await response.json();

if (data.status_code !== 20000) {
  console.error("API Error:", data.status_message);
  process.exit(1);
}

const results = data.tasks?.[0]?.result || [];

// Filter and format
const keywords = results
  .filter((item) => item.search_volume > 0)
  .slice(0, limit)
  .map((item, idx) => ({
    rank: idx + 1,
    keyword: item.keyword,
    volume: item.search_volume,
    cpc: item.cpc?.toFixed(2) || "0.00",
    competition:
      item.competition < 0.33 ? "LOW" : item.competition < 0.66 ? "MED" : "HIGH",
  }));

// Print table
console.log(
  "Rank | Keyword                                    | Volume  | CPC     | Comp"
);
console.log(
  "-----|--------------------------------------------|---------|---------|----- "
);
keywords.forEach((k) => {
  const kw = k.keyword.padEnd(42).slice(0, 42);
  const vol = k.volume.toString().padStart(7);
  const cpc = ("$" + k.cpc).padStart(7);
  console.log(
    `${k.rank.toString().padStart(4)} | ${kw} | ${vol} | ${cpc} | ${k.competition}`
  );
});

console.log(`\n📊 Total: ${keywords.length} keywords`);
console.log(
  `📈 Combined volume: ${keywords.reduce((sum, k) => sum + k.volume, 0).toLocaleString()} searches/mo`
);
