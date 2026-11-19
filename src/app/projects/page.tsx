import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ProjectsGrid } from '@/components/ProjectsGrid';

export const metadata: Metadata = {
  title: 'Projects | Ahmed Shahriyar Parvez Pranto',
  description: 'Explore web, mobile, CRM, recruitment, and product design projects by Ahmed Shahriyar Parvez Pranto.',
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12 transition-colors dark:bg-gray-900 sm:px-6 sm:py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <Link href="/#projects" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-purple-700 hover:text-purple-900 dark:text-purple-300 dark:hover:text-purple-200">
          <ArrowLeft aria-hidden="true" className="h-4 w-4" /> Back to portfolio
        </Link>
        <header className="mb-10 text-center sm:mb-14">
          <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">All Projects</h1>
          <div className="mx-auto mb-5 h-1 w-32 bg-purple-600 dark:bg-purple-500" />
          <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
            Explore my work across company websites, web and mobile products, CRM, eCommerce, and recruitment platforms.
          </p>
        </header>
        <ProjectsGrid />
      </div>
    </main>
  );
}
