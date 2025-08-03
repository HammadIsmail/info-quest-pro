"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const { scrollY } = useScroll();
  const backgroundColor = useTransform(scrollY, [0, 100], ["rgba(0, 0, 0, 0)", "rgb(54,65,83)"]);
  const backdropBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(20px)"]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (itemName: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const navItems = [
    { name: "Home", href: "#home" },
    {
      name: "Cyber Security",
      dropdown: [
        { name: "Offensive Security", href: "/cyber/offensive-security" },
        { name: "Network Security", href: "/cyber/network-security" },
        { name: "Endpoint Security", href: "/cyber/endpoint-security" },
        { name: "Data Security", href: "/cyber/data-security" },
        { name: "Vulnerability Management", href: "/cyber/vulnerability-management" },
        { name: "Security Compliance Management", href: "/cyber/security-compliance-management" },
        { name: "Identity & Access Management", href: "/cyber/identity-access-management" },
        { name: "Secure Monitoring & Management", href: "/cyber/security-monitoring-and-mangement" },
        { name: "Managed Detection & Response", href: "/cyber/managed-detection-and-response" }
      ]
    },
    {
      name: "Software Solutions",
      dropdown: [
        { name: "Automation Tools", href: "/software/automation-tools" },
        { name: "ERP Software", href: "/software/enterprise-software" },
      ]
    },
    {
      name: "AI Solutions",
      dropdown: [
        { name: "AI Agents", href: "/ai/ai-agents" },
      ]
    },
    { name: "Development Program", href: "#development-program" },
    { name: "Contact", href: "#contact" },
    { name: "Partners", href: "#partners" },
  ];

  return (
    <>
      {/* Cisco Partner Banner */}
      <motion.div
        className="bg-gray-700 text-white py-2 px-4 text-center text-sm font-medium"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="container mx-auto flex items-center justify-center space-x-2">
          <motion.div
            className="flex items-center space-x-2"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image src="/cisco.png" alt="Cisco Logo" width={40} height={40} />
            <span>Proud Cisco Partner</span>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Navbar */}
      <motion.nav
        className={`fixed top-2 mx-4 rounded-2xl left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "mt-0" : "mt-10"}`}
        style={{ backgroundColor, backdropFilter: backdropBlur }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <motion.div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <motion.div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <Image src="/logo.png" alt="Logo" width={80} height={80} className="rounded-full" />
                </motion.div>
                <div>
                  <h1 className={`text-xl font-bold ${isScrolled ? "text-white" : "text-gray-800"}`}>InfoQuestPro</h1>
                  <p className={`text-xs font-extrabold hidden sm:block ${isScrolled ? "text-white" : "text-gray-800"}`}>
                    Enterprise Solutions
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative" onMouseEnter={() => handleMouseEnter(item.name)} onMouseLeave={handleMouseLeave}>
                  <Link href={item.href || "#"} className={`flex items-center space-x-1 hover:text-white font-medium ${isScrolled ? "text-white" : "text-gray-800"}`}>
                    <span>{item.name}</span>
                    {item.dropdown && (
                      <ChevronDown className={`w-4 h-4 ${activeDropdown === item.name ? "rotate-180" : ""}`} />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <motion.div
                      className={`absolute top-full left-0 pt-2 w-64 ${activeDropdown === item.name ? "block" : "hidden"}`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: activeDropdown === item.name ? 1 : 0, y: activeDropdown === item.name ? 0 : -10 }}
                      transition={{ duration: 0.2 }}
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="bg-gray-700 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-800 overflow-hidden">
                        {item.dropdown.map((dropdownItem, index) => (
                          <Link href={dropdownItem.href} key={dropdownItem.name}>
                            <motion.div
                              className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-orange-500/20 transition-all duration-200 border-b border-gray-800/50 last:border-b-0"
                              whileHover={{ x: 5 }}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              {dropdownItem.name}
                            </motion.div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="hidden lg:flex items-center space-x-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Started
                </Button>
              </motion.div>
            </div>

            <motion.button
              className={`lg:hidden p-2 ${isScrolled ? "text-white" : "text-gray-800"}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`lg:hidden bg-gray-700 backdrop-blur-xl border-t border-gray-800 ${isMobileMenuOpen ? "block" : "hidden"}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isMobileMenuOpen ? 1 : 0, height: isMobileMenuOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <motion.div key={item.name} className="py-2" initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3 }}>
                <Link href={item.href || "#"} onClick={() => setIsMobileMenuOpen(false)} className="block text-gray-300 hover:text-white font-medium py-2">
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block text-sm text-gray-400 hover:text-white transition-colors duration-200 py-1"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
            <motion.div className="mt-6 pt-4 border-t border-gray-800" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.2 }}>
              <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-full font-semibold">
                Get Started
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Header;
