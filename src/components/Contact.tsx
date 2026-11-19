'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { toast } from 'sonner';
import { Mail, Linkedin, Send, Facebook } from 'lucide-react';

const BehanceIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M6.5 4.5h4.5c2.5 0 4.5 1.5 4.5 3.5 0 1.5-.8 2.5-2 3 1.5.3 2.5 1.8 2.5 3.5 0 2.5-2 4-5 4H6.5v-14zm3 5.5h2c1 0 1.5-.5 1.5-1.5S12.5 7 11.5 7h-2v3zm0 5.5h2.5c1 0 2-.7 2-1.8 0-1-.8-1.7-2-1.7h-2.5v3.5zM17 7h5v1.5h-5V7zm2.5 2c2.4 0 4 1.8 4 4.4v.6h-6c.1 1.2.8 1.8 2 1.8.8 0 1.5-.3 1.9-.9h1.9c-.5 1.8-2 2.8-4 2.8-2.6 0-4.2-1.7-4.2-4.3 0-2.6 1.7-4.4 4.4-4.4zm1.9 3.5c-.2-1-.8-1.5-1.8-1.5s-1.7.5-2 1.5h3.8z" />
  </svg>
);

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        toast.error(data.error || 'Failed to send message. Please try again.');
        return;
      }
      toast.success("Message sent! I'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
    } catch {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:shahriyarpranto@gmail.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/ahmed-pranto/' },
    { icon: BehanceIcon, label: 'Behance', href: 'https://www.behance.net/shahriyarpranto' },
    { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/shahriyar.pranto' },
  ];

  return (
    <div ref={ref} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} transition={{ duration: 0.6 }} className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-40 h-1 bg-purple-600 dark:bg-purple-500 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Have a product or design opportunity in mind? Let’s connect.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact Details</h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">I’m open to discussing product design, UI/UX, and collaboration opportunities. Reach out by email or phone, or connect with me online.</p>
            <div className="space-y-3 mb-6 text-sm sm:text-base text-gray-700 dark:text-gray-300">
              <a className="flex items-center gap-3 hover:text-purple-600" href="mailto:shahriyarpranto@gmail.com"><Mail className="w-5 h-5 text-purple-600" />shahriyarpranto@gmail.com</a>
              <a className="flex items-center gap-3 hover:text-purple-600" href="tel:+8801836332955"><span className="w-5 h-5 text-purple-600">☎</span>+880-1836-332955</a>
              <p className="flex items-center gap-3"><span className="w-5 h-5 text-purple-600">📍</span>Dhaka, Bangladesh</p>
            </div>
            <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3">Connect with me</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link, index) => (
                <motion.a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} initial={{ opacity: 0, y: 12 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }} transition={{ delay: 0.3 + index * 0.08 }} whileHover={{ scale: 1.08 }} className="w-11 h-11 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-purple-600 shadow-sm">
                  <link.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
              <div className="mb-5">
                <label htmlFor="name" className="block text-sm text-gray-900 dark:text-white mb-2">Name</label>
                <input type="text" id="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Your name" />
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="block text-sm text-gray-900 dark:text-white mb-2">Email</label>
                <input type="email" id="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="your.email@example.com" />
              </div>
              <div className="mb-5">
                <label htmlFor="message" className="block text-sm text-gray-900 dark:text-white mb-2">Message</label>
                <textarea id="message" required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="Tell me about your opportunity..." />
              </div>
              <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 dark:bg-purple-600 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-purple-700 disabled:opacity-60 transition-colors">
                {isSubmitting ? 'Sending...' : 'Send Message'}<Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
