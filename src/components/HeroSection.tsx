"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const titleInView = useInView(titleRef, { once: true, amount: 0.3 });
  const subtitleInView = useInView(subtitleRef, { once: true, amount: 0.3 });
  const buttonsInView = useInView(buttonsRef, { once: true, amount: 0.3 });

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99] as const,
        staggerChildren: 0.1
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as const
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
        staggerChildren: 0.05
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut" as const
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <motion.section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ opacity, scale }}
    >
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <Image
          src={heroImage}
          alt="Tech Background"
          className="w-full h-full object-cover"
          fill
          priority
        />
        <motion.div 
          className="absolute inset-0"
          style={{
background: "linear-gradient(135deg, rgba(255, 250, 245, 0.9) 0%, rgba(255, 232, 200, 0.6) 40%, rgba(254, 202, 140, 0.4) 70%, rgba(253, 186, 116, 0.3) 100%)"
          }}
          animate={{
            background: [
              "linear-gradient(135deg, rgba(255, 247, 237, 0.95) 0%, rgba(254, 215, 170, 0.85) 30%, rgba(251, 146, 60, 0.75) 70%, rgba(249, 115, 22, 0.8) 100%)",
              "linear-gradient(135deg, rgba(254, 243, 199, 0.9) 0%, rgba(253, 186, 116, 0.8) 30%, rgba(251, 113, 67, 0.7) 70%, rgba(234, 88, 12, 0.75) 100%)",
              "linear-gradient(135deg, rgba(255, 247, 237, 0.95) 0%, rgba(254, 215, 170, 0.85) 30%, rgba(251, 146, 60, 0.75) 70%, rgba(249, 115, 22, 0.8) 100%)"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut" as const
          }}
        />
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 right-10 w-20 h-20 rounded-full"
        style={{
          background: "linear-gradient(45deg, rgba(251, 146, 60, 0.2), rgba(249, 115, 22, 0.3))",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(251, 146, 60, 0.3)"
        }}
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-32 left-16 w-16 h-16 rounded-full"
        style={{
          background: "linear-gradient(45deg, rgba(234, 88, 12, 0.25), rgba(194, 65, 12, 0.35))",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(234, 88, 12, 0.4)"
        }}
        variants={pulseVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-1/3 left-10 w-12 h-12 rounded-full"
        style={{
          background: "linear-gradient(45deg, rgba(253, 186, 116, 0.3), rgba(251, 146, 60, 0.4))",
          backdropFilter: "blur(6px)",
          border: "1px solid rgba(253, 186, 116, 0.5)"
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut" as const
        }}
      />

      <motion.div
        className="relative z-10 container mx-auto px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.h1
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            variants={titleVariants}
            initial="hidden"
            animate={titleInView ? "visible" : "hidden"}
          >
            <motion.span 
              className="inline-block text-gray-700 dark:text-gray-800"
              variants={wordVariants}
            >
              Technology that
            </motion.span>{" "}
            <motion.span 
              className="inline-block bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent font-extrabold"
              variants={wordVariants}
              whileHover={{
                scale: 1.05,
                filter: "drop-shadow(0 0 20px rgba(251, 113, 67, 0.5))"
              }}
            >
              helps you
            </motion.span>
            <br />
            <motion.span 
              className="inline-block text-gray-700 dark:text-gray-800"
              variants={wordVariants}
            >
              shape
            </motion.span>{" "}
            <motion.span 
              className="relative inline-block"
              variants={wordVariants}
            >
              <motion.span 
                className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent font-extrabold"
                whileHover={{
                  scale: 1.05,
                  filter: "drop-shadow(0 0 20px rgba(251, 146, 60, 0.5))"
                }}
              >
                the future
              </motion.span>
              <motion.div
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 rounded-full"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" as const }}
              />
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            ref={subtitleRef}
            className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed"
            variants={subtitleVariants}
            initial="hidden"
            animate={subtitleInView ? "visible" : "hidden"}
          >
            <motion.span 
              className="inline-block"
              variants={wordVariants}
            >
              Your key to strategic success through
            </motion.span>{" "}
            <motion.span 
              className="inline-block font-bold text-red-700 "
              variants={wordVariants}
              whileHover={{ 
                scale: 1.05,
              }}
            >
              cutting-edge analytics,
            </motion.span>{" "}
            <motion.span 
              className="inline-block"
              variants={wordVariants}
            >
              enterprise solutions, and digital transformation
            </motion.span>{" "}
            <motion.span 
              className="inline-block font-extrabold bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent"
              variants={wordVariants}
            >
              powered by industry-leading partnerships.
            </motion.span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            ref={buttonsRef}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial="hidden"
            animate={buttonsInView ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            <motion.div variants={buttonVariants} whileHover="hover">
              <Button 
                size="lg"
                className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Get Started Today
                </motion.span>
                <motion.div
                  className="ml-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Button>
            </motion.div>
            
            <motion.div variants={buttonVariants} whileHover="hover" >
              <Button 
                size="lg"
                className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Play className="w-5 h-5" />
                </motion.span>
                <motion.div
                  className="ml-2"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Watch Demo
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{ scale: 1.2 }}
      >
        <div className="w-6 h-10 border-2 border-orange-600 rounded-full flex justify-center backdrop-blur-sm bg-white/20 shadow-lg">
          <motion.div
            className="w-1 h-3 bg-gradient-to-b from-orange-500 to-red-600 rounded-full mt-2"
            animate={{
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut" as const
            }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;