"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const AIAgents = () => {
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
              Empower Your Business with Intelligent AI Agents
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              From handling customer queries to managing tasks—our AI Agents automate it all, so you can focus on growth.
            </p>
            <Button
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold rounded-full shadow-lg transition-all duration-300"
              size="lg"
            >
              GET STARTED WITH AI AGENTS
            </Button>
          </motion.div>
        </div>
      </section>

      {/* What Are AI Agents Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Are AI Agents?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              AI Agents are intelligent digital assistants that think, act, and learn. They help businesses automate tasks like customer support, lead generation, appointment scheduling, and more—without human intervention.
            </p>
            <div className="border-t border-gray-200 my-8"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Use Cases Across Industries
            </h3>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-10 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Retail & E-commerce</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">•</span>
                  <span>Smart product recommendations</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">•</span>
                  <span>Automated order tracking</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Healthcare</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">•</span>
                  <span>AI appointment schedulers</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">•</span>
                  <span>Patient onboarding</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real Estate</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">•</span>
                  <span>AI chat for property listings</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">•</span>
                  <span>Instant tour scheduling</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Legal & Finance</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">•</span>
                  <span>AI assistants for documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">•</span>
                  <span>Smart lead qualification</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <Button
              className="bg-orange-500 hover:bg-orange-600 px-8 py-4 text-lg font-bold rounded-full shadow-lg transition-all duration-300"
              size="lg"
            >
              SCHEDULE A CALL
            </Button>
          </div>

          <div className="border-t border-gray-200 my-12"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
              Types of AI Agents We Build
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Types of AI Agents Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Customer Service</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">•</span>
                  <span>Respond instantly to inquiries, complaints, and requests.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sales Assistants</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">•</span>
                  <span>Qualify leads, suggest products, and close deals.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Task Bots</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">•</span>
                  <span>Automate bookings, send reminders, and manage repetitive workflows.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Custom Agents</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">•</span>
                  <span>Tailored to your exact business needs, workflows, and brand voice.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAgents;