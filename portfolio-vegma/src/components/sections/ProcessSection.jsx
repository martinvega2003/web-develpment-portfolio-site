import React from "react";
import { motion } from "framer-motion";
import { FaHandshake, FaPencilAlt, FaDesktop, FaCheckCircle, FaRocket, FaWrench } from "react-icons/fa";

const ProcessSection = () => {
  const steps = [
    {
      step: "Initial Consultation",
      day: "Day 1",
      icon: <FaHandshake size={40} />,
      description: "We’ll meet to discuss your vision and gather all the information we need.",
    },
    {
      step: "Design & Planning",
      day: "Day 2-3",
      icon: <FaPencilAlt size={40} />,
      description: "We’ll create a custom design tailored to your business needs, and get your approval.",
    },
    {
      step: "Development & Setup",
      day: "Day 4-6",
      icon: <FaDesktop size={40} />,
      description: "We’ll build your website, ensuring it’s fully responsive and optimized for all devices.",
    },
    {
      step: "Review & Revisions",
      day: "Day 7",
      icon: <FaCheckCircle size={40} />,
      description: "You’ll review the website and request any revisions. We’ll fine-tune it to perfection.",
    },
    {
      step: "Launch & Handover",
      day: "Day 7",
      icon: <FaRocket size={40} />,
      description: "Your website goes live! We’ll ensure everything is running smoothly and provide you with access.",
    },
    {
      step: "Ongoing Support",
      day: false,
      icon: <FaWrench size={40} />,
      description: "We offer ongoing support and maintenance to keep your site fresh and secure.",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-semibold text-purple-500 text-center">Our Website Building Process</h2>
        <p className="text-lg text-gray-700 mt-4 text-center">
          A simple and efficient process to deliver your website in just 7 days.
        </p>

        {/* Timeline & Cards */}
        <div className="mt-12 relative">
          {/* Timeline */}
          <div className="flex flex-col items-center">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                className="flex w-full items-center mb-12"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.5 }} // Trigger when 50% of the element is visible
                transition={{ duration: 0.4, delay: index * 0.1 }} // Faster duration and minimal delay
              >
                {/* Circle and Line */}
                <div className="flex flex-col items-center">
                  {/* Circle */}
                  {item.day ? (
                    <div className="w-16 h-16 bg-purple-500 text-white font-bold flex items-center justify-center rounded-full shadow-md border border-white mb-6">
                      {item.day}
                    </div>
                  ) : (
                    <div className="w-16 h-16"></div>
                  )}
                  {/* Timeline Line */}
                  {index < steps.length - 1 && (
                    <div className="h-16 w-1 bg-gradient-to-b from-purple-500 to-pink-500"></div>
                  )}
                </div>

                {/* Card */}
                <div className="ml-8 flex-grow bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg shadow-lg cursor-pointer">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-semibold">{item.step}</h3>
                  <p className="text-lg mt-2">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;

