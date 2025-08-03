"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Factory, LineChart, Package, Users, CreditCard, RefreshCw, CalendarCheck } from "lucide-react";

const EnterpriseSoftware = () => {
  const features = [
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Industry Specific ERP Modules",
      description: "Tailored solutions for your sector—whether it's manufacturing, retail, construction, or services. Get features designed to meet your industry's unique regulatory and operational needs."
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Finance & Accounting",
      description: "Gain real-time financial visibility with automated invoicing, budgeting, tax compliance, and reporting tools—all fully integrated to simplify your financial workflows."
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: "Migration from Legacy Systems",
      description: "Seamlessly transition from outdated software to a modern ERP system without disrupting business operations. Our team ensures secure data transfer, minimal downtime, and full process continuity."
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Inventory & Supply Chain Management",
      description: "Track inventory levels, manage procurement, and optimize your entire supply chain from end to end. Improve accuracy, reduce waste, and ensure timely delivery."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "HR & Payroll Automation",
      description: "Automate employee onboarding, attendance, payroll, and compliance. Streamline your HR processes and reduce manual workload with full transparency and control."
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: "Integrated Dashboards",
      description: "Access all your business KPIs in one place. Customizable, real-time dashboards give you actionable insights for faster, data-driven decisions across all departments."
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Manufacturing & Production Planning",
      description: "Manage Bill of Materials (BOM), work orders, machine scheduling, and shop floor control to streamline production workflows and reduce downtime."
    },
    {
      icon: <CalendarCheck className="w-8 h-8" />,
      title: "Project Management",
      description: "Plan, schedule, and track projects with built-in Gantt charts, task assignments, budgets, and time tracking. Ensure on-time and on-budget delivery."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Scale your business with our Enterprise Software
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Custom-built tools that streamline your operations, save time, and support growth—across any industry.
            </p>
            <Button
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold rounded-full shadow-lg transition-all duration-300"
              size="lg"
            >
              BOOK A DEMO
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              OUR ERP SOLUTION OFFERS
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.slice(0, 6).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-gray-50 p-8 rounded-xl border border-gray-200 hover:border-orange-200 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-4 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {features.slice(6).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mt-1 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business Operations?
            </h2>
            <p className="text-xl mb-8">
              Our enterprise software solutions are designed to grow with your business.
            </p>
            <Button
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold rounded-full shadow-lg transition-all duration-300"
              size="lg"
            >
              BOOK A CONSULTATION
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EnterpriseSoftware;