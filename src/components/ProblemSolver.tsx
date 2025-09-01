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

  const generateRelevantSolution = (problemText: string, category: string): Solution => {
    const lowerProblem = problemText.toLowerCase();
    
    // Analyze problem keywords and context
    const isUrgent = lowerProblem.includes('urgent') || lowerProblem.includes('emergency') || lowerProblem.includes('immediate');
    const isFinancial = lowerProblem.includes('money') || lowerProblem.includes('debt') || lowerProblem.includes('budget') || category === 'finance';
    const isHealth = lowerProblem.includes('health') || lowerProblem.includes('sick') || lowerProblem.includes('medical') || category === 'health';
    const isCareer = lowerProblem.includes('job') || lowerProblem.includes('work') || lowerProblem.includes('career') || category === 'career';
    const isRelationship = lowerProblem.includes('relationship') || lowerProblem.includes('family') || lowerProblem.includes('friend') || category === 'relationships';
    const isLifestyle = lowerProblem.includes('habit') || lowerProblem.includes('routine') || lowerProblem.includes('lifestyle') || category === 'lifestyle';
    
    let analysis = "";
    let steps: string[] = [];
    let resources: string[] = [];
    let timeline = "";
    
    if (isFinancial) {
      analysis = "This is a financial challenge that requires careful planning and disciplined execution. Financial problems often stem from cash flow issues, unexpected expenses, or lack of budgeting. The key is to create a sustainable plan that addresses both immediate needs and long-term stability.";
      steps = [
        "List all income sources and monthly expenses to understand your current financial position",
        "Identify areas where you can reduce spending immediately (subscriptions, dining out, entertainment)",
        "Create an emergency budget focusing only on essential expenses",
        "Explore additional income opportunities (freelancing, part-time work, selling unused items)",
        "Contact creditors or service providers to negotiate payment plans if needed",
        "Set up an automatic savings plan, even if it's just $10-20 per month to build momentum"
      ];
      resources = [
        "Free budgeting apps like Mint, YNAB, or PocketGuard",
        "Financial counseling services through local credit unions or non-profits",
        "Dave Ramsey's Financial Peace University or similar debt management programs",
        "Government assistance programs if eligible (SNAP, utility assistance, etc.)",
        "Side hustle platforms like Upwork, TaskRabbit, or DoorDash for extra income"
      ];
      timeline = isUrgent ? "1-2 weeks for immediate relief, 3-6 months for stability" : "2-4 weeks to see initial progress, 6-12 months for significant improvement";
    } else if (isHealth) {
      analysis = "Health challenges require immediate attention and a comprehensive approach. Whether physical or mental health, the key is to address symptoms while working on root causes. Don't delay seeking professional help when needed.";
      steps = [
        "Document your symptoms, triggers, and patterns to share with healthcare providers",
        "Schedule an appointment with your primary care physician or specialist",
        "Research your insurance coverage and understand your healthcare options",
        "Make immediate lifestyle adjustments (sleep, nutrition, stress management)",
        "Build a support network of family, friends, or support groups",
        "Follow medical advice consistently and track your progress"
      ];
      resources = [
        "Telehealth platforms like Teladoc or Amwell for quick consultations",
        "Mental health apps like Headspace, Calm, or BetterHelp",
        "Community health centers for affordable care options",
        "Disease-specific organizations (American Heart Association, etc.) for education",
        "Patient advocacy groups and online communities for support"
      ];
      timeline = isUrgent ? "Seek immediate care today, 2-8 weeks for treatment plan results" : "1-2 weeks to start treatment, 6-12 weeks to see significant improvement";
    } else if (isCareer) {
      analysis = "Career challenges often reflect broader market changes or skill gaps. Success requires strategic thinking, skill development, and networking. Focus on what you can control while adapting to industry trends.";
      steps = [
        "Assess your current skills and identify gaps in your desired career path",
        "Update your resume and LinkedIn profile with recent achievements and skills",
        "Network actively through industry events, LinkedIn, and professional associations",
        "Apply for positions strategically, focusing on quality over quantity",
        "Consider additional certifications or training to enhance your marketability",
        "Prepare thoroughly for interviews and follow up professionally"
      ];
      resources = [
        "LinkedIn Learning or Coursera for skill development",
        "Industry-specific job boards and professional associations",
        "Career counseling services through local workforce development centers",
        "Resume review services or career coaches",
        "Glassdoor for salary research and company insights"
      ];
      timeline = "2-4 weeks to prepare materials, 2-6 months for job search results";
    } else if (isRelationship) {
      analysis = "Relationship challenges require patience, communication, and often a willingness to change patterns. Whether family, romantic, or friendship issues, success depends on mutual effort and understanding boundaries.";
      steps = [
        "Reflect on your role in the relationship dynamic and what you can control",
        "Practice active listening and express your feelings using 'I' statements",
        "Set clear, healthy boundaries and communicate them respectfully",
        "Consider couples or family therapy if multiple people are involved",
        "Focus on rebuilding trust through consistent, small actions",
        "Develop your own emotional intelligence and coping strategies"
      ];
      resources = [
        "Relationship counseling through Psychology Today or BetterHelp",
        "Books like 'The 5 Love Languages' or 'Nonviolent Communication'",
        "Support groups for specific relationship challenges",
        "Meditation and mindfulness apps for emotional regulation",
        "Local community centers offering relationship workshops"
      ];
      timeline = "2-4 weeks to see initial communication improvements, 3-6 months for lasting change";
    } else if (isLifestyle) {
      analysis = "Lifestyle changes require consistent effort and realistic goal-setting. Success comes from making small, sustainable changes rather than dramatic overhauls. Focus on building systems and habits that support your desired outcome.";
      steps = [
        "Define specific, measurable goals with clear deadlines",
        "Start with one small change and build momentum gradually",
        "Track your progress daily using apps or a simple journal",
        "Identify and plan for potential obstacles and setbacks",
        "Find an accountability partner or join a community with similar goals",
        "Celebrate small wins and adjust your approach based on what works"
      ];
      resources = [
        "Habit tracking apps like Habitica, Strava, or MyFitnessPal",
        "Online communities and forums related to your specific goal",
        "Local gyms, community centers, or hobby groups for social support",
        "Self-help books and podcasts from reputable experts",
        "Professional coaches or trainers if budget allows"
      ];
      timeline = "1-2 weeks to establish routine, 6-8 weeks to form lasting habits";
    } else {
      // General problem-solving approach
      analysis = "This appears to be a complex challenge that requires a systematic approach. Breaking it down into manageable components and addressing root causes rather than just symptoms will lead to more sustainable solutions.";
      steps = [
        "Define the problem clearly and identify what success looks like",
        "Gather all relevant information and understand the full context",
        "Brainstorm multiple potential solutions without judging them initially",
        "Evaluate each option based on feasibility, cost, and potential impact",
        "Choose the best approach and create a detailed implementation plan",
        "Monitor progress regularly and be willing to adjust your strategy"
      ];
      resources = [
        "Problem-solving frameworks like design thinking or root cause analysis",
        "Online courses on critical thinking and decision-making",
        "Mentors or advisors with experience in similar challenges",
        "Professional consultants if the stakes are high enough",
        "Books on problem-solving and decision-making psychology"
      ];
      timeline = "1-2 weeks for planning, timeline varies based on complexity";
    }

    return {
      analysis,
      category: category || "general",
      steps,
      resources,
      timeline
    };
  };

  const analyzeProblem = async () => {
    if (!problem.trim()) {
      toast.error("Please describe your problem first");
      return;
    }

    if (problem.trim().length < 20) {
      toast.error("Please provide more details about your problem for better analysis");
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate AI processing time based on problem complexity
    const processingTime = Math.min(2000 + (problem.length * 20), 5000);
    
    setTimeout(() => {
      const relevantSolution = generateRelevantSolution(problem, selectedCategory);
      setSolution(relevantSolution);
      setIsAnalyzing(false);
      toast.success("Analysis complete! Here's your personalized solution plan.");
    }, processingTime);
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
                placeholder="Tell me about the challenge you're facing. Be as detailed as possible - include context, what you've already tried, your constraints, and what outcome you're hoping for. The more specific you are, the better solution I can generate..."
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                className="min-h-40 resize-none"
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