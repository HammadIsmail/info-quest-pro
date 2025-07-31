"use client";

import { ShieldCheck, BarChart3, Cloud, Info } from "lucide-react";

const services = [
  {
    title: "Analytics & Intelligence",
    icon: <BarChart3 className="h-8 w-8 text-white  " />,
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
    icon: <ShieldCheck className="h-8 w-8  text-white" />,
    description: "Comprehensive security solutions to protect your digital assets and data.",
    features: ["Threat Detection", "Security Audits", "Compliance Management"],
    backContent: "Stay ahead of evolving cyber threats with 24/7 monitoring and threat intelligence.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-orange-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Solutions</h2>
        <p className="text-gray-600 mb-12">Discover how we help businesses scale with cutting-edge technology and expert guidance.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="relative group perspective h-[360px] w-full">
              <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front Side */}
                <div className="absolute inset-0 z-10 bg-white rounded-2xl shadow-xl p-6 backface-hidden flex flex-col justify-between">
                  <div>
                    <div className="bg-gradient-to-br  from-orange-500 to-red-500 p-4 rounded-4xl inline-block mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                    <ul className="text-left text-sm space-y-1 text-gray-700">
                      {service.features.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-orange-500">✔</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs text-orange-500 mt-4 text-right">Hover to learn more →</p>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 z-20 bg-gradient-to-br from-orange-100 to-white rounded-2xl shadow-xl p-6 text-center rotate-y-180 backface-hidden flex flex-col justify-center items-center space-y-4">
                  <div className="bg-gradient-to-br from-orange-500 to-red-500 p-3 rounded-full inline-block">
                    <Info className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">More Info</h3>
                  <p className="text-gray-700 text-sm px-2">{service.backContent}</p>
                  <button className="mt-4 inline-flex items-center px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm rounded-full transition duration-300">
                    Learn More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
