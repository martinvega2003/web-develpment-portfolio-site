import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CarouselSection = () => {
  const projects = [
    {
      id: 1,
      title: "Project One",
      image: "https://via.placeholder.com/300",
      description:
        "This project showcases a seamless user experience designed for effective business solutions. It leverages modern technologies to address real-world challenges efficiently.",
      link: "/project-one",
    },
    {
      id: 2,
      title: "Project Two",
      image: "https://via.placeholder.com/300",
      description:
        "A comprehensive project aimed at enhancing online visibility and driving engagement through innovative features tailored to clients' needs.",
      link: "/project-two",
    },
    {
      id: 3,
      title: "Project Three",
      image: "https://via.placeholder.com/300",
      description:
        "An advanced solution for optimizing workflows and improving performance metrics, ensuring scalability and efficiency.",
      link: "/project-three",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="examples" className="h-screen bg-gradient-to-r from-purple-500 to-pink-500 flex flex-col items-center justify-center px-6">
      <h2 className="text-white text-4xl font-bold mb-8 text-center">
        Here are examples of my work in your industry...
      </h2>

      <div className="relative w-full max-w-5xl overflow-hidden">
        {/* Left Arrow */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:scale-110 transition-transform duration-200 z-20"
          onClick={handlePrev}
        >
          <FaArrowLeft />
        </button>

        {/* Cards Wrapper */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-full flex-shrink-0 flex flex-col items-center justify-center p-8 space-y-6"
            >
              {/* Project Title */}
              <h3 className="text-3xl font-bold text-white mb-4">
                {project.title}
              </h3>

              {/* Content Container */}
              <div className="flex flex-col items-center max-w-md">
                <div className="flex items-center gap-6">
                  {/* Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-md max-h-48 object-cover"
                  />
                  {/* Description */}
                  <p className="text-black text-lg leading-relaxed text-left">
                    {project.description}
                  </p>
                </div>
                {/* Link */}
                <Link
                  to={project.link}
                  className="text-white font-bold relative inline-block mt-4 transition-transform hover:scale-105"
                >
                  See more of this project
                  <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 hover:w-full hover:left-0"></span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:scale-110 transition-transform duration-200 z-20"
          onClick={handleNext}
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
};

export default CarouselSection;
