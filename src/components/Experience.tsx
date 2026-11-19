'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, Calendar, GraduationCap, Award } from 'lucide-react';

const experiences = [
  {
    title: 'Sr. Executive – UI/UX Designer',
    company: 'NextLab',
    period: 'May 2026 – Present',
    current: true,
    responsibilities: [
      'Conduct UX research and competitor analysis to identify product and usability improvements.',
      'Improve shopping journeys and usability for Apple Gadgets and AGmart eCommerce websites and mobile apps.',
      'Design interfaces and workflows for internal POS and HRM applications.',
      'Create end-to-end Android and iOS experiences, from user flows and wireframes to high-fidelity UI and interactive prototypes.',
      'Collaborate with developers and stakeholders, providing design specifications and implementation handoff.',
    ],
  },
  {
    title: 'UI/UX Designer',
    company: 'Cyber Squad Inc.',
    period: 'September 2024 – April 2026',
    current: false,
    responsibilities: [
      'Led end-to-end design for web and mobile products, including research, usability analysis, wireframing, high-fidelity UI, prototyping, and user testing.',
      'Translated user needs and business requirements into solutions with developers, product managers, and stakeholders.',
      'Used research, usability feedback, and product analysis to identify UX issues and recommend improvements.',
      'Built scalable Figma design systems and reusable component libraries; created Framer prototypes to validate user flows.',
    ],
  },
  {
    title: 'Jr. UI/UX Designer',
    company: 'Bdjobs.com',
    period: 'June 2023 – September 2024',
    current: false,
    responsibilities: [
      'Redesigned key interfaces for Bangladesh’s leading job portal, improving job search and application experiences.',
      'Conducted user interviews, usability testing, and feedback analysis; translated insights into wireframes, mockups, and prototypes.',
      'Worked with development teams on accurate implementation, reusable UI components, and design guidelines.',
    ],
  },
  {
    title: 'Design Executive',
    company: 'Bright Technologies Limited',
    period: 'March 2022 – June 2023',
    current: false,
    responsibilities: [
      'Designed user-centered interfaces for CRM and enterprise applications based on business requirements.',
      'Developed personas, journey maps, information architecture, and responsive designs.',
      'Worked with clients and developers on requirements, design reviews, and handoff specifications.',
    ],
  },
];

const education = [
  { degree: 'M.Sc. in Information and Communication Technology (ICT)', institution: 'Bangladesh University of Professionals (BUP)', period: 'January 2023 – October 2026' },
  { degree: 'B.Sc. in Computer Science and Engineering', institution: 'Daffodil International University', period: 'January 2016 – January 2020' },
  { degree: 'Higher Secondary Certificate (HSC), Science', institution: 'Adamjee Cantonment College', period: '2015' },
  { degree: 'Secondary School Certificate (SSC), Science', institution: 'Monipur High School and College', period: '2013' },
];

const certifications = [
  'Enterprise Design Thinking Practitioner – IBM',
  'Foundations of User Experience and Design Thinking – Microsoft',
  'UI/UX Design Certification – Creative IT Institute',
  'Introduction to AI Concepts – Microsoft',
  'Cloud Computing Fundamentals – Microsoft',
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Professional Experience</h2>
          <div className="w-40 h-1 bg-purple-600 dark:bg-purple-500 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Product design experience across eCommerce, SaaS, job platforms, CRM, and enterprise applications.</p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="space-y-6 sm:space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="relative grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-start"
              >
                <div className={index % 2 === 0 ? 'md:text-right md:pr-8 lg:pr-12' : 'md:col-start-2 md:pl-8 lg:pl-12'}>
                  <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                    {exp.current && <span className="inline-block px-3 py-1 text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 rounded-full mb-3">Current Role</span>}
                    <h3 className="text-gray-900 dark:text-white mb-2 text-lg sm:text-xl font-semibold">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 mb-2 text-sm sm:text-base md:justify-start">
                      <Briefcase size={18} /><span>{exp.company} · Dhaka, Bangladesh</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mb-4 text-xs sm:text-sm md:justify-start">
                      <Calendar size={16} /><span>{exp.period}</span>
                    </div>
                    <ul className="space-y-2 text-left">
                      {exp.responsibilities.map((item) => <li key={item} className="text-gray-600 dark:text-gray-400 text-sm sm:text-base flex items-start gap-2"><span className="text-purple-600 dark:text-purple-400">•</span><span>{item}</span></li>)}
                    </ul>
                  </div>
                </div>
                <div className={index % 2 === 0 ? 'hidden md:block md:col-start-2' : 'hidden md:block'} />
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-8 w-4 h-4 bg-purple-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 sm:mt-16 md:mt-20"
          aria-labelledby="education-heading"
        >
          <h3 id="education-heading" className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white text-center mb-6 sm:mb-8">Education & Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {education.map((item) => (
              <article key={item.degree} className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-5 sm:p-6 border border-purple-100 dark:border-gray-600">
                <GraduationCap className="w-5 h-5 text-purple-600 dark:text-purple-400 mb-3" />
                <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2">{item.degree}</h4>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-1">{item.institution}</p>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{item.period}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 bg-gray-50 dark:bg-gray-800 rounded-2xl p-5 sm:p-6">
            <h4 className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white mb-4"><Award className="w-5 h-5 text-purple-600" />Certifications</h4>
            <ul className="grid sm:grid-cols-2 gap-3">
              {certifications.map((cert) => <li key={cert} className="flex items-start gap-2 text-sm sm:text-base text-gray-700 dark:text-gray-300"><span className="text-purple-600">•</span>{cert}</li>)}
            </ul>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
