"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, Plus, Minus, Zap, ShieldCheck } from "lucide-react";

import { useState } from "react";
import { Button } from "@/components/ui/button";


export default function VulnerabilityManagement() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Vulnerability Management as a Service (VMaaS)?",
      answer:
        "VMaaS is a fully managed solution where we handle the scanning, prioritization, tracking, and remediation of security vulnerabilities across your systems — so your team doesn't have to.",
    },
    {
      question: "How often are vulnerability scans performed?",
      answer:
        "Scans are performed on a scheduled basis (typically weekly or daily) with continuous monitoring for critical assets. Frequency can be customized based on your needs.",
    },
    {
      question: "Do you help with remediation?",
      answer:
        "Yes, we help coordinate fixes, monitor progress, and validate remediation with follow-up scans. Our team provides guidance on patching priorities and strategies.",
    },
    {
      question: "Can you integrate with our existing tools or ticketing systems?",
      answer:
        "Absolutely. Our solution integrates with common ticketing systems like Jira, ServiceNow, and others to streamline your vulnerability management workflow.",
    },
    {
      question: "Will this help with compliance?",
      answer:
        "Yes, our service includes prebuilt reports for frameworks like ISO 27001, NIST, HIPAA, and GDPR to simplify your compliance efforts.",
    },
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-orange-600" />,
      title: "Automated Vulnerability Scanning",
      description:
        "Scheduled scans across endpoints, servers, cloud, and network infrastructure – with zero disruption.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-orange-600" />,
      title: "Risk-Based Prioritization",
      description:
        "Integrated with threat intelligence and your asset criticality to surface high-impact vulnerabilities first.",
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-orange-600" />,
      title: "Real-Time Alerts & Dashboards",
      description:
        "Get live insights into your risk posture through a centralized, customizable SIEM dashboard.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-orange-600" />,
      title: "Remediation & Retesting Support",
      description:
        "We help coordinate fixes, monitor progress, and validate remediation with follow-up scans.",
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-orange-600" />,
      title: "Regulatory & Compliance Reporting",
      description:
        "Prebuilt reports for frameworks like ISO 27001, NIST, HIPAA, and GDPR.",
    },
  ];

  const benefits = [
    "No need to manage scanning tools or maintain patching schedules",
    "Reduce exposure time with continuous monitoring",
    "Fully aligned with your compliance and audit needs",
    "Gain a clear roadmap to improve security posture"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 md:py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Vulnerability Management Services
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Proactively identify, prioritize, and remediate security vulnerabilities across your infrastructure.
            </p>
            <Button
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold rounded-full shadow-lg transition-all duration-300"
              size="lg"
            >
              REQUEST A FREE CONSULTATION
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Intro Section */}
      <motion.section 
        className="py-20 px-4 md:px-8 lg:px-16 bg-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Vulnerability Management as a Service (VMaaS)
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              <span className="font-semibold">
                Proactively detect, prioritize, and remediate security flaws – all
                without the operational overhead.
              </span>{" "}
              Our fully managed Vulnerability Management service leverages our
              advanced SIEM platform to provide end-to-end visibility into your
              attack surface. We handle everything from scanning and threat
              correlation to remediation tracking, so your team can stay focused
              on what matters most.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            {`What's Included?`}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section 
        className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Why Choose Our Vulnerability Management
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                  >
                    <ShieldCheck className="w-5 h-5 mt-1 flex-shrink-0" />
                    <span className="text-lg">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 p-8 rounded-xl backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-6">REDUCE YOUR RISK NOW</h3>
              <Button
                className="w-full bg-white text-orange-600 hover:bg-gray-100 py-6 text-lg font-bold rounded-lg shadow-lg transition-all duration-300"
                size="lg"
              >
                GET STARTED
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        className="py-20 px-4 md:px-8 lg:px-16 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Vulnerability Management – FAQs
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                className="border border-gray-200 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={activeFaq === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: activeFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {activeFaq === index ? (
                      <Minus className="w-5 h-5 text-orange-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-orange-600" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {activeFaq === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 text-gray-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section 
        className="py-20 px-4 md:px-8 lg:px-16 bg-gray-900 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Reduce Your Vulnerability Risk?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get comprehensive vulnerability management that identifies and prioritizes risks before attackers can exploit them.
          </p>
          <Button
            className="bg-orange-500 hover:bg-orange-600 px-8 py-4 text-lg font-bold rounded-full shadow-lg transition-all duration-300"
            size="lg"
          >
            REQUEST A DEMO
          </Button>
        </div>
      </motion.section>
    </div>
  );
}