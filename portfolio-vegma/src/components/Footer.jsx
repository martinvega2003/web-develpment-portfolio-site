import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-purple-600 py-12">
      <div className="container mx-auto px-6">
        {/* Final CTA */}
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Ready to take your website to the next level?
          </h2>
          <p className="text-center text-gray-700 mb-6">
            Get in touch today to discuss your needs and make it happen.
          </p>
          <Link
            to="/form"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-transform duration-200"
          >
            Contact Me
          </Link>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#section1" className="hover:underline">
                  Section 1
                </a>
              </li>
              <li>
                <a href="#section2" className="hover:underline">
                  Section 2
                </a>
              </li>
              <li>
                <a href="#section3" className="hover:underline">
                  Section 3
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Social Media</h3>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500"
                >
                  <FaInstagram size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500"
                >
                  <FaLinkedin size={24} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-900"
                >
                  <FaGithub size={24} />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
            <p className="text-gray-700">
              Email: <a href="mailto:example@mail.com">example@mail.com</a>
            </p>
            <p className="text-gray-700">
              Phone: <a href="tel:+123456789">+1 234 567 89</a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-gray-300 pt-6 text-gray-700">
          © {new Date().getFullYear()} Your Portfolio Name. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
