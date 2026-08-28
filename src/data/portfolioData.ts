import { Project, SiteConfig, SkillCategory, WorkflowStage } from '../types';

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
