import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
import emailjs from "emailjs-com";

const MAX_DAILY_SENDS = 6;
const DEVICE_ID_KEY = "portfolio-contact-device-id";
const DAILY_LIMIT_KEY = "portfolio-contact-daily-limit";

function getTodayKey() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getDeviceId() {
  const existing = window.localStorage.getItem(DEVICE_ID_KEY);

  if (existing) {
    return existing;
  }

  const generated =
    (window.crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`);
  window.localStorage.setItem(DEVICE_ID_KEY, generated);
  return generated;
}

function getSendLimitState() {
  try {
    const today = getTodayKey();
    const deviceId = getDeviceId();
    const raw = window.localStorage.getItem(DAILY_LIMIT_KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    const count = Number(parsed[deviceId]?.[today] ?? 0);
    const remaining = Math.max(0, MAX_DAILY_SENDS - count);

    return {
      allowed: count < MAX_DAILY_SENDS,
      count,
      remaining,
      today,
      deviceId,
      parsed,
    };
  } catch {
    return {
      allowed: true,
      count: 0,
      remaining: MAX_DAILY_SENDS,
    };
  }
}

function increaseDailySendCount() {
  try {
    const state = getSendLimitState();

    if (!state.deviceId || !state.today || !state.parsed) {
      return;
    }

    if (!state.parsed[state.deviceId]) {
      state.parsed[state.deviceId] = {};
    }

    state.parsed[state.deviceId][state.today] = state.count + 1;
    window.localStorage.setItem(DAILY_LIMIT_KEY, JSON.stringify(state.parsed));
  } catch {
    // Ignore storage errors to avoid blocking legitimate sends.
  }
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const limitState = getSendLimitState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentLimitState = getSendLimitState();
    if (!currentLimitState.allowed) {
      setErrorMessage("Daily limit reached. You can send up to 6 messages per day from this device.");
      return;
    }

    setSending(true);
    setErrorMessage("");

    emailjs
      .send(
        "service_14ujmrs", // Replace with your EmailJS Service ID
        "template_t05jszc", // Replace with your EmailJS Template ID
        formData,
        "H3nkDBEnchx86zltm" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          increaseDailySendCount();
          setSubmitted(true);
          setTimeout(() => setSubmitted(false), 3000);
          setFormData({ name: "", email: "", message: "" });
          setSending(false);
        },
        (error) => {
          console.error("Error sending email:", error.text);

          if (error?.text?.includes("Invalid grant")) {
            setErrorMessage(
              "Email service is disconnected (Gmail invalid grant). Please reconnect EmailJS Gmail integration, then try again."
            );
          } else {
            setErrorMessage("Message could not be sent right now. Please try again shortly.");
          }

          setSending(false);
        }
      );
  };

  const infoItems = [
    {
      label: "Location",
      icon: <FaMapMarkerAlt className="text-sky-700 dark:text-sky-300 text-xl" />,
      text: "Busan, South Korea",
    },
    {
      label: "Email",
      icon: <FaEnvelope className="text-sky-700 dark:text-sky-300 text-xl" />,
      text: (
        <a href="mailto:irfan.datalytics@gmail.com" className="hover:underline break-all">
          irfan.datalytics@gmail.com
        </a>
      ),
    },
    {
      label: "Phone",
      icon: <MdPhone className="text-sky-700 dark:text-sky-300 text-xl" />,
      text: "+82 010 6561 8911",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative md:min-h-[91vh] flex justify-center items-center p-4 sm:p-6 lg:p-8 transition-colors duration-300 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0" />
      </div>

      <motion.div
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.09 }}
        className="w-full max-w-6xl rounded-[1.75rem] border border-slate-200/70 dark:border-slate-700/80 bg-white/70 dark:bg-slate-900/72 backdrop-blur-xl shadow-[0_26px_34px_-22px_rgba(15,23,42,0.35)] dark:shadow-[0_26px_34px_-22px_rgba(2,6,23,0.9)] p-3 sm:p-4"
      >
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-3 sm:gap-4">
          {/* Left Side: Contact Info */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.45 }}
            className="lg:col-span-2 rounded-2xl border border-slate-200/70 dark:border-slate-700 bg-gradient-to-br from-sky-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800 p-6 sm:p-7"
          >
            <motion.span
              variants={fadeUp}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center rounded-full border border-sky-300/60 dark:border-sky-700/70 bg-sky-100/80 dark:bg-sky-900/40 px-3 py-1 text-[11px] tracking-[0.12em] font-semibold uppercase text-sky-700 dark:text-sky-300"
            >
              Contact Desk
            </motion.span>

            <div className="mt-4 sm:mt-5 space-y-4">
              <motion.h2
                variants={fadeUp}
                transition={{ duration: 0.45 }}
                className="text-3xl sm:text-4xl font-extrabold leading-tight text-slate-900 dark:text-slate-100"
              >
                Let's Build Something Meaningful
              </motion.h2>
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.45 }}
                className="text-slate-600 dark:text-slate-300"
              >
                Open for data science collaborations, freelance analytics work, and product-focused AI projects.
              </motion.p>

              <motion.div variants={fadeUp} transition={{ duration: 0.45 }} className="flex flex-wrap items-center gap-2 pt-1">
                <span className="rounded-full border border-slate-300/80 dark:border-slate-600 bg-white/70 dark:bg-slate-900/70 px-3 py-1 text-[11px] uppercase tracking-[0.08em] text-slate-600 dark:text-slate-300">
                  Avg reply: 24h
                </span>
                <span className="rounded-full border border-slate-300/80 dark:border-slate-600 bg-white/70 dark:bg-slate-900/70 px-3 py-1 text-[11px] uppercase tracking-[0.08em] text-slate-600 dark:text-slate-300">
               South Korea (GMT+9)                    
                </span>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="mt-6 space-y-3">
              {infoItems.map((item, index) => (
              <motion.div
                key={index}
                  variants={fadeUp}
                  transition={{ duration: 0.45 }}
                  whileHover={{ y: -2, scale: 1.01 }}
                  className="rounded-xl border border-slate-200/70 dark:border-slate-700 bg-white/80 dark:bg-slate-900/70 px-3 py-2.5 flex items-center gap-3 transition-colors duration-300"
              >
                  <div className="h-10 w-10 rounded-lg bg-sky-100 dark:bg-sky-900/40 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.08em] text-slate-500 dark:text-slate-400">
                      {item.label}
                    </p>
                    <p className="text-sm sm:text-base text-slate-800 dark:text-slate-100">{item.text}</p>
                  </div>
              </motion.div>
            ))}
          </div>

          <motion.a
              variants={fadeUp}
              transition={{ duration: 0.45 }}
              whileHover={{ y: -2 }}
            href="/public/resume.pdf"
            download="My_Resume.pdf" // Specify the name for the downloaded file
              className="mt-6 inline-flex bg-slate-900 dark:bg-sky-400 font-semibold text-white dark:text-slate-900 shadow-lg cursor-pointer px-4 py-2.5 rounded-xl items-center space-x-2 hover:bg-slate-700 dark:hover:bg-sky-300 transition-colors duration-300"
          >
            <FaDownload />
            <span>Download Resume</span>
          </motion.a>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.45 }}
            className="lg:col-span-3 rounded-2xl border border-slate-200/70 dark:border-slate-700 bg-white/85 dark:bg-slate-900/70 p-6 sm:p-7"
          >
            <div className="mb-5">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
                Send a Direct Message
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mt-1.5 text-sm sm:text-base">
                I usually respond within 24 hours. Share your idea and timeline.
              </p>
            </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                    className="block text-xs uppercase tracking-[0.08em] font-semibold text-slate-600 dark:text-slate-300 mb-1.5"
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
                    className="w-full px-3.5 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-400 transition-colors duration-300"
                    placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                    className="block text-xs uppercase tracking-[0.08em] font-semibold text-slate-600 dark:text-slate-300 mb-1.5"
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
                    className="w-full px-3.5 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-400 transition-colors duration-300"
                    placeholder="name@example.com"
                required
              />
                </div>
            </div>

            <div>
              <label
                htmlFor="message"
                  className="block text-xs uppercase tracking-[0.08em] font-semibold text-slate-600 dark:text-slate-300 mb-1.5"
              >
                Your Message
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                  className="w-full px-3.5 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-sky-400 transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project goals, timeline, and expected outcomes..."
                required
              ></motion.textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02, y: -1 }}
              type="submit"
              disabled={sending || !limitState.allowed}
                className="w-full py-3.5 bg-slate-900 dark:bg-sky-400 text-white dark:text-slate-900 font-semibold rounded-xl shadow-md hover:bg-slate-700 dark:hover:bg-sky-300 transition-colors duration-300 flex items-center justify-center disabled:cursor-not-allowed disabled:opacity-70"
            >
              {sending
                ? "Sending..."
                : !limitState.allowed
                ? "Daily Limit Reached"
                : "Send Message"}
              <FaPaperPlane className="ml-2" />
            </motion.button>

            <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
              Remaining today: {limitState.remaining} / {MAX_DAILY_SENDS}
            </p>
          </form>

          {/* Success Message */}
          {submitted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
                className="mt-4 rounded-xl border border-emerald-300/70 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-950/40 p-3 text-center text-emerald-700 dark:text-emerald-300 font-semibold"
            >
              Thank you! Your message has been sent.
            </motion.div>
          )}

          {errorMessage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
                className="mt-4 rounded-xl border border-red-300/70 dark:border-red-700 bg-red-50 dark:bg-red-950/40 p-3 text-center text-red-700 dark:text-red-300 font-semibold"
            >
              {errorMessage}
            </motion.div>
          )}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
