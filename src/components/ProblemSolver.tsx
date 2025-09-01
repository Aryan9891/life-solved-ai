import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Brain, Lightbulb, Target, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import { toast } from "sonner";

interface Solution {
  analysis: string;
  category: string;
  steps: string[];
  resources: string[];
  timeline: string;
}

const problemCategories = [
  { id: "health", label: "Health & Wellness", color: "bg-red-500/20 text-red-700 dark:text-red-300" },
  { id: "finance", label: "Financial", color: "bg-green-500/20 text-green-700 dark:text-green-300" },
  { id: "career", label: "Career & Education", color: "bg-blue-500/20 text-blue-700 dark:text-blue-300" },
  { id: "relationships", label: "Relationships", color: "bg-pink-500/20 text-pink-700 dark:text-pink-300" },
  { id: "lifestyle", label: "Lifestyle", color: "bg-purple-500/20 text-purple-700 dark:text-purple-300" },
  { id: "technology", label: "Technology", color: "bg-cyan-500/20 text-cyan-700 dark:text-cyan-300" }
];

export const ProblemSolver = () => {
  const [problem, setProblem] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [solution, setSolution] = useState<Solution | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeProblem = async () => {
    if (!problem.trim()) {
      toast.error("Please describe your problem first");
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate AI analysis (in real implementation, this would call an AI API)
    setTimeout(() => {
      const mockSolution: Solution = {
        analysis: `Based on your description, this appears to be a ${selectedCategory || 'general'} issue that requires a systematic approach. The key factors to consider are immediate impact, available resources, and long-term sustainability.`,
        category: selectedCategory || "general",
        steps: [
          "Assess the current situation and gather all relevant information",
          "Identify the root cause rather than just symptoms",
          "Research proven solutions and best practices",
          "Create a detailed action plan with specific milestones",
          "Implement the solution in phases with regular monitoring",
          "Evaluate results and adjust the approach as needed"
        ],
        resources: [
          "Expert consultation or professional guidance",
          "Online courses and educational materials",
          "Community support groups and forums",
          "Recommended tools and applications",
          "Books and research papers on the topic"
        ],
        timeline: "2-4 weeks for initial implementation, with ongoing monitoring"
      };
      
      setSolution(mockSolution);
      setIsAnalyzing(false);
      toast.success("Analysis complete! Here's your personalized solution.");
    }, 3000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Input Section */}
      <Card className="p-8 bg-gradient-subtle border-0 shadow-elegant">
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Brain className="w-8 h-8 text-primary animate-glow-pulse" />
              <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                AI Problem Analyzer
              </h2>
            </div>
            <p className="text-muted-foreground">
              Describe your challenge and get an AI-powered solution with actionable steps
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Problem Category (Optional)</label>
              <div className="flex flex-wrap gap-2">
                {problemCategories.map((category) => (
                  <Badge
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    className={`cursor-pointer transition-all hover:scale-105 ${
                      selectedCategory === category.id ? category.color : ""
                    }`}
                    onClick={() => setSelectedCategory(category.id === selectedCategory ? "" : category.id)}
                  >
                    {category.label}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Describe Your Problem</label>
              <Textarea
                placeholder="Tell me about the challenge you're facing. Be as detailed as possible - the more context you provide, the better solution I can generate..."
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                className="min-h-32 resize-none"
              />
            </div>

            <Button
              onClick={analyzeProblem}
              disabled={isAnalyzing}
              variant="hero"
              size="lg"
              className="w-full"
            >
              {isAnalyzing ? (
                <>
                  <Sparkles className="w-5 h-5 animate-spin" />
                  Analyzing with AI...
                </>
              ) : (
                <>
                  <Brain className="w-5 h-5" />
                  Generate Solution
                  <ArrowRight className="w-5 h-5" />
                </>
              )}
            </Button>
          </div>
        </div>
      </Card>

      {/* Solution Display */}
      {solution && (
        <div className="space-y-6 animate-slide-up">
          {/* Analysis */}
          <Card className="p-6 border-l-4 border-l-primary bg-gradient-to-r from-primary/5 to-transparent">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">AI Analysis</h3>
                <p className="text-muted-foreground leading-relaxed">{solution.analysis}</p>
              </div>
            </div>
          </Card>

          {/* Action Steps */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-accent" />
              <h3 className="text-lg font-semibold">Action Plan</h3>
              <Badge variant="outline" className="ml-auto">
                {solution.timeline}
              </Badge>
            </div>
            <div className="space-y-3">
              {solution.steps.map((step, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Resources */}
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-accent" />
              <h3 className="text-lg font-semibold">Recommended Resources</h3>
            </div>
            <div className="grid gap-3">
              {solution.resources.map((resource, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:border-border transition-colors">
                  <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0"></div>
                  <p className="text-sm">{resource}</p>
                </div>
              ))}
            </div>
          </Card>

          <div className="flex justify-center">
            <Button
              onClick={() => {
                setSolution(null);
                setProblem("");
                setSelectedCategory("");
              }}
              variant="glass"
            >
              Solve Another Problem
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};