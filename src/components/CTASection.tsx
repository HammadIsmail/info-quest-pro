"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";

const CTASection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -50]);

  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 20 });
  const springTranslateY = useSpring(translateY, { stiffness: 100, damping: 20 });

  return (
    <motion.section
      ref={sectionRef}
      style={{ opacity: springOpacity, y: springTranslateY }}
      className="py-20 bg-gradient-to-br from-orange-50/50 to-red-50/30 relative overflow-hidden"
    >
      {/* Background Gradient Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.05),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-8 bg-gradient-to-br from-orange-500 to-red-500">
            <ArrowRight className="w-8 h-8 text-white" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
            <span>Get Started</span>
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Turn information into advantage! Start using InfoQuestPro today.
            Sign up for a free trial and experience the power of data-driven decisions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group">
              Start for Free
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" className="border-orange-300 text-orange-600 hover:bg-orange-100 px-6 py-3 rounded-full font-semibold transition-all duration-300">
              Request a Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Free Trial", desc: "30-day free trial, no credit card required" },
              { title: "24/7 Support", desc: "Expert assistance whenever you need it" },
              { title: "Enterprise Ready", desc: "Scalable solutions for businesses of all sizes" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">{item.title}</div>
                <div className="text-gray-500">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CTASection;
