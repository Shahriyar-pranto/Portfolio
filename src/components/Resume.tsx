'use client';

import { motion, useInView } from 'motion/react';
import { Download, ExternalLink, FileText } from 'lucide-react';
import { useRef } from 'react';

const resumeUrl = 'https://drive.google.com/file/d/1r_e3-7ugoY-MRBfTjpqTxWNo_5T44wOr/view?usp=drivesdk';

export function Resume() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section
      id="resume"
      ref={ref}
      aria-labelledby="resume-heading"
      className="bg-gray-50 px-4 py-16 transition-colors dark:bg-gray-800 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.55 }}
          className="flex flex-col items-start justify-between gap-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-10 md:flex-row md:items-center"
        >
          <div className="flex items-start gap-5">
            <div className="hidden rounded-xl bg-purple-50 p-4 text-purple-700 dark:bg-purple-950 dark:text-purple-300 sm:block">
              <FileText aria-hidden="true" className="h-7 w-7" />
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-purple-700 dark:text-purple-300">Resume</p>
              <h2 id="resume-heading" className="mb-3 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">A closer look at my experience</h2>
              <p className="max-w-2xl leading-relaxed text-gray-600 dark:text-gray-400">
                View my resume for a concise overview of my product design experience, skills, education, and qualifications.
              </p>
            </div>
          </div>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-lg bg-gray-900 px-5 py-3 font-semibold text-white transition-colors hover:bg-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 dark:bg-white dark:text-gray-900 dark:hover:bg-purple-100"
          >
            View / download resume
            <Download aria-hidden="true" className="h-4 w-4" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </motion.div>
        <p className="mt-3 text-center text-xs text-gray-500 dark:text-gray-400">
          <ExternalLink aria-hidden="true" className="mr-1 inline h-3 w-3" />Resume hosted on Google Drive.
        </p>
      </div>
    </section>
  );
}
