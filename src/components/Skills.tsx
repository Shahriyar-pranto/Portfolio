'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { 
  Figma, 
  Palette, 
  Users, 
  BarChart, 
  Layers, 
  Smartphone,
  Layout,
  Pencil
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Design Tools',
    skills: [
      { name: 'Figma', icon: Figma, level: 95 },
      { name: 'Adobe XD', icon: Layout, level: 90 },
      { name: 'Framer', icon: Pencil, level: 85 },
      { name: 'Adobe Illustrator', icon: Palette, level: 85 },
    ],
  },
  {
    title: 'Core Skills',
    skills: [
      { name: 'User Research', icon: Users, level: 90 },
      { name: 'Wireframing & Prototyping', icon: Layers, level: 95 },
      { name: 'Usability Testing', icon: BarChart, level: 85 },
      { name: 'Interaction Design', icon: Smartphone, level: 90 },
    ],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-purple-600 dark:bg-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for creating exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm"
            >
              <h3 className="text-gray-900 dark:text-white mb-6">{category.title}</h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <skill.icon className="w-5 h-5 text-purple-600" />
                        <span className="text-gray-900 dark:text-white">{skill.name}</span>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    
                    <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut" 
                        }}
                        className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <h4 className="text-gray-900 dark:text-white mb-6">Also Familiar With</h4>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {[
              'Adobe Photoshop',
              'User Flows & Journey Mapping',
              'Responsive & Mobile-First Design',
              'Design Systems & UI Guidelines',
              'Information Architecture',
              'A/B Testing',
              'Agile Methodology',
              'Front-end Collaboration',
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-3 sm:px-4 py-2 text-sm sm:text-base bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full shadow-sm border border-gray-200 dark:border-gray-600 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}