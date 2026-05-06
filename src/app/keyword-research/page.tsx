"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { getKeywordSuggestions, type KeywordData } from "@/actions/keyword-research";
import { Search, Loader2, TrendingUp, DollarSign, Target, CheckCircle2 } from "lucide-react";

export default function KeywordResearchPage() {
  const [seedKeyword, setSeedKeyword] = useState("form template");
  const [keywords, setKeywords] = useState<KeywordData[]>([]);
  const [selectedKeywords, setSelectedKeywords] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    const result = await getKeywordSuggestions(seedKeyword, 30);

    if (result.success && result.keywords) {
      setKeywords(result.keywords);
    } else {
      setError(result.error || "Failed to fetch keywords");
    }

    setLoading(false);
  };

  const toggleKeyword = (keyword: string) => {
    const newSelected = new Set(selectedKeywords);
    if (newSelected.has(keyword)) {
      newSelected.delete(keyword);
    } else {
      newSelected.add(keyword);
    }
    setSelectedKeywords(newSelected);
  };

  const selectTop10 = () => {
    const top10 = keywords.slice(0, 10).map((k) => k.keyword);
    setSelectedKeywords(new Set(top10));
  };

  const totalVolume = keywords
    .filter((k) => selectedKeywords.has(k.keyword))
    .reduce((sum, k) => sum + k.searchVolume, 0);

  const avgCpc = keywords.filter((k) => selectedKeywords.has(k.keyword)).length > 0
    ? keywords
        .filter((k) => selectedKeywords.has(k.keyword))
        .reduce((sum, k) => sum + k.cpc, 0) /
      keywords.filter((k) => selectedKeywords.has(k.keyword)).length
    : 0;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Step 2: Keyword Research
          </Badge>
          <h1 className="text-4xl font-bold mb-4">
            DataForSEO Keyword Research
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find high-volume, low-competition keywords to target with programmatic SEO pages.
            Select the best opportunities for your first 10 template pages.
          </p>
        </div>

        {/* Search Form */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-lg">Seed Keyword</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input
                type="text"
                placeholder="Enter seed keyword (e.g., 'form template')"
                value={seedKeyword}
                onChange={(e) => setSeedKeyword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="flex-1"
              />
              <Button onClick={handleSearch} disabled={loading}>
                {loading ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Search className="w-4 h-4 mr-2" />
                )}
                Research Keywords
              </Button>
            </div>
          </CardContent>
        </Card>

        {error && (
          <Card className="mb-8 border-destructive">
            <CardContent className="pt-6">
              <p className="text-destructive">{error}</p>
            </CardContent>
          </Card>
        )}

        {keywords.length > 0 && (
          <>
            {/* Summary Stats */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <Target className="w-4 h-4" />
                    <span className="text-sm">Keywords Found</span>
                  </div>
                  <p className="text-2xl font-bold">{keywords.length}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-sm">Selected</span>
                  </div>
                  <p className="text-2xl font-bold">{selectedKeywords.size}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm">Total Volume</span>
                  </div>
                  <p className="text-2xl font-bold">{totalVolume.toLocaleString()}</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <DollarSign className="w-4 h-4" />
                    <span className="text-sm">Avg CPC</span>
                  </div>
                  <p className="text-2xl font-bold">${avgCpc.toFixed(2)}</p>
                </CardContent>
              </Card>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-6">
              <Button variant="outline" onClick={selectTop10}>
                Select Top 10
              </Button>
              <Button
                variant="outline"
                onClick={() => setSelectedKeywords(new Set())}
              >
                Clear Selection
              </Button>
              {selectedKeywords.size > 0 && (
                <Button className="ml-auto">
                  Generate {selectedKeywords.size} Pages →
                </Button>
              )}
            </div>

            {/* Keywords Table */}
            <Card>
              <CardContent className="p-0">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr className="text-left">
                      <th className="p-4 font-medium">Keyword</th>
                      <th className="p-4 font-medium text-right">Volume</th>
                      <th className="p-4 font-medium text-right">CPC</th>
                      <th className="p-4 font-medium text-center">Competition</th>
                      <th className="p-4 font-medium text-center">Intent</th>
                      <th className="p-4 font-medium text-center">Select</th>
                    </tr>
                  </thead>
                  <tbody>
                    {keywords.map((kw, idx) => (
                      <tr
                        key={kw.keyword}
                        className={`border-t cursor-pointer transition-colors ${
                          selectedKeywords.has(kw.keyword)
                            ? "bg-primary/5"
                            : "hover:bg-muted/30"
                        }`}
                        onClick={() => toggleKeyword(kw.keyword)}
                      >
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <span className="text-muted-foreground text-sm">
                              {idx + 1}.
                            </span>
                            <span className="font-medium">{kw.keyword}</span>
                          </div>
                        </td>
                        <td className="p-4 text-right">
                          {kw.searchVolume.toLocaleString()}
                        </td>
                        <td className="p-4 text-right">${kw.cpc.toFixed(2)}</td>
                        <td className="p-4 text-center">
                          <Badge
                            variant={
                              kw.competitionLevel === "LOW"
                                ? "default"
                                : kw.competitionLevel === "MEDIUM"
                                ? "secondary"
                                : "destructive"
                            }
                          >
                            {kw.competitionLevel}
                          </Badge>
                        </td>
                        <td className="p-4 text-center">
                          <Badge variant="outline">{kw.intent}</Badge>
                        </td>
                        <td className="p-4 text-center">
                          <input
                            type="checkbox"
                            checked={selectedKeywords.has(kw.keyword)}
                            onChange={() => toggleKeyword(kw.keyword)}
                            className="w-4 h-4 rounded"
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>

            {/* Next Steps */}
            {selectedKeywords.size >= 10 && (
              <Card className="mt-8 border-primary">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Ready for Step 3
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    You&apos;ve selected {selectedKeywords.size} keywords with a combined
                    monthly search volume of {totalVolume.toLocaleString()}.
                    Now use the programmatic SEO skill to generate template pages.
                  </p>
                  <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm">
                    <p className="text-muted-foreground mb-2"># Selected keywords:</p>
                    {Array.from(selectedKeywords).map((kw) => (
                      <p key={kw}>- {kw}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </>
        )}

        {/* Empty State */}
        {!loading && keywords.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <Search className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">No keywords yet</h3>
              <p className="text-muted-foreground">
                Enter a seed keyword and click &quot;Research Keywords&quot; to get started.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
