import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [message, setMessage] = useState({ visible: false, text: "", type: "" });
  const [errors, setErrors] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = { name: "", email: "", phone: "" };

    // Validate name
    if (!formData.name) {
      newErrors.name = "Name is required.";
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Validate phone number (should only contain numbers)
    if (formData.phone && !/^\d+$/.test(formData.phone)) {
      newErrors.phone = "Phone number must contain only numbers.";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error); // If there are no errors, return true
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      showMessage("Please fix the errors before submitting.", "error");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/submit", formData);

      // Display success message if the request succeeds
      if (response.status === 200 || response.status === 201) {
        showMessage("Form submitted successfully!", "success");
        setFormData({ name: "", email: "", phone: "" });
      } else {
        showMessage("Submission failed. Please try again.", "error");
      }
    } catch (error) {
      console.error("Error:", error);
      showMessage("An error occurred. Please try again later.", "error");
    }
  };

  const showMessage = (text, type) => {
    setMessage({ visible: true, text, type });

    // Automatically hide the message after 5 seconds
    setTimeout(() => {
      setMessage({ visible: false, text: "", type: "" });
    }, 5000);
  };

  const closeMessage = () => {
    setMessage({ visible: false, text: "", type: "" });
  };

  return (
    <motion.div
      className="flex flex-col items-center min-h-screen bg-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Heading Section */}
      <motion.div
        className="w-full bg-white text-center py-8 px-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-4xl font-bold text-purple-700 mb-4">
          Let's Build Something Amazing Together!
        </h1>
        <p className="text-lg text-gray-600">
          Fill in the form below, and I'll reach out to help you get started on
          a fully customizable and high-quality website.
        </p>
      </motion.div>

      {/* Success/Error Message */}
      <AnimatePresence>
        {message.text && (
          <motion.div
            className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg text-white ${
              message.type === "success" ? "bg-green-500" : "bg-red-500"
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {message.text}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Form Section */}
      <motion.div
        className="w-full max-w-lg mt-8 bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded-lg shadow-lg p-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.form
          className="space-y-6"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ staggerChildren: 0.2 }}
        >
          {/* Name Input */}
          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded-md border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your name"
              required
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </motion.div>

          {/* Email Input */}
          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded-md border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </motion.div>

          {/* Phone Input */}
          <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 rounded-md border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your phone (optional)"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to="/"
                className="bg-white text-purple-700 font-semibold py-2 px-4 rounded-md"
              >
                Go Back
              </Link>
            </motion.div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="bg-white text-purple-700 font-semibold py-2 px-4 rounded-md"
              onClick={handleSubmit}
            >
              Submit
            </motion.button>
          </motion.div>
        </motion.form>
      </motion.div>

      {/* Message Section */}
      {message.visible && (
        <motion.div
          className={`fixed top-20 right-4 bg-${
            message.type === "success" ? "green-500" : "red-500"
          } text-white p-4 rounded-lg shadow-lg max-w-xs`}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
        >
          {message.text}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Form;


