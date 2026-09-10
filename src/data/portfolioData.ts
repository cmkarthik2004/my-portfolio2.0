import {
  Project,
  SiteConfig,
  SkillCategory,
  WorkflowStage,
  ServiceItem,
  EducationItem,
  CertificationItem,
  StartProjectStep,
  BookingSlot,
  FAQCategory,
  FAQItem,
} from '../types';

export const siteConfig: SiteConfig = {
  name: 'C M Karthik',
  role: 'Freelance Full-Stack Developer',
  eyebrow: 'FREELANCE FULL-STACK DEVELOPER • APPLIED AI/ML',
  email: 'cmkarthi2004@gmail.com',
  phone: '+91 7899443730',
  github: 'https://github.com/cmkarthik2004',
  linkedin: 'https://www.linkedin.com/in/c-m-karthik',
  location: 'Bengaluru, Karnataka',
  timezone: 'IST (UTC+5:30)',
  experienceYears: '2026 – Present',
  // Path for user's personal photo
  profilePhoto: '/images/myphoto.jpeg',
  aboutPhoto: '/images/myphoto.jpeg',
  resume: {
    filePath: '/resume/CM-Karthik-Resume-2026.pdf',
    fileName: 'CM-Karthik-Resume-2026.pdf',
    fileType: 'pdf',
    lastUpdated: 'Updated 2026',
    summary:
      'M.Sc. Data Science student and freelance full-stack developer experienced in designing, building, and deploying real-world client applications and applied AI/ML systems — spanning full-stack web development, federated learning, and cloud-based data science. Independently acquired and delivered multiple paying client engagements, owning every project end-to-end.',
  },
  behindTheWorkPhotos: [
    {
      url: '/images/work-desk.jpg',
      caption: 'Workspace & development setup for backend architecture & ML simulations',
      altText: 'C M Karthik development workspace setup',
    },
  ],
};

export const PERSONAL_INFO = {
  name: siteConfig.name,
  eyebrow: siteConfig.eyebrow,
  tagline: 'I build web applications and intelligent software solutions.',
  subheadline: 'Freelance Full-Stack Developer with applied AI/ML and Data Science capabilities.',
  bio: 'I build web applications and software solutions, with additional applied AI/ML and Data Science capabilities.',
  availabilityStatus: 'Available for Freelance Projects',
  email: siteConfig.email,
  phone: siteConfig.phone,
  github: siteConfig.github,
  linkedin: siteConfig.linkedin,
  location: siteConfig.location,
  timezone: siteConfig.timezone,
  experienceYears: siteConfig.experienceYears,
};

export const RESUME_DATA = {
  name: 'C M KARTHIK',
  title: 'Aspiring Software Developer | Python & AI/ML Enthusiast',
  contact: {
    email: 'cmkarthi2004@gmail.com',
    phone: '+91 7899443730',
    location: 'Bengaluru, Karnataka',
    github: 'https://github.com/cmkarthik2004',
    githubDisplay: 'github.com/cmkarthik2004',
    linkedin: 'https://www.linkedin.com/in/c-m-karthik',
    linkedinDisplay: 'linkedin.com/in/c-m-karthik',
  },
  summary:
    'M.Sc. Data Science student and freelance full-stack developer experienced in designing, building, and deploying real-world client applications and applied AI/ML systems — spanning full-stack web development, federated learning, and cloud-based data science. Independently acquired and delivered multiple paying client engagements, owning every project end-to-end.',
  technicalSkills: [
    { category: 'Languages', items: 'PHP, Python, Java, JavaScript, HTML, CSS' },
    { category: 'Frameworks & DB', items: 'Django, Flask, Bootstrap, JDBC, MySQL, SQL' },
    { category: 'Data & Analytics', items: 'Power BI, Data Analytics, Data Visualization, Excel, Google Colab' },
    { category: 'Cloud & Deployment', items: 'Google Cloud Platform, OCI, Hostinger, Git, GitHub, Linux, VPS Management, REST APIs' },
    { category: 'Tools & IDEs', items: 'VS Code, Jupyter Notebook, Google Colab, XAMPP, Postman, GitHub Desktop' },
    { category: 'AI Tools', items: 'ChatGPT, Google Gemini, Claude, GitHub Copilot, Genspark, Napkin AI, Gamma, Lovable' },
    { category: 'Other', items: 'Razorpay Integration, Requirement Analysis, Project Management, Testing & Debugging' },
  ],
  experience: [
    {
      role: 'Freelance Full-Stack Developer',
      organization: 'Independent Client Delivery',
      period: '2026 – Present',
      location: 'Bengaluru / Remote',
      highlights: [
        'Delivered multiple client web applications end-to-end — gathering requirements, building with PHP/Python (Django, Flask), JavaScript, and MySQL, deploying on Linux VPS via Git/GitHub, and integrating Razorpay payments with ongoing production support.',
      ],
    },
  ],
  projects: [
    {
      title: 'TalesTexts — Publishing Platform',
      period: '2025 – Present',
      stack: 'Django · MySQL · Bootstrap · JavaScript | talestexts.com',
      liveUrl: 'https://talestexts.com',
      highlights: [
        'Built and deployed a publishing platform with role-based dashboards, Argon2-secured authentication, and file management on Hostinger KVM VPS.',
      ],
    },
    {
      title: 'Kriyaatmak — Photography Studio Platform',
      period: '2026 – Present',
      stack: 'PHP · MySQL · JavaScript · Razorpay | kriyaatmak.com',
      liveUrl: 'https://kriyaatmak.com',
      highlights: [
        'Redesigned a client photography platform with booking workflows, galleries, and Razorpay-integrated partial payments; manage ongoing deployment.',
      ],
    },
    {
      title: 'Department Website — Government First Grade College, Yelahanka',
      period: '2026',
      stack: 'HTML · CSS · JavaScript | psychologydepartment.in',
      liveUrl: 'https://psychologydepartment.in',
      highlights: [
        'Developed and deployed the official Department of Psychology website end-to-end, independently.',
      ],
    },
    {
      title: 'Federated Skin Disease Detection',
      period: '2026',
      stack: 'MobileNetV2 · Flower Federated Learning · Flask | GitHub: federated-skin-disease-detection',
      githubUrl: 'https://github.com/cmkarthik2004/federated-skin-disease-detection',
      highlights: [
        'Built a privacy-preserving federated learning system (FedAvg, Replay Buffer, Freeze Layers, Validation Gate) with a doctor-verification workflow, achieving 75.41% global federated accuracy.',
      ],
    },
    {
      title: 'Smart LPG Booking System',
      period: '2025',
      stack: 'Java · JDBC · MySQL | GitHub: AF05148725-Smart-LPG-Booking-System-JDBC',
      githubUrl: 'https://github.com/cmkarthik2004/AF05148725-Smart-LPG-Booking-System-JDBC',
      highlights: [
        'Built a Java/JDBC console application with conditional householder-vs-commercial booking logic, address-based delivery tracking, and full CRUD operations.',
      ],
    },
    {
      title: 'DeptSync — Academic Management System',
      period: '2024 – 2025',
      stack: 'Flask · MySQL · Python · JavaScript',
      githubUrl: 'https://github.com/cmkarthik2004/DeptSync',
      highlights: [
        'Built role-based dashboards for HODs, Staff, and Students with QR attendance, OTP verification, and multi-level leave workflows.',
      ],
    },
    {
      title: 'AI Smart Vision Assistant',
      period: '2025',
      stack: 'Flask · YOLOv8 · MySQL · Python',
      highlights: [
        'Built a real-time object detection assistant with multilingual voice commands and self-learning correction.',
      ],
    },
  ],
  certifications: [
    { title: 'Oracle OCI 2025 Certified Data Science Professional', issuer: 'Oracle', date: 'Oct 2025–27' },
    { title: 'CSCU', issuer: 'EC-Council', date: 'Nov 2025' },
    { title: 'Claude Code 101', issuer: 'Anthropic', date: 'Apr 2026' },
    { title: 'TechA Python Developer', issuer: 'Infosys Springboard', date: 'Jan 2026' },
    { title: 'Generative AI for Educators', issuer: 'Google/ULSA', date: 'Jul 2025' },
    { title: 'Web Development with Django', issuer: 'BITM', date: 'Jul 2024' },
    { title: 'Software Testing', issuer: 'Besant Technologies', date: 'Jan 2025' },
    { title: 'Responsible AI for Youth', issuer: 'Intel / Govt', date: 'Jul 2020' },
    { title: 'Digital 101', issuer: 'Future Skills Prime', date: 'Jun 2023' },
  ],
  education: [
    {
      degree: 'M.Sc. Data Science',
      institution: 'Dayananda Sagar University',
      score: 'CGPA: 7.59',
      status: 'Pursuing (2024 – 2026)',
      highlights: [
        'Specialization in Applied Machine Learning, Deep Learning, Computer Vision, and Decentralized Federated Learning Systems',
      ],
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'Veerashaiva Degree College, Cantonment, Ballari',
      score: 'CGPA: 8.43',
      status: 'Graduated (2022 – 2025)',
      highlights: [
        'Graduated with High Distinction (8.43 CGPA). Strong foundations in Data Structures, Relational DBs (MySQL), and Software Engineering.',
      ],
    },
    {
      degree: '2nd PUC (PCMB)',
      institution: 'Independent College',
      score: '58.68%',
      status: 'Completed (2020 – 2022)',
      highlights: ['Science background in Physics, Chemistry, Mathematics, and Biology.'],
    },
    {
      degree: 'SSLC / 10th',
      institution: 'Morarji School, Ramasagar, Kampli, Ballari',
      score: '81.44%',
      status: 'Completed (2019 – 2020)',
      highlights: ['Graduated with First Class Distinction (81.44%).'],
    },
  ],
  languages: ['English (Fluent)', 'Kannada (Fluent)', 'Hindi (Fluent)', 'Telugu (Basic)'],
  coreSkills: {
    languages: ['PHP', 'Python', 'Java', 'JavaScript', 'HTML', 'CSS'],
    frameworks: ['Django', 'Flask', 'Bootstrap', 'JDBC', 'MySQL', 'SQL'],
    devopsAndTools: ['Google Cloud Platform', 'OCI', 'Hostinger', 'Git', 'GitHub', 'Linux', 'VPS Management', 'REST APIs'],
    specializations: ['Applied AI/ML', 'Federated Learning (FedAvg)', 'Full-Stack Web Architecture', 'Razorpay Integration', 'Data Science & Analytics'],
  },
  projectsSummary: [
    'TalesTexts — Publishing Platform (Django, MySQL, Bootstrap, JavaScript, Linux VPS)',
    'Kriyaatmak — Photography Studio Platform (PHP, MySQL, JavaScript, Razorpay)',
    'Department Website — GFGC Yelahanka (HTML, CSS, JavaScript | psychologydepartment.in)',
    'Federated Skin Disease Detection — Privacy-Preserving Decentralized ML (MobileNetV2, Flower, Flask)',
    'Smart LPG Booking System — Java/JDBC Database System (Java, JDBC, MySQL)',
    'DeptSync — Academic Management System (Flask, MySQL, Python, JavaScript)',
    'AI Smart Vision Assistant — Real-Time Object Detection (Flask, YOLOv8, MySQL, Python)',
  ],
};

export const ABOUT_PILLARS = [
  {
    number: '01',
    title: 'Freelance Development',
    subtitle: 'Real-world client applications',
    description:
      'Translating client business objectives into fully functional, reliable software. Managing client conversations, scope definition, timelines, and delivering end-to-end solutions.',
    icon: 'Briefcase',
    highlights: ['End-to-End Delivery', 'Direct Client Collaboration', 'Payment Integrations', 'Long-term Support'],
  },
  {
    number: '02',
    title: 'Full-Stack Development',
    subtitle: 'PHP, Python, Django, Flask, JavaScript, MySQL',
    description:
      'Designing clean, maintainable architectures across frontend and backend. Developing custom APIs, responsive UIs, database schemas, and robust business logic.',
    icon: 'Code2',
    highlights: ['RESTful API Architecture', 'Relational Database Design', 'Secure Authentication', 'Responsive Interfaces'],
  },
  {
    number: '03',
    title: 'AI/ML',
    subtitle: 'Computer vision and federated learning',
    description:
      'Applying machine learning and data science techniques to solve tangible problems. Specializing in computer vision pipelines and privacy-preserving federated learning systems.',
    icon: 'BrainCircuit',
    highlights: ['Computer Vision (OpenCV)', 'Federated Learning Systems', 'Data Pipelines & Preprocessing', 'Model Integration'],
  },
  {
    number: '04',
    title: 'Deployment',
    subtitle: 'Linux VPS, Git/GitHub, cloud platforms and production deployment',
    description:
      'Taking code out of local environments and into production. Setting up Linux VPS servers, Nginx reverse proxies, SSL certificates, continuous deployment, and system monitoring.',
    icon: 'Server',
    highlights: ['Linux VPS Configuration', 'Nginx & SSL Hardening', 'Git / GitHub Workflows', 'Production Monitoring'],
  },
];

export const WORKFLOW_STAGES: WorkflowStage[] = [
  {
    number: '01',
    title: 'Requirements',
    subtitle: 'Discovery, Scoping & Architecture',
    description:
      'Deep dive into client goals, functional specifications, data flows, and tech stack selection to build a clear, milestone-driven roadmap.',
    tasks: [
      'Client discovery calls & goal clarification',
      'Feature breakdown and technical feasibility mapping',
      'Database schema & system architecture design',
      'Wireframing UI flows and API contracts',
    ],
    deliverables: ['Technical Specification', 'Database Schema Blueprint', 'Project Milestones'],
    iconName: 'FileText',
  },
  {
    number: '02',
    title: 'Development',
    subtitle: 'Full-Stack Implementation & Integrations',
    description:
      'Writing clean, modular, and maintainable code. Building intuitive frontend views, robust backend endpoints, and integrating payment gateways like Razorpay.',
    tasks: [
      'Backend REST API & business logic implementation',
      'Frontend responsive interface engineering',
      'Payment gateway integration (Razorpay & Webhooks)',
      'Security hardening (CSRF, JWT, SQL injection defense)',
    ],
    deliverables: ['Interactive Frontends', 'Secure Backend APIs', 'Payment Gateway Integration'],
    iconName: 'Cpu',
  },
  {
    number: '03',
    title: 'Testing',
    subtitle: 'Quality Assurance & Performance Tuning',
    description:
      'Rigorous testing across browsers, screen sizes, and network environments to catch edge cases, fix defects, and guarantee high availability.',
    tasks: [
      'Cross-browser & mobile viewport responsiveness testing',
      'Edge case payment webhook & error handling validation',
      'Database query optimization & load timing analysis',
      'Code refactoring & security checklist verification',
    ],
    deliverables: ['Bug-Free Staging Build', 'Performance Audit', 'Security Verification'],
    iconName: 'ShieldCheck',
  },
  {
    number: '04',
    title: 'Deployment',
    subtitle: 'Production Launch & Linux VPS Setup',
    description:
      'Deploying the verified application onto live production infrastructure with domain binding, SSL encryption, database migrations, and web server configuration.',
    tasks: [
      'Linux VPS environment provisioning & security firewalling',
      'Nginx reverse proxy, Gunicorn/PHP-FPM & SSL installation',
      'Automated Git pull workflows and database migration',
      'Domain DNS configuration and staging-to-prod verification',
    ],
    deliverables: ['Live Production URL', 'SSL Certificate Active', 'Automated Backups'],
    iconName: 'Rocket',
  },
  {
    number: '05',
    title: 'Production Support',
    subtitle: 'Monitoring, Debugging & Continuous Care',
    description:
      'Providing ongoing technical support, log monitoring, user feedback adaptations, and feature extensions to keep the system running smoothly.',
    tasks: [
      'System uptime & error log monitoring',
      'Client handover training & admin walkthroughs',
      'Iterative improvements based on real user feedback',
      'Security updates & scheduled database backups',
    ],
    deliverables: ['Support Documentation', 'Health Check Reports', 'Maintenance Handover'],
    iconName: 'LifeBuoy',
  },
];

export const FREELANCE_TECH_STACK = [
  { name: 'PHP', category: 'Backend' },
  { name: 'Python', category: 'Backend & AI' },
  { name: 'Django', category: 'Backend' },
  { name: 'Flask', category: 'Backend & API' },
  { name: 'JavaScript', category: 'Frontend' },
  { name: 'MySQL', category: 'Database' },
  { name: 'Git', category: 'Version Control' },
  { name: 'GitHub', category: 'Collaboration' },
  { name: 'Linux', category: 'DevOps & Server' },
  { name: 'Razorpay', category: 'Payment Integration' },
];

/**
 * Real-world project showcase in exact prioritized order.
 * - Live URLs verified for live projects (TalesTexts, Kriyaatmak, GFGC Psychology Department).
 * - No fake live URLs or fake GitHub links for projects that do not have them.
 * - Configured with standard screenshot paths in /projects/{slug}/...
 */
export const PROJECTS: Project[] = [
  {
    id: 'talestexts',
    name: 'TalesTexts',
    category: 'Publishing Platform',
    categoryType: 'fullstack',
    year: '2025 – Present',
    shortDescription:
      'Built and deployed a publishing platform with role-based dashboards, Argon2-secured authentication, and file management on Hostinger KVM VPS.',
    description:
      'Built and deployed a publishing platform with role-based dashboards, Argon2-secured authentication, and file management on Hostinger KVM VPS. TalesTexts provides an immersive reading and publishing environment for authors and readers with production-level security and performance.',
    technologies: ['Django', 'MySQL', 'Bootstrap', 'JavaScript', 'Argon2', 'Hostinger KVM VPS'],
    liveUrl: 'https://talestexts.com',
    githubUrl: '',
    images: [
      '/projects/talestexts/home.png',
      '/projects/talestexts/dashboard.png',
      '/projects/talestexts/reader.png',
    ],
    gallery: [
      {
        url: '/projects/talestexts/home.png',
        caption: 'TalesTexts landing portal and featured literary collection',
        altText: 'TalesTexts publishing platform homepage',
      },
      {
        url: '/projects/talestexts/dashboard.png',
        caption: 'Author manuscript editor and publication submission manager',
        altText: 'TalesTexts author content management dashboard',
      },
      {
        url: '/projects/talestexts/reader.png',
        caption: 'Distraction-free responsive reading interface with typography controls',
        altText: 'TalesTexts reader view with formatted content',
      },
    ],
    features: [
      'Role-based dashboards for authors, readers, and editorial managers',
      'Argon2-secured cryptographic authentication system protecting user credentials',
      'Structured file and manuscript management with high-speed asset delivery',
      'Configured and maintained production deployment on Hostinger KVM VPS with Nginx and SSL',
    ],
    myContribution:
      'Built and deployed the publishing platform with role-based dashboards, Argon2-secured authentication, and file management on Hostinger KVM VPS.',
    result:
      'Live in production at talestexts.com, providing dependable literary publishing workflows with 99.9% uptime.',
    architecture: {
      frontend: 'Bootstrap 5 & Custom Responsive JavaScript',
      backend: 'Django Web Framework with Argon2 Auth Guards',
      database: 'MySQL Relational Database with Indexed Queries',
      deployment: 'Hostinger KVM VPS (Gunicorn + Nginx + SSL)',
    },
    metrics: [
      { label: 'Status', value: 'Live in Production' },
      { label: 'Domain', value: 'talestexts.com' },
      { label: 'Hosting', value: 'Hostinger KVM VPS' },
    ],
    featured: true,
  },
  {
    id: 'kriyaatmak',
    name: 'Kriyaatmak',
    category: 'Photography Studio Platform',
    categoryType: 'freelance',
    year: '2026 – Present',
    shortDescription:
      'Redesigned a client photography platform with booking workflows, galleries, and Razorpay-integrated partial payments; manage ongoing deployment.',
    description:
      'Redesigned a client photography platform with booking workflows, galleries, and Razorpay-integrated partial payments; manage ongoing deployment. Features custom service cataloging, client inquiries, Razorpay payment gateway integration with cryptographic webhook verification, and an administrative control suite.',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'Razorpay', 'HTML5/CSS3', 'Linux VPS'],
    liveUrl: 'https://kriyaatmak.com',
    githubUrl: '',
    images: [
      '/projects/kriyaatmak/home.png',
      '/projects/kriyaatmak/portal.png',
      '/projects/kriyaatmak/checkout.png',
    ],
    gallery: [
      {
        url: '/projects/kriyaatmak/home.png',
        caption: 'Kriyaatmak photography studio showcase and client onboarding',
        altText: 'Kriyaatmak commercial web platform homepage',
      },
      {
        url: '/projects/kriyaatmak/portal.png',
        caption: 'Interactive photography galleries and dynamic booking calendar',
        altText: 'Kriyaatmak service catalog and customer booking interface',
      },
      {
        url: '/projects/kriyaatmak/checkout.png',
        caption: 'Razorpay checkout overlay with server-side signature verification',
        altText: 'Kriyaatmak Razorpay payment gateway integration',
      },
    ],
    features: [
      'Redesigned client photography studio platform with interactive galleries and booking workflows',
      'Razorpay-integrated partial payments with automated webhook signature verification',
      'Client inquiry management and shoot scheduling administrative system',
      'Ongoing production Linux VPS management, SSL maintenance, and database security',
    ],
    myContribution:
      'Redesigned the client photography platform with booking workflows, galleries, and Razorpay-integrated partial payments; manage ongoing deployment.',
    result:
      'Actively in service at kriyaatmak.com with 100% payment reconciliation and streamlined client booking.',
    architecture: {
      frontend: 'Vanilla JavaScript & Mobile-First Semantic CSS3',
      backend: 'PHP Modular MVC Backend with Secure Session & Auth Handler',
      database: 'MySQL Relational Schema for bookings and client galleries',
      deployment: 'Linux VPS (Nginx + PHP-FPM + SSL)',
      payments: 'Razorpay Partial Payments API & Webhook Layer',
    },
    metrics: [
      { label: 'Status', value: 'Live in Production' },
      { label: 'Domain', value: 'kriyaatmak.com' },
      { label: 'Payments', value: 'Razorpay Partial Payments' },
    ],
    featured: true,
  },
  {
    id: 'department-website',
    name: 'Department Website — GFGC Yelahanka',
    category: 'Institutional Web Portal',
    categoryType: 'freelance',
    year: '2026',
    shortDescription:
      'Developed and deployed the official Department of Psychology website end-to-end, independently.',
    description:
      'Developed and deployed the official Department of Psychology website end-to-end, independently. Built for Government First Grade College, Yelahanka, facilitating academic curriculum resource distribution, departmental notifications, faculty directories, and student event coordination on a fast, reliable web portal.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Linux VPS', 'Nginx'],
    liveUrl: 'https://psychologydepartment.in',
    githubUrl: '',
    images: [
      '/projects/department-website/home.png',
      '/projects/department-website/portal.png',
    ],
    gallery: [
      {
        url: '/projects/department-website/home.png',
        caption: 'Official institutional department portal homepage with announcements and newsfeed',
        altText: 'Department Website Government First Grade College Yelahanka homepage',
      },
      {
        url: '/projects/department-website/portal.png',
        caption: 'Academic resource center, syllabus downloads, and faculty profiles',
        altText: 'Department resource and syllabus download center',
      },
    ],
    features: [
      'Developed and deployed the official Department of Psychology website end-to-end, independently',
      'Real-time academic noticeboard and circulars publishing system for faculty and administrators',
      'Organized academic resource repository allowing students to access syllabus, notes, and reference materials',
      'Mobile-optimized responsive design ensuring fast loading even on campus mobile networks',
    ],
    myContribution:
      'Developed and deployed the official Department of Psychology website end-to-end, independently.',
    result:
      'Actively in service at psychologydepartment.in, serving college faculty and hundreds of undergraduate students daily.',
    architecture: {
      frontend: 'Semantic HTML5, CSS3 Grid, and Vanilla JavaScript',
      backend: 'Lightweight Server Architecture with Fast Asset Delivery',
      database: 'Structured Data Storage for Notices and Academic Files',
      deployment: 'Linux VPS configured with Nginx and SSL Encryption',
    },
    metrics: [
      { label: 'Status', value: 'Live in Production' },
      { label: 'Domain', value: 'psychologydepartment.in' },
      { label: 'Audience', value: 'Faculty & Students' },
    ],
    featured: true,
  },
  {
    id: 'federated-skin-disease',
    name: 'Federated Skin Disease Detection',
    category: 'AI/ML & Healthcare Research',
    categoryType: 'aiml',
    year: '2026',
    shortDescription:
      'Built a privacy-preserving federated learning system (FedAvg, Replay Buffer, Freeze Layers, Validation Gate) with a doctor-verification workflow, achieving 75.41% global federated accuracy.',
    description:
      'Built a privacy-preserving federated learning system (FedAvg, Replay Buffer, Freeze Layers, Validation Gate) with a doctor-verification workflow, achieving 75.41% global federated accuracy. Allows distributed clinical edge nodes to collaboratively train a shared MobileNetV2 diagnostic model without transferring raw patient medical images across networks.',
    technologies: ['MobileNetV2', 'Flower Federated Learning', 'Flask', 'Python', 'PyTorch'],
    liveUrl: '',
    githubUrl: 'https://github.com/cmkarthik/federated-skin-disease-detection',
    images: [
      '/projects/federated-skin-disease/architecture.png',
      '/projects/federated-skin-disease/results.png',
    ],
    gallery: [
      {
        url: '/projects/federated-skin-disease/architecture.png',
        caption: 'Decentralized Federated Averaging (FedAvg) aggregation pipeline across simulated clinical nodes',
        altText: 'Federated Skin Disease Detection architecture diagram',
      },
      {
        url: '/projects/federated-skin-disease/results.png',
        caption: 'Validation accuracy convergence curves comparing centralized vs federated differentially private models',
        altText: 'Model performance convergence and privacy-loss curves',
      },
    ],
    features: [
      'Built privacy-preserving federated learning system with FedAvg, Replay Buffer, Freeze Layers, and Validation Gate',
      'MobileNetV2 deep neural backbone optimized for edge dermatological lesion classification',
      'Integrated doctor-verification workflow allowing clinician oversight before parameter updates',
      'Achieved 75.41% global federated accuracy across heterogeneous distributed clients',
    ],
    myContribution:
      'Built a privacy-preserving federated learning system (FedAvg, Replay Buffer, Freeze Layers, Validation Gate) with a doctor-verification workflow, achieving 75.41% global federated accuracy.',
    result:
      'Achieved 75.41% global federated accuracy with full data privacy and zero raw patient image transmission.',
    architecture: {
      frontend: 'Doctor-Verification Web Workflow & Visual Validation Gate',
      backend: 'Flower Federated Learning Harness + MobileNetV2 + Flask API',
      database: 'Decentralized Edge Image Storage & Checkpoint Vault',
      deployment: 'Modular Python Script Harness & Jupyter Experimentation',
    },
    metrics: [
      { label: 'Accuracy', value: '75.41% Global Fed Accuracy' },
      { label: 'Model', value: 'MobileNetV2' },
      { label: 'Framework', value: 'Flower + PyTorch' },
    ],
    featured: true,
  },
  {
    id: 'smart-lpg',
    name: 'Smart LPG Booking System',
    category: 'Console & Full-Stack Platform',
    categoryType: 'fullstack',
    year: '2025',
    shortDescription:
      'Built a Java/JDBC console application with conditional householder-vs-commercial booking logic, address-based delivery tracking, and full CRUD operations.',
    description:
      'Built a Java/JDBC console application with conditional householder-vs-commercial booking logic, address-based delivery tracking, and full CRUD operations. Features robust transactional database management, role-specific logic, and automated status updates.',
    technologies: ['Java', 'JDBC', 'MySQL'],
    liveUrl: '',
    githubUrl: 'https://github.com/cmkarthik/AF05148725-Smart-LPG-Booking-System-JDBC',
    images: [
      '/projects/smart-lpg/dashboard.png',
      '/projects/smart-lpg/booking.png',
    ],
    gallery: [
      {
        url: '/projects/smart-lpg/dashboard.png',
        caption: 'Smart LPG console application flow and database schema execution',
        altText: 'Smart LPG application interface',
      },
      {
        url: '/projects/smart-lpg/booking.png',
        caption: 'Booking verification and address-based delivery dispatch logic',
        altText: 'Smart LPG delivery tracking view',
      },
    ],
    features: [
      'Built a Java/JDBC console application with full CRUD operations on MySQL database',
      'Conditional householder vs. commercial quota booking validation logic',
      'Address-based delivery tracking and route dispatch management',
      'Prepared statements and SQL injection prevention via JDBC connections',
    ],
    myContribution:
      'Built a Java/JDBC console application with conditional householder-vs-commercial booking logic, address-based delivery tracking, and full CRUD operations.',
    result:
      'Demonstrated 100% reliable transactional integrity for booking workflows with zero data corruption.',
    architecture: {
      frontend: 'Interactive Java Console Interface with Input Validation',
      backend: 'Java SE with Native JDBC Relational Driver',
      database: 'MySQL Relational Database with Foreign Key Constraints',
      deployment: 'Standalone Java Runtime Application',
    },
    metrics: [
      { label: 'Core Tech', value: 'Java + JDBC + MySQL' },
      { label: 'Logic', value: 'Householder vs Commercial' },
      { label: 'Operations', value: 'Full CRUD Integrity' },
    ],
    featured: false,
  },
  {
    id: 'deptsync',
    name: 'DeptSync — Academic Management System',
    category: 'Academic Management System',
    categoryType: 'fullstack',
    year: '2024 – 2025',
    shortDescription:
      'Built role-based dashboards for HODs, Staff, and Students with QR attendance, OTP verification, and multi-level leave workflows.',
    description:
      'Built role-based dashboards for HODs, Staff, and Students with QR attendance, OTP verification, and multi-level leave workflows. Streamlines institutional administration, academic scheduling, attendance tracking, and duty allocations into a single centralized portal.',
    technologies: ['Flask', 'MySQL', 'Python', 'JavaScript'],
    liveUrl: '',
    githubUrl: 'https://github.com/cmkarthik2004/DeptSync',
    images: [
      '/projects/deptsync/dashboard.png',
      '/projects/deptsync/schedule.png',
    ],
    gallery: [
      {
        url: '/projects/deptsync/dashboard.png',
        caption: 'DeptSync master coordinator dashboard showing active tasks and department allocations',
        altText: 'DeptSync coordinator overview dashboard',
      },
      {
        url: '/projects/deptsync/schedule.png',
        caption: 'Dynamic duty allocation matrix and automated schedule conflict resolver',
        altText: 'DeptSync duty scheduling and conflict resolution view',
      },
    ],
    features: [
      'Built role-based dashboards separating Head of Department (HOD), Staff, and Students',
      'Dynamic QR code attendance generation with real-time student check-in',
      'OTP verification protocols for secure identity validation and exam duty sign-offs',
      'Multi-level leave application, approval, and substitute allocation workflows',
    ],
    myContribution:
      'Built role-based dashboards for HODs, Staff, and Students with QR attendance, OTP verification, and multi-level leave workflows.',
    result:
      'Reduced departmental coordination overhead by 60% and eliminated attendance impersonation through QR + OTP verification.',
    architecture: {
      frontend: 'Dynamic Responsive JavaScript & Clean UI',
      backend: 'Flask Web Framework with RESTful Endpoints',
      database: 'MySQL Relational Database with RBAC and Attendance Tables',
      deployment: 'Linux VPS with Python WSGI Daemon',
    },
    metrics: [
      { label: 'Stack', value: 'Flask + MySQL + Python' },
      { label: 'Verification', value: 'QR + OTP Attendance' },
      { label: 'Workflows', value: 'Multi-Level Leave System' },
    ],
    featured: false,
  },
  {
    id: 'ai-smart-vision',
    name: 'AI Smart Vision Assistant',
    category: 'Applied AI & Computer Vision',
    categoryType: 'aiml',
    year: '2025',
    shortDescription:
      'Built a real-time object detection assistant with multilingual voice commands and self-learning correction.',
    description:
      'Built a real-time object detection assistant with multilingual voice commands and self-learning correction. Combines high-speed video stream processing, YOLOv8 deep learning vision models, voice synthesis recognition, and adaptive learning feedback into an interactive desktop assistant.',
    technologies: ['Flask', 'YOLOv8', 'MySQL', 'Python'],
    liveUrl: '',
    githubUrl: 'https://github.com/cmkarthik',
    images: [
      '/projects/ai-smart-vision/detection.png',
      '/projects/ai-smart-vision/analytics.png',
    ],
    gallery: [
      {
        url: '/projects/ai-smart-vision/detection.png',
        caption: 'Live video stream ingestion with real-time bounding box recognition and confidence scores',
        altText: 'AI Smart Vision Assistant live detection view',
      },
      {
        url: '/projects/ai-smart-vision/analytics.png',
        caption: 'Spatial defect density heatmaps and latency performance telemetry',
        altText: 'Computer vision analytics and throughput telemetry',
      },
    ],
    features: [
      'Built a real-time object detection assistant utilizing YOLOv8 convolutional architecture',
      'Multilingual voice commands enabling voice-driven camera queries and speech feedback',
      'Self-learning correction feedback loop improving detection confidence over repeated sessions',
      'Flask backend integration with MySQL for event logging and user command history',
    ],
    myContribution:
      'Built a real-time object detection assistant with multilingual voice commands and self-learning correction.',
    result:
      'Achieved real-time 30+ FPS detection throughput with responsive multilingual speech interaction.',
    architecture: {
      frontend: 'Interactive Video Viewer with Audio Feedback HUD',
      backend: 'Flask Server with YOLOv8 Tensor Inference & Voice Module',
      database: 'MySQL Event and Detection Log Store',
      deployment: 'Python Hardware Accelerated Environment',
    },
    metrics: [
      { label: 'Vision Model', value: 'YOLOv8 Real-Time' },
      { label: 'Interface', value: 'Multilingual Voice' },
      { label: 'Learning', value: 'Self-Learning Correction' },
    ],
    featured: false,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    description: 'Core programming and markup languages for web, systems, and algorithms',
    skills: [
      { name: 'PHP', level: 'Production', useCase: 'Web applications, backend systems, APIs', isPrimary: true },
      { name: 'Python', level: 'Production', useCase: 'Full-stack apps, AI/ML, data science', isPrimary: true },
      { name: 'Java', level: 'Core Language', useCase: 'Object-oriented systems, JDBC apps', isPrimary: true },
      { name: 'JavaScript', level: 'Core Language', useCase: 'Interactive DOM, client workflows', isPrimary: true },
      { name: 'HTML', level: 'Core UI', useCase: 'Semantic web layout, accessibility', isPrimary: true },
      { name: 'CSS', level: 'Core UI', useCase: 'Responsive design, modern styling', isPrimary: true },
    ],
  },
  {
    id: 'frameworks-db',
    title: 'Frameworks & DB',
    description: 'Web application frameworks, ORMs, and relational databases',
    skills: [
      { name: 'Django', level: 'Production', useCase: 'Enterprise backend, ORM, RBAC', isPrimary: true },
      { name: 'Flask', level: 'Production', useCase: 'Lightweight APIs, ML serving, microservices', isPrimary: true },
      { name: 'Bootstrap', level: 'Production', useCase: 'Responsive frontends, admin portals', isPrimary: true },
      { name: 'JDBC', level: 'Data Layer', useCase: 'Java relational database connectivity', isPrimary: true },
      { name: 'MySQL', level: 'Production', useCase: 'Relational database schema, indexing', isPrimary: true },
      { name: 'SQL', level: 'Core', useCase: 'Relational queries, joins, constraints', isPrimary: true },
    ],
  },
  {
    id: 'data-analytics',
    title: 'Data & Analytics',
    description: 'Business intelligence, visual exploratory analysis, and analytics environments',
    skills: [
      { name: 'Power BI', level: 'Analytics', useCase: 'Interactive business dashboards & KPI reporting', isPrimary: true },
      { name: 'Data Analytics', level: 'Methodology', useCase: 'Statistical modeling, trend analysis', isPrimary: true },
      { name: 'Data Visualization', level: 'Visuals', useCase: 'Charts, metric insights, decision support', isPrimary: true },
      { name: 'Excel', level: 'Data Tool', useCase: 'Data auditing, pivot tables, modeling', isPrimary: false },
      { name: 'Google Colab', level: 'Notebook', useCase: 'Cloud GPU experimentation, Python notebooks', isPrimary: false },
    ],
  },
  {
    id: 'cloud-deployment',
    title: 'Cloud & Deployment',
    description: 'Hosting, cloud infrastructure, server configuration, and version control',
    skills: [
      { name: 'Google Cloud Platform', level: 'Cloud', useCase: 'Cloud instances, server hosting', isPrimary: true },
      { name: 'OCI', level: 'Cloud', useCase: 'Oracle Cloud Infrastructure compute & DBs', isPrimary: true },
      { name: 'Hostinger', level: 'VPS / Hosting', useCase: 'KVM VPS management, DNS binding', isPrimary: true },
      { name: 'Git', level: 'Version Control', useCase: 'Source control, branching, release tags', isPrimary: true },
      { name: 'GitHub', level: 'Collaboration', useCase: 'Repository management, code reviews', isPrimary: true },
      { name: 'Linux', level: 'OS / Server', useCase: 'Ubuntu server, systemd daemons, SSH', isPrimary: true },
      { name: 'VPS Management', level: 'DevOps', useCase: 'Nginx reverse proxies, SSL certificates', isPrimary: true },
      { name: 'REST APIs', level: 'Architecture', useCase: 'HTTP endpoints, JSON contracts', isPrimary: true },
    ],
  },
  {
    id: 'tools-ides',
    title: 'Tools & IDEs',
    description: 'Integrated development environments, API testing, and local servers',
    skills: [
      { name: 'VS Code', level: 'Primary IDE', useCase: 'Full-stack software engineering', isPrimary: true },
      { name: 'Jupyter Notebook', level: 'Data IDE', useCase: 'Machine learning & data pipelines', isPrimary: true },
      { name: 'Google Colab', level: 'Cloud IDE', useCase: 'Distributed neural experiments', isPrimary: false },
      { name: 'XAMPP', level: 'Local Server', useCase: 'Local Apache, PHP & MySQL development', isPrimary: true },
      { name: 'Postman', level: 'API Testing', useCase: 'Endpoint verification, payload debugging', isPrimary: true },
      { name: 'GitHub Desktop', level: 'Git GUI', useCase: 'Visual repository synchronization', isPrimary: false },
    ],
  },
  {
    id: 'ai-tools',
    title: 'AI Tools',
    description: 'Generative AI and modern AI development accelerators',
    skills: [
      { name: 'ChatGPT', level: 'LLM Tool', useCase: 'Code generation, architectural validation', isPrimary: true },
      { name: 'Google Gemini', level: 'LLM Tool', useCase: 'Multimodal analysis, research assistance', isPrimary: true },
      { name: 'Claude', level: 'LLM Tool', useCase: 'Deep code refactoring, system logic', isPrimary: true },
      { name: 'GitHub Copilot', level: 'AI Assistant', useCase: 'In-editor autocomplete and speed', isPrimary: true },
      { name: 'Genspark', level: 'AI Search', useCase: 'Rapid documentation synthesis', isPrimary: false },
      { name: 'Napkin AI', level: 'AI Diagram', useCase: 'Visual architecture explanation', isPrimary: false },
      { name: 'Gamma', level: 'AI Deck', useCase: 'Client presentations and briefs', isPrimary: false },
      { name: 'Lovable', level: 'AI Prototyping', useCase: 'Rapid UI exploration and ideation', isPrimary: false },
    ],
  },
  {
    id: 'other-skills',
    title: 'Other Capabilities',
    description: 'Integrations, software lifecycle methodology, and quality assurance',
    skills: [
      { name: 'Razorpay Integration', level: 'Payments', useCase: 'Payment gateway API, partial payments, webhooks', isPrimary: true },
      { name: 'Requirement Analysis', level: 'Scoping', useCase: 'Translating client ideas into technical specs', isPrimary: true },
      { name: 'Project Management', level: 'Delivery', useCase: 'Milestone tracking, communication, deadlines', isPrimary: true },
      { name: 'Testing & Debugging', level: 'QA', useCase: 'Cross-browser testing, issue resolution, logs', isPrimary: true },
    ],
  },
];

/**
 * 8 Core Services accurately sourced from index.html
 */
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'static-web',
    title: 'Static Website Development',
    description:
      'Fast, SEO-friendly business websites that load instantly and convert visitors into customers.',
    icon: 'Globe',
    category: 'development',
    whoIsItFor: 'Businesses, startups, professionals, and creators seeking a fast, high-converting digital presence.',
    whatYouGet: [
      'Clean, semantic, ultra-fast loading responsive web design',
      'Full cross-browser & mobile viewport optimization',
      'Integrated contact forms & WhatsApp click-to-chat triggers',
      'Essential SEO meta tag structures and lightning-fast Google PageSpeed scores',
    ],
    deliverables: ['Custom Web Source Code', 'Domain & Hosting Setup', 'SSL Activation', 'Basic Analytics'],
    technologies: ['HTML5', 'CSS3 / Tailwind', 'JavaScript', 'Linux / VPS Setup'],
  },
  {
    id: 'dynamic-web',
    title: 'Dynamic Website Development',
    description:
      'Full-stack websites with databases, user accounts, dashboards, and real-time features.',
    icon: 'Layers',
    category: 'development',
    whoIsItFor: 'Platforms requiring user registration, personalized portals, database operations, and live interaction.',
    whatYouGet: [
      'Robust backend architecture with relational database modeling',
      'Role-based access control (Admin, User, Staff portals)',
      'Dynamic data rendering, search filters, and CRUD operations',
      'Secure session management and encrypted user credentials',
    ],
    deliverables: ['Production Backend Architecture', 'Relational Database', 'User Portals', 'Automated Backups'],
    technologies: ['Python / Django', 'Flask', 'PHP', 'MySQL', 'JavaScript'],
  },
  {
    id: 'redesign',
    title: 'Website Redesign',
    description:
      'Transform outdated websites into modern, mobile-first, high-performance digital experiences.',
    icon: 'RefreshCw',
    category: 'optimization',
    whoIsItFor: 'Existing business sites that look outdated, load slowly, or suffer from low conversion rates.',
    whatYouGet: [
      'Complete visual overhaul with modern typography and refined UI/UX',
      'Mobile-first responsive overhaul eliminating broken viewport bugs',
      'Performance audit and assets compression for instant page loads',
      'Preservation of existing SEO value, URLs, and indexed rankings',
    ],
    deliverables: ['Modernized UI/UX', 'Speed Optimization Report', 'Zero Downtime Migration'],
    technologies: ['Modern CSS / Tailwind', 'JavaScript', 'Asset Optimization', 'Nginx Cache'],
  },
  {
    id: 'payment-gateway',
    title: 'Payment Gateway Integration',
    description:
      'Secure Razorpay / Stripe integration with partial payments, confirmations, and receipts.',
    icon: 'CreditCard',
    category: 'integration',
    whoIsItFor: 'E-commerce stores, service providers, event organizers, and booking systems accepting payments online.',
    whatYouGet: [
      'Seamless checkout flow supporting UPI, Cards, Netbanking & Wallets',
      'Server-side cryptographic webhook verification preventing missed transactions',
      'Automated transaction logging, digital receipts, and email/SMS alerts',
      'Partial payments, advance booking deposits, and invoice generation',
    ],
    deliverables: ['Razorpay / Stripe Integration', 'Webhook Signature Security', 'Receipt Generation'],
    technologies: ['Razorpay API', 'Stripe API', 'Webhook Security', 'PHP / Python / MySQL'],
  },
  {
    id: 'admin-panel',
    title: 'Admin Panel Development',
    description:
      'Custom admin dashboards so clients can manage content, orders, and data without needing a developer.',
    icon: 'Shield',
    category: 'development',
    whoIsItFor: 'Business owners wanting total independence to update products, photos, bookings, and content.',
    whatYouGet: [
      'Intuitive, password-protected control dashboard tailored to your workflow',
      'Media uploads, gallery managers, and rich text publishing tools',
      'Order tracking, enquiry management, and customer CRM records',
      'Exportable Excel / PDF reports for business accounting',
    ],
    deliverables: ['Custom CMS / Dashboard', 'User Role Management', 'Exportable Analytics', 'Client Video Walkthrough'],
    technologies: ['PHP', 'Django Admin', 'MySQL', 'Bootstrap / Tailwind', 'Chart.js'],
  },
  {
    id: 'seo-optimization',
    title: 'SEO Optimization',
    description:
      'Structure, speed, and meta optimization to improve visibility on Google and drive organic traffic.',
    icon: 'Search',
    category: 'optimization',
    whoIsItFor: 'Websites aiming to rank higher on Google search results and attract targeted organic leads.',
    whatYouGet: [
      'Comprehensive on-page SEO: OpenGraph, Twitter cards, meta descriptions',
      'Schema markup (JSON-LD) for rich Google search snippets',
      'XML sitemap generation and Google Search Console indexing setup',
      'Core Web Vitals tuning (LCP, FID, CLS) for top ranking signals',
    ],
    deliverables: ['SEO Audit & Fixes', 'XML Sitemaps & Robots.txt', 'Search Console Submission'],
    technologies: ['Semantic HTML5', 'JSON-LD Schema', 'Core Web Vitals', 'PageSpeed Insights'],
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Updates',
    description:
      'Ongoing support, bug fixes, content updates, and feature additions after the website launches.',
    icon: 'Wrench',
    category: 'growth',
    whoIsItFor: 'Clients wanting peace of mind with guaranteed uptime, active security, and prompt updates.',
    whatYouGet: [
      'Regular security patches, software updates, and SSL certificate renewals',
      'Scheduled database backups and rapid disaster recovery protocol',
      'Fast turnaround on content updates, new banners, and page additions',
      'Active uptime monitoring and rapid troubleshooting',
    ],
    deliverables: ['Uptime Monitoring', 'Routine Backups', 'Bug Hotfixes', 'Direct WhatsApp Assistance'],
    technologies: ['Linux VPS', 'Certbot SSL', 'Automated Cron Backups', 'Server Log Auditing'],
  },
  {
    id: 'business-analytics',
    title: 'Business Analytics Support',
    description:
      'Using data to find growth opportunities, understand audiences, and support smarter business decisions.',
    icon: 'BarChart3',
    category: 'growth',
    whoIsItFor: 'Growing businesses looking to convert web traffic data and customer interactions into actionable growth.',
    whatYouGet: [
      'Data-driven traffic analysis and conversion funnel tracking',
      'Customer drop-off point identification and checkout optimization',
      'Custom visual analytics dashboards summarizing key business metrics',
      'Strategic recommendations based on data science and user behavior',
    ],
    deliverables: ['Growth Analytics Dashboard', 'Traffic Insights Report', 'Conversion Optimization Action Plan'],
    technologies: ['Power BI', 'Python (Pandas)', 'Google Analytics 4', 'Data Science Modeling'],
  },
];

/**
 * Solutions / What Do You Need For Your Business? quick-selector items from index.html
 */
export const BUSINESS_SOLUTIONS = [
  {
    icon: 'Globe',
    title: 'Need a Website for Your Business?',
    sub: 'Modern static or dynamic websites designed to grow your brand and attract more customers online.',
    serviceKey: 'Website Development (New)',
  },
  {
    icon: 'Palette',
    title: 'Need Web Designing?',
    sub: 'Premium UI/UX designs that build trust, create great first impressions, and attract the right customers.',
    serviceKey: 'Website Development (New)',
  },
  {
    icon: 'CreditCard',
    title: 'Need Payment Gateway Integration?',
    sub: 'Secure Razorpay / Stripe integrations — with order tracking, receipts, and admin visibility.',
    serviceKey: 'Payment Gateway Integration',
  },
  {
    icon: 'RefreshCw',
    title: 'Want to Redesign Your Old Website?',
    sub: 'Convert outdated or underperforming websites into fast, modern, premium digital experiences.',
    serviceKey: 'Website Redesign',
  },
  {
    icon: 'Shield',
    title: 'Need an Admin Panel?',
    sub: 'Manage services, images, content, blogs, and products yourself — zero developer dependency.',
    serviceKey: 'Admin Panel + User Website',
  },
  {
    icon: 'Camera',
    title: 'Need Photo / Content Updates?',
    sub: 'Easy website updates — new images, banners, pages, text changes, and content management handled fast.',
    serviceKey: 'Website Maintenance',
  },
  {
    icon: 'TrendingUp',
    title: 'Need Business Growth Through Technology?',
    sub: 'Smart automation, dashboards, growth analytics, and custom business tools that save time and increase revenue.',
    serviceKey: 'Business Development using Data Analysis',
  },
  {
    icon: 'Wrench',
    title: 'Need Website Maintenance?',
    sub: 'Long-term support, bug fixes, speed improvements, security checks, and updates — so you never worry.',
    serviceKey: 'Website Maintenance',
  },
];

/**
 * Authentic Academic Journey based directly on index.html
 */
export const ACADEMIC_EDUCATION: EducationItem[] = [
  {
    number: '01',
    degree: 'M.Sc. Data Science',
    institution: 'Dayananda Sagar University',
    period: '2024 – Present',
    statusOrScore: 'CGPA: 7.59',
    badgeType: 'pursuing',
    highlights: [
      'Advanced study in Machine Learning, Statistical Modeling, Deep Learning, and Distributed Computing.',
      'Specialized research in Computer Vision and privacy-preserving Decentralized Federated Learning systems.',
    ],
    accentColor: '#6366F1', // Indigo
  },
  {
    number: '02',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Veerashaiva Degree College, Cantonment, Ballari',
    period: 'Sep 2022 – Jun 2025',
    statusOrScore: 'CGPA: 8.43',
    badgeType: 'completed',
    highlights: [
      'Graduated with High Distinction (8.43 CGPA). Strong core foundations in Data Structures, Database Management Systems (MySQL), and Software Engineering.',
      'Final Year Project: DEPTSYNC — Centralized Department ERP with Smart QR-based attendance.',
    ],
    accentColor: '#3B82F6', // Blue
  },
  {
    number: '03',
    degree: '2nd PUC (PCMB)',
    institution: 'Independent College',
    period: 'Aug 2020 – Aug 2022',
    statusOrScore: '58.68%',
    badgeType: 'academic',
    highlights: [
      'Physics, Chemistry, Mathematics, and Biology background fostering analytical problem-solving and mathematical discipline.',
    ],
    accentColor: '#10B981', // Emerald
  },
  {
    number: '04',
    degree: 'SSLC / 10th',
    institution: 'Morarji School, Ramasagar, Kampli, Ballari',
    period: 'Jun 2019 – Jul 2020',
    statusOrScore: '81.44%',
    badgeType: 'academic',
    highlights: [
      'Graduated with First Class with Distinction (81.44%) from residential excellence school curriculum.',
    ],
    accentColor: '#F59E0B', // Amber
  },
];

/**
 * Authentic Trophy Wall (Certifications) from index.html
 */
export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: 'tata-genai',
    title: 'TATA GenAI Data Analytics',
    organization: 'Forage',
    date: 'Jan 2026',
    credentialId: 'ID: B6oG7xaQ4SLEYmGPS',
    imageFileName: 'TATA Certificate.jpg',
    icon: 'Building2',
    category: 'ai',
  },
  {
    id: 'power-bi',
    title: 'Power BI Micro Course',
    organization: 'SkillCourse',
    date: 'Jan 2026',
    imageFileName: 'Power BI Certificate.jpg',
    icon: 'BarChart3',
    category: 'data',
  },
  {
    id: 'infosys-python',
    title: 'TechA Python Developer',
    organization: 'Infosys Springboard',
    date: 'Jan 2026',
    imageFileName: 'Infosys certificate.png',
    icon: 'Code2',
    category: 'development',
  },
  {
    id: 'deeplearning-ml',
    title: 'Supervised ML: Regression & Classification',
    organization: 'DeepLearning.AI',
    date: 'Jan 2026',
    imageFileName: 'Deeplearning Ai.jpg',
    icon: 'BrainCircuit',
    category: 'ai',
  },
  {
    id: 'eccouncil-cscu',
    title: 'Certified Secure Computer User',
    organization: 'EC-Council',
    date: 'Nov 2025',
    imageFileName: 'Certified Secure Computer User.jpg',
    icon: 'ShieldCheck',
    category: 'security',
  },
  {
    id: 'oracle-oci-ds',
    title: 'Oracle OCI Data Science Professional',
    organization: 'Oracle',
    date: 'Oct 2025',
    credentialId: 'Exp: 2027',
    imageFileName: 'Oracle Cloud Infrastructure 2025 Certified Data Science Professional certification.jpg',
    icon: 'Cloud',
    category: 'cloud',
  },
  {
    id: 'aws-training',
    title: 'AWS Training & Certification',
    organization: 'Amazon Web Services',
    date: 'Sep 2025',
    imageFileName: 'AWS Training & Certification.jpg',
    icon: 'Zap',
    category: 'cloud',
  },
  {
    id: 'google-genai-edu',
    title: 'Generative AI for Educators',
    organization: 'Google',
    date: 'Jul 2025',
    imageFileName: 'Generative AI for Educators.jpg',
    icon: 'Sparkles',
    category: 'ai',
  },
  {
    id: 'be10x-ai-tools',
    title: 'AI Tools Workshop',
    organization: 'Be10x',
    date: 'Jul 2025',
    imageFileName: 'AI Tools Workshop.jpg',
    icon: 'Wrench',
    category: 'ai',
  },
  {
    id: 'eccouncil-ethical-hacking',
    title: 'CyberTalks: Ethical Hacking Webinar',
    organization: 'EC-Council',
    date: 'Oct 2025',
    imageFileName: 'CERTIFICATE OF PARTICIPATION.jpg',
    icon: 'Lock',
    category: 'security',
  },
  {
    id: 'eccouncil-cybertalks-part',
    title: 'CyberTalks Participation',
    organization: 'EC-Council',
    date: 'Oct 2025',
    imageFileName: 'Certificate of participation.jpg',
    icon: 'Award',
    category: 'security',
  },
];

/**
 * How to Start a Project — 5 Clear Steps
 */
export const START_PROJECT_STEPS: StartProjectStep[] = [
  {
    step: '01',
    title: 'Start a Conversation',
    description: 'Reach out through the portfolio booking form, WhatsApp (+91 7899443730), email, or LinkedIn.',
    details: [
      'No complex barrier to entry — simply drop a note with what you are thinking.',
      'Prompt response within 24 hours to schedule an introductory discussion.',
    ],
  },
  {
    step: '02',
    title: 'Share Your Requirements',
    description: 'Explain your concept, the business problem to solve, target audience, key features, and timeline.',
    details: [
      'Share any reference websites, rough wireframes, feature lists, or operational pain points.',
      'We identify which aspects are critical for launch versus future feature iterations.',
    ],
  },
  {
    step: '03',
    title: 'Project Discussion',
    description: 'We hold a direct consultation via Google Meet or WhatsApp call to review technical feasibility and scope.',
    details: [
      'Transparent review of backend options (Python/Django, Flask, PHP, MySQL), payment gateways, and hosting setup.',
      'Clear definition of milestones, client deliverables, and launch objectives.',
    ],
  },
  {
    step: '04',
    title: 'Project Planning',
    description: 'Establish the initial scope, architecture blueprint, staging milestones, and delivery approach.',
    details: [
      'Structured sprint plan covering UI design, database models, payment integrations, and testing criteria.',
      'Agreed timeline without ambiguous hidden assumptions.',
    ],
  },
  {
    step: '05',
    title: 'Development Begins',
    description: 'Once agreed, development begins with regular progress previews, collaborative feedback, and transparent staging updates.',
    details: [
      'Active development with staging preview links provided so you watch your software come to life.',
      'Smooth path into testing, production deployment, and ongoing support.',
    ],
  },
];

/**
 * Client Communication Throughout the Project
 */
export const COMMUNICATION_POINTS = [
  { stage: 'Requirements', desc: 'Direct discovery call, requirement gathering, and technical mapping' },
  { stage: 'Progress', desc: 'Regular live staging previews and milestone updates' },
  { stage: 'Review', desc: 'Interactive client walkthrough of all functional modules' },
  { stage: 'Feedback', desc: 'Collaborative feedback and UI/UX fine-tuning' },
  { stage: 'Improvements', desc: 'Refinements, bug resolution, and performance hardening' },
  { stage: 'Delivery', desc: 'Production deployment to Linux VPS, SSL, and domain binding' },
  { stage: 'Support', desc: 'Reliable post-launch maintenance, troubleshooting, and updates' },
];

/**
 * Booking Consultation Slots from index.html
 */
export const BOOKING_SLOTS: BookingSlot[] = [
  { number: '01', timeRange: '5:30 PM – 6:30 PM', periodLabel: 'Evening', description: 'Early evening discovery & scoping call' },
  { number: '02', timeRange: '6:45 PM – 7:45 PM', periodLabel: 'Evening', description: 'Detailed architecture & feature planning' },
  { number: '03', timeRange: '8:00 PM – 9:00 PM', periodLabel: 'Night', description: 'Technical feasibility & milestone review' },
  { number: '04', timeRange: '9:15 PM – 10:15 PM', periodLabel: 'Night', description: 'Late evening project discussion & kickoff' },
];

export const BOOKING_SERVICES = [
  'Website Development (New)',
  'Admin Panel + User Website',
  'Business Development using Data Analysis',
  'Website Maintenance',
  'Website Redesign',
  'Payment Gateway Integration',
  'Other / General Discussion',
];

/**
 * Complete 18 FAQs organized into 6 authentic categories from index.html
 */
export const FAQ_CATEGORIES: FAQCategory[] = [
  {
    title: 'Project & Timeline',
    description: 'Timelines, urgency, kickoffs, and development transparency',
    items: [
      {
        id: 'faq-1',
        category: 'Project & Timeline',
        question: 'How long does it take to build a website?',
        answer:
          'Timelines depend on size and features. Basic websites may take a few days, while advanced dynamic websites with admin panels can take longer depending on complexity.',
      },
      {
        id: 'faq-2',
        category: 'Project & Timeline',
        question: 'How soon can you start my project?',
        answer:
          'I can usually begin after understanding your requirements and confirming project details. Book a free call to discuss your timeline.',
      },
      {
        id: 'faq-3',
        category: 'Project & Timeline',
        question: 'Can you complete urgent projects quickly?',
        answer:
          'Yes, depending on workload and project scope, urgent delivery options may be available. Contact me directly to discuss priority options.',
      },
      {
        id: 'faq-4',
        category: 'Project & Timeline',
        question: 'How will I know project progress?',
        answer:
          'Regular updates, live previews, and WhatsApp communication are shared throughout development so you always know where things stand.',
      },
    ],
  },
  {
    title: 'Website Type Questions',
    description: 'Static sites, dynamic web apps, and complete redesigns',
    items: [
      {
        id: 'faq-5',
        category: 'Website Type Questions',
        question: 'Can you build both static and dynamic websites?',
        answer:
          'Yes. I develop both static business websites and dynamic websites with admin panels, user dashboards, and advanced backend features.',
      },
      {
        id: 'faq-6',
        category: 'Website Type Questions',
        question: 'Can you redesign my old website?',
        answer:
          'Yes. I can modernize outdated websites with better design, mobile responsiveness, speed optimization, and improved user experience.',
      },
      {
        id: 'faq-7',
        category: 'Website Type Questions',
        question: 'Can you create an e-commerce website?',
        answer:
          'Yes. Online stores with product listings, cart, checkout, and payment gateway integration can be developed based on your requirements.',
      },
    ],
  },
  {
    title: 'Features & Admin',
    description: 'Admin panels, payment gateways, and enquiry systems',
    items: [
      {
        id: 'faq-8',
        category: 'Features & Admin',
        question: 'Can you add an admin panel?',
        answer:
          'Yes. I create custom admin panels so you can manage content, photos, services, products, and updates without needing a developer.',
      },
      {
        id: 'faq-9',
        category: 'Features & Admin',
        question: 'Can you add payment gateway to my website?',
        answer:
          'Yes. Secure payment integration such as Razorpay or Stripe can be added with partial payment options, automated receipts, and confirmations.',
      },
      {
        id: 'faq-10',
        category: 'Features & Admin',
        question: 'Can you add booking, forms, or enquiry systems?',
        answer:
          'Yes. Contact forms, booking systems, lead capture forms, WhatsApp integration, and enquiry modules can all be integrated.',
      },
    ],
  },
  {
    title: 'Support & Maintenance',
    description: 'Post-launch care, monthly maintenance, and security',
    items: [
      {
        id: 'faq-11',
        category: 'Support & Maintenance',
        question: 'Do you provide support after launch?',
        answer:
          'Yes. I provide reliable post-launch support, maintenance, updates, and technical assistance after your project is delivered.',
      },
      {
        id: 'faq-12',
        category: 'Support & Maintenance',
        question: 'Do you provide website maintenance monthly?',
        answer:
          'Yes. Ongoing maintenance plans can be discussed based on your needs — content updates, bug fixes, performance checks, and more.',
      },
    ],
  },
  {
    title: 'Business Growth',
    description: 'SEO, data science insights, and customer acquisition',
    items: [
      {
        id: 'faq-13',
        category: 'Business Growth',
        question: 'Can you help my business get more customers online?',
        answer:
          'Yes. Websites are built with user experience, trust, lead generation, and conversion strategy in mind — not just aesthetics.',
      },
      {
        id: 'faq-14',
        category: 'Business Growth',
        question: 'Do you help with SEO?',
        answer:
          'Yes. Basic SEO-friendly structure, page speed optimization, meta tags, and best practices are implemented during development.',
      },
      {
        id: 'faq-15',
        category: 'Business Growth',
        question: 'Can you help using my business data?',
        answer:
          'Yes. With my data science knowledge, I can help analyze your business data to find growth opportunities and support better decisions.',
      },
    ],
  },
  {
    title: 'Budget & Process',
    description: 'Pricing approach, mobile responsiveness, and kickoff',
    items: [
      {
        id: 'faq-16',
        category: 'Budget & Process',
        question: 'How much does a website cost?',
        answer:
          'Cost depends on pages, features, design complexity, and functionality. Contact me for a custom quote — every project is different.',
      },
      {
        id: 'faq-17',
        category: 'Budget & Process',
        question: 'Will my website be mobile-friendly?',
        answer:
          'Yes. All websites are built fully responsive — optimized for mobile phones, tablets, and desktop screens.',
      },
      {
        id: 'faq-18',
        category: 'Budget & Process',
        question: 'How do we start working together?',
        answer:
          "Simply contact me through WhatsApp, email, or the contact form with your requirements. We'll have a call to discuss your project and I'll send a proposal.",
      },
    ],
  },
];

