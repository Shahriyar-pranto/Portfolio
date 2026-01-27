'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'UI/UX Designer',
    company: 'Cyber Squad Inc.',
    period: 'Sept 2024 - Present',
    current: true,
    responsibilities: [
      'Designed intuitive interfaces for CRM systems, responsive web applications, and mobile platforms',
      'Conducted user research and usability testing to inform design decisions and optimize user experience',
      'Collaborated with development teams to ensure accurate and efficient implementation of design solutions',
    ],
  },
  {
    id: 2,
    title: 'Jr. UI/UX Designer',
    company: 'Bdjobs.com Limited',
    period: 'Jun 2023 - Sept 2024',
    current: false,
    responsibilities: [
      'Designed layouts for web and mobile apps, focusing on user-friendly experiences',
      'Created wireframes and auto layouts for Bdjobs.com\'s corporate website and apps',
      'Utilized Figma for design and conducted UX research to enhance app usability',
      'Performed product analysis and research to improve various UX aspects',
      'Collaborated on front-end design to ensure cohesive and engaging UX',
    ],
  },
  {
    id: 3,
    title: 'Executive - Creative Design (UI/UX & Graphic)',
    company: 'Bright Technologies Ltd.',
    period: 'Mar 2022 - May 2023',
    current: false,
    responsibilities: [
      'Responsible for UI/UX Design for corporate websites UI',
      'Also perform social media post, project management and front-end design',
    ],
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
          <div className="w-40 h-1 bg-purple-600 dark:bg-purple-500 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey in UI/UX design across various industries
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 dark:bg-gray-700"></div>

          <div className="space-y-6 sm:space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-start md:items-center ${
                  index % 2 === 0 ? '' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`${index % 2 === 0 ? 'md:text-right md:pr-8 lg:pr-12' : 'md:col-start-2 md:pl-8 lg:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg border border-gray-100 dark:border-gray-700"
                  >
                    {exp.current && (
                      <span className="inline-block px-3 py-1 text-xs sm:text-sm bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 rounded-full mb-3">
                        Current Role
                      </span>
                    )}
                    
                    <h3 className={`text-gray-900 dark:text-white mb-2 text-lg sm:text-xl md:text-xl ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.title}
                    </h3>
                    
                    <div className={`flex items-center gap-2 text-purple-600 dark:text-purple-400 mb-2 text-sm sm:text-base ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <Briefcase size={18} className="flex-shrink-0" />
                      <span className="break-words">{exp.company}</span>
                    </div>
                    
                    <div className={`flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-4 text-xs sm:text-sm ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <Calendar size={16} className="flex-shrink-0" />
                      <span>{exp.period}</span>
                    </div>
                    
                    <ul className={`space-y-2 text-left ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className={`text-gray-600 dark:text-gray-400 text-sm sm:text-base flex items-start gap-2 ${index % 2 === 0 ? 'md:flex-row-reverse md:justify-end' : ''}`}>
                          <span className="text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0">•</span>
                          <span className="flex-1">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    className="w-4 h-4 bg-purple-600 dark:bg-purple-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"
                  />
                </div>

                {/* Empty space for alternating layout */}
                <div className={index % 2 === 0 ? 'md:col-start-2' : 'hidden md:block'}></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 sm:mt-16 md:mt-20"
        >
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white text-center mb-6 sm:mb-8">Education & Certifications</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-5 sm:p-6 border border-purple-100 dark:border-purple-800">
              <div className="mb-3">
                <span className="inline-block px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 rounded-full mb-3">
                  In Progress
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">Master's in ICT</h4>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-1">Bangladesh University of Professionals</p>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Expected 2025</p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-5 sm:p-6 border border-gray-200 dark:border-gray-600">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">Bachelor in CSE</h4>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-1">Daffodil International University</p>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Graduated 2020</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-5 sm:p-6 border border-green-100 dark:border-green-800">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">Foundation of User Experience & Design Thinking</h4>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-1">Microsoft Learn</p>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">2024</p>
              <a 
                href="https://learn.microsoft.com/api/achievements/share/en-us/AhmedShahriyarParvezPranto-0893/4LUWZW9K?sharingId=EC7EF7CE16A7A876"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-green-700 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 mt-2 transition-colors text-sm"
              >
                <span>View Certificate</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-5 sm:p-6 border border-blue-100 dark:border-blue-800">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">Enterprise Design Thinking Practitioner</h4>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-1">IBM</p>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">2023</p>
              <a 
                href="https://www.credly.com/badges/f4e6252e-8af0-40ac-9f2b-beabb7a00474/public_url"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mt-2 transition-colors text-sm"
              >
                <span>View Badge</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-5 sm:p-6 border border-orange-100 dark:border-orange-800">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">UI/UX Design</h4>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-1">Creative IT Institute, Dhaka</p>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">2022</p>
              <a 
                href="https://drive.google.com/file/d/1mjmbl--33jtR9T69TEuJsTBbRJN8BBQc/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-orange-700 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 mt-2 transition-colors text-sm"
              >
                <span>View Certificate</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>

            

            
          </div>
        </motion.div>
      </div>
    </div>
  );
}