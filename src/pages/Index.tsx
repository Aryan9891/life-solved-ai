import { HeroSection } from "@/components/HeroSection";
import { FeatureGrid } from "@/components/FeatureGrid";
import { ProblemSolver } from "@/components/ProblemSolver";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeatureGrid />
      <section id="problem-solver" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <ProblemSolver />
        </div>
      </section>
    </div>
  );
};

export default Index;
