"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Shield, Target, FileText, RefreshCw } from "lucide-react";
import Image from "next/image";

const OffensiveSecurity = () => {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Proactive Defense",
      description: "Identify vulnerabilities before attackers do"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Reduce Breach Risk",
      description: "Lower the chances of data leaks, ransomware, and service outages"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Meet Compliance",
      description: "Demonstrate due diligence for ISO 27001, SOC 2, PCI-DSS, etc."
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Strengthen Your Defenses",
      description: "Our findings help improve your security posture overall"
    }
  ];

  const services = [
    {
      title: "Live Threat Alerts",
      description: "We don't wait until the end of the project. If we find a critical vulnerability or security hole, you'll know immediately. You get real-time alerts so your team can take action fast."
    },
    {
      title: "Ethical Hacking & Testing",
      description: "Our certified ethical hackers perform simulated attacks using real-world tactics — from external web attacks to internal breaches — without harming your systems."
    },
    {
      title: "Detailed Exploit Report & Proof of Concept",
      description: "Once testing is complete, we deliver a comprehensive report that includes detailed findings, exploit methodologies, and proof of concept demonstrations."
    },
    {
      title: "Remediation Support & Retesting",
      description: "After you've fixed the identified issues, we offer complimentary retesting to ensure that all vulnerabilities have been properly addressed — no guesswork, just proof."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <motion.section
        className="relative min-h-screen flex items-center justify-between px-4 md:px-8 lg:px-16 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r bg-white" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-orange-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-orange-600 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 leading-tight"
              variants={itemVariants}
            >
              OFFENSIVE
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                SECURITY
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-orange-600 font-semibold max-w-md"
              variants={itemVariants}
            >
              Find the Weakness Before Hackers Do
            </motion.p>

            <motion.div variants={itemVariants}>
              <Button
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-bold rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300"
                onMouseEnter={() => setIsHovered('cta1')}
                onMouseLeave={() => setIsHovered(null)}
              >
                <motion.span
                  animate={{ scale: isHovered === 'cta1' ? 1.05 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  REQUEST A FREE CONSULTATION
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Hero Image */}
          <motion.div
            className="relative h-96 lg:h-[600px]"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-2xl backdrop-blur-sm" />
            <Image
              src="/images/cyber/hacking.jpg"
              alt="Cybersecurity Visualization"
              fill
              className="object-cover rounded-2xl opacity-80"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
          </motion.div>
        </div>
      </motion.section>

      {/* Penetration Testing Section */}
      <motion.section
        className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-5xl md:text-6xl font-black mb-8"
            variants={itemVariants}
          >
            PENETRATION TESTING
          </motion.h2>

          <motion.div
            className="max-w-4xl mx-auto text-lg md:text-xl leading-relaxed"
            variants={itemVariants}
          >
            <p>
              At <span className="font-bold">InfoQuestPro</span>, we {`don't`} wait for threats to happen — we go hunting for them. Our Offensive Security services simulate real-world cyberattacks on your systems, employees, and applications to uncover vulnerabilities before bad actors can exploit them.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Scoping Section */}
      <motion.section
        className="py-20 px-4 md:px-8 lg:px-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
            variants={itemVariants}
          >
            SCOPING
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl"
            variants={itemVariants}
          >
            We begin with a clear and collaborative consultation to understand your business, systems, and security concerns. Together, we define the scope, goals, and boundaries of the engagement.
          </motion.p>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service) => (
              <motion.div
                key={service.title}
                className="bg-white backdrop-blur-sm p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all duration-300 shadow-md hover:shadow-lg"
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Offensive Security Matters */}
      <motion.section
        className="py-20 px-4 md:px-8 lg:px-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <motion.div
              className="relative h-96 lg:h-[500px]"
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-orange-600/30 rounded-2xl" />
              <Image
                src="/images/cyber/virus.png"
                alt="Security Threats Visualization"
                fill
                className="object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl" />
            </motion.div>

            {/* Right - Content */}
            <motion.div className="space-y-8" variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Why Offensive Security Matters
              </h2>

              <div className="space-y-6">
                {features.map((feature) => (
                  <motion.div
                    key={feature.title}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-orange-50 hover:bg-orange-100 transition-all duration-300"
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-white">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-orange-600 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div className="pt-6" variants={itemVariants}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Real-World Results. Real Security.
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Our offensive services {`aren't`} just tests — {"they're"}{" "}
                  <span className="text-orange-600 font-semibold">training grounds</span>{" "}
                  for your security posture. Every engagement gives your IT and security team a chance to grow stronger, learn from weaknesses, and build real resilience.
                </p>

                <Button
                  variant="outline"
                  className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
                  onMouseEnter={() => setIsHovered('learn-more')}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <motion.span
                    animate={{ scale: isHovered === 'learn-more' ? 1.05 : 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    LEARN MORE
                  </motion.span>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-4xl md:text-6xl font-black mb-8"
            variants={itemVariants}
          >
            Real-World Penetration Testing with Full Transparency
          </motion.h2>

          <motion.div variants={itemVariants}>
            <Button
              className="bg-white hover:bg-gray-100 text-orange-600 px-12 py-4 text-xl font-bold rounded-full shadow-2xl hover:shadow-white/25 transition-all duration-300"
              onMouseEnter={() => setIsHovered('cta2')}
              onMouseLeave={() => setIsHovered(null)}
            >
              <motion.span
                animate={{ scale: isHovered === 'cta2' ? 1.05 : 1 }}
                transition={{ duration: 0.2 }}
              >
                BOOK A DISCOVERY CALL
              </motion.span>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, orange 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
    </div>
  );
};

export default OffensiveSecurity;