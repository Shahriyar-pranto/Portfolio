export type ProjectIconName = 'briefcase' | 'building' | 'globe' | 'monitor' | 'smartphone' | 'users';

export type PortfolioProject = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  icon: ProjectIconName;
  color: string;
  link?: string;
};

// The six newest projects supplied for the portfolio are listed first.
export const projects: PortfolioProject[] = [
  {
    title: 'Cyber Squad Inc.',
    category: 'Company Website',
    description: 'Web design and product experience work for Cyber Squad Inc.',
    tags: ['Web Design', 'Company Website'],
    icon: 'globe',
    color: 'from-cyan-500 to-blue-600',
    link: 'https://cybersquadinc.com/',
  },
  {
    title: 'Applygoal',
    category: 'Education Platform',
    description: 'A web experience for Applygoal and its education application services.',
    tags: ['Web', 'Education', 'Product Design'],
    icon: 'monitor',
    color: 'from-violet-500 to-indigo-600',
    link: 'https://applygoal.com/',
  },
  {
    title: 'Applygoal CRM',
    category: 'CRM Application',
    description: 'The Applygoal CRM platform for managing application-related workflows.',
    tags: ['CRM', 'Web App', 'Workflow Design'],
    icon: 'briefcase',
    color: 'from-emerald-500 to-teal-600',
    link: 'https://crm.applygoal.com/',
  },
  {
    title: 'JR Sakif Portfolio',
    category: 'Personal Portfolio',
    description: 'A personal portfolio website created for JR Sakif.',
    tags: ['Portfolio', 'Web Design'],
    icon: 'smartphone',
    color: 'from-fuchsia-500 to-purple-600',
    link: 'https://jrsakif.com/',
  },
  {
    title: 'Bdjobs Web & App',
    category: 'Job Platform',
    description: 'Web and mobile experiences for job seekers using the Bdjobs platform.',
    tags: ['Job Portal', 'Web', 'Mobile App'],
    icon: 'users',
    color: 'from-orange-500 to-rose-500',
    link: 'https://bdjobs.com/h/',
  },
  {
    title: 'Bdjobs Employer Web & App',
    category: 'Recruitment Platform',
    description: 'Employer-facing web and mobile recruitment experience for Bdjobs.',
    tags: ['Recruitment', 'Web', 'Mobile App'],
    icon: 'building',
    color: 'from-sky-500 to-blue-700',
    link: 'https://recruiter.bdjobs.com/',
  },
  {
    title: 'Apple Gadgets',
    category: 'eCommerce',
    description: 'UX/UI improvements for the eCommerce website and mobile app, focused on navigation, shopping journeys, and purchase interactions.',
    tags: ['eCommerce', 'Web', 'Mobile App', 'UX Optimization'],
    icon: 'smartphone',
    color: 'from-orange-500 to-rose-500',
    link: 'https://applegadgets.com.bd',
  },
  {
    title: 'AGmart',
    category: 'eCommerce',
    description: 'Website and mobile app product experience design, with usability improvements across web and mobile shopping journeys.',
    tags: ['eCommerce', 'Web', 'Mobile App', 'Product Design'],
    icon: 'smartphone',
    color: 'from-purple-500 to-blue-500',
    link: 'https://agmart.com.bd',
  },
  {
    title: 'Internal POS & HRM Systems',
    category: 'Enterprise Applications',
    description: 'Interface and workflow design for internal business applications, making operational tasks and employee processes easier to use.',
    tags: ['POS', 'HRM', 'Enterprise', 'Workflow Design'],
    icon: 'briefcase',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Recell',
    category: 'Independent UX Case Study',
    description: 'An independent UX case study exploring a product problem, user needs, and a proposed user-centered solution.',
    tags: ['UX Research', 'Case Study', 'Product Design'],
    icon: 'smartphone',
    color: 'from-emerald-500 to-teal-600',
  },
];
