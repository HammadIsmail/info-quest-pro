'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, Network, Eye, Globe, CheckCircle, Plus, Minus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import Image from 'next/image'

const NetworkSecurity = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const services = [
    {
      icon: Shield,
      title: "Firewall Management & Configuration",
      description: "Deploy and manage next-generation firewalls to block malicious traffic, enforce policies, and monitor traffic in real time."
    },
    {
      icon: Eye,
      title: "Intrusion Detection & Prevention Systems (IDS/IPS)",
      description: "Identify and stop suspicious activity before it causes damage — with deep packet inspection and signature-based threat blocking."
    },
    {
      icon: Lock,
      title: "Secure Remote Access (VPN / ZTNA)",
      description: "Enable employees and third parties to connect securely to your network using encrypted tunnels or zero-trust access."
    },
    {
      icon: Network,
      title: "Network Segmentation & Microsegmentation",
      description: "Minimize attack surface and limit lateral movement by isolating sensitive systems and users."
    },
    {
      icon: Globe,
      title: "Network Traffic Analysis & Anomaly Detection",
      description: "Leverage behavioral analytics and AI-driven monitoring to detect policy violations, insider threats, and covert attacks."
    }
  ]

  const reasons = [
    {
      title: "Prevent Unauthorized Access",
      description: "Block malicious actors, unauthorized users, and rogue devices from accessing your systems."
    },
    {
      title: "Protect Sensitive Data",
      description: "Secure customer information, financial records, intellectual property, and confidential communications."
    },
    {
      title: "Ensure Business Continuity",
      description: "Avoid costly disruptions caused by DDoS attacks, malware outbreaks, and lateral movement across networks."
    },
    {
      title: "Support Compliance Requirements",
      description: "Meet the security expectations of frameworks like ISO 27001, GDPR, HIPAA, and PCI DSS."
    },
    {
      title: "Enable Safe Remote Work",
      description: "Secure connections for remote employees and third parties without sacrificing performance or usability."
    }
  ]

  const faqs = [
    {
      question: "What is network security, and why do I need it?",
      answer: "Network security refers to the strategies and technologies used to protect your data, systems, and users from cyber threats that travel across your network. Without it, your business is vulnerable to breaches, ransomware, downtime, and regulatory non-compliance."
    },
    {
      question: "What types of threats does your service protect against?",
      answer: "Our comprehensive network security services protect against malware, ransomware, phishing attacks, DDoS attacks, insider threats, unauthorized access attempts, data breaches, and advanced persistent threats (APTs)."
    },
    {
      question: "Can you manage our firewalls and network security devices?",
      answer: "Yes, we provide complete management of your network security infrastructure including firewalls, IDS/IPS systems, VPN gateways, and other security appliances. Our team handles configuration, monitoring, maintenance, and updates."
    },
    {
      question: "Do you support remote and hybrid workforce security?",
      answer: "Absolutely. We implement secure remote access solutions including VPNs, zero-trust network access (ZTNA), and endpoint protection to ensure your remote workforce can work safely and productively from anywhere."
    },
    {
      question: "How do you ensure compliance with security standards?",
      answer: "We design our security solutions to meet various compliance requirements including ISO 27001, GDPR, HIPAA, PCI DSS, and SOX. We provide documentation, audit support, and regular compliance assessments."
    },
    {
      question: "Can we integrate your services with our existing infrastructure?",
      answer: "Yes. We design flexible solutions that integrate with your current network infrastructure, cloud platforms, and security tools to enhance — not replace — your existing investments."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Network Security Services
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Secure your digital perimeter and defend your business-critical infrastructure.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold rounded-full shadow-lg"
              >
                REQUEST A FREE CONSULTATION
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <Image src="/images/cyber/network-security.png" width={700} height={700} alt='Network Security'/>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Secure Your Perimeter Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-orange-600">Secure Your Perimeter</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Our Network Security Services protect your organization against unauthorized access, data breaches, and 
              advanced persistent threats by securing every layer of your network — from firewalls and VPNs to intrusion 
              detection and segmentation strategies. We design, implement, and manage secure network architectures 
              tailored to your business.
            </p>
          </motion.div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">{`What's Included`}</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white border border-gray-200 hover:shadow-lg transition-shadow h-full">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-4">
                        <service.icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h4>
                      <p className="text-gray-600 text-sm">{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Network Security Matters */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Network Security Matters</h2>
            <p className="text-xl mb-8">
              Your network is the backbone of your business — and a prime target for attackers.
            </p>
            <p className="max-w-4xl mx-auto">
              In {`today's`} hyper-connected world, every device, application, and user on your network is a potential
              entry point for cyber threats. Without proper protection, your organization is vulnerable to data
              breaches, ransomware, insider threats, and costly downtime.
            </p>
          </motion.div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8">Key Reasons Network Security Is Critical:</h3>
            <div className="space-y-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-orange-200 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{reason.title}</h4>
                    <p className="text-orange-100">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold rounded-full shadow-lg">
              LEARN MORE
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Network Security FAQs</h2>
            <p className="text-lg text-gray-600">
              Here are some of the most common questions we receive about our network security services:
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Collapsible
                  open={openFaq === index}
                  onOpenChange={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-6 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                    <span className="text-left font-semibold text-gray-900">{faq.question}</span>
                    {openFaq === index ? (
                      <Minus className="w-5 h-5 text-orange-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-orange-600" />
                    )}
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-6 py-4 bg-gray-50 rounded-b-lg border-t border-gray-200">
                    <p className="text-gray-600">{faq.answer}</p>
                  </CollapsibleContent>
                </Collapsible>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Lock Down Your Network?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Get enterprise-grade protection for your network infrastructure with our comprehensive security solutions.
            </p>
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 px-8 py-4 text-lg font-bold rounded-full shadow-lg"
            >
              REQUEST A DEMO
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default NetworkSecurity