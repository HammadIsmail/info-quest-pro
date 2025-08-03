"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {  Smartphone,  Zap, ShieldCheck, Settings, Lock, Minus, Plus } from "lucide-react";
import { useState } from "react";

const EndpointSecurity = () => {
      const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Next-Gen Antivirus & EDR",
      description: "Block known and unknown threats with behavioral analysis, AI-powered detection, and automated remediation."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Centralized Endpoint Management",
      description: "Deploy, monitor, and manage endpoint security policies across all devices from one dashboard."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Threat Containment & Isolation",
      description: "Automatically quarantine infected devices or processes to prevent lateral movement."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Patch & Vulnerability Management",
      description: "Ensure endpoints are always up to date with automated patching and risk-based vulnerability scanning."
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Device Protection",
      description: "Extend full security coverage to mobile, BYOD, and off-network endpoints."
    }
  ];

  const benefits = [
    "24/7 real-time protection from evolving cyber threats",
    "Improve incident response with forensic data and threat insights",
    "Reduce attack surface with proactive monitoring and automated patching",
    "Fully compliant with security frameworks like ISO 27001, CIS Controls, and NIST"
  ];

  const faqs = [
    {
      question: "What is endpoint security?",
      answer: "Endpoint security protects devices like laptops, desktops, mobile phones, and servers from cyber threats through antivirus, threat detection, and access controls."
    },
    {
      question: "What types of endpoints do you protect?",
      answer: "We protect all types of endpoints including laptops, desktops, mobile devices, servers, and IoT devices across all operating systems."
    },
    {
      question: "What's the difference between traditional antivirus and EDR?",
      answer: "Traditional antivirus focuses on known threats while EDR (Endpoint Detection & Response) provides advanced threat detection, investigation, and response capabilities for both known and unknown threats."
    },
    {
      question: "Can we manage security across all endpoints from one place?",
      answer: "Yes, our centralized management console gives you complete visibility and control over all endpoints from a single dashboard."
    }
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
              Endpoint Security Services
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Protect every device, everywhere — from laptops to mobile phones to servers.
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
              Comprehensive Endpoint Protection
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Our Endpoint Security Services ensure your business stays protected against malware, ransomware, phishing, and zero-day threats – whether your workforce is remote, hybrid, or on-site. With real-time threat detection and response capabilities, we secure endpoints as the first line of defense in your cybersecurity strategy.
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
                Why Choose Our Endpoint Security Services
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
              <h3 className="text-2xl font-bold mb-6">SECURE YOUR ENDPOINTS NOW</h3>
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
            Endpoint Security – FAQs
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
                  aria-expanded={expandedFaq === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: expandedFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {expandedFaq === index ? (
                      <Minus className="w-5 h-5 text-orange-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-orange-600" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {expandedFaq === index && (
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
            Ready to Secure Your Endpoints?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get enterprise-grade protection for all your devices with our comprehensive endpoint security solutions.
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
};

export default EndpointSecurity;