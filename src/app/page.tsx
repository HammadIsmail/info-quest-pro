"use client";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
   <div className="min-h-screen bg-background">
         <Header />
         <main>
           <HeroSection />
           <ServicesSection />
           {/* <StatsSection /> */}
           <CTASection />
         </main>
         <Footer />
       </div>
  );
}
