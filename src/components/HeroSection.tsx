import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Zap, Target, Users } from "lucide-react";
import heroImage from "@/assets/hero-ai-brain.jpg";

export const HeroSection = () => {
  const scrollToProblemSolver = () => {
    document.getElementById('problem-solver')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <Badge variant="outline" className="bg-primary/10 border-primary/20 text-primary">
                <Zap className="w-4 h-4 mr-2" />
                AI-Powered Solutions
              </Badge>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Life Solved
                </span>
                <br />
                <span className="text-foreground">by AI</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Transform any real-life challenge into actionable solutions. Our AI analyzes your problems and creates personalized step-by-step plans to help you succeed.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToProblemSolver}
                variant="hero"
                size="lg"
                className="group"
              >
                <Brain className="w-5 h-5 group-hover:animate-pulse" />
                Start Solving Problems
              </Button>
              <Button variant="glass" size="lg">
                <Users className="w-5 h-5" />
                See Success Stories
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">10K+</div>
                <div className="text-sm text-muted-foreground">Problems Solved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">24/7</div>
                <div className="text-sm text-muted-foreground">AI Available</div>
              </div>
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="AI Brain solving problems"
                className="w-full h-auto rounded-2xl shadow-elegant hover:shadow-glow transition-all duration-500"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-primary rounded-2xl opacity-80 animate-float flex items-center justify-center">
              <Brain className="w-12 h-12 text-white" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-accent rounded-2xl opacity-80 animate-float flex items-center justify-center" style={{ animationDelay: '0.5s' }}>
              <Target className="w-16 h-16 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};