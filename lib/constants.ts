export const PROFILE = {
  name: 'James Jiang',
  title: 'Full Stack Web Developer',
  bio: 'Full Stack Developer with 2+ years of experience delivering end-to-end web applications across both frontend and backend environments. Skilled in building responsive UIs and robust server-side logic to support scalable, user-focused solutions.',
  email: 'jiangxiachen01@outlook.com',
  skills: {
    frontend: ['React', 'Angular', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3'],
    backend: ['C#', 'ASP.NET Core', 'Node.js', 'RESTful APIs', 'PHP'],
    databases: ['SQL Server', 'PostgreSQL', 'MySQL', 'Firebase'],
    tools: ['Git', 'Azure DevOps', 'Docker', 'CI/CD', 'Jest', 'NUnit'],
  },
  links: {
    github: 'https://github.com/Xiachen-Jiang',
    linkedin: 'https://linkedin.com/in/xiachen-jiang/',
    website: 'https://www.james-jiang.com',
    resume: '#',
  },
} as const

export const EXPERIENCE = [
  {
    id: 1,
    role: 'Software Developer',
    company: 'JABA Web Design',
    location: 'Adelaide, Australia',
    period: 'Sep 2024 – Present',
    bullets: [
      'Developed and maintained responsive, accessible web applications using React, Angular, TypeScript, JavaScript, HTML5 and CSS3, improving cross-device compatibility and user experience.',
      'Designed and implemented RESTful APIs and business logic with C# ASP.NET Core MVC, supporting scalable and secure client systems.',
      'Built and optimised SQL Server databases and queries, improving data retrieval performance and system reliability.',
      'Set up and maintained CI/CD pipelines with Git-based workflows, enabling automated testing and deployment to reduce manual release effort and errors.',
      'Leveraged AI-assisted coding tools to accelerate feature delivery, improve code consistency, and reduce repetitive development tasks while maintaining high code quality standards.',
      'Explored and prototyped AI-driven workflow automation solutions, including lightweight AI agents to streamline client onboarding processes and automate document handling.',
      'Implemented dynamic content management, form processing and reporting features, reducing page load times and improving client operational efficiency.',
      'Applied SEO best practices and performance tuning, increasing website visibility and engagement across client platforms.',
      'Developed unit tests for front-end components (Jest) and back-end services (NUnit), improving code quality and long-term maintainability.',
      'Built and maintained a custom CMS platform, enabling non-technical users to manage content and supporting ongoing business needs.',
    ],
  },
  {
    id: 2,
    role: 'Software Developer',
    company: 'James Anthony Consulting',
    location: 'Adelaide, Australia',
    period: 'Apr 2024 – Jun 2024',
    bullets: [
      'Built front-end components with React, TypeScript, and Bootstrap, enhancing UI consistency and responsiveness for a web-based device management application.',
      'Developed backend functionality using C# ASP.NET Core, integrating RESTful APIs and authentication.',
      'Collaborated in Agile sprints, refining features and resolving bugs promptly to meet project milestones.',
      'Ensured software quality and performance through code reviews, maintaining high development standards across admin portal, device management, and organisation modules.',
    ],
  },
]

export const PROJECTS = [
  {
    id: 1,
    title: 'MASA Studio Management App',
    description:
      "A full-stack management application to manage the studio's daily operations, including class scheduling, student management, and studio configuration.",
    tech: ['React', 'JavaScript', '.NET Core', 'SQL Server', 'Firebase', 'Material UI'],
    github: 'https://github.com/Xiachen-Jiang',
    live: null,
    video: '/project/MASA-studio-project.mov',
    gradient: 'from-violet-500/20 to-purple-600/20',
  },
  {
    id: 2,
    title: 'Trip Planner Application',
    description:
      'A comprehensive trip planning application using ATDW data and Google Maps API to provide users with a seamless and intuitive trip planning experience.',
    tech: ['React', 'TypeScript', 'Node.js', '.NET Core', 'SQL Server'],
    github: 'https://github.com/Xiachen-Jiang',
    live: null,
    video: '/project/trip-planner.mov',
    gradient: 'from-purple-500/20 to-cyan-600/20',
  },
  {
    id: 3,
    title: 'Coming Soon',
    description: 'More projects in the pipeline. Check back soon or visit GitHub for the latest work.',
    tech: [],
    github: 'https://github.com/Xiachen-Jiang',
    live: null,
    video: null,
    gradient: 'from-slate-600/10 to-slate-700/10',
    comingSoon: true,
  },
]

export const WEBSITES = [
  { name: 'Adelaide Footy', url: 'https://adelaidefooty.com.au', domain: 'adelaidefooty.com.au', logo: '/built_website/logo-adelaidefooty.png' },
  { name: 'VS Sassoon', url: 'https://vssassoon.com.au', domain: 'vssassoon.com.au', logo: '/built_website/logo-vssassoon.png' },
  { name: 'Cuisinart AU', url: 'https://cuisinart.com.au', domain: 'cuisinart.com.au', logo: '/built_website/logo-cuisinart.png' },
  { name: 'Midsec', url: 'https://midsec.com.au', domain: 'midsec.com.au', logo: '/built_website/logo-midsec.png' },
  { name: 'MASA', url: 'https://masa.com.au', domain: 'masa.com.au', logo: '/built_website/logo-masa.png' },
  { name: 'Vilis', url: 'https://vilis.com', domain: 'vilis.com', logo: '/built_website/logo-vilis.png' },
  { name: 'Caron Milham', url: 'https://caronmilham.com', domain: 'caronmilham.com', logo: '/built_website/logo-caronmilham.png' },
  { name: 'Whyalla', url: 'https://whyalla.com', domain: 'whyalla.com', logo: '/built_website/logo-whyalla.png' },
  { name: 'Nelson Teamwear', url: 'https://nelsonteamwear.com.au', domain: 'nelsonteamwear.com.au', logo: '/built_website/logo-nelson.png' },
  { name: 'AIML Shop', url: 'https://aiml.shop', domain: 'aiml.shop', logo: '/built_website/logo-aiml.png' },
]

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
