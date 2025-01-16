import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link from React Router
import axios from "axios";

const ServicePage = ({
  title,
  description,
  benefits,
  specifications,
  image,
  formTitle,
  riskReversal,
  endpoint,
  otherServices, // Pass the other service links as props
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }

    if (formData.phone && !/^\+?[0-9\s\-]+$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setStatus("Please fix the errors in the form.");
      return;
    }

    setStatus("Submitting...");

    try {
      const response = await axios.post("http://localhost:5000" + endpoint, formData);
      setStatus("Success! We'll get in touch soon.");
      setFormData({ name: "", email: "", phone: "" }); // Clear the form
      setErrors({}); // Clear any previous errors
    } catch (error) {
      setStatus("An error occurred. Please try again: " + error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="bg-white py-16"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Service Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-purple-500">{title}</h1>
          <p className="text-lg text-gray-700 mt-4">{description}</p>
        </div>

        {/* Service Details */}
        <div className="mt-12 flex flex-col lg:flex-row items-center lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 mb-8 lg:mb-0"
          >
            <img
              src={image}
              alt={title}
              className="rounded-lg shadow-lg object-cover w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 lg:pl-12"
          >
            <h2 className="text-3xl font-semibold text-purple-500 mb-6">
              Why Choose This Service?
            </h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="text-purple-500 text-lg font-bold mr-4">✓</div>
                  <p className="text-lg text-gray-700">{benefit}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Specifications Section */}
        <div className="mt-12 bg-gray-100 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-purple-500 mb-4">
            What’s Included?
          </h3>
          <ul className="space-y-4">
            {specifications.map((spec, index) => (
              <li key={index} className="text-lg text-gray-700">
                {spec}
              </li>
            ))}
          </ul>
        </div>

        {/* Risk Reversal Section */}
        <div className="mt-12 bg-purple-500 text-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Our Guarantee</h3>
          <p>{riskReversal}</p>
        </div>

        {/* Form Section */}
        <div className="mt-16 bg-gray-100 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-purple-500 mb-4">
            {formTitle}
          </h3>
          <form onSubmit={handleSubmit}>
            {/* Form fields */}
            <div className="mb-4">
              <label className="block text-lg text-gray-700" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg ${
                  errors.name ? "border-red-500" : ""
                }`}
                placeholder="Enter your name"
                required
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-2">{errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-lg text-gray-700" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="Enter your email"
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-2">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-lg text-gray-700" htmlFor="phone">
                Phone (Optional)
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full p-3 border rounded-lg ${
                  errors.phone ? "border-red-500" : ""
                }`}
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-purple-500 text-white py-3 rounded-lg font-bold hover:bg-purple-600 transition"
            >
              Book a Call
            </button>
          </form>
          {status && <p className="mt-4 text-center text-lg">{status}</p>}
        </div>

        {/* Navigation Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-purple-500 mb-4">
            Explore Other Services
          </h3>
          <div className="flex justify-center space-x-6">
            {otherServices.map(({ name, link }, index) => (
              <Link
                key={index}
                to={link}
                className="text-lg font-semibold text-purple-500 hover:underline"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicePage;

