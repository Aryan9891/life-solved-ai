import { Card } from "@/components/ui/card";
import { Brain, Zap, Target, Clock, Shield, Users } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Advanced algorithms analyze your problem from multiple angles to identify root causes and optimal solutions.",
    gradient: "from-blue-500/20 to-purple-500/20"
  },
  {
    icon: Zap,
    title: "Instant Solutions",
    description: "Get comprehensive action plans in seconds, not hours. Our AI processes information faster than any human consultant.",
    gradient: "from-yellow-500/20 to-orange-500/20"
  },
  {
    icon: Target,
    title: "Personalized Plans",
    description: "Every solution is tailored to your specific situation, resources, and constraints for maximum effectiveness.",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Problems don't wait for business hours. Access intelligent solutions whenever you need them, day or night.",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your problems and solutions remain completely private. We use advanced encryption to protect your data.",
    gradient: "from-red-500/20 to-rose-500/20"
  },
  {
    icon: Users,
    title: "Community Insights",
    description: "Benefit from collective wisdom. Our AI learns from successful solutions to help solve similar problems.",
    gradient: "from-cyan-500/20 to-blue-500/20"
  }
];

export const FeatureGrid = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">Life Solved AI</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our cutting-edge AI technology transforms the way you approach life's challenges, 
            providing intelligent solutions that actually work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-foreground" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};