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
    linkedin: 'https://www.linkedin.com/in/xiachen-jiang-b84434192/',
    website: 'https://www.james-jiang.com',
    resume: '/Resume-Xiachen-Jiang-26.pdf',
  },
} as const

export const EXPERIENCE = [
  {
    id: 1,
    role: 'Web/Software Developer',
    company: 'JABA Web Design',
    location: 'Adelaide, Australia',
    period: 'Sep 2024 – Present',
    bullets: [
      'Delivered full-stack software solutions across 30+ commercial client projects, building scalable web applications using React, Angular, TypeScript, ASP.NET Core and SQL Server.',
      'Designed and implemented RESTful APIs, backend services and business workflows supporting frontend applications, third-party integrations and database-driven systems.',
      'Developed customer-facing features, CMS functionality, reporting modules and internal business tools that improved operational efficiency and user experience.',
      'Optimised SQL Server performance through query tuning, indexing and database design improvements, enhancing application responsiveness and production stability.',
      'Automated build, deployment and release processes using Azure DevOps, Git and CI/CD pipelines, improving deployment reliability and reducing manual effort.',
      'Investigated and resolved complex issues across frontend, backend, databases and production environments using root-cause analysis and long-term solutions.',
      'Collaborated with clients, designers and cross-functional teams to analyse requirements, define technical solutions and deliver production-ready software in Agile environments.',
      'Explored AI-assisted development workflows, prompt engineering and agent-based automation to improve engineering productivity and streamline repetitive tasks.',
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
      "A production management platform used by a dance studio with over 600 students to streamline scheduling, student enrolments, payments and day-to-day operations.",
    tech: ['React', 'JavaScript', '.NET Core', 'SQL Server', 'Firebase', 'Material UI'],
    github: null,
    live: null,
    thumbnail: '/project/masa-studio/masa-studio.png',
    video: '/project/masa-studio/MASA-studio-project.mov',
    gradient: 'from-violet-500/20 to-purple-600/20',
  },
  {
    id: 2,
    title: 'Trip Planner Application',
    description:
      'A tourism planning platform integrating ATDW data and Google Maps to help travellers discover attractions and build personalised itineraries.',
    tech: ['React', 'TypeScript', 'Node.js', '.NET Core', 'SQL Server'],
    github: null,
    live: null,
    thumbnail: '/project/trip-planner/trip-planner.png',
    video: '/project/trip-planner/trip-planner.mov',
    gradient: 'from-purple-500/20 to-cyan-600/20',
  },
  {
    id: 3,
    title: 'AI Agent Tools',
    description: 'An AI-powered assistant capable of reasoning through user requests, selecting the right tools and orchestrating multiple actions using LangChain and LLMs.',
    tech: ['LangChain', 'Typescript', 'Gemini API', 'Node.js', 'LLM', 'React', 'Next.js'],
    github: 'https://github.com/Xiachen-Jiang/LangChain_AI_Agent',
    live: null,
    thumbnail: '/project/AI_agent/AI_agent_tools.png',
    video: '/project/AI_agent/LangChain_AI_Agent_Presentation.mov',
    gradient: 'from-indigo-500/20 to-purple-600/20',
  },
]

export const WEBSITES = [
  { name: 'Adelaide Footy', url: 'https://adelaidefooty.com.au', domain: 'adelaidefooty.com.au', logo: '/built_website/logo-adelaidefooty.png' },
  { name: 'VS Sassoon', url: 'https://vssassoon.com.au', domain: 'vssassoon.com.au', logo: '/built_website/logo-vssassoon.png' },
  { name: 'Cuisinart AU', url: 'https://cuisinart.com.au', domain: 'cuisinart.com.au', logo: '/built_website/logo-cuisinart.png' },
  { name: 'Scunci', url: 'https://scunci.com.au', domain: 'scunci.com.au', logo: '/built_website/logo-scunci.png' },
  { name: 'Midsec', url: 'https://midsec.com.au', domain: 'midsec.com.au', logo: '/built_website/logo-midsec.png' },
  { name: 'MASA', url: 'https://masa.com.au', domain: 'masa.com.au', logo: '/built_website/logo-masa.png' },
  { name: 'Vilis', url: 'https://vilis.com', domain: 'vilis.com', logo: '/built_website/logo-vilis.png' },
  { name: 'Caron Milham', url: 'https://caronmilham.com', domain: 'caronmilham.com', logo: '/built_website/logo-caronmilham.png' },
  { name: 'Whyalla', url: 'https://whyalla.com', domain: 'whyalla.com', logo: '/built_website/logo-whyalla.png' },
  { name: 'Nelson Teamwear', url: 'https://nelsonteamwear.com.au', domain: 'nelsonteamwear.com.au', logo: '/built_website/logo-nelson.png' },
  { name: 'AIML Shop', url: 'https://aiml.shop', domain: 'aiml.shop', logo: '/built_website/logo-aiml.png' },
  { name: 'MASA APP', url: 'https://melrosepark.masastudios.com.au/', domain: 'melrosepark.masastudios.com.au', logo: '/built_website/logo-masaapp.png' },
]

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  // { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
