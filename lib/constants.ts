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

export type ContentBlock =
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'image'; src: string; alt: string; caption?: string }
  | { type: 'list'; items: string[] }

export type CaseStudy = {
  slug: string
  title: string
  thumbnail: string
  content: ContentBlock[]
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'masa-studio',
    title: 'MASA Studio Management App - JABA Web Design Project',
    thumbnail: '/project/masa-studio/masa-studio.png',
    content: [
      { type: 'heading', text: 'Description' },
      {
        type: 'paragraph',
        text: 'A production management platform for a Martial Arts studio with 600+ students, covering scheduling, enrolments and daily operations.',
      },
      { type: 'heading', text: 'Challenge' },
      {
        type: 'paragraph',
        text: 'Replace fragmented spreadsheets and manual processes with a reliable system that staff and families could use day-to-day. The platform required complex underlying logic, including multi-level account operations and automated course management workflows.',
      },
      { type: 'heading', text: 'Solution' },
      {
        type: 'paragraph',
        text: 'Built a full-stack app with React on the front end and .NET Core APIs backed by SQL Server and Firebase. The student profile sits at the centre of the system: class activity drives student records such as attendance, performance (linked to badges and certificates), mid-term class transfers, upgrades and belt promotions. Each behaviour is stored in its own table to keep queries fast and simple, and Firebase Cloud Messaging delivers related updates to students and parents.',
      },
      {
        type: 'list',
        items: [
          'Scheduling and student enrolment workflows',
          'Payments and operational tooling',
          'Production deployment for studio staff',
        ],
      },
      { type: 'heading', text: 'Outcome' },
      {
        type: 'paragraph',
        text: 'Shipped a live platform used in production by the studio. The platform has been used by the studio for over a year, and has been successful in streamlining the studio\'s operations and improving the efficiency of the staff.',
      },
    ],
  },
  {
    slug: 'trip-planner',
    title: 'Trip Planner Application - JABA Web Design Project',
    thumbnail: '/project/trip-planner/trip-planner.png',
    content: [
      { type: 'heading', text: 'Description' },
      {
        type: 'paragraph',
        text: 'A tourism planning platform that combines ATDW data with Google Maps so travellers can discover attractions and build personalised itineraries.',
      },
      { type: 'heading', text: 'Challenge' },
      {
        type: 'paragraph',
        text: 'Unify external tourism data and mapping into a coherent planning experience—filtering essential information from a large dataset and presenting it through a clear UI/UX with intuitive user interactions.',
      },
      { type: 'heading', text: 'Solution' },
      {
        type: 'paragraph',
        text: 'Implemented a React/JavaScript front end with Node.js and .NET Core services over SQL Server. Filtered essential fields from the ATDW API to keep the dataset manageable, used the Google Maps API to calculate routes between attractions and highlight them in distinct colours, and surfaced nearby events, accommodation and restaurants in a left-hand sidebar—giving travellers a complete, customisable itinerary.',
      },
      {
        type: 'list',
        items: [
          'ATDW data integration',
          'Google Maps-powered discovery',
          'Personalised itinerary building',
        ],
      },
      // { type: 'heading', text: 'Outcome' },
      // {
      //   type: 'paragraph',
      //   text: 'Delivered a working planning experience for travellers. Placeholder — add outcomes when ready.',
      // },
    ],
  },
  {
    slug: 'ai-agent-tools',
    title: 'AI Agent Tools - Personal Project',
    thumbnail: '/project/AI_agent/AI_agent_tools.png',
    content: [
      { type: 'heading', text: 'Description' },
      {
        type: 'paragraph',
        text: 'An AI assistant that reasons over user requests, chooses tools, and orchestrates multi-step actions with LangChain and LLMs.',
      },
      { type: 'heading', text: 'Challenge' },
      {
        type: 'paragraph',
        text: 'Design reliable tool selection and multi-step orchestration without brittle prompt-only flows. Placeholder — replace with the real agent design challenges.',
      },
      { type: 'heading', text: 'Solution' },
      {
        type: 'paragraph',
        text: 'Built with LangChain, Gemini, Node.js, and a React/Next.js interface. Placeholder — describe tool definitions, agent loop, and UI.',
      },
      {
        type: 'list',
        items: [
          'Tool selection and orchestration',
          'LLM-backed reasoning',
          'Interactive assistant UI',
        ],
      },
      { type: 'heading', text: 'Outcome' },
      {
        type: 'paragraph',
        text: 'Demonstrated an end-to-end agent capable of multi-step tool use. Placeholder — add results when ready.',
      },
    ],
  },
]

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((study) => study.slug === slug)
}

export function getAllCaseStudySlugs(): string[] {
  return CASE_STUDIES.map((study) => study.slug)
}

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  // { label: 'Experience', href: '#experience' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Contact', href: '#contact' },
]
