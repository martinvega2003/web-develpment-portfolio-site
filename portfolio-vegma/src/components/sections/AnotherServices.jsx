import React from "react";
import { Link } from "react-router-dom";

const AnotherServices = () => {
  const services = [
    {
      title: "Ongoing Maintenance & Updates",
      price: "$47/month",
      url: "/services/maintenance",
      description:
        "Get regular updates, security patches, and ongoing support. Includes hosting and domain management.",
      details:
        "Perfect for business owners who want their website to stay fresh, secure, and always up to date.",
    },
    {
      title: "Blogging Services + SEO Optimization",
      price: "$247/month",
      url: "/services/blogging",
      description:
        "3 SEO-optimized blog posts per week to boost your online presence, plus ongoing maintenance.",
      details:
        "Ideal for businesses looking to increase website traffic and improve search engine rankings with quality content.",
    },
    {
      title: "SEO Optimization + Blogging + Maintenance",
      price: "$497/month",
      url: "/services/seo",
      description:
        "Complete SEO services including GMB, citations, and reviews, plus blog posts and ongoing maintenance.",
      details:
        "For businesses looking for an all-in-one solution to dominate search rankings and keep their content up to date.",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-semibold text-purple-500">Another Services</h2>
        <p className="text-lg text-gray-700 mt-4">
          Check out our premium services designed to help your business grow
          even more!
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="card bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-xl rounded-lg overflow-hidden transform transition duration-300 ease-in-out cursor-pointer hover:translate-y-[-8px]"
            >
              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="text-xl font-bold mt-4">{service.price}</p>
                <p className="mt-4">{service.description}</p>
                <p className="mt-2">{service.details}</p>
              </div>

              {/* Hover Effect Button */}
              <div className="bg-white text-purple-500 text-center py-3 mt-6 transform transition duration-300 ease-in-out">
                <Link to={service.url} className="w-full h-full font-semibold">Learn More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnotherServices;



