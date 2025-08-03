"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, AlertCircle, Bell, Activity, RefreshCw, Minus, Plus } from "lucide-react";
import { useState } from "react";

const MonitoringThreatResponse = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const features = [
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Real-Time Monitoring",
      description: "Your systems are watched round-the-clock for suspicious activity, strange logins, or unauthorized changes. We use the latest security tools and AI to identify potential threats—malware, hacking attempts, or insider risks."
    },
    {
      icon: <AlertCircle className="w-8 h-8" />,
      title: "Rapid Threat Response",
      description: "Our experts jump into action, containing and neutralizing threats before they spread. If we detect a threat, you get notified instantly, along with our recommendations and next steps."
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Immediate Alerting",
      description: "Instant notifications for any detected threats with clear, actionable information and recommended responses."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Threat Detection",
      description: "Advanced detection capabilities that identify both known and emerging threats across your entire infrastructure."
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Ongoing Tuning",
      description: "We constantly fine-tune our tools to keep up with new threats, ensuring top protection for your business."
    }
  ];

  const benefits = [
    "24/7 protection from cyber threats with no additional staffing needed",
    "Reduced incident response times with expert security teams on standby",
    "Clear, jargon-free reports on incidents and resolutions",
    "Continuous improvement of detection capabilities",
    "Peace of mind knowing your systems are constantly monitored"
  ];

  const faqs = [
    {
      question: "How quickly do you respond to detected threats?",
      answer: "Our average response time is under 15 minutes for critical threats, with immediate containment actions taken to prevent spread."
    },
    {
      question: "What types of threats can you detect?",
      answer: "We detect malware, ransomware, phishing attempts, brute force attacks, insider threats, and suspicious behavior patterns across networks, endpoints, and cloud environments."
    },
    {
      question: "Will I be notified for every alert?",
      answer: "You'll receive immediate notifications for critical threats, with daily or weekly summary reports for lower priority alerts based on your preference."
    },
    {
      question: "How do you stay current with new threats?",
      answer: "Our security operations team continuously updates detection rules, threat intelligence feeds, and response playbooks based on the latest threat landscape."
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
              Monitoring & Threat Response
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-medium">
              STAY PROTECTED DAY AND NIGHT, WE MONITOR, DETECT, AND NEUTRALIZE CYBER THREATS — SO YOU {`DON'T`} HAVE TO.
            </p>
            <Button
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold rounded-full shadow-lg transition-all duration-300"
              size="lg"
            >
              FREE CONSULTATION
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
              Comprehensive Threat Protection
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Our Monitoring & Threat Response service provides continuous surveillance of your digital assets with rapid response capabilities to neutralize threats before they impact your business.
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
            Our Monitoring & Response Capabilities
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
                Benefits of Our Monitoring Service
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
              <h3 className="text-2xl font-bold mb-6">LET US MONITOR YOUR BUSINESS</h3>
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

      {/* Process Section */}
      <motion.section 
        className="py-20 px-4 md:px-8 lg:px-16 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Threat Response Process
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            <motion.div
              className="bg-orange-50 p-6 rounded-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mx-auto mb-4">
                <Activity className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">1. Continuous Monitoring</h3>
              <p className="text-gray-600 text-sm">24/7 surveillance of your systems</p>
            </motion.div>
            
            <motion.div
              className="bg-orange-50 p-6 rounded-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mx-auto mb-4">
                <AlertCircle className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">2. Threat Detection</h3>
              <p className="text-gray-600 text-sm">AI-powered identification of risks</p>
            </motion.div>
            
            <motion.div
              className="bg-orange-50 p-6 rounded-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mx-auto mb-4">
                <Bell className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">3. Immediate Alerting</h3>
              <p className="text-gray-600 text-sm">Real-time notifications</p>
            </motion.div>
            
            <motion.div
              className="bg-orange-50 p-6 rounded-lg text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mx-auto mb-4">
                <RefreshCw className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">4. Resolution & Tuning</h3>
              <p className="text-gray-600 text-sm">Continuous improvement</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section 
        className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Monitoring & Threat Response – FAQs
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
            Ready for 24/7 Threat Protection?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get enterprise-grade monitoring and rapid response for your business.
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

export default MonitoringThreatResponse;