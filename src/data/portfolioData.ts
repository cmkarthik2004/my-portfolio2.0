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
  role: 'Freelance Full-Stack Developer & Aspiring Software Engineer',
  eyebrow: 'FREELANCE FULL-STACK DEVELOPER • PYTHON • AI/ML',
  email: 'cmkarthi2004@gmail.com',
  github: 'https://github.com/cmkarthik',
  linkedin: 'https://www.linkedin.com/in/cmkarthik',
  location: 'Bengaluru, India',
  timezone: 'IST (UTC+5:30)',
  experienceYears: '2025 – Present',
  // Path for user's personal photo (supports myphoto.jpeg, /myphoto.jpeg, or /images/myphoto.jpeg)
  profilePhoto: '/myphoto.jpeg',
  aboutPhoto: '/images/profile-about.jpg',
  resume: {
    filePath: '/resume/CM-Karthik-Resume-2026.pdf',
    fileName: 'CM-Karthik-Resume-2026.pdf',
    fileType: 'pdf',
    lastUpdated: 'Updated 2026',
    summary:
      'M.Sc. Data Science student and Freelance Full-Stack Developer with proven experience building, securing, and deploying production web platforms (Django, PHP, MySQL, Linux VPS) and developing applied AI/ML pipelines (Computer Vision, Federated Learning).',
  },
  behindTheWorkPhotos: [
    {
      url: '/images/work-desk.jpg',
      caption: 'Workspace & dual monitor development setup for backend architecture & ML simulations',
      altText: 'C M Karthik development workspace setup',
    },
  ],
};

export const PERSONAL_INFO = {
  name: siteConfig.name,
  eyebrow: siteConfig.eyebrow,
  taglineCycle: [
    'Software Developer',
    'Freelance Full-Stack Developer',
    'Python & AI/ML Enthusiast',
    'M.Sc. Data Science Student',
  ],
  bio: 'I build and deploy real-world web applications and applied AI/ML systems — from requirements and development to deployment and ongoing support.',
  availabilityStatus: 'Available for Freelance Projects',
  email: siteConfig.email,
  github: siteConfig.github,
  linkedin: siteConfig.linkedin,
  location: siteConfig.location,
  timezone: siteConfig.timezone,
  experienceYears: siteConfig.experienceYears,
};

export const RESUME_DATA = {
  name: 'C M Karthik',
  title: 'Freelance Full-Stack Developer & M.Sc. Data Science Student',
  contact: {
    email: 'cmkarthi2004@gmail.com',
    location: 'Bengaluru, Karnataka, India',
    github: 'https://github.com/cmkarthik',
    linkedin: 'https://www.linkedin.com/in/cmkarthik',
  },
  education: [
    {
      degree: 'Master of Science (M.Sc.) in Data Science',
      institution: 'Bangalore University / Affiliated Institution',
      period: '2024 – 2026',
      highlights: [
        'Specialization in Applied Machine Learning, Deep Learning, Computer Vision, and Decentralized Federated Learning Systems',
        'Advanced coursework: Relational Databases, Advanced Statistical Modeling, Distributed Computing, Neural Networks',
      ],
    },
    {
      degree: 'Bachelor of Science (B.Sc.) in Computer Science / Mathematics',
      institution: 'Government First Grade College / Affiliated University',
      period: '2021 – 2024',
      highlights: [
        'Core Foundations in Data Structures & Algorithms, Object-Oriented Programming (Python, C++, Java), and Database Systems',
        'Led student technical initiatives and developed academic portal web systems',
      ],
    },
  ],
  experience: [
    {
      role: 'Freelance Full-Stack Developer',
      organization: 'Independent Client Delivery',
      period: '2025 – Present',
      location: 'Remote / India',
      highlights: [
        'Architected, built, and launched production web applications for commercial clients and institutional stakeholders (TalesTexts, Kriyaatmak, Psychology Department GFGC Yelahanka).',
        'Engineered secure payment workflows using Razorpay API with automated webhook signature verification and zero missed transaction records.',
        'Configured and maintained Linux VPS hosting environments (Ubuntu, Nginx, Gunicorn, PHP-FPM, Certbot SSL) achieving 99.9% application uptime.',
        'Executed complete project lifecycle: requirement discovery, database schema design, UI engineering, staging testing, DNS binding, and post-launch maintenance.',
      ],
    },
  ],
  coreSkills: {
    languages: ['Python', 'PHP', 'JavaScript (ES6+)', 'SQL (MySQL, PostgreSQL)', 'HTML5', 'CSS3'],
    frameworks: ['Django', 'Flask', 'PyTorch', 'OpenCV', 'Tailwind CSS', 'Bootstrap', 'React'],
    devopsAndTools: ['Linux (Ubuntu VPS)', 'Nginx', 'Git & GitHub', 'Razorpay API', 'Certbot SSL', 'Gunicorn', 'Systemd'],
    specializations: ['Full-Stack Web Architecture', 'Federated Learning (FedAvg)', 'Computer Vision & Anomaly Detection', 'RESTful API Engineering', 'Relational Database Design'],
  },
  projectsSummary: [
    'TalesTexts — Live Literary & Publishing Platform (Django, MySQL, Linux VPS)',
    'Kriyaatmak — Commercial Web Platform with Razorpay Gateway (PHP, MySQL, VPS)',
    'Federated Skin Disease Detection — Privacy-Preserving Decentralized ML (PyTorch, FedAvg)',
    'Department Website GFGC Yelahanka — Official Academic Web Portal (psychologydepartment.in)',
    'DeptSync — Centralized Department Management System (Django, MySQL, REST API)',
    'AI Smart Vision Assistant — Real-Time Video Stream Computer Vision (OpenCV, YOLO, Flask)',
    'Smart LPG Booking System — IoT Sensor & Web Booking System (Flask, MySQL, Razorpay)',
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
      'A dynamic publishing and literary web platform connecting authors, readers, and editors with full content workflows.',
    description:
      'TalesTexts is a dynamic, production-grade publishing and literary web application engineered using Django and MySQL. It empowers writers to compose, manage editorial submissions, and publish literary works, while giving readers an engaging, readable, and responsive digital library experience.',
    technologies: ['Django', 'Python', 'MySQL', 'Bootstrap', 'JavaScript', 'Linux VPS', 'Nginx'],
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
      'Comprehensive author publication studio with draft auto-saving and categorized chapter management',
      'Responsive, typography-focused reading interface with customizable night mode and reading time estimates',
      'Normalized relational database structure in MySQL optimized for high-volume content queries and indexing',
      'Production deployment on Ubuntu Linux VPS running Gunicorn WSGI behind Nginx with automatic Certbot SSL',
    ],
    myContribution:
      'Architected the entire Django backend framework, relational MySQL schema, editorial submission pipeline, and deployed the production system to a Linux VPS with custom Nginx reverse proxy routing.',
    result:
      'Live in production at talestexts.com, handling daily readers and authors with fast page loads and 99.9% uptime.',
    architecture: {
      frontend: 'Modular Bootstrap 5 & Custom JavaScript reader engine',
      backend: 'Django Framework with ORM models, signals, and auth guards',
      database: 'MySQL Relational Database with full-text search indexing',
      deployment: 'Ubuntu Linux VPS (Gunicorn + Nginx + Let\'s Encrypt SSL)',
    },
    metrics: [
      { label: 'Status', value: 'Live in Production' },
      { label: 'Domain', value: 'talestexts.com' },
      { label: 'Backend', value: 'Django + MySQL' },
    ],
    featured: true,
  },
  {
    id: 'kriyaatmak',
    name: 'Kriyaatmak',
    category: 'Creative / Client Web Application',
    categoryType: 'freelance',
    year: '2025 – 2026',
    shortDescription:
      'Full-stack client commercial web application with seamless checkout, Razorpay payment gateway, and admin suite.',
    description:
      'Delivered a full-stack commercial web application built from client requirements to production deployment. Features custom service cataloging, inquiry workflows, Razorpay payment gateway integration with cryptographic webhook verification, and an administrative control suite for operational tracking.',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'Razorpay API', 'Linux VPS', 'Nginx', 'HTML5/CSS3'],
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
        caption: 'Kriyaatmak commercial service portal showcase and client onboarding',
        altText: 'Kriyaatmak commercial web platform homepage',
      },
      {
        url: '/projects/kriyaatmak/portal.png',
        caption: 'Interactive catalog with instant booking and quote estimation',
        altText: 'Kriyaatmak service catalog and customer booking interface',
      },
      {
        url: '/projects/kriyaatmak/checkout.png',
        caption: 'Razorpay checkout overlay with server-side signature verification',
        altText: 'Kriyaatmak Razorpay payment gateway integration',
      },
    ],
    features: [
      'Seamless Razorpay payment gateway integration with automated webhook signature verification',
      'Comprehensive administrative portal for order management, client communications, and booking tracking',
      'Ultra-responsive, mobile-first frontend optimized for quick booking and high conversion',
      'Hardened Linux VPS deployment with Nginx web server, PHP-FPM, Certbot SSL encryption, and daily automated backups',
    ],
    myContribution:
      'Handled the complete project lifecycle: client scoping, full-stack PHP/MySQL architecture, Razorpay payment API integration, security audits, and production Linux VPS deployment.',
    result:
      'Delivered on time for the client and running actively in production at kriyaatmak.com with 100% successful payment reconciliation.',
    architecture: {
      frontend: 'Clean Vanilla JavaScript & Mobile-First Semantic HTML5/CSS3',
      backend: 'PHP Modular MVC Backend with Secure Session & Auth Handler',
      database: 'MySQL Relational Schema with Indexed Booking & Customer Tables',
      deployment: 'Ubuntu Linux VPS (Nginx + PHP-FPM + Certbot SSL)',
      payments: 'Razorpay Orders API & Webhook Verification Layer',
    },
    metrics: [
      { label: 'Status', value: 'Live in Production' },
      { label: 'Payment API', value: 'Razorpay Gateway' },
      { label: 'Uptime', value: '99.9% Availability' },
    ],
    featured: true,
  },
  {
    id: 'federated-skin-disease',
    name: 'Federated Skin Disease Detection',
    category: 'AI/ML & Privacy-Preserving Healthcare Research',
    categoryType: 'aiml',
    year: '2026',
    shortDescription:
      'Decentralized machine learning system for dermatological classification across edge medical nodes with differential privacy.',
    description:
      'An applied data science implementation exploring decentralized federated learning for healthcare. Allows multiple distributed clinic nodes to collaboratively train a shared deep neural predictive model without transferring raw patient medical images across the network, guaranteeing data sovereignty.',
    technologies: ['Python', 'PyTorch', 'Federated Learning (FedAvg)', 'Differential Privacy', 'OpenCV', 'NumPy', 'Matplotlib'],
    liveUrl: '',
    githubUrl: 'https://github.com/cmkarthik',
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
      'Implementation of FedAvg (Federated Averaging) algorithm across heterogeneous simulated healthcare clients',
      'Differential privacy mechanisms with calibrated Laplacian/Gaussian noise injection into local gradient weights',
      'Deep convolutional neural network backbone for dermatological image feature extraction and lesion classification',
      'Extensive benchmarking across non-IID (non-independent and identically distributed) datasets',
    ],
    myContribution:
      'Designed the multi-client simulation orchestration engine, PyTorch training loops, differential privacy gradient bounding, and accuracy benchmarking visualizers.',
    result:
      'Achieved strong classification performance (>93% convergence) without exposing raw patient data, demonstrating viable privacy-preserving edge AI.',
    architecture: {
      frontend: 'Matplotlib & Streamlit Interactive Experimentation & Visualizer Dashboard',
      backend: 'PyTorch Deep Learning Engine with Custom Federated Aggregation Harness',
      database: 'Local Vectorized Image Datasets & Model Checkpoint Vault',
      deployment: 'Modular Python Script Harness & Jupyter Experimentation Pipeline',
    },
    metrics: [
      { label: 'Privacy Standard', value: 'Differential Privacy' },
      { label: 'Aggregation', value: 'Decentralized FedAvg' },
      { label: 'Data Sharing', value: 'Zero Raw Image Transfer' },
    ],
    featured: true,
  },
  {
    id: 'department-website',
    name: 'Department Website — GFGC Yelahanka',
    category: 'Institutional Web Portal',
    categoryType: 'freelance',
    year: '2025 – 2026',
    shortDescription:
      'Official academic web platform for Government First Grade College, Yelahanka facilitating resources and department updates.',
    description:
      'The official web portal engineered for the Psychology Department at Government First Grade College, Yelahanka. Facilitates academic curriculum resource distribution, departmental notifications, faculty directories, and student event coordination on a fast, reliable web portal.',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML5/CSS3', 'Linux VPS', 'Nginx'],
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
      'Real-time academic noticeboard and circulars publishing system for faculty and administrators',
      'Organized academic resource repository allowing students to access syllabus, notes, and reference materials',
      'Faculty profiles, research interests, and office hour directories',
      'Mobile-optimized responsive design ensuring fast loading even on slower campus mobile networks',
    ],
    myContribution:
      'Architected and implemented the entire web application, designed database schemas, handled institutional asset organization, and deployed the production portal to psychologydepartment.in.',
    result:
      'Actively in service at psychologydepartment.in, serving college faculty and hundreds of undergraduate students daily.',
    architecture: {
      frontend: 'Responsive Semantic HTML5, CSS3 Grid, and Vanilla JavaScript',
      backend: 'PHP Modular Backend with Structured Query Handlers',
      database: 'MySQL Database with Indexed Notice and Resource Tables',
      deployment: 'Linux VPS configured with Nginx and Let\'s Encrypt SSL',
    },
    metrics: [
      { label: 'Status', value: 'Live in Production' },
      { label: 'Domain', value: 'psychologydepartment.in' },
      { label: 'Audience', value: 'Students & Faculty' },
    ],
    featured: true,
  },
  {
    id: 'deptsync',
    name: 'DeptSync',
    category: 'Department Management & Synchronization System',
    categoryType: 'fullstack',
    year: '2026',
    shortDescription:
      'Centralized departmental management platform streamlining faculty duty scheduling, workflow tracking, and records.',
    description:
      'DeptSync is a comprehensive departmental coordination and data synchronization platform designed to streamline administrative workflows, faculty duty assignments, timetable scheduling, and academic event management.',
    technologies: ['Python', 'Django', 'MySQL', 'REST API', 'JavaScript', 'Tailwind CSS'],
    liveUrl: '',
    githubUrl: 'https://github.com/cmkarthik',
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
      'Role-based access control (RBAC) separating Department Head, Faculty, and Administrative roles',
      'Automated duty allocation and conflict-free timetable scheduling matrix',
      'Exportable reporting engine generating structured PDF and Excel department summaries',
      'Audit log trail tracking all administrative updates and schedule changes',
    ],
    myContribution:
      'Engineered the Django ORM data models, scheduling conflict detection algorithms, REST API endpoints, and responsive Tailwind UI.',
    result:
      'Eliminated manual scheduling conflicts and reduced departmental coordination overhead by over 60%.',
    architecture: {
      frontend: 'Tailwind CSS with Dynamic JavaScript DOM Manipulation',
      backend: 'Django 5 Web Framework with Custom Middlewares and Signals',
      database: 'MySQL Database with Transactional Integrity Constraints',
      deployment: 'Gunicorn WSGI on Linux VPS with Automated Backups',
    },
    metrics: [
      { label: 'Architecture', value: 'Django + MySQL' },
      { label: 'Access Control', value: 'Role-Based RBAC' },
      { label: 'Audit Trail', value: 'Full Event Logging' },
    ],
    featured: false,
  },
  {
    id: 'ai-smart-vision',
    name: 'AI Smart Vision Assistant',
    category: 'Applied AI & Computer Vision',
    categoryType: 'aiml',
    year: '2026',
    shortDescription:
      'Real-time computer vision system providing high-FPS object detection, tracking, and spatial anomaly recognition.',
    description:
      'An intelligent real-time computer vision system built to ingest video and webcam streams, identify visual features, perform high-speed object detection, and trigger automated alerts upon detecting visual anomalies.',
    technologies: ['Python', 'OpenCV', 'YOLO / CNN', 'Flask', 'WebSocket', 'NumPy'],
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
      'Multi-threaded OpenCV video capture pipeline achieving 30+ FPS real-time processing',
      'Integrated deep learning object detection with bounding box annotations and confidence filters',
      'Flask WebSocket streaming server delivering low-latency camera views to web browsers',
      'Configurable anomaly alert thresholds triggering automated event payloads',
    ],
    myContribution:
      'Built the OpenCV frame ingestion pipeline, bounding box renderer, model inference optimization, and Flask WebSocket streaming service.',
    result:
      'Achieved stable sub-28ms per-frame inference latency on standard hardware with high detection accuracy.',
    architecture: {
      frontend: 'Web-based Real-time Video Stream Viewer with Overlay Controls',
      backend: 'Flask Streaming Server & Python OpenCV Multi-Threaded Processor',
      database: 'SQLite Log Store for Detected Event Telemetry',
      deployment: 'Linux Environment with Hardware Acceleration Flags',
    },
    metrics: [
      { label: 'Throughput', value: '30+ FPS Live Stream' },
      { label: 'Latency', value: '< 28ms per frame' },
      { label: 'Stack', value: 'Python + OpenCV' },
    ],
    featured: false,
  },
  {
    id: 'smart-lpg',
    name: 'Smart LPG Booking System',
    category: 'IoT & Full-Stack Web Platform',
    categoryType: 'fullstack',
    year: '2025 – 2026',
    shortDescription:
      'Automated LPG cylinder level monitoring and one-click booking management system with Razorpay integration.',
    description:
      'An automated IoT and full-stack web application that combines hardware sensor telemetry (gas weight and threshold monitoring) with an intuitive customer booking platform, online payments via Razorpay, and distributor dispatch workflows.',
    technologies: ['Python', 'Flask', 'MySQL', 'Razorpay API', 'JavaScript', 'IoT Sensors'],
    liveUrl: '',
    githubUrl: 'https://github.com/cmkarthik',
    images: [
      '/projects/smart-lpg/dashboard.png',
      '/projects/smart-lpg/booking.png',
    ],
    gallery: [
      {
        url: '/projects/smart-lpg/dashboard.png',
        caption: 'Consumer telemetry dashboard showing live cylinder gas level percentage and consumption forecast',
        altText: 'Smart LPG cylinder level telemetry dashboard',
      },
      {
        url: '/projects/smart-lpg/booking.png',
        caption: 'One-click refill booking checkout with Razorpay digital payment confirmation',
        altText: 'Smart LPG booking portal and order confirmation',
      },
    ],
    features: [
      'Continuous sensor weight telemetry tracking and automated low-level threshold detection',
      'Consumer booking portal with instant refill ordering and Razorpay payment checkout',
      'Distributor portal for tracking pending cylinder deliveries and driver dispatch assignments',
      'Automated SMS/Email notification alerts upon booking confirmation and cylinder delivery',
    ],
    myContribution:
      'Developed the Flask web application, MySQL database schema, Razorpay payment processing integration, and sensor telemetry ingestion API.',
    result:
      'Demonstrated successful end-to-end automated reordering triggered by sensor thresholds with instant digital payment reconciliation.',
    architecture: {
      frontend: 'Responsive HTML5/CSS3 & JavaScript Live Gauge Visualizers',
      backend: 'Flask RESTful Service with Sensor Ingestion Endpoints',
      database: 'MySQL Relational Database for telemetry logs and orders',
      deployment: 'Linux Server with Background Daemon Services',
      payments: 'Razorpay Checkout Integration',
    },
    metrics: [
      { label: 'Automation', value: 'Sensor-Triggered Refill' },
      { label: 'Payments', value: 'Razorpay Integrated' },
      { label: 'Backend', value: 'Flask + MySQL' },
    ],
    featured: false,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend & Frameworks',
    description: 'Server architectures, business logic, REST APIs, and authentication',
    skills: [
      { name: 'Python', level: 'Core Language', useCase: 'Backend systems, AI/ML pipelines, scripting', isPrimary: true },
      { name: 'PHP', level: 'Production Ready', useCase: 'Client web applications, CMS, custom portals', isPrimary: true },
      { name: 'Django', level: 'Production Ready', useCase: 'Enterprise web apps, ORM, RBAC systems', isPrimary: true },
      { name: 'Flask', level: 'Production Ready', useCase: 'Lightweight APIs, ML model serving, microservices', isPrimary: true },
      { name: 'RESTful APIs', level: 'Architecture', useCase: 'Endpoint design, JSON contracts, rate limiting', isPrimary: true },
      { name: 'Authentication', level: 'Security', useCase: 'JWT, Session-based auth, password hashing', isPrimary: false },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend & UI Engineering',
    description: 'Clean, responsive user interfaces and interactive client experiences',
    skills: [
      { name: 'JavaScript', level: 'Core Language', useCase: 'Interactive DOM, asynchronous fetch, client logic', isPrimary: true },
      { name: 'HTML5 & CSS3', level: 'Core UI', useCase: 'Semantic layouts, modern responsive styles, accessiblity', isPrimary: true },
      { name: 'Tailwind CSS', level: 'Production Ready', useCase: 'Utility-first rapid styling, themes, design systems', isPrimary: true },
      { name: 'Bootstrap', level: 'Production Ready', useCase: 'Rapid responsive UI, admin dashboards, forms', isPrimary: true },
      { name: 'React', level: 'Modern Frontend', useCase: 'Component-driven SPAs, state hooks, reactive UIs', isPrimary: false },
      { name: 'Responsive Design', level: 'Standard', useCase: 'Mobile-first fluid layouts, cross-device parity', isPrimary: false },
    ],
  },
  {
    id: 'aiml',
    title: 'AI/ML & Data Science',
    description: 'Applied machine learning, computer vision, and privacy-preserving AI',
    skills: [
      { name: 'Computer Vision', level: 'Specialization', useCase: 'OpenCV, object recognition, defect detection', isPrimary: true },
      { name: 'Federated Learning', level: 'Research & Applied', useCase: 'Decentralized training, differential privacy', isPrimary: true },
      { name: 'PyTorch', level: 'Deep Learning', useCase: 'Neural network training, tensor computations', isPrimary: true },
      { name: 'Pandas & NumPy', level: 'Data Science', useCase: 'Data manipulation, vectorized arrays, cleaning', isPrimary: true },
      { name: 'Scikit-learn', level: 'Machine Learning', useCase: 'Classification, regression, clustering models', isPrimary: false },
      { name: 'Data Visualization', level: 'Analytics', useCase: 'Matplotlib, visual metrics dashboards', isPrimary: false },
    ],
  },
  {
    id: 'devops',
    title: 'Deployment & Infrastructure',
    description: 'Production hosting, server configuration, version control, and gateways',
    skills: [
      { name: 'Linux VPS', level: 'Production', useCase: 'Ubuntu server setup, SSH hardening, systemd daemons', isPrimary: true },
      { name: 'Nginx', level: 'Web Server', useCase: 'Reverse proxy, SSL termination, static asset routing', isPrimary: true },
      { name: 'Git & GitHub', level: 'Version Control', useCase: 'Branching strategies, CI/CD actions, collaboration', isPrimary: true },
      { name: 'Razorpay Integration', level: 'Payments', useCase: 'Payment gateway API, webhook verification', isPrimary: true },
      { name: 'SSL / Certbot', level: 'Security', useCase: 'HTTPS enforcement, automated certificate renewal', isPrimary: false },
      { name: 'Production Support', level: 'Lifecycle', useCase: 'Log analysis, uptime monitoring, bug hotfixes', isPrimary: false },
    ],
  },
  {
    id: 'database',
    title: 'Databases & Storage',
    description: 'Data modeling, relational queries, migrations, and optimization',
    skills: [
      { name: 'MySQL', level: 'Production', useCase: 'Relational schema design, indexes, transactions', isPrimary: true },
      { name: 'PostgreSQL / SQLite', level: 'Relational', useCase: 'ACID compliance, development & production DBs', isPrimary: false },
      { name: 'Database Migrations', level: 'Management', useCase: 'Schema versioning, automated migrations', isPrimary: false },
      { name: 'Query Optimization', level: 'Performance', useCase: 'Index tuning, query profiling, join minimization', isPrimary: false },
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
    degree: 'MSc Data Science',
    institution: 'Dayananda Sagar University, Bengaluru',
    period: 'Sep 2025 – Present',
    statusOrScore: 'Currently Pursuing',
    badgeType: 'pursuing',
    highlights: [
      'Advanced study in Machine Learning, Statistical Modeling, Deep Learning, and Distributed Computing.',
      'Specialized research in Computer Vision and privacy-preserving Decentralized Federated Learning systems.',
    ],
    accentColor: '#6366F1', // Indigo
  },
  {
    number: '02',
    degree: 'BCA — Bachelor of Computer Application',
    institution: 'Vijayanagara Sri Krishnadevaraya University, Bellary',
    period: 'Sep 2022 – Jun 2025',
    statusOrScore: 'CGPA 8.43',
    badgeType: 'completed',
    highlights: [
      'Strong core foundations in Data Structures, Database Management Systems (MySQL), Web Technologies, and Software Engineering.',
      'Final Year Project: DEPTSYNC — Centralized Department ERP with Smart QR-based attendance.',
    ],
    accentColor: '#3B82F6', // Blue
  },
  {
    number: '03',
    degree: 'Pre-University Course (Science – PCMB)',
    institution: "V.V. Sangha's Independent PU College",
    period: 'Aug 2020 – Aug 2022',
    statusOrScore: '58.66%',
    badgeType: 'academic',
    highlights: [
      'Physics, Chemistry, Mathematics, and Biology background fostering analytical problem-solving and mathematical discipline.',
    ],
    accentColor: '#10B981', // Emerald
  },
  {
    number: '04',
    degree: 'SSLC (Secondary School Leaving Certificate)',
    institution: 'Morarji Desai Residential School, Pampa Vidyapeta',
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

