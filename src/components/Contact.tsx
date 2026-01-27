'use client';

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  Mail,
  Linkedin,
  Github,
  Twitter,
  Send,
  ExternalLink,
  Globe,
  Facebook,
} from "lucide-react";

// Custom Behance icon component
const BehanceIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6.5 4.5h4.5c2.5 0 4.5 1.5 4.5 3.5 0 1.5-.8 2.5-2 3 1.5.3 2.5 1.8 2.5 3.5 0 2.5-2 4-5 4H6.5v-14zm3 5.5h2c1 0 1.5-.5 1.5-1.5S12.5 7 11.5 7h-2v3zm0 5.5h2.5c1 0 2-.7 2-1.8 0-1-.8-1.7-2-1.7H9.5V15.5zM15.5 6h5v1.5h-5V6zm3.5 4.5c2.5 0 4.5 2 4.5 4.5 0 .3 0 .5-.1.8h-7c.2 1.2 1.2 2 2.6 2 1 0 1.8-.4 2.2-1.2h2.2c-.6 1.8-2.3 3-4.4 3-2.8 0-5-2.2-5-5s2.2-5 5-5zm-2.6 4h4.7c-.2-1.1-1.1-1.8-2.3-1.8-1.3 0-2.2.7-2.4 1.8z" />
  </svg>
);

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert(
        "Thanks for reaching out! This is a demo, so the message wasn't actually sent.",
      );
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:shahriyarpranto@gmail.com",
      color: "hover:text-red-600 dark:hover:text-red-400",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/ahmed-pranto",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
    {
      icon: BehanceIcon,
      label: "Behance",
      href: "https://www.behance.net/shahriyarpranto",
      color: "hover:text-blue-500 dark:hover:text-blue-300",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/shahriyar.pranto",
      color: "hover:text-blue-400 dark:hover:text-blue-300",
    },
  ];

  return (
    <div
      ref={ref}
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-40 h-1 bg-purple-600 dark:bg-purple-500 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to bring
            your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Get in Touch
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 sm:mb-8 leading-relaxed">
              I'm always open to discussing new projects,
              creative ideas, or opportunities to be part of
              your visions. Feel free to reach out through the
              form or connect with me on social media.
            </p>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0" />
                <span className="break-words">shahriyarpranto@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                <span className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex items-center justify-center flex-shrink-0">
                  📍
                </span>
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Connect with me
              </h4>
              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
                    }
                    transition={{
                      duration: 0.3,
                      delay: 0.4 + index * 0.1,
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 sm:w-12 sm:h-12 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 ${link.color} transition-colors shadow-md`}
                    aria-label={link.label}
                  >
                    <link.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 rounded-full"
            >
              <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
              Available for freelance projects
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={
              isInView
                ? { opacity: 1, x: 0 }
                : { opacity: 0, x: 50 }
            }
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-lg"
            >
              <div className="mb-4 sm:mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm sm:text-base text-gray-900 dark:text-white mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-4 sm:mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm sm:text-base text-gray-900 dark:text-white mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="mb-4 sm:mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm sm:text-base text-gray-900 dark:text-white mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value,
                    })
                  }
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all resize-none text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-900 dark:bg-purple-600 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}