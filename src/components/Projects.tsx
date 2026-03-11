'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import applyGoalImage from '@/assets/og-image-applygoal.jpg';
import applyGoalAdminImage from '@/assets/ApplyGoal-Admin-Panel.jpg';
import applyGoalCrmImage from '@/assets/ApplyGoal-CRM-Panel.jpg';
import cyberSquadImage from '@/assets/CyberSquadInc-Landing-Page.png';
import jubaierRayanImage from '@/assets/Jubaier-Rayan-Portfolio.jpg';
import bdjobsRecruiterImage from '@/assets/bdjobs-recruiter.png';
const applyGoalImageSrc = typeof applyGoalImage === 'string' ? applyGoalImage : applyGoalImage.src;
const applyGoalAdminImageSrc = typeof applyGoalAdminImage === 'string' ? applyGoalAdminImage : applyGoalAdminImage.src;
const applyGoalCrmImageSrc = typeof applyGoalCrmImage === 'string' ? applyGoalCrmImage : applyGoalCrmImage.src;
const cyberSquadImageSrc = typeof cyberSquadImage === 'string' ? cyberSquadImage : cyberSquadImage.src;
const jubaierRayanImageSrc = typeof jubaierRayanImage === 'string' ? jubaierRayanImage : jubaierRayanImage.src; 
const bdjobsRecruiterImageSrc = typeof bdjobsRecruiterImage === 'string' ? bdjobsRecruiterImage : bdjobsRecruiterImage.src;
const projects = [
  {
    id: 1,
    title: 'ApplyGoal Website',
    category: 'Website',
    description: 'ApplyGoal | Ai-Powered Student Recruitment Portal',
    image: applyGoalImageSrc,
    tags: ['Web', 'AI', 'Student Recruitment'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Applygoal Website Admin Panel',
    category: 'Web Application',
    description: 'Applygoal Website Admin Panel | Ai-Powered Student Recruitment Portal',
    image: applyGoalAdminImageSrc,
    tags: ['Web', 'Dashboard', 'Admin Panel', 'SaaS'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    title: 'ApplyGoal CRM System',
    category: 'Web Application',
    description: 'ApplyGoal CRM is a purpose-built platform that transforms how institutions and recruitment partners manage student admissions—centralizing data, automating workflows, and enhancing engagement from one intuitive dashboard...',
    image: applyGoalCrmImageSrc,
    tags: ['Web', 'CRM', 'AI', 'Student Recruitment'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 4,
    title: 'Cyber Squad Website',
    category: 'Website',
    description: 'Cyber Squad Inc. provides cutting-edge SAAS software solutions, specializing in web development, AI integration, cybersecurity, mobile app development, and more. Empowering businesses with innovative tech solutions.',
    image: cyberSquadImageSrc,
    tags: ['Web', 'SAAS', 'Software Development', 'Cybersecurity'],
    color: 'from-gray-900 to-gray-500',
  },
    {
    id: 5,
    title: 'Jubaier Rayan Professional Portfolio',
    category: 'Portfolio',
    description: 'Jubaier Rayan | Professionl Portfolio | Co-Founder & CEO | Cyber Squad Inc. |  Founder & CEO | Edu News | Skill Now',
    image: jubaierRayanImageSrc,
    tags: ['Web', 'Portfolio', 'Interactive'],
    color: 'from-blue-500 to-gray-500',
  },
  {
    id: 6,
    title: 'Bdjobs Recruiter Panel',
    category: 'Web Application',
    description: 'Faster Hiring, Better Matches: Sign In to Bdjobs Recruiter',
    image: bdjobsRecruiterImageSrc,
    tags: ['Web', 'Dashboard', 'Admin Panel', 'SaaS'],
    color: 'from-purple-900 to-purple-500',
  },
];

const categories = ['All', 'Mobile Design', 'Web Application', 'Website'];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(4);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const visibleProjects = filteredProjects.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProjects.length;

  const handleViewMore = () => {
    setVisibleCount(prev => prev + 2);
  };

  const handleViewLess = () => {
    setVisibleCount(4);
  };

  // Reset visible count when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setVisibleCount(4);
  };

  return (
    <div ref={ref} className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-40 h-1 bg-purple-600 dark:bg-purple-500 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work in UI/UX design
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12 px-2"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-gray-900 dark:bg-purple-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                
                {/* Hover Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={hoveredProject === project.id ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  className="absolute top-4 right-4 w-12 h-12 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center shadow-lg"
                >
                  <ExternalLink className="w-6 h-6 text-gray-900 dark:text-white" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <div className="text-xs sm:text-sm text-purple-600 dark:text-purple-400 mb-2">{project.category}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 leading-relaxed">{project.description}</p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Case Study Link */}
                <motion.div
                  initial={{ x: 0 }}
                  animate={hoveredProject === project.id ? { x: 10 } : { x: 0 }}
                  className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-900 dark:text-white"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        {hasMore && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-8 sm:mt-10 md:mt-12"
          >
            <button
              className="px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-900 dark:bg-purple-600 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-purple-700 transition-colors"
              onClick={handleViewMore}
            >
              View More
            </button>
          </motion.div>
        )}

        {/* View Less Button */}
        {!hasMore && visibleCount > 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-8 sm:mt-10 md:mt-12"
          >
            <button
              className="px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-900 dark:bg-purple-600 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-purple-700 transition-colors"
              onClick={handleViewLess}
            >
              View Less
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}