export const personalInfo = {
  name: "Chitresh Gurjar",
  tagline: "Full-Stack Developer",
  description: "3rd Year B.Tech Computer Science student specializing in AI/ML and Full-Stack Development. Building intelligent systems that bridge the gap between cutting-edge AI and production-ready applications.",
  email: "chitresh.gurjar.work@gmail.com",
  phone: "+91 7828227301",
  github: "https://github.com/Chitresh178779",
  linkedin: "https://www.linkedin.com/in/chitresh-gurjar-aa2a23304",
  location: "Indore, M.P., India",
  resume: "https://drive.google.com/file/d/14h-ho9FIwLZGBBEPLP16hdraxueLt4vk/view?usp=sharing", // Update this path to your actual resume file in the public folder
};

export const education = [
  {
    institution: "Acropolis Institute of Technology and Research",
    degree: "Bachelor of Technology in Computer Science",
    cgpa: "8.15",
    period: "Sep 2023 – May 2027",
    location: "Indore, M.P.",
  },
  {
    institution: "Columbia Convent Senior Secondary School",
    degree: "Class 12th (CBSE)",
    cgpa: "8.94",
    period: "2022",
    location: "Indore, M.P.",
  },
];

export const projects = [
  {
    title: "DevPulse",
    subtitle: "AI-Powered Developer Command Center",
    tech: ["Django", "DRF", "React.js", "Tailwind CSS", "Gemini API", "GitHub API"],
    description:
      "A DevEx productivity hub reducing context switching through an integrated developer dashboard. Features decoupled React + Django REST architecture, GitHub analytics (commit trends, merge time, health score), and AI Code Auditor using Gemini API for security and performance analysis.",
    github: "https://github.com/Chitresh178779/DevPulse-V0",
    live: "#",
    demo: "",
    image: "/projects/devpulse.png",
    color: "#38bdf8",
  },
  {
    title: "Freelance Platform",
    subtitle: "Escrow System with Secure Payments",
    tech: ["React", "Django", "PostgreSQL", "Stripe API"],
    description:
      "A secure freelance marketplace enabling clients to post projects and freelancers to bid, collaborate, and deliver. Features an escrow-based payment system ensuring safe transactions and RESTful APIs integrated with Stripe for secure payment handling.",
    github: "https://github.com/Chitresh178779/freelanceplatform_V0",
    live: "#",
    demo: "https://youtu.be/-bxsp5g1m30",
    image: "/projects/freelance.png",
    color: "#22c55e",
  },
];

export const skills = {
  "Programming Languages": [
    { name: "Python", level: 90 },
    { name: "C", level: 75 },
    { name: "C++", level: 75 },
    { name: "SQL", level: 80 },
    { name: "JavaScript", level: 85 },
    { name: "TypeScript", level: 80 },
  ],
  "Frameworks & Libraries": [
    { name: "React.js", level: 88 },
    { name: "Django", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Django REST Framework", level: 85 },
  ],
  "AI/ML Tools": [
    { name: "Scikit-learn", level: 78 },
    { name: "Google Colab", level: 80 },
    { name: "Gemini API", level: 82 },
    { name: "Jupyter", level: 80 },
  ],
  "Databases & DevTools": [
    { name: "PostgreSQL", level: 80 },
    { name: "GitHub", level: 90 },
    { name: "Linux", level: 75 },
    { name: "VS Code", level: 92 },
    { name: "Postman", level: 82 },
  ],
};

export const achievements = [
  {
    title: "Kriyeta 4.0",
    type: "Hackathon",
    description: "Advanced to the second round of a national-level innovation-focused tech competition.",
    role: "Finalist – Selected in Round 2",
    icon: "trophy",
  },
  {
    title: "AI Fusion Hackathon",
    type: "Hackathon",
    description: "Built an AI-based prediction model using Python and scikit-learn at a competitive AI/ML hackathon.",
    role: "Participant – AI Model Developer",
    icon: "brain",
  },
  {
    title: "CodeXpress 2.0",
    type: "Competitive Programming",
    description: "100 Days of Code Challenge",
    role: "Completed the challenge with consistent coding for 100 days ",
    icon: "code",
  },
];

export const certificates = [
  {
    title: "CodeXpress 2.0",
    issuer: "AITR-ACM and ACM-W",
    icon: "code",
    link: "https://drive.google.com/file/d/1rKEySzDH-6WD7h5OGKSvTt-TzY5yxSbI/view?usp=sharing",
  },
  {
    title: "NPTEL — Database Management System (DBMS)",
    issuer: "NPTEL Certified",
    icon: "database",
    link: "https://drive.google.com/file/d/1iBzNLvXGw41OQogIrBvOGMiPNr5ZHLdT/view?usp=sharing",
  },
  {
    title: "NPTEL — Python for Data Science",
    issuer: "NPTEL Certified",
    icon: "barChart",
    link: "https://drive.google.com/file/d/1hraSkujNhp9p8boXbJku-0ZIrAA4KbQc/view?usp=sharing",
  },
];

export const githubStats = {
  username: "Chitresh-Gurjar",
  level: 28,
  title: "Code Architect",
  xp: 3420,
  xpToNext: 5000,
  stats: {
    repositories: 15,
    stars: 12,
    commits: 342,
    pullRequests: 28,
    contributions: 580,
    streak: 45,
  },
  badges: [
    { name: "First Commit", icon: "🎯", earned: true },
    { name: "Open Source", icon: "🌐", earned: true },
    { name: "Bug Hunter", icon: "🐛", earned: true },
    { name: "Team Player", icon: "🤝", earned: true },
    { name: "AI Explorer", icon: "🤖", earned: true },
    { name: "Full Stack", icon: "⚡", earned: true },
  ],
};

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];
