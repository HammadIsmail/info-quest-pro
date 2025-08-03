"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Lock, Key, Users, Fingerprint, Shield, Minus, Plus } from "lucide-react";
import { useState } from "react";

const IdentityAccessManagement = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Centralized Identity Management",
      description: "Manage users, groups, and roles across all systems from one unified interface."
    },
    {
      icon: <Key className="w-8 h-8" />,
      title: "Single Sign-On (SSO) & Multi-Factor Authentication (MFA)",
      description: "Strengthen access control while simplifying the login experience for users."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Privileged Access Management (PAM)",
      description: "Monitor, control, and audit access to critical systems by administrators and third parties."
    },
    {
      icon: <Fingerprint className="w-8 h-8" />,
      title: "Role-Based & Attribute-Based Access Control",
      description: "Define granular policies to restrict access based on roles, locations, and contextual attributes."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Access Reviews & Lifecycle Automation",
      description: "Automate provisioning, deprovisioning, and periodic access certification processes."
    }
  ];

  const benefits = [
    "Reduce identity-related breaches and insider threats",
    "Achieve compliance with standards like ISO 27001, NIST, and GDPR",
    "Save time with automated onboarding and offboarding",
    "Improve user productivity while enforcing security policies"
  ];

  const faqs = [
    {
      question: "What is Identity and Access Management (IAM)?",
      answer: "IAM is the process of controlling and managing user identities and their access to systems, ensuring only authorized individuals can access specific resources."
    },
    {
      question: "Can you integrate with our existing directory (e.g., Active Directory, Azure AD)?",
      answer: "Yes, our IAM solutions seamlessly integrate with all major directory services including Active Directory, Azure AD, LDAP, and other identity providers."
    },
    {
      question: "Do you offer Single Sign-On (SSO) and Multi-Factor Authentication (MFA)?",
      answer: "Absolutely. We provide comprehensive SSO solutions with support for all major identity providers and flexible MFA options including biometrics, hardware tokens, and mobile authenticators."
    },
    {
      question: "How do you handle employee onboarding/offboarding?",
      answer: "Our automated lifecycle management ensures immediate access provisioning when employees join and instant revocation when they leave, with customizable workflows for approvals and exceptions."
    },
    {
      question: "What compliance standards does IAM help meet?",
      answer: "Our IAM solutions help meet requirements for ISO 27001, NIST, GDPR, HIPAA, PCI DSS, SOC 2, and other major regulatory frameworks."
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
              IDENTITY ACCESS MANAGEMENT
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-medium">
              Secure access. Simplified control. Complete visibility.
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
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              We help you protect your organization by ensuring that the right individuals have the right access to the right resources — at the right time.
            </p>
            <p className="text-lg md:text-xl text-gray-600">
              Our Identity and Access Management (IAM) services are designed to safeguard digital identities, enforce least privilege, and streamline access control across cloud, on-prem, and hybrid environments.
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
            Comprehensive IAM Solutions
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
                Why Choose Our IAM Services
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
                    <Shield className="w-5 h-5 mt-1 flex-shrink-0" />
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
              <h3 className="text-2xl font-bold mb-6">SECURE YOUR IDENTITIES NOW</h3>
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
            Identity and Access Management – FAQs
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
            Ready to Transform Your Access Management?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get enterprise-grade IAM solutions that balance security and user experience.
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

export default IdentityAccessManagement;