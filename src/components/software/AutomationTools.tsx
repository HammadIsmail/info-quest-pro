"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const CONFIG = {
  // Hero Section
  heroTitle: "Automatic. Streamline. Save Time.",
  heroDescription: "We build smart automation solutions that eliminate manual work, reduce human error, and boost operational efficiency. From CRM updates to invoice processing, our tools help your business do more with less.",
  heroCtaText: "FREE CONSULTATION",
  heroImage: "/images/software/hero-image.png", // Replace with your hero image path

  // Benefits Section
  benefits: [
    {
      icon: "/images/software/icon1.png", // Replace with your icon path
      title: "Save hours of manual work",
      description: "Automating repetitive tasks like data entry, follow-ups, and scheduling frees up valuable time for your team."
    },
    {
      icon: "/images/software/icon2.png", // Replace with your icon path
      title: "Minimize human errors",
      description: "Automation ensures tasks are executed with consistent accuracy, reducing the risk of costly mistakes."
    },
    {
      icon: "/images/software/icon3.png", // Replace with your icon path
      title: "Improve task consistency",
      description: "Workflows are followed the same way every time, ensuring predictable, reliable outcomes across departments."
    }
  ],

  // Stats Section
  stats: [
    {
      value: "90%",
      label: "TIME REDUCED"
    },
    {
      value: "20x",
      label: "OUTPUT"
    },
    {
      value: "300%",
      label: "ROI USING OUR AI"
    }
  ],

  // Integration Section
  integrationTitle: "WE INTEGRATE WITH INDUSTRY LEADING SOFTWARE",
  integrationSubtitle: "CONNECT OUR AI AGENTS WITH YOUR SOFTWARE",
  integrationTagline: "SECURE. RELIABLE. COLLABORATIVE.",
  integrationLogos: [
    "/images/software/salesforce.png", // Replace with your logo path
    "/images/software/microsoft.png",
    "/images/software/square.png",
    "/images/software/sap.png",
    "/images/software/twilio.png"
  ],

  // Final CTA
  finalCtaTitle: "BUILD YOUR CUSTOM AI AGENTS TODAY",
  finalCtaButtonText: "FREE CONSULTATION"
};

const AutomationSolutions = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white overflow-hidden">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center">
          {/* Text Content */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl md:w-1/2 z-10"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {CONFIG.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              {CONFIG.heroDescription}
            </p>
            <Button
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold rounded-full shadow-lg transition-all duration-300"
              size="lg"
            >
              {CONFIG.heroCtaText}
            </Button>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="md:w-1/2 mt-12 md:mt-0 z-10"
          >
            <div className="relative w-full h-80 md:h-96 lg:h-[500px]">
              <Image
                src={CONFIG.heroImage}
                alt="Automation solutions"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Automation tools simplify your daily operations
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Eliminating manual processes and letting your team focus on what matters most.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {CONFIG.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gray-50 p-8 rounded-xl"
              >
                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  <Image
                    src={benefit.icon}
                    alt={benefit.title}
                    width={32}
                    height={32}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {CONFIG.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <p className="text-5xl md:text-6xl font-bold text-orange-600 mb-2">
                  {stat.value}
                </p>
                <p className="text-lg font-semibold text-gray-700">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {CONFIG.integrationTitle}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {CONFIG.integrationSubtitle}
            </p>
            <p className="text-orange-600 font-semibold">
              {CONFIG.integrationTagline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {CONFIG.integrationLogos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={logo}
                  alt="Integration partner"
                  width={120}
                  height={60}
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            {CONFIG.finalCtaTitle}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Button
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold rounded-full shadow-lg transition-all duration-300"
              size="lg"
            >
              {CONFIG.finalCtaButtonText}
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AutomationSolutions;