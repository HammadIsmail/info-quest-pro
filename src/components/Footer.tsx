'use client';

import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook } from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [inView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.7, 
        ease: "easeOut" as const
      } 
    },
  };

  return (
    <motion.footer
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="bg-gray-900 text-white border-t border-border"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white bg-gradient-to-b px-3 py-2 rounded-2xl from-orange-500 to-red-500 font-bold text-xl">IQ</span>
              </div>
              <span className="text-xl font-bold text-foreground">InfoQuestPro</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Leading technology solutions provider specializing in analytics, 
              cloud infrastructure, and digital transformation. Proud Cisco partner 
              delivering enterprise-grade solutions worldwide.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>hello@infoquestpro.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>San Francisco, CA 94102</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Company</h3>
            <ul className="space-y-4">
              {["About Us", "Our Services", "Case Studies", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-foreground">Resources</h3>
            <ul className="space-y-4">
              {["Documentation", "API Reference", "Support Center", "Community", "Blog"].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-muted-foreground">
                © {currentYear} InfoQuestPro. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start space-x-6 mt-2">
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  License Agreement
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground mr-4">Follow us:</span>
              {[ 
                { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
                { icon: <Twitter className="w-5 h-5" />, label: "Twitter" },
                { icon: <Facebook className="w-5 h-5" />, label: "Facebook" }
              ].map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </Button>
              ))}
            </div>
          </div>

         
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;