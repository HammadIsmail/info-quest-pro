"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, Eye, AlertCircle, Activity, Search, Users, Clock, BarChart2, Minus, Plus } from "lucide-react";
import { useState } from "react";

const ManagedDetectionResponse = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const features = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Proactive Threat Hunting",
      description: "Our certified ethical hackers perform simulated attacks using real-world tactics – from external web attacks to internal breaches – without harming your systems."
    },
    {
      icon: <AlertCircle className="w-8 h-8" />,
      title: "Real-Time Threat Detection",
      description: "We don't wait until the end of the project. If we find a critical vulnerability, you'll know immediately with real-time alerts."
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Rapid Incident Response",
      description: "Immediate action on detected threats with our expert security team ready to contain and neutralize risks."
    },
    {
      icon: <BarChart2 className="w-8 h-8" />,
      title: "Comprehensive Reporting",
      description: "Detailed reports with actionable insights and prioritized recommendations for improving your security posture."
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "24/7 Security Operations Center (SOC)",
      description: "Our team monitors your systems around the clock, using advanced analytics and industry-leading tools to spot and stop threats fast."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Advanced Threat Intelligence",
      description: "We leverage global threat intelligence to stay ahead of evolving cyber risks, ensuring your defenses are always up to date."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Human Analysis",
      description: "AI and automation handle the volume—our seasoned analysts validate alerts, investigate anomalies, and take action when it matters."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "End-to-End Support",
      description: "From initial setup to ongoing monitoring and emergency response, we handle every step so you can focus on running your business."
    }
  ];

  const faqs = [
    {
      question: "What is Managed Detection and Response (MDR)?",
      answer: "MDR is a comprehensive cybersecurity service that combines technology and human expertise to provide continuous threat monitoring, detection, investigation, and response capabilities."
    },
    {
      question: "How quickly can you respond to security incidents?",
      answer: "Our average response time is under 15 minutes for critical threats, with immediate containment actions taken to prevent spread."
    },
    {
      question: "What types of threats can you detect?",
      answer: "We detect malware, ransomware, phishing attempts, brute force attacks, insider threats, and suspicious behavior patterns across networks, endpoints, and cloud environments."
    },
    {
      question: "Can you integrate with our existing security tools?",
      answer: "Yes, our MDR solution integrates with most SIEM, EDR, and firewall solutions to enhance your existing security infrastructure."
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
              MANAGED DETECTION AND RESPONSE
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-medium">
              Find the Weakness Before Hackers Do
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
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Proactive Threat Protection
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              At InfoQuestPro, we {`don't`} wait for threats to happen - we go hunting for them. Our Managed Detection and Response services continuously monitor your systems to uncover vulnerabilities before bad actors can exploit them.
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
            Our MDR Capabilities
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        className="py-20 px-4 md:px-8 lg:px-16 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our MDR Solutions?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="flex items-start space-x-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mt-1 flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section 
        className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our MDR Process
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <motion.div
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-lg font-bold text-center mb-2">Initial Assessment</h3>
              <p className="text-white/90 text-sm text-center">We evaluate your current security posture and define monitoring scope</p>
            </motion.div>
            
            <motion.div
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-lg font-bold text-center mb-2">Continuous Monitoring</h3>
              <p className="text-white/90 text-sm text-center">24/7 surveillance of your systems for suspicious activity</p>
            </motion.div>
            
            <motion.div
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-lg font-bold text-center mb-2">Threat Validation</h3>
              <p className="text-white/90 text-sm text-center">Our analysts investigate and confirm potential threats</p>
            </motion.div>
            
            <motion.div
              className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-lg font-bold text-center mb-2">Response & Reporting</h3>
              <p className="text-white/90 text-sm text-center">Immediate action on threats with detailed reporting</p>
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
            MDR – Frequently Asked Questions
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
            Learn More About Our MDR Services
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get enterprise-grade threat detection and response for your business.
          </p>
          <Button
            className="bg-orange-500 hover:bg-orange-600 px-8 py-4 text-lg font-bold rounded-full shadow-lg transition-all duration-300"
            size="lg"
          >
            BOOK A DISCOVERY CALL
          </Button>
        </div>
      </motion.section>
    </div>
  );
};

export default ManagedDetectionResponse;