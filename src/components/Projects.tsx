'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Mobile App',
    category: 'Mobile Design',
    description: 'A modern e-commerce app with seamless checkout experience and personalized recommendations.',
    image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYzNzcxNDg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Mobile', 'iOS', 'Android', 'E-commerce'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 2,
    title: 'Analytics Dashboard',
    category: 'Web Application',
    description: 'Comprehensive analytics platform for tracking business metrics and generating insights.',
    image: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYzNzg1MDY3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Web', 'Dashboard', 'Data Viz', 'SaaS'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    title: 'Fitness Tracking App',
    category: 'Mobile Design',
    description: 'Health and fitness app with workout tracking, nutrition logging, and progress visualization.',
    image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2MzcxNDkwOHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Mobile', 'Health', 'Fitness', 'iOS'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    title: 'Creative Portfolio',
    category: 'Website',
    description: 'Minimalist portfolio website for showcasing creative work with smooth animations.',
    image: 'https://images.unsplash.com/photo-1521391406205-4a6af174a4c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVSSUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjM3ODUwNjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Web', 'Portfolio', 'Interactive'],
    color: 'from-orange-500 to-red-500',
  },
    {
    id: 5,
    title: 'Fitness Tracking App',
    category: 'Mobile Design',
    description: 'Health and fitness app with workout tracking, nutrition logging, and progress visualization.',
    image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2MzcxNDkwOHww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Mobile', 'Health', 'Fitness', 'iOS'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 6,
    title: 'Creative Portfolio',
    category: 'Website',
    description: 'Minimalist portfolio website for showcasing creative work with smooth animations.',
    image: 'https://images.unsplash.com/photo-1521391406205-4a6af174a4c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxVSSUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjM3ODUwNjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Web', 'Portfolio', 'Interactive'],
    color: 'from-orange-500 to-red-500',
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