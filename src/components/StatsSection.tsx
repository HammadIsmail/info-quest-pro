import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById("stats-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  

  return (
    <section id="stats-section" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="inline-block text-animate-on-scroll text-foreground">We give you</span>{" "}
            <span className="inline-block text-animate-on-scroll gradient-primary bg-clip-text text-transparent text-glow-on-scroll">full</span>
            <br />
            <span className="inline-block text-animate-on-scroll text-muted-foreground">control</span>{" "}
            <span className="inline-block text-animate-on-scroll text-foreground">over your data</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform information into advantage! Start using InfoQuestPro today. 
            Sign up for a free trial and experience the power of data-driven decisions.
          </p>
        </div>

      

        {/* Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Improved Customer Service */}
          <Card className="p-8 lg:p-12 hover-lift gradient-card border-0 animate-fade-up">
            <div className="flex items-start space-x-6">
              <div className="bg-accent/20 rounded-2xl p-4 flex-shrink-0">
                <div className="text-2xl md:text-3xl font-bold text-accent">2.3%</div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  Improved customer service
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Analytics help optimize service processes by providing information 
                  on how to improve interactions with customers and increase 
                  their satisfaction.
                </p>
                <div className="mt-6 flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-xs font-semibold text-primary">JD</span>
                    </div>
                    <span>John Doe</span>
                  </div>
                  <span>•</span>
                  <span>1,264 interactions</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Monitoring Key Indicators */}
          <Card className="p-8 lg:p-12 hover-lift gradient-card border-0 animate-fade-up">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Monitoring key indicators
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Analytics platforms allow businesses to track KPIs, an important 
                tool for measuring success and achieving goals.
              </p>
              
              {/* Mock Dashboard */}
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-background rounded-lg p-4">
                    <div className="text-sm text-muted-foreground mb-1">Revenue</div>
                    <div className="text-xl font-bold text-primary">$264.2K</div>
                    <div className="text-xs text-accent">+12% ↗</div>
                  </div>
                  <div className="bg-background rounded-lg p-4">
                    <div className="text-sm text-muted-foreground mb-1">Users</div>
                    <div className="text-xl font-bold text-primary">43.6K</div>
                    <div className="text-xs text-accent">+8% ↗</div>
                  </div>
                </div>
                <div className="h-20 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg flex items-end justify-center space-x-1 p-2">
                  <div className="w-2 bg-primary rounded-full" style={{height: '20%'}}></div>
                  <div className="w-2 bg-primary rounded-full" style={{height: '40%'}}></div>
                  <div className="w-2 bg-primary rounded-full" style={{height: '60%'}}></div>
                  <div className="w-2 bg-accent rounded-full" style={{height: '80%'}}></div>
                  <div className="w-2 bg-accent rounded-full" style={{height: '100%'}}></div>
                  <div className="w-2 bg-accent rounded-full" style={{height: '70%'}}></div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;