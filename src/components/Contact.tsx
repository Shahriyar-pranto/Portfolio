'use client';

import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { toast } from 'sonner';
import { Mail, Linkedin, Send, Facebook } from 'lucide-react';

const BehanceIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M6.5 4.5h4.5c2.5 0 4.5 1.5 4.5 3.5 0 1.5-.8 2.5-2 3 1.5.3 2.5 1.8 2.5 3.5 0 2.5-2 4-5 4H6.5v-14zm3 5.5h2c1 0 1.5-.5 1.5-1.5S12.5 7 11.5 7h-2v3zm0 5.5h2.5c1 0 2-.7 2-1.8 0-1-.8-1.7-2-1.7h-2.5v3.5zM16.5 7.5h4.5M16.5 12h6.5c0-3-1.8-5-4.5-5-2.8 0-4.5 2-4.5 5.5 0 3.5 1.8 5.5 4.8 5.5 2 0 3.5-.8 4.2-2.5h-2.5c-.3.5-1 .8-1.7.8-1.3 0-2-.7-2.2-2h6z" />
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
    <div ref={ref} className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center sm:mb-12 md:mb-16"
        >
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl">Get In Touch</h2>
          <div className="mx-auto mb-4 h-1 w-40 bg-purple-600 dark:bg-purple-500 sm:mb-6" />
          <p className="mx-auto max-w-2xl text-sm text-gray-600 dark:text-gray-400 sm:text-base">Have a product or design opportunity in mind? Let’s connect.</p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 md:gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass h-fit rounded-3xl p-6 sm:p-8"
          >
            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">Contact Details</h3>
            <p className="mb-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base">I’m open to discussing product design, UI/UX, and collaboration opportunities. Reach out by email or through my social channels.</p>
            <div className="mb-6 space-y-3 text-sm text-gray-700 dark:text-gray-300 sm:text-base">
              <a className="flex items-center gap-3 hover:text-purple-600" href="mailto:shahriyarpranto@gmail.com"><Mail className="h-5 w-5 text-purple-600" />shahriyarpranto@gmail.com</a>
              <a className="flex items-center gap-3 hover:text-purple-600" href="tel:+8801836332955"><span className="w-5 text-center text-purple-600">☎</span>+880-1836-332955</a>
              <p className="flex items-center gap-3"><span className="w-5 text-center text-purple-600">📍</span>Dhaka, Bangladesh</p>
            </div>
            <h4 className="mb-3 text-base font-semibold text-gray-900 dark:text-white sm:text-lg">Connect with me</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <motion.a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} whileHover={{ y: -3 }} className="glass flex h-11 w-11 items-center justify-center rounded-xl text-gray-900 dark:text-white">
                  <link.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <form onSubmit={handleSubmit} className="glass-strong rounded-3xl p-4 sm:p-6 md:p-8">
              <div className="mb-5">
                <label htmlFor="name" className="mb-2 block text-sm text-gray-900 dark:text-white">Name</label>
                <input type="text" id="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="glass-input w-full rounded-lg px-4 py-3 text-gray-900 outline-none focus:ring-2 focus:ring-purple-500 dark:text-white" />
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="mb-2 block text-sm text-gray-900 dark:text-white">Email</label>
                <input type="email" id="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="glass-input w-full rounded-lg px-4 py-3 text-gray-900 outline-none focus:ring-2 focus:ring-purple-500 dark:text-white" />
              </div>
              <div className="mb-5">
                <label htmlFor="message" className="mb-2 block text-sm text-gray-900 dark:text-white">Message</label>
                <textarea id="message" required rows={5} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="glass-input w-full resize-none rounded-lg px-4 py-3 text-gray-900 outline-none focus:ring-2 focus:ring-purple-500 dark:text-white" />
              </div>
              <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="glass-strong inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-gray-950 disabled:cursor-not-allowed disabled:opacity-60 dark:text-white">
                {isSubmitting ? 'Sending...' : 'Send Message'}<Send className="h-4 w-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
