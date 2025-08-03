"use client";

import { motion } from "framer-motion";
import { Lock, Shield, FileLock, FileKey, FileSearch, Key, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import { useState } from "react";

const DataSecurity = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const services = [
    {
      icon: FileKey,
      title: "Data Encryption",
      description: "Protect sensitive information with strong encryption both at rest and in transit."
    },
    {
      icon: FileLock,
      title: "Secure File Sharing",
      description: "Enable secure collaboration without compromising data integrity or privacy."
    },
    {
      icon: FileSearch,
      title: "Data Loss Prevention (DLP)",
      description: "Monitor, detect, and block unauthorized data transfers across your environment."
    },
    {
      icon: Key,
      title: "Access Control Policies",
      description: "Restrict access to critical data based on user roles and job functions."
    },
    {
      icon: Shield,
      title: "Cloud Data Security",
      description: "Secure your cloud storage and SaaS platforms with advanced controls."
    },
    {
      icon: Shield,
      title: "Enterprise Data Protection",
      description: "Comprehensive data protection strategies customized to your organization."
    }
  ];

  const principles = [
    "Confidentiality - Ensure only authorized access to sensitive data",
    "Integrity - Maintain accuracy and consistency of data throughout its lifecycle",
    "Availability - Guarantee reliable access to data when needed",
    "Compliance - Meet regulatory requirements for data protection"
  ];

  const faqs = [
    {
      question: "What is data security and why is it important?",
      answer: "Data security refers to protective measures and technologies that safeguard digital information from unauthorized access, corruption, or theft throughout its lifecycle. It's critical for maintaining customer trust, meeting compliance requirements, and protecting your organization's intellectual property."
    },
    {
      question: "How do you protect data in transit vs. data at rest?",
      answer: "For data in transit, we implement TLS/SSL encryption, VPNs, and secure protocols. For data at rest, we use disk encryption, database encryption, and strict access controls. Both scenarios benefit from our comprehensive key management system."
    },
    {
      question: "Can you help us comply with data protection regulations?",
      answer: "Absolutely. Our solutions are designed to help you meet GDPR, HIPAA, CCPA, PCI-DSS, and other regulatory requirements. We provide documentation, audit support, and continuous compliance monitoring."
    },
    {
      question: "How does your DLP solution work?",
      answer: "Our Data Loss Prevention system uses content inspection and contextual analysis to identify sensitive data, then applies policies to monitor and control its movement across your network, endpoints, and cloud services."
    }
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Data Security Services
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Protect your most valuable asset - your data - with comprehensive security solutions.
              </p>
              <Button
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold rounded-full shadow-lg transition-all duration-300"
                size="lg"
              >
                REQUEST A FREE CONSULTATION
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center"
            >
              <Image 
                src="/images/cyber/cia.png" 
                width={500} 
                height={500} 
                alt="Data Security CIA Triad" 
                className="rounded-lg "
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Core Principles Section */}
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
              Data Security Principles
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Our approach to data security is built on four fundamental principles that ensure comprehensive protection for your information assets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-4">
                    <Lock className="w-6 h-6" />
                  </div>
                  <p className="text-gray-700">{principle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Data Security Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-4">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Data Security Matters Section */}
      <motion.section 
        className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Data Security Matters
            </h2>
            <p className="text-xl mb-8">
              In {"today's"} digital economy, data is your most valuable asset - and your biggest liability if compromised.
            </p>
            <p className="text-lg mb-8">
              Data breaches can result in financial losses, reputational damage, and regulatory penalties. Our data security solutions provide the protection you need to operate with confidence in an increasingly hostile digital landscape.
            </p>
            <Button
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold rounded-full shadow-lg transition-all duration-300"
              size="lg"
            >
              LEARN MORE
            </Button>
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
            Data Security – FAQs
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
                  {expandedFaq === index ? (
                    <Minus className="w-5 h-5 text-orange-600" />
                  ) : (
                    <Plus className="w-5 h-5 text-orange-600" />
                  )}
                </button>

                {expandedFaq === index && (
                  <div id={`faq-answer-${index}`} className="px-6 pb-6 pt-2 text-gray-600">
                    {faq.answer}
                  </div>
                )}
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
            Ready to Secure Your Data?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get enterprise-grade protection for all your sensitive information with our comprehensive data security solutions.
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

export default DataSecurity;