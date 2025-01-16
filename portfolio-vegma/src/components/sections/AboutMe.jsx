import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div id="about" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section with Name */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold text-purple-500">Hi, I'm Martin Vega</h1>
          <p className="text-lg mt-4 text-gray-700">A passionate web developer with a love for building modern, stunning websites.</p>
        </motion.div>

        {/* About Me Text Section */}
        <motion.div
          className="flex flex-col items-center md:flex-row md:justify-between mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="md:w-[55%] text-gray-700 text-lg leading-relaxed">
            <p>
              I'm a 21-year-old computer science student currently on a full paid scholarship at my university. I'm deeply passionate about creating modern and efficient websites that help businesses stand out online.
            </p>
            <p className="mt-6">
              I specialize in building fully custom websites for businesses, ensuring they are not only functional but also visually appealing. I believe in the power of great design and seamless user experiences.
            </p>
          </div>
          {/* Image or Avatar (Optional) */}
          <div className="md:w-[40%] flex justify-center mt-6 md:mt-0">
            <img
              src="https://via.placeholder.com/200"
              alt="Martin Vega"
              className="rounded-full border-4 border-purple-500"
            />
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h2 className="text-3xl font-semibold text-purple-500">Skills & Technologies</h2>
          <div className="flex flex-wrap justify-center mt-8 gap-8">
            {/* Skill Badges */}
            {[
              { name: "HTML", color: "bg-orange-500" },
              { name: "CSS", color: "bg-blue-500" },
              { name: "JavaScript", color: "bg-yellow-500" },
              { name: "React", color: "bg-blue-600" },
              { name: "PostgreSQL", color: "bg-green-600" },
              { name: "Node.js / Express", color: "bg-black" },
            ].map((skill, index) => (
              <motion.div
                key={index}
                className={`px-6 py-3 text-white rounded-lg ${skill.color} text-xl font-medium`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
              >
                {skill.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
