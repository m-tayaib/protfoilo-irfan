import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_eul0k2j", // Replace with your EmailJS Service ID
        "template_hxdd2v9", // Replace with your EmailJS Template ID
        formData,
        "oRX73hkBk42mnwAES" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setSubmitted(true);
          setTimeout(() => setSubmitted(false), 3000);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Error sending email:", error.text);
        }
      );
  };

  return (
    <div className="md:h-[91vh]  flex justify-center items-center p-6">
      {/* Card Container */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-5xl bg-gradient-to-br from-blue-20 via-white to-blue-100 rounded-lg shadow-xl p-8 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0"
      >
        {/* Left Side: Contact Info */}
        <div className="w-full md:w-1/2 space-y-6">
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-extrabold text-blue-800 text-center md:text-left"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="text-gray-600 text-center md:text-left"
          >
            Reach out to me for collaborations, projects, or general inquiries.
          </motion.p>

          {/* Contact Info */}
          <div className="space-y-4">
            {[
              {
                icon: <FaMapMarkerAlt className="text-blue-600 text-2xl" />,
                text: "Lahore, Pakistan",
              },
              {
                icon: <FaEnvelope className="text-blue-600 text-2xl" />,
                text: (
                  <a
                    href="mailto:irfan.datalytics@gmail.com"
                    className="hover:underline"
                  >
                    irfan.datalytics@gmail.com
                  </a>
                ),
              },
              {
                icon: <MdPhone className="text-blue-600 text-2xl" />,
                text: "+92 306 7599 833",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.2 }}
                className="flex items-center space-x-4 hover:scale-105 transform transition duration-300"
              >
                {item.icon}
                <p className="text-gray-700">{item.text}</p>
              </motion.div>
            ))}
          </div>
          <motion.a
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            href="/resume.pdf"
            download="My_Resume.pdf" // Specify the name for the downloaded file
            className="bg-blue-600  w-[200px] text-white shadow-lg cursor-pointer px-3 py-2 rounded-lg flex items-center space-x-2 hover:bg-black hover:text-white transition duration-200 ease-linear"
          >
            <FaDownload />
            <span>Download Resume</span>
          </motion.a>
        </div>

        {/* Right Side: Contact Form */}
        <div className="w-full md:w-1/2">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Your Name
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Your Email
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700 mb-1"
              >
                Your Message
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></motion.textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all flex items-center justify-center"
            >
              Send Message
              <FaPaperPlane className="ml-2" />
            </motion.button>
          </form>

          {/* Success Message */}
          {submitted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mt-4 text-center text-green-600 font-semibold"
            >
              Thank you! Your message has been sent.
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
