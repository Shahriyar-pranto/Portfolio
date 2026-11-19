'use client';

import { useState } from 'react';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Resume } from '@/components/Resume';
import { Contact } from '@/components/Contact';
import { Navigation } from '@/components/Navigation';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-white transition-colors duration-300 dark:bg-gray-900">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <section id="home" aria-label="Introduction"><Hero /></section>
        <section id="about" aria-label="Professional summary"><About /></section>
        <section id="experience" aria-label="Professional experience and education"><Experience /></section>
        <section id="skills" aria-label="Core competencies"><Skills /></section>
        <section id="projects" aria-label="Selected projects"><Projects /></section>
        <Resume />
        <section id="contact" aria-label="Contact information"><Contact /></section>
      </main>
      <footer className="bg-gray-900 py-6 text-white dark:bg-gray-950 sm:py-8">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-gray-400 sm:text-base">© {new Date().getFullYear()} Ahmed Shahriyar Parvez Pranto. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
