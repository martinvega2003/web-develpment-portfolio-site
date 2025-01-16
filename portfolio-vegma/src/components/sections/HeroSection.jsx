import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.div
      className="h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center px-6"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="text-center max-w-3xl relative">
        {/* Decorative Line and Circles */}
        <motion.div
          className="absolute left-0 right-0 top-0 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="w-16 h-16 bg-white rounded-full absolute -left-8"></div>
          <div className="w-16 h-16 bg-white rounded-full absolute -right-8"></div>
          <div className="h-[2px] w-full bg-white"></div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-6xl font-extrabold text-white leading-tight mt-8 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Modern Websites Built Just for You
        </motion.h1>

        <motion.p
          className="mt-4 text-lg md:text-xl text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          A stunning, fully owned website for your business in just 7 days. 
          No hidden fees, no strings attached—pay only when satisfied.
        </motion.p>

        <motion.p
          className="mt-6 text-white text-opacity-80"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          At just <span className="font-bold">$97</span>.
        </motion.p>

        {/* Animated Button with Hover Effect */}
        <motion.button
          className="mt-8 px-6 py-3 text-lg font-semibold text-purple-500 bg-white rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1, brightness: 1.2 }}
          transition={{ duration: 0.3 }}
        >
          <Link to="form/">Get Started Today</Link>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default HeroSection;

