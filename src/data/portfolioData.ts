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
  experienceYears: '2025 — Present',
  // Path for user's personal photo
  profilePhoto: '/my photo.jpeg',
  aboutPhoto: '/my photo.jpeg',
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
  tagline: 'I turn ideas and data into digital products, insights, and intelligent software solutions.',
  subheadline: 'Freelance Full-Stack Developer with experience in Applied AI/ML, Data Analytics, Data Visualization, and Data Science.',
  bio: 'I help businesses and individuals transform ideas, requirements, and data into functional digital products, meaningful insights, and thoughtfully built software solutions.',
  availabilityStatus: 'AVAILABLE FOR FREELANCE PROJECTS',
  email: siteConfig.email,
  phone: siteConfig.phone,
  github: siteConfig.github,
  linkedin: siteConfig.linkedin,
  location: siteConfig.location,
  timezone: siteConfig.timezone,
  experienceYears: siteConfig.experienceYears,
  profilePhoto: siteConfig.profilePhoto,
  aboutPhoto: siteConfig.aboutPhoto,
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
      title: 'Federated Deep Learning for Privacy-Preserving Healthcare Prediction',
      period: '2026',
      stack: 'EfficientNet-B0 · Federated Learning (FedAvg) · Python',
      githubUrl: 'https://github.com/cmkarthik2004/federated-skin-disease-detection',
      highlights: [
        'Built a federated deep learning workflow for four-class ECG image classification using weighted FedAvg across 3 simulated Cardio Centers with Replay Buffer, Freeze Layers, and Validation Gate (89.84% Fed Val Acc, 0.8833 Macro-F1; 92.51% Centralized Val Acc).',
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
      stack: 'Python · Flask · YOLO · OpenCV · OCR · MySQL',
      githubUrl: 'https://github.com/cmkarthik2004/Smart-Vision-AI-Assistant',
      highlights: [
        'Built an AI Smart Vision Assistant combining real-time YOLO object detection, OCR text recognition, chatbot interaction, multilingual support, and feedback learning with Flask and MySQL.',
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
      score: 'CGPA: 7.89',
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
      score: 'Completed',
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
    'Federated Deep Learning for Privacy-Preserving Healthcare Prediction (EfficientNet-B0, FedAvg, Python)',
    'Smart LPG Booking System — Java/JDBC Database System (Java, JDBC, MySQL)',
    'DeptSync — Academic Management System (Flask, MySQL, Python, JavaScript)',
    'AI Smart Vision Assistant — Real-Time Object Detection & Vision (Python, Flask, YOLO, OpenCV, MySQL)',
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
      '/images/talestext.jpeg',
      '/talestext.jpeg',
      '/images/talestext.png',
      '/talestext.png',
    ],
    gallery: [
      {
        url: '/images/talestext.jpeg',
        caption: 'TalesTexts landing portal and featured literary collection',
        altText: 'TalesTexts publishing platform homepage',
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
      '/images/Kriyaatmak.png',
      '/Kriyaatmak.png',
      '/images/Kriyaatmak.jpeg',
      '/Kriyaatmak.jpeg',
    ],
    gallery: [
      {
        url: '/images/Kriyaatmak.png',
        caption: 'Kriyaatmak photography studio showcase and client onboarding',
        altText: 'Kriyaatmak commercial web platform homepage',
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
    id: 'federated-skin-disease',
    name: 'Federated Deep Learning for Privacy-Preserving Healthcare Prediction',
    shortName: 'Federated Deep Learning',
    category: 'Applied AI/ML & Healthcare Research',
    categoryType: 'aiml',
    year: '2026',
    shortDescription:
      'Developed a federated deep learning workflow for four-class ECG image classification, enabling simulated healthcare clients to collaboratively train a shared model while keeping their local training data separated.',
    description:
      'Developed a federated deep learning workflow for four-class ECG image classification, enabling simulated healthcare clients to collaboratively train a shared model while keeping their local training data separated.\n\nThe system combines federated learning with Replay Buffer, Freeze Layers, Validation Gate and a doctor-verification workflow for controlled model updates and continuous improvement.\n\nThe latest experimental configuration uses EfficientNet-B0 with weighted Federated Averaging (FedAvg) across three simulated Cardio Centers.',
    technologies: [
      'EfficientNet-B0',
      'Federated Learning',
      'FedAvg',
      'Replay Buffer',
      'Freeze Layers',
      'Validation Gate',
      'Deep Learning',
      'ECG Image Classification',
      'Python',
      'Healthcare AI',
    ],
    liveUrl: '',
    githubUrl: 'https://github.com/cmkarthik2004/federated-skin-disease-detection',
    images: [
      '/images/federatedlogo.png',
      '/federatedlogo.png',
      '/images/federatedlogo.jpg',
      '/federatedlogo.jpg',
    ],
    gallery: [
      {
        url: '/images/federatedlogo.png',
        caption:
          'Federated deep learning workflow architecture with weighted FedAvg, Replay Buffer, Freeze Layers, and Validation Gate across simulated Cardio Centers',
        altText:
          'Federated Deep Learning for Privacy-Preserving Healthcare Prediction architecture diagram',
      },
    ],
    features: [
      'Built a federated deep learning workflow using weighted FedAvg for collaborative healthcare image classification.',
      'Implemented Replay Buffer to support retention and reuse of previously validated training information.',
      'Implemented Freeze Layers to control which model layers are updated during training.',
      'Implemented a Validation Gate to evaluate model updates before they are accepted into the workflow.',
      'Integrated a doctor-verification workflow for controlled handling of verified cases and model updates.',
      'Compared Custom CNN, ResNet-50, EfficientNet-B0, MobileNetV2 and MobileNetV3-Large.',
      'Selected EfficientNet-B0 based on the reported centralized validation performance.',
      'Evaluated federated performance across 12 communication rounds.',
      'Performed centralized versus federated performance analysis.',
    ],
    myContribution:
      'Designed and implemented the experimental and application workflow covering:\n\n- Centralized CNN model comparison\n- Model selection\n- Federated training\n- Weighted FedAvg aggregation\n- Replay Buffer\n- Freeze Layers\n- Validation Gate\n- Doctor-verification workflow\n- Validation-based model evaluation\n- Centralized versus federated performance analysis',
    result:
      'Evaluated across 12 communication rounds with 3 simulated Cardio Centers. Federated Round 12 achieved 89.84% validation accuracy and 0.8833 Macro-F1. Centralized EfficientNet-B0 benchmark achieved 92.51% validation accuracy and 0.9162 Macro-F1, with 92.41% accuracy and 0.9225 Macro-F1 on the separate 448-image centralized test set.',
    architecture: {
      frontend: 'Doctor-Verification Workflow & Validation Gate Interface',
      backend: 'EfficientNet-B0 + Weighted FedAvg Aggregation Engine',
      database: 'Decentralized Simulated Cardio Center Nodes & Replay Buffer',
      deployment: 'Python Experimentation Harness with Freeze Layers & Validation Gate',
    },
    metrics: [
      { label: 'Federated Val Acc', value: '89.84% (Macro-F1: 0.8833)' },
      { label: 'Centralized Benchmark', value: '92.51% (Macro-F1: 0.9162)' },
      { label: 'Centralized Test (448 imgs)', value: '92.41% (Macro-F1: 0.9225)' },
      { label: 'Federated Setup', value: '3 Simulated Cardio Centers · 12 Rounds' },
      { label: 'Selected Model', value: 'EfficientNet-B0 (Weighted FedAvg)' },
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
      '/images/Yelahanka.png',
      '/Yelahanka.png',
      '/images/Yelahanka.jpeg',
      '/Yelahanka.jpeg',
    ],
    gallery: [
      {
        url: '/images/Yelahanka.png',
        caption: 'Official institutional department portal homepage with announcements and newsfeed',
        altText: 'Department Website Government First Grade College Yelahanka homepage',
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
    category: 'AI / COMPUTER VISION PROJECT',
    categoryType: 'aiml',
    year: '2025',
    shortDescription:
      'Built an AI Smart Vision Assistant that combines real-time object detection, OCR text recognition, intelligent chatbot interaction, multilingual communication, and feedback learning into an interactive visual assistance system.',
    description:
      'Built an AI Smart Vision Assistant that combines real-time object detection, OCR text recognition, intelligent chatbot interaction, multilingual communication, and feedback learning into an interactive visual assistance system.\n\nThe application uses a Flask backend with OpenCV, YOLO-based object detection, OCR, and MySQL for user data, detection history, images and feedback management.',
    technologies: [
      'Python',
      'Flask',
      'YOLO',
      'OpenCV',
      'OCR',
      'MySQL',
      'HTML',
      'CSS',
      'JavaScript',
    ],
    liveUrl: '',
    githubUrl: 'https://github.com/cmkarthik2004/Smart-Vision-AI-Assistant',
    projectImage:
      'https://raw.githubusercontent.com/cmkarthik2004/Smart-Vision-AI-Assistant/main/project-images/landing_page.png',
    images: [
      'https://raw.githubusercontent.com/cmkarthik2004/Smart-Vision-AI-Assistant/main/project-images/landing_page.png',
      'https://raw.githubusercontent.com/cmkarthik2004/Smart-Vision-AI-Assistant/main/project-images/login.png',
      'https://raw.githubusercontent.com/cmkarthik2004/Smart-Vision-AI-Assistant/main/project-images/userdashboard.png',
      'https://raw.githubusercontent.com/cmkarthik2004/Smart-Vision-AI-Assistant/main/project-images/yolo_model_captues.jpg',
      'https://raw.githubusercontent.com/cmkarthik2004/Smart-Vision-AI-Assistant/main/project-images/image_verification.jpg',
      'https://raw.githubusercontent.com/cmkarthik2004/Smart-Vision-AI-Assistant/main/project-images/correcting_model_feature.png',
      'https://raw.githubusercontent.com/cmkarthik2004/Smart-Vision-AI-Assistant/main/project-images/admin_dashboard.jpg',
    ],
    gallery: [
      {
        url: 'https://raw.githubusercontent.com/cmkarthik2004/Smart-Vision-AI-Assistant/main/project-images/landing_page.png',
        title: 'Landing Page',
        caption: 'Landing Page — Main interactive portal and visual assistance system navigation',
        altText: 'AI Smart Vision Assistant landing page',
        fallbackUrls: [
          'https://cdn.jsdelivr.net/gh/cmkarthik2004/Smart-Vision-AI-Assistant@main/project-images/landing_page.png',
          '/project-images/landing_page.png',
          '/images/project-images/landing_page.png',
        ],
      },
      {
        url: 'https://raw.githubusercontent.com/cmkarthik2004/Smart-Vision-AI-Assistant/main/project-images/login.png',
        title: 'Login / Authentication',
        caption: 'Login / Authentication — Secure user authorization and session management',
        altText: 'AI Smart Vision Assistant login interface',
        fallbackUrls: [
          'https://cdn.jsdelivr.net/gh/cmkarthik2004/Smart-Vision-AI-Assistant@main/project-images/login.png',
          '/project-images/login.png',
          '/images/project-images/login.png',
        ],
      },
      {
        url: 'https://raw.githubusercontent.com/cmkarthik2004/Smart-Vision-AI-Assistant/main/project-images/userdashboard.png',
        title: 'User Dashboard',
        caption: 'User Dashboard — Camera stream ingestion, user activity, and detection history',
        altText: 'AI Smart Vision Assistant user dashboard',
        fallbackUrls: [
          'https://cdn.jsdelivr.net/gh/cmkarthik2004/Smart-Vision-AI-Assistant@main/project-images/userdashboard.png',
          '/project-images/userdashboard.png',
          '/images/project-images/userdashboard.png',
        ],
      },
      {
        url: 'https://raw.githubusercontent.com/cmkarthik2004/Smart-Vision-AI-Assistant/main/project-images/yolo_model_captues.jpg',
        title: 'YOLO Object Detection',
        caption: 'YOLO Object Detection — Real-time bounding box recognition and inference',
        altText: 'AI Smart Vision Assistant YOLO object detection interface',
        fallbackUrls: [
          'https://cdn.jsdelivr.net/gh/cmkarthik2004/Smart-Vision-AI-Assistant@main/project-images/yolo_model_captues.jpg',
          'https://raw.githubusercontent.com/cmkarthik2004/Smart-Vision-AI-Assistant/main/project-images/yolo_model_captures.jpg',
          '/project-images/yolo_model_captues.jpg',
          '/images/project-images/yolo_model_captues.jpg',
        ],
      },
      {
        url: 'https://raw.githubusercontent.com/cmkarthik2004/Smart-Vision-AI-Assistant/main/project-images/image_verification.jpg',
        title: 'Image Verification',
        caption: 'Image Verification — OCR text extraction, distance estimation, and color detection',
        altText: 'AI Smart Vision Assistant image verification interface',
        fallbackUrls: [
          'https://cdn.jsdelivr.net/gh/cmkarthik2004/Smart-Vision-AI-Assistant@main/project-images/image_verification.jpg',
          '/project-images/image_verification.jpg',
          '/images/project-images/image_verification.jpg',
        ],
      },
      {
        url: 'https://raw.githubusercontent.com/cmkarthik2004/Smart-Vision-AI-Assistant/main/project-images/correcting_model_feature.png',
        title: 'Model Correction / Feedback Learning',
        caption: 'Model Correction / Feedback Learning — User-guided label correction and continuous learning',
        altText: 'AI Smart Vision Assistant feedback and model correction interface',
        fallbackUrls: [
          'https://cdn.jsdelivr.net/gh/cmkarthik2004/Smart-Vision-AI-Assistant@main/project-images/correcting_model_feature.png',
          '/project-images/correcting_model_feature.png',
          '/images/project-images/correcting_model_feature.png',
        ],
      },
      {
        url: 'https://raw.githubusercontent.com/cmkarthik2004/Smart-Vision-AI-Assistant/main/project-images/admin_dashboard.jpg',
        title: 'Admin Dashboard',
        caption: 'Admin Dashboard — User management, system metrics, and activity logs',
        altText: 'AI Smart Vision Assistant admin dashboard',
        fallbackUrls: [
          'https://cdn.jsdelivr.net/gh/cmkarthik2004/Smart-Vision-AI-Assistant@main/project-images/admin_dashboard.jpg',
          '/project-images/admin_dashboard.jpg',
          '/images/project-images/admin_dashboard.jpg',
        ],
      },
    ],
    features: [
      'Real-time object detection using YOLO',
      'OCR text recognition from images',
      'Object colour detection',
      'Object distance estimation',
      'AI chatbot interaction',
      'Multilingual support including English, Hindi and Kannada',
      'Feedback learning for object-label corrections',
      'Detection history and image gallery',
      'User authentication and authorization',
      'MySQL-based data and activity management',
    ],
    myContribution:
      'Designed and developed the AI Smart Vision application, integrating the computer-vision pipeline, Flask backend, database layer, OCR, object detection, chatbot interaction, authentication, history management and feedback-learning workflow.',
    result:
      'Developed an integrated AI vision assistant capable of processing visual inputs, detecting objects, extracting text, providing object information, interacting through chatbot and multilingual interfaces, and maintaining detection history and feedback data.',
    architecture: {
      frontend: 'HTML · CSS · JavaScript Multilingual UI',
      backend: 'Python Flask with YOLO, OpenCV, OCR & Chatbot',
      database: 'MySQL for User Accounts, Detection Logs & Feedback',
      deployment: 'Interactive Visual Assistance System',
    },
    metrics: [
      { label: 'Vision', value: 'YOLO Object Detection + OpenCV' },
      { label: 'Intelligence', value: 'AI Chat Assistant + NLP' },
      { label: 'Text', value: 'OCR' },
      { label: 'Learning', value: 'Feedback Learning' },
      { label: 'Backend', value: 'Python Flask' },
      { label: 'Database', value: 'MySQL' },
    ],
    featured: false,
  },
  {
    id: 'stitchify',
    name: 'Stitchify — Digital Tailoring & Boutique Platform',
    category: 'WEB PLATFORM',
    categoryType: 'fullstack',
    year: '2025',
    shortDescription:
      'Built a multi-role digital tailoring platform connecting customers with local tailors and boutique designers through tailor discovery, digital portfolios, order tracking, real-time communication, reviews, and centralized administration.',
    description:
      'Stitchify is a web-based digital platform connecting customers with local tailors and boutique designers through a centralized online experience.\n\nThe system has three major user roles:\n• Customer: Registration, tailor discovery, search/filtering, tailor profiles, digital portfolio browsing, stitching order placement, order tracking, customer-tailor chat, reviews and ratings.\n• Tailor: Registration, profile management, portfolio/design management, customer order management, order status updates, customer communication, reviews and ratings, availability management.\n• Admin: Centralized customer and tailor management, tailor approval, review management, photo/content management, operational dashboard, analytics, and platform monitoring.\n\nOrder Workflow:\nPending → Accepted → Cutting → Stitching → Ready → Delivered',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Flask', 'MongoDB'],
    liveUrl: '',
    githubUrl: 'https://github.com/cmkarthik2004/Stitchify-Digital-Tailoring',
    projectImage: '/project-images/customer-homepage.png',
    images: [
      '/project-images/customer-register.png',
      '/project-images/tailor-register.png',
      '/project-images/login.png',
      '/project-images/customer-homepage.png',
      '/project-images/tailor-profile.png',
      '/project-images/tailor-orders.png',
      '/project-images/tailor-portfolio.png',
      '/project-images/customer-orders.png',
      '/project-images/admin-dashboard.png',
      '/project-images/admin-analytics.png',
      '/project-images/admin-reviews.png',
      '/project-images/admin-photo-management.png',
    ],
    gallery: [
      {
        url: '/project-images/customer-register.png',
        title: 'Customer Registration',
        caption: 'Customer registration interface for creating a Stitchify account.',
        altText: 'Stitchify customer registration interface',
        fallbackUrls: [
          '/images/project-images/customer-register.png',
          'https://raw.githubusercontent.com/cmkarthik2004/Stitchify-Digital-Tailoring/main/project-images/customer-register.png',
          'https://cdn.jsdelivr.net/gh/cmkarthik2004/Stitchify-Digital-Tailoring@main/project-images/customer-register.png',
        ],
      },
      {
        url: '/project-images/tailor-register.png',
        title: 'Tailor Registration',
        caption: 'Tailor registration interface for joining the platform as a tailoring service provider.',
        altText: 'Stitchify tailor registration interface',
        fallbackUrls: [
          '/images/project-images/tailor-register.png',
          'https://raw.githubusercontent.com/cmkarthik2004/Stitchify-Digital-Tailoring/main/project-images/tailor-register.png',
          'https://cdn.jsdelivr.net/gh/cmkarthik2004/Stitchify-Digital-Tailoring@main/project-images/tailor-register.png',
        ],
      },
      {
        url: '/project-images/login.png',
        title: 'Login',
        caption: 'Authentication interface for accessing the Stitchify platform.',
        altText: 'Stitchify login authentication interface',
        fallbackUrls: [
          '/images/project-images/login.png',
          'https://raw.githubusercontent.com/cmkarthik2004/Stitchify-Digital-Tailoring/main/project-images/login.png',
          'https://cdn.jsdelivr.net/gh/cmkarthik2004/Stitchify-Digital-Tailoring@main/project-images/login.png',
        ],
      },
      {
        url: '/project-images/customer-homepage.png',
        title: 'Customer Homepage',
        caption: 'Customer-facing homepage with tailor discovery and filtering.',
        altText: 'Stitchify customer homepage with tailor discovery and filtering',
        fallbackUrls: [
          '/images/project-images/customer-homepage.png',
          'https://raw.githubusercontent.com/cmkarthik2004/Stitchify-Digital-Tailoring/main/project-images/customer-homepage.png',
          'https://cdn.jsdelivr.net/gh/cmkarthik2004/Stitchify-Digital-Tailoring@main/project-images/customer-homepage.png',
        ],
      },
      {
        url: '/project-images/tailor-profile.png',
        title: 'Tailor Profile',
        caption: 'Detailed tailor profile with portfolio, reviews, contact information, and working details.',
        altText: 'Stitchify detailed tailor profile view',
        fallbackUrls: [
          '/images/project-images/tailor-profile.png',
          'https://raw.githubusercontent.com/cmkarthik2004/Stitchify-Digital-Tailoring/main/project-images/tailor-profile.png',
          'https://cdn.jsdelivr.net/gh/cmkarthik2004/Stitchify-Digital-Tailoring@main/project-images/tailor-profile.png',
        ],
      },
      {
        url: '/project-images/tailor-orders.png',
        title: 'Tailor Orders',
        caption: 'Tailor-side order management interface for viewing and processing customer orders.',
        altText: 'Stitchify tailor order management interface',
        fallbackUrls: [
          '/images/project-images/tailor-orders.png',
          'https://raw.githubusercontent.com/cmkarthik2004/Stitchify-Digital-Tailoring/main/project-images/tailor-orders.png',
          'https://cdn.jsdelivr.net/gh/cmkarthik2004/Stitchify-Digital-Tailoring@main/project-images/tailor-orders.png',
        ],
      },
      {
        url: '/project-images/tailor-portfolio.png',
        title: 'Tailor Portfolio',
        caption: 'Portfolio management interface for uploading and managing tailoring designs.',
        altText: 'Stitchify tailor portfolio and design management interface',
        fallbackUrls: [
          '/images/project-images/tailor-portfolio.png',
          'https://raw.githubusercontent.com/cmkarthik2004/Stitchify-Digital-Tailoring/main/project-images/tailor-portfolio.png',
          'https://cdn.jsdelivr.net/gh/cmkarthik2004/Stitchify-Digital-Tailoring@main/project-images/tailor-portfolio.png',
        ],
      },
      {
        url: '/project-images/customer-orders.png',
        title: 'Customer Orders',
        caption: 'Customer order interface with stitching progress and order tracking.',
        altText: 'Stitchify customer order tracking interface',
        fallbackUrls: [
          '/images/project-images/customer-orders.png',
          'https://raw.githubusercontent.com/cmkarthik2004/Stitchify-Digital-Tailoring/main/project-images/customer-orders.png',
          'https://cdn.jsdelivr.net/gh/cmkarthik2004/Stitchify-Digital-Tailoring@main/project-images/customer-orders.png',
        ],
      },
      {
        url: '/project-images/admin-dashboard.png',
        title: 'Admin Dashboard',
        caption: 'Administrative dashboard for centralized platform monitoring and user management.',
        altText: 'Stitchify administrative dashboard interface',
        fallbackUrls: [
          '/images/project-images/admin-dashboard.png',
          'https://raw.githubusercontent.com/cmkarthik2004/Stitchify-Digital-Tailoring/main/project-images/admin-dashboard.png',
          'https://cdn.jsdelivr.net/gh/cmkarthik2004/Stitchify-Digital-Tailoring@main/project-images/admin-dashboard.png',
        ],
      },
      {
        url: '/project-images/admin-analytics.png',
        title: 'Admin Analytics',
        caption: 'Analytics interface showing platform activity and summarized operational information.',
        altText: 'Stitchify administrative analytics interface',
        fallbackUrls: [
          '/images/project-images/admin-analytics.png',
          'https://raw.githubusercontent.com/cmkarthik2004/Stitchify-Digital-Tailoring/main/project-images/admin-analytics.png',
          'https://cdn.jsdelivr.net/gh/cmkarthik2004/Stitchify-Digital-Tailoring@main/project-images/admin-analytics.png',
        ],
      },
      {
        url: '/project-images/admin-reviews.png',
        title: 'Admin Reviews',
        caption: 'Administrative review-management interface for monitoring customer feedback.',
        altText: 'Stitchify administrative review management interface',
        fallbackUrls: [
          '/images/project-images/admin-reviews.png',
          'https://raw.githubusercontent.com/cmkarthik2004/Stitchify-Digital-Tailoring/main/project-images/admin-reviews.png',
          'https://cdn.jsdelivr.net/gh/cmkarthik2004/Stitchify-Digital-Tailoring@main/project-images/admin-reviews.png',
        ],
      },
      {
        url: '/project-images/admin-photo-management.png',
        title: 'Admin Photo Management',
        caption: 'Administrative interface for managing platform and portfolio images.',
        altText: 'Stitchify administrative photo and design asset management interface',
        fallbackUrls: [
          '/images/project-images/admin-photo-management.png',
          'https://raw.githubusercontent.com/cmkarthik2004/Stitchify-Digital-Tailoring/main/project-images/admin-photo-management.png',
          'https://cdn.jsdelivr.net/gh/cmkarthik2004/Stitchify-Digital-Tailoring@main/project-images/admin-photo-management.png',
        ],
      },
    ],
    features: [
      'Role-based Customer, Tailor, and Admin experiences',
      'Tailor discovery and filtering by specialty, rating, and location',
      'Digital tailor portfolios with uploaded design showcases',
      'Appointment and custom stitching order placement workflows',
      'Order progress tracking across all lifecycle stages',
      'Customer-tailor communication and direct messaging',
      'Customer reviews and rating submissions',
      'Centralized admin dashboard with user management and tailor approval',
      'Admin analytics for platform activity and operational summaries',
      'Responsive user interface designed for mobile and desktop browsing',
    ],
    myContribution:
      'Architected and implemented the multi-role platform connecting customers, boutique designers, and tailors. Built the backend Flask routing, MongoDB document schemas, order state machine, portfolio asset management, review moderation, and administrative dashboards.',
    result:
      'Delivered a comprehensive digital tailoring solution with 6-stage order tracking (Pending → Accepted → Cutting → Stitching → Ready → Delivered), multi-role access control, and centralized administration.',
    architecture: {
      frontend: 'Semantic HTML5, Responsive CSS3, and Interactive JavaScript',
      backend: 'Python Flask Web Application Framework',
      database: 'MongoDB Document Database for Profiles, Portfolios, Orders & Reviews',
      deployment: 'Cloud Platform with Structured Media Storage',
    },
    metrics: [
      { label: 'Roles', value: 'Customer · Tailor · Admin' },
      { label: 'Order Lifecycle', value: '6-Stage State Machine' },
      { label: 'Backend', value: 'Python Flask' },
      { label: 'Database', value: 'MongoDB' },
      { label: 'Discovery', value: 'Search, Filter & Portfolios' },
      { label: 'Tracking', value: 'Real-Time Status Progression' },
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
 * Core Services offered for freelance client projects & technical consulting
 */
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description:
      'Design modern, user-friendly and responsive interfaces focused on clarity, usability and user experience.',
    icon: 'Palette',
    category: 'optimization',
    whoIsItFor: 'Startups, businesses, and creators needing intuitive interface wireframes, responsive layouts, and user flows.',
    whatYouGet: [
      'Clean visual hierarchy, typography pairings, and accessible contrast',
      'Mobile-first responsive layout planning and interactive prototypes',
      'User journey mapping to eliminate friction and confusion',
      'Design handoff ready for clean frontend engineering',
    ],
    deliverables: ['Responsive UI Layouts', 'Design System Components', 'Wireframes & User Flows'],
    technologies: ['Figma / UI Specs', 'Tailwind Design System', 'Modern CSS', 'Responsive Grid'],
  },
  {
    id: 'website-development-new',
    title: 'Website Development (New)',
    description:
      'Build new websites and web applications based on business requirements, target users and required functionality.',
    icon: 'Globe',
    category: 'development',
    whoIsItFor: 'Businesses and founders looking to build a fresh, high-performance website or web application from the ground up.',
    whatYouGet: [
      'Tailored frontend and backend architecture mapped to your specific workflow',
      'Clean, semantic code built for speed, accessibility, and modern browsers',
      'Fast loading speeds with mobile-responsive layouts on all screens',
      'Integrated forms, lead capture, and custom feature sets',
    ],
    deliverables: ['Custom Web Source Code', 'Production Deployment', 'Domain & SSL Setup', 'Technical Documentation'],
    technologies: ['React / TypeScript', 'Python / Django / Flask', 'PHP', 'HTML5 & Tailwind'],
  },
  {
    id: 'admin-panel-user-website',
    title: 'Admin Panel + User Website',
    description:
      'Develop complete systems with an administrative dashboard for management and a user-facing website or application.',
    icon: 'Shield',
    category: 'development',
    whoIsItFor: 'Businesses requiring both a public client experience and an internal control center to manage operations.',
    whatYouGet: [
      'Unified architecture connecting user-facing portals with administrative tooling',
      'Role-based access control with secure login authentication',
      'Data management dashboards for records, enquiries, and inventory',
      'Structured database design preventing data duplication and corruption',
    ],
    deliverables: ['Administrative Control Dashboard', 'Public-Facing Portal', 'Relational Database', 'User Management'],
    technologies: ['MySQL / SQL', 'Django Admin / Custom Dashboard', 'PHP', 'REST APIs'],
  },
  {
    id: 'business-development-data-analysis',
    title: 'Business Development using Data Analysis',
    description:
      'Use data analysis and insights to help understand business workflows, identify opportunities and support better decisions.',
    icon: 'BarChart3',
    category: 'growth',
    whoIsItFor: 'Teams looking to understand their operational numbers, user engagement, and workflow bottlenecks without guesswork.',
    whatYouGet: [
      'Exploratory data analysis of operational records and workflow logs',
      'Visual interactive dashboards highlighting key activity trends',
      'Identification of user drop-off points and process friction',
      'Objective, data-grounded observations to guide operational decisions',
    ],
    deliverables: ['Interactive Data Dashboard', 'Workflow Analysis Summary', 'Operational Insights'],
    technologies: ['Power BI', 'Python (Pandas, NumPy)', 'Data Visualization', 'Excel Modeling'],
  },
  {
    id: 'website-maintenance',
    title: 'Website Maintenance',
    description:
      'Maintain existing websites through updates, bug fixes, improvements, performance checks and ongoing technical support.',
    icon: 'Wrench',
    category: 'growth',
    whoIsItFor: 'Website owners seeking dependable technical oversight, prompt issue resolution, and system stability.',
    whatYouGet: [
      'Routine software updates, dependency checks, and security patches',
      'Active troubleshooting and rapid bug fixes for reported issues',
      'Page speed and performance health checks',
      'Ongoing technical assistance and content modifications',
    ],
    deliverables: ['Bug Fixes & Patches', 'Performance Checks', 'Backup Verification', 'Technical Support'],
    technologies: ['Linux VPS', 'Git Workflows', 'Database Maintenance', 'SSL / Nginx'],
  },
  {
    id: 'website-redesign',
    title: 'Website Redesign',
    description:
      'Improve or redesign existing websites to provide a more modern appearance, better usability, responsiveness and improved user experience.',
    icon: 'RefreshCw',
    category: 'optimization',
    whoIsItFor: 'Existing websites that look dated, feel sluggish, or fail to render well on mobile devices.',
    whatYouGet: [
      'Modern visual overhaul with refined typography, colors, and layout spacing',
      'Mobile-first responsive reconstruction fixing layout shifts and clipping',
      'Streamlined user navigation focused on clarity and readability',
      'Preservation of existing content structure and domain equity',
    ],
    deliverables: ['Modernized Interface', 'Responsive Mobile Overhaul', 'Clean Cleaned Codebase'],
    technologies: ['Modern CSS / Tailwind', 'JavaScript', 'Responsive Frameworks', 'Asset Optimization'],
  },
  {
    id: 'payment-gateway-integration',
    title: 'Payment Gateway Integration',
    description:
      'Integrate appropriate payment functionality into web applications where required.',
    icon: 'CreditCard',
    category: 'integration',
    whoIsItFor: 'E-commerce, booking platforms, and service businesses needing secure, verified online transactions.',
    whatYouGet: [
      'Integration with verified gateways such as Razorpay based on project requirements',
      'Server-side cryptographic webhook validation to prevent missed orders',
      'Clear user checkout states, success receipts, and transaction logging',
      'Handling of partial payments and advance booking deposits',
    ],
    deliverables: ['Payment Gateway Integration', 'Webhook Signature Security', 'Transaction Logging'],
    technologies: ['Razorpay API', 'Secure Webhooks', 'PHP / Python / MySQL', 'REST Endpoints'],
  },
  {
    id: 'other-general-discussion',
    title: 'Other / General Discussion',
    description:
      'For project ideas, technical discussions, website questions or requirements that do not fit into a specific service category.',
    icon: 'Sparkles',
    category: 'development',
    whoIsItFor: 'Anyone with an early-stage concept, architectural question, or custom requirement ready for an exploratory call.',
    whatYouGet: [
      'Open discussion to understand your project scope and objectives',
      'Honest technical feasibility assessment and architecture advice',
      'Clear recommendations on tech stack, milestones, and implementation paths',
      'No pressure or commitment required',
    ],
    deliverables: ['Technical Feasibility Assessment', 'Scope & Approach Recommendations'],
    technologies: ['Technical Consulting', 'Architecture Planning', 'Requirements Scoping'],
  },
  {
    id: 'applied-aiml-solutions',
    title: 'Applied AI/ML & Vision Pipelines',
    description:
      'Integrate machine learning models, computer vision pipelines (OpenCV), and privacy-preserving data workflows into practical software products.',
    icon: 'BrainCircuit',
    category: 'development',
    whoIsItFor: 'Projects requiring computer vision inspection, machine learning inference, or federated data workflows.',
    whatYouGet: [
      'Practical computer vision pipelines built with OpenCV and Python',
      'Federated learning & privacy-preserving machine learning architectures',
      'Integration of ML inference endpoints into web applications',
      'Evaluation metrics and model performance testing',
    ],
    deliverables: ['Computer Vision Pipeline', 'Inference Integration', 'Model Benchmark Report'],
    technologies: ['Python', 'OpenCV', 'PyTorch / Scikit-Learn', 'REST API Inference'],
  },
  {
    id: 'linux-vps-deployment',
    title: 'Linux VPS Deployment & Server Setup',
    description:
      'Configure Ubuntu Linux VPS servers, Nginx reverse proxies, SSL certificates, Git workflows, and ongoing technical maintenance.',
    icon: 'Server',
    category: 'growth',
    whoIsItFor: 'Clients needing reliable production deployment on cloud VPS infrastructure with HTTPS and automated backups.',
    whatYouGet: [
      'Ubuntu Linux VPS configuration and firewall hardening',
      'Nginx reverse proxy with automated SSL certificate renewal (Let’s Encrypt)',
      'Git pull/deployment workflows and environment isolation',
      'MySQL database service setup and automated cron backups',
    ],
    deliverables: ['Production Server Setup', 'Nginx & SSL Configuration', 'Backup Automation'],
    technologies: ['Ubuntu Linux', 'Nginx', 'Certbot SSL', 'Git', 'MySQL'],
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
    statusOrScore: 'CGPA: 7.89',
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
    statusOrScore: 'Completed',
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

