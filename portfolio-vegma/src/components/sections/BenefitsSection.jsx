import React from "react";
import {
  FaRegCheckCircle,
  FaLock,
  FaDollarSign,
  FaRocket,
  FaSearch,
  FaCog,
} from "react-icons/fa";

const BenefitsSection = () => {
  return (
    <div className="py-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Here's How I Can Help You
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          My mission is to provide you with a high-quality, fully customizable
          website that empowers your business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg shadow-sm transition duration-300 transform cursor-pointer group
              hover:scale-105 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500"
            >
              <div
                className="mb-4 flex justify-center text-purple-500 
                group-hover:text-white transition-colors duration-300"
              >
                {benefit.icon}
              </div>
              <h3
                className="text-xl font-semibold text-purple-500 mb-4 
                group-hover:text-white transition-colors duration-300"
              >
                {benefit.title}
              </h3>
              <p
                className="text-gray-600 group-hover:text-white 
                transition-colors duration-300"
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const benefits = [
  {
    title: "Full Ownership",
    description:
      "You get complete control over your website—no more dependency on external platforms like WordPress or Figma.",
    icon: <FaLock size={40} />,
  },
  {
    title: "Lower Maintenance Costs",
    description:
      "With a custom-coded site, say goodbye to recurring fees and costly updates.",
    icon: <FaDollarSign size={40} />,
  },
  {
    title: "Highly Customizable",
    description:
      "Tailored to fit your business needs and branding, making your website unique and impactful.",
    icon: <FaCog size={40} />,
  },
  {
    title: "Faster Performance",
    description:
      "Optimized for speed to keep your visitors engaged and improve your conversions.",
    icon: <FaRocket size={40} />,
  },
  {
    title: "SEO Friendly",
    description:
      "Built with search engines in mind, helping your business rank higher and reach more customers.",
    icon: <FaSearch size={40} />,
  },
  {
    title: "Affordable Pricing",
    description:
      "Get all these benefits starting at just $97 with no upfront payment required!",
    icon: <FaRegCheckCircle size={40} />,
  },
];

export default BenefitsSection;
