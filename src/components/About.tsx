import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, Users, Briefcase, Coffee } from 'lucide-react';

const stats = [
  { icon: Briefcase, value: '3+', label: 'Years Experience' },
  { icon: Users, value: '40+', label: 'Projects Completed' },
  { icon: Award, value: '2+', label: 'Certifications' },
  { icon: Coffee, value: '∞', label: 'Cups of Coffee' },
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-purple-600 dark:bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-gray-900 dark:text-white mb-4">
              Designing experiences that make a difference
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I'm a UI/UX designer currently working at Cyber Squad Inc., where I design intuitive interfaces for CRM systems, responsive web applications, and mobile platforms. My approach combines thorough user research with data-driven design decisions to create solutions that truly resonate with users.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              With experience at leading companies like Bdjobs.com Limited and Bright Technologies Ltd., I've had the opportunity to work on diverse projects-from corporate websites to mobile apps. I specialize in creating wireframes, prototypes, and conducting usability testing to ensure every design decision is backed by real user insights.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl p-8 text-white"
          >
            <h4 className="text-white mb-6">My Design Philosophy</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <span>User-centered design is at the heart of everything I create</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <span>Simplicity and clarity over complexity and confusion</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <span>Continuous iteration and improvement based on feedback</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                <span>Collaboration with developers and stakeholders is key</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-purple-600 dark:text-purple-400" />
              <div className="text-gray-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}