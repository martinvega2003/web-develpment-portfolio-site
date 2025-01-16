import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MyServiceSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.div
      id="service"
      className="py-16 text-white bg-gradient-to-r from-purple-500 to-pink-500 text-center relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      {/* Decorative Elements Behind the Content */}
      {/* 1. First Decorative Line with Circle and Triangle */}
      <motion.div
        className="absolute top-[20%] left-[10%] transform -translate-x-1/2 flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="relative w-48 h-[2px] bg-white">
          <div className="absolute left-0 top-0 transform -translate-x-1/2 translate-y-[-50%] w-12 h-12 rounded-full bg-white border-4 border-purple-500"></div>
          <div className="absolute right-0 top-0 transform translate-x-1/2 translate-y-[-50%] w-8 h-8 rounded-full bg-white border-4 border-pink-500"></div>
        </div>
        <div className="absolute top-0 right-0 transform translate-x-1/2 translate-y-[-50%] w-6 h-6 bg-white rotate-45"></div>
      </motion.div>

      {/* 2. Large Diagonal Line with Gradient Circles */}
      <motion.div
        className="absolute top-[40%] left-[60%] transform -translate-x-1/2 flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="relative w-72 h-[2px] bg-white rotate-45">
          <div className="absolute left-0 top-0 transform -translate-x-1/2 translate-y-[-50%] w-14 h-14 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 border-4 border-white"></div>
          <div className="absolute right-0 top-0 transform translate-x-1/2 translate-y-[-50%] w-10 h-10 rounded-full bg-gradient-to-r from-purple-300 to-pink-300 border-4 border-white"></div>
        </div>
      </motion.div>

      {/* 3. Vertical Line with Small Pink Circle and Square */}
      <motion.div
        className="absolute top-[50%] left-[8%] transform -translate-x-1/2 flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="relative w-[2px] h-48 bg-white">
          <div className="absolute top-0 left-0 transform -translate-x-1/2 translate-y-[-50%] w-8 h-8 rounded-full bg-pink-300"></div>
          <div className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-[50%] w-10 h-10 bg-white rotate-45"></div>
        </div>
      </motion.div>

      {/* 4. Horizontal Line with Long Gradient Strip and Triangles */}
      <motion.div
        className="absolute top-[75%] left-[30%] transform -translate-x-1/2 flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="relative w-96 h-[2px] bg-gradient-to-r from-purple-500 to-pink-500">
          <div className="absolute left-0 top-0 transform -translate-x-1/2 translate-y-[-50%] w-12 h-12 rounded-full bg-white border-4 border-pink-300"></div>
          <div className="absolute right-0 top-0 transform translate-x-1/2 translate-y-[-50%] w-12 h-12 rounded-full bg-white border-4 border-purple-300"></div>
        </div>
      </motion.div>

      {/* 5. Large Triangle with Outline and Circle */}
      <motion.div
        className="absolute top-[10%] right-[40%] transform translate-x-1/2 flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <div className="relative w-[2px] h-72 bg-white">
          <div className="absolute top-0 left-0 transform translate-x-1/2 translate-y-[-50%] w-16 h-16 bg-white rotate-45 border-4 border-purple-500"></div>
          <div className="absolute bottom-0 left-0 transform translate-x-1/2 translate-y-[50%] w-8 h-8 rounded-full bg-white border-4 border-pink-500"></div>
        </div>
      </motion.div>

      {/* 6. Large Vertical Line with Two Small Circles and a Rectangle */}
      <motion.div
        className="absolute bottom-[20%] left-[70%] transform translate-x-1/2 flex justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 3 }}
      >
        <div className="relative w-[2px] h-60 bg-gradient-to-b from-purple-400 to-pink-400">
          <div className="absolute top-0 left-0 transform -translate-x-1/2 translate-y-[-50%] w-8 h-8 rounded-full bg-white"></div>
          <div className="absolute bottom-0 left-0 transform translate-x-1/2 translate-y-[50%] w-12 h-12 bg-white rotate-45"></div>
        </div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="max-w-3xl mx-auto px-6 relative z-10"
        variants={sectionVariants}
      >
        <h2 className="text-4xl font-bold mb-6">My Service</h2>
        <p
          className="text-lg leading-relaxed mx-auto w-180 font-bold"
          style={{ maxWidth: "100%" }}
        >
          I specialize in crafting custom-coded websites tailored to meet the
          unique needs of your business. Unlike templates or pre-built
          solutions, every website I create is hard-coded, providing you with
          unparalleled customization options and full ownership—no hidden
          dependencies or licensing issues. Your website will be optimized for
          speed and SEO, ensuring a seamless user experience and greater
          visibility online. Once the website is ready, I’ll handle the setup
          to make it live and accessible to your audience. And after delivery,
          I’ll always be available to address bugs or technical issues,
          ensuring your site stays functional and stress-free. Elevate your
          business online with a solution that’s built just for you.
        </p>
        <motion.button
          className="mt-16 px-6 py-3 text-lg font-semibold text-white bg-purple-500 rounded-lg shadow-lg 
            transform hover:scale-110 hover:brightness-110 transition duration-200"
          whileHover={{ scale: 1.1 }}
        >
          <Link to="form/">Get Started Today</Link>
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default MyServiceSection;
