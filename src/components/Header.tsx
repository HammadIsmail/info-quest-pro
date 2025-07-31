"use client";

import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.95)"]
  );
  const backdropBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(20px)"]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { 
      name: "Services", 
      href: "#services",
      dropdown: [
        { name: "Enterprise Solutions", href: "#enterprise" },
        { name: "Cloud Services", href: "#cloud" },
        { name: "Security Solutions", href: "#security" },
        { name: "Network Infrastructure", href: "#network" }
      ]
    },
    { 
      name: "Solutions", 
      href: "#solutions",
      dropdown: [
        { name: "Digital Transformation", href: "#digital" },
        { name: "Analytics & AI", href: "#analytics" },
        { name: "Collaboration Tools", href: "#collaboration" },
        { name: "IoT Solutions", href: "#iot" }
      ]
    },
    { name: "About", href: "#about" },
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
        className={`fixed top-2 mx-4  rounded-2xl left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "mt-0" : "mt-10"
        }`}
        style={{
          backgroundColor,
          backdropFilter: backdropBlur,
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <motion.div
              className="flex items-center space-x-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="flex items-center space-x-2">
                <motion.div
                  className="w-10 h-10 bg-gradient-to-br rounded-2xl from-orange-500 to-red-500  flex items-center justify-center"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-white font-bold  text-lg">IQ</span>
                </motion.div>
                <div>
                  <h1 className="text-xl font-bold text-white">InfoQuestPro</h1>
                  <p className="text-xs text-white hidden sm:block">Enterprise Solutions</p>
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <motion.a
                    href={item.href}
                    className="flex items-center space-x-1 text-white hover:text-white transition-colors duration-200 font-medium"
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <span>{item.name}</span>
                    {item.dropdown && (
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`} 
                      />
                    )}
                  </motion.a>

                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <motion.div
                      className={`absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-xl rounded-xl shadow-2xl border border-gray-800 overflow-hidden ${
                        activeDropdown === item.name ? "block" : "hidden"
                      }`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ 
                        opacity: activeDropdown === item.name ? 1 : 0,
                        y: activeDropdown === item.name ? 0 : -10
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <motion.a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-orange-500/20 transition-all duration-200"
                          whileHover={{ x: 5 }}
                        >
                          {dropdownItem.name}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Partner Logos & CTA */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* Partner Logos */}
            

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Started
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`lg:hidden bg-black/95 backdrop-blur-xl border-t border-gray-800 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? "auto" : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                className="py-2"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <a
                  href={item.href}
                  className="block text-gray-300 hover:text-white transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
                {item.dropdown && (
                  <div className="ml-4 mt-2 space-y-2">
                    {item.dropdown.map((dropdownItem) => (
                      <a
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block text-sm text-gray-400 hover:text-white transition-colors duration-200 py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {dropdownItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
            
            {/* Mobile CTA */}
            <motion.div
              className="mt-6 pt-4 border-t border-gray-800"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-3 rounded-full font-semibold">
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