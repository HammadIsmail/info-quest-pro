"use client";

import { useState } from "react";
import { ShieldCheck, BarChart3, Cloud, Info, Settings, Users, ShoppingCart, Building, UserCheck, Calendar, Shield, AlertTriangle, Database, Network, Eye, Activity, Brain, Phone, Zap, TrendingUp, MessageSquare, Cog } from "lucide-react";

const services = [
  {
    title: "Analytics & Intelligence",
    icon: <BarChart3 className="h-8 w-8 text-white" />,
    description: "Transform raw data into actionable insights with our advanced analytics platform.",
    features: ["Real-time Dashboards", "Predictive Analytics", "Custom Reports"],
    backContent: "We use AI to turn complex data into real-time insights. Ideal for growth-focused enterprises.",
  },
  {
    title: "Cloud Solutions",
    icon: <Cloud className="h-8 w-8 text-white" />,
    description: "Scalable cloud infrastructure powered by enterprise-grade Cisco technology.",
    features: ["Cloud Migration", "Auto-scaling", "99.9% Uptime"],
    backContent: "Migrate to cloud with zero downtime. Our secure and scalable cloud supports your growth.",
  },
  {
    title: "Cybersecurity",
    icon: <ShieldCheck className="h-8 w-8 text-white" />,
    description: "Comprehensive security solutions to protect your digital assets and data.",
    features: ["Threat Detection", "Security Audits", "Compliance Management"],
    backContent: "Stay ahead of evolving cyber threats with 24/7 monitoring and threat intelligence.",
  },
];

const softwareSolutions = [
  {
    title: "WORKFLOW AUTOMATION",
    icon: <Settings className="h-8 w-8 text-white" />,
    description: "Streamline repetitive processes, reduce manual effort, and boost efficiency with automation tools that connect your apps, trigger actions, and keep your business running 24/7.",
  },
  {
    title: "ERP SOFTWARE",
    icon: <Building className="h-8 w-8 text-white" />,
    description: "Robust, scalable software solutions designed to support and optimize critical operations across departments—custom-built to fit your company's unique structure and goals.",
  },
  {
    title: "POS POINT-OF-SALE",
    icon: <ShoppingCart className="h-8 w-8 text-white" />,
    description: "Simplify sales, inventory, and payment processing for retail and restaurants.",
  },
  {
    title: "HR & PAYROLL",
    icon: <Users className="h-8 w-8 text-white" />,
    description: "Streamline employee records, payroll, and compliance with cloud-based automation.",
  },
  {
    title: "CRM",
    icon: <UserCheck className="h-8 w-8 text-white" />,
    description: "Centralize customer data, automate follow-ups, and manage sales and support all in one place.",
  },
  {
    title: "PROJECT MANAGEMENT",
    icon: <Calendar className="h-8 w-8 text-white" />,
    description: "Track projects, tasks, and team performance with intuitive dashboards.",
  },
];

const cybersecurityServices = [
  {
    title: "Red Teaming",
    icon: <AlertTriangle className="h-8 w-8 text-white" />,
    description: "Simulate real-world attacks to uncover and fix hidden security gaps.",
    color: "from-red-500 to-pink-500",
  },
  {
    title: "Compliance",
    icon: <Shield className="h-8 w-8 text-white" />,
    description: "Stay protected and audit-ready with our hassle-free compliance solutions.",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Data Security",
    icon: <Database className="h-8 w-8 text-white" />,
    description: "Keep your sensitive data safe and secure with our data protection solutions.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Vulnerability Management",
    icon: <Shield className="h-8 w-8 text-white" />,
    description: "Identify, prioritize, and fix security weaknesses before they become a risk.",
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Endpoint Security",
    icon: <Network className="h-8 w-8 text-white" />,
    description: "Protect every device in your business with advanced endpoint security.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Network Security",
    icon: <Network className="h-8 w-8 text-white" />,
    description: "Protect your business from online threats with robust network security solutions.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Identity & Access Management",
    icon: <UserCheck className="h-8 w-8 text-white" />,
    description: "Control who can access your systems and data with secure identity and access management.",
    color: "from-purple-500 to-violet-500",
  },
  {
    title: "Managed Detection & Response",
    icon: <Eye className="h-8 w-8 text-white" />,
    description: "24/7 threat monitoring and rapid response to keep your business secure.",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Monitoring & Threat Response",
    icon: <Activity className="h-8 w-8 text-white" />,
    description: "Detect and respond to threats in real time with continuous security monitoring.",
    color: "from-rose-500 to-red-500",
  },
];

const aiSolutions = [
  {
    title: "AI Agents",
    icon: <Brain className="h-8 w-8 text-white" />,
    description: "Empower your business with intelligent, AI assistant.",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "AI Receptionist",
    icon: <Phone className="h-8 w-8 text-white" />,
    description: "Take multiple calls at once in multiple languages. Can be fully integrated with your existing apps.",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "AI Integrations",
    icon: <Zap className="h-8 w-8 text-white" />,
    description: "Seamlessly embed AI into your existing tools and workflows.",
    color: "from-rose-500 to-orange-500",
  },
  {
    title: "AI Insights",
    icon: <TrendingUp className="h-8 w-8 text-white" />,
    description: "Extract trends and predictions from your business data for smarter decisions.",
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Call Analytics",
    icon: <MessageSquare className="h-8 w-8 text-white" />,
    description: "Monitor and analyze call data to improve customer interactions and sales performance.",
    color: "from-amber-500 to-yellow-500",
  },
  {
    title: "Automation",
    icon: <Cog className="h-8 w-8 text-white" />,
    description: "Connect your apps, trigger actions, and reduce manual work with smart workflow automation.",
    color: "from-yellow-500 to-lime-500",
  },
];

interface ServiceCardProps {
  service: {
    title: string;
    icon: React.ReactNode;
    description: string;
    features?: string[];
    backContent?: string;
    color?: string;
  };
  showFeatures?: boolean;
  cardId: string;
}

function ServiceCard({ service, showFeatures = false, cardId }: ServiceCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
console.log(cardId)
  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="relative group h-[360px] w-full cursor-pointer"
      style={{ perspective: '1000px' }}
      onClick={handleCardClick}
    >
      <div 
        className={`relative w-full h-full transition-transform duration-700 md:group-hover:[transform:rotateY(180deg)] ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front Side */}
        <div 
          className="absolute inset-0 z-10 bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-between"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div>
            <div className={`bg-gradient-to-br ${service.color || 'from-orange-500 to-red-500'} p-4 rounded-2xl inline-block mb-4`}>
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{service.description}</p>
            {showFeatures && service.features && (
              <ul className="text-left text-sm space-y-1 text-gray-700">
                {service.features.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-orange-500">✔</span> {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <p className="text-xs text-orange-500 mt-4 text-right">
            <span className="hidden md:inline">Hover to learn more →</span>
            <span className="md:hidden">Tap to learn more →</span>
          </p>
        </div>

        {/* Back Side */}
        <div 
          className="absolute inset-0 z-20 bg-gradient-to-br from-orange-100 to-white rounded-2xl shadow-xl p-6 text-center flex flex-col justify-center items-center space-y-4"
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <div className={`bg-gradient-to-br ${service.color || 'from-orange-500 to-red-500'} p-3 rounded-full inline-block`}>
            <Info className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">More Info</h3>
          <p className="text-gray-700 text-sm px-2">{service.backContent || service.description}</p>
          <button 
            className="mt-4 inline-flex items-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm rounded-full transition duration-300"
            onClick={(e) => {
              e.stopPropagation();
              // Handle learn more action here
              console.log('Learn more clicked for:', service.title);
            }}
          >
            Learn More
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ComprehensiveServicesSection() {
  return (
    <div className="bg-gradient-to-b from-white to-orange-50">
      {/* Main Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Solutions</h2>
          <p className="text-gray-600 mb-12">Discover how we help businesses scale with cutting-edge technology and expert guidance.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                service={service} 
                showFeatures={true} 
                cardId={`main-service-${index}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Software Solutions Section */}
      <section className="py-16 bg-gradient-to-b from-orange-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Software Solutions</h2>
          <p className="text-gray-600 mb-12">Comprehensive software solutions to streamline your business operations.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareSolutions.map((service, index) => (
              <ServiceCard 
                key={index} 
                service={service} 
                cardId={`software-${index}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Cybersecurity Services Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Cybersecurity Services</h2>
          <p className="text-gray-600 mb-12">Comprehensive security solutions to protect your business from evolving threats.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cybersecurityServices.map((service, index) => (
              <ServiceCard 
                key={index} 
                service={service} 
                cardId={`cyber-${index}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* AI Solutions Section */}
      <section className="py-16 bg-gradient-to-b from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Solutions</h2>
          <p className="text-gray-600 mb-12">Intelligent AI solutions to automate and enhance your business processes.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiSolutions.map((service, index) => (
              <ServiceCard 
                key={index} 
                service={service} 
                cardId={`ai-${index}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}