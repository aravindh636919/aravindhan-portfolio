/**
 * Portfolio Data Configuration for Aravindhan M
 * 
 * Edit this file to update any content, links, education details, 
 * skills, projects, or certifications across the entire portfolio website.
 */

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade: string;
  gradeType: 'CGPA' | 'Percentage';
  location: string;
  highlights?: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  badge?: string;
  skills: {
    name: string;
    level?: string;
    iconName?: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  status: 'In Progress' | 'Completed';
  description: string;
  keyFeatures: string[];
  techStack: string[];
  image: string;
  githubUrl: string;
  liveDemoUrl?: string;
  hasInteractiveDemo?: boolean;
}

export interface InternshipItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  category: string;
  date?: string;
  credentialUrl?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  event: string;
  issuer: string;
  place: string;
  description: string;
  isTopHighlight: boolean;
}

export interface HackathonStat {
  label: string;
  count: number;
  subtext: string;
  breakdown?: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    tagline: string;
    email: string;
    phone: string;
    displayPhone: string;
    location: string;
    profilePhoto: string;
    profileSummary: string;
    passion: string;
    typingRoles: string[];
  };
  socialLinks: {
    linkedIn: string;
    github: string;
    email: string;
    phone: string;
  };
  education: EducationItem[];
  skills: SkillCategory[];
  projects: ProjectItem[];
  internships: InternshipItem[];
  certifications: CertificationItem[];
  achievements: AchievementItem[];
  hackathons: {
    totalCount: number;
    title: string;
    summary: string;
    stats: HackathonStat[];
    activities: {
      title: string;
      timeline: string;
      description: string;
      badge: string;
    }[];
  };
  resume: {
    fileName: string;
    downloadPath: string;
    lastUpdated: string;
  };
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Aravindhan M",
    role: "B.E. Computer Science and Engineering Student",
    tagline: "Aspiring software developer building practical technology solutions",
    email: "aravindh636919@gmail.com",
    phone: "+91 6374678191",
    displayPhone: "+91 63746 78191",
    location: "Tamil Nadu, India",
    // User uploaded official portrait
    profilePhoto: "/assets/aistudio/image_3e02797b.png",
    profileSummary:
      "B.E. Computer Science and Engineering student with foundational knowledge of Java, Python, HTML and CSS. Interested in software development, problem-solving and building practical technology solutions. Experienced in hackathons, idea pitching events and academic projects. Currently developing projects to strengthen programming, teamwork and real-world problem-solving skills.",
    passion:
      "Passionate about software development, problem-solving, and building real-world solutions through hackathons and impactful projects. Focused on crafting accessible, well-engineered applications that address everyday challenges.",
    typingRoles: [
      "CSE Student",
      "Web Development Intern",
      "Problem Solver",
      "Hackathon Participant",
      "Aspiring Developer"
    ]
  },
  socialLinks: {
    linkedIn: "https://www.linkedin.com/in/aravindhan-m-cse",
    github: "https://github.com/aravindh636919",
    email: "mailto:aravindh636919@gmail.com",
    phone: "tel:+916374678191"
  },
  education: [
    {
      id: "be-cse",
      degree: "B.E. Computer Science and Engineering",
      institution: "SNS College of Technology",
      period: "2023 – 2027",
      grade: "8.4 CGPA",
      gradeType: "CGPA",
      location: "Coimbatore, Tamil Nadu",
      highlights: [
        "Core Coursework: Data Structures, Object-Oriented Programming (Java), Python, Operating Systems, Database Management Systems",
        "Active member of student tech clubs and competitive hackathon teams",
        "Won 3rd Place at the college-wide Design Thinking (DT) Expo"
      ]
    },
    {
      id: "hsc-12th",
      degree: "Higher Secondary Certificate (12th Grade)",
      institution: "Higher Secondary School",
      period: "2022 – 2023",
      grade: "88.6%",
      gradeType: "Percentage",
      location: "Tamil Nadu",
      highlights: [
        "Major subjects: Computer Science, Mathematics, Physics, Chemistry",
        "Built early interest in algorithmic logic and Python programming"
      ]
    },
    {
      id: "sslc-10th",
      degree: "Secondary School Leaving Certificate (SSLC / 10th)",
      institution: "Secondary High School",
      period: "2020 – 2021",
      grade: "91.2%",
      gradeType: "Percentage",
      location: "Tamil Nadu",
      highlights: [
        "Strong foundation in Mathematics and Natural Sciences",
        "Participated in science exhibitions and inter-school academic competitions"
      ]
    }
  ],
  skills: [
    {
      id: "programming",
      title: "Programming",
      badge: "Core Foundations",
      skills: [
        { name: "Java", level: "Intermediate", iconName: "Coffee" },
        { name: "Python", level: "Intermediate", iconName: "Code2" }
      ]
    },
    {
      id: "web-technologies",
      title: "Web Technologies",
      badge: "Frontend Stack",
      skills: [
        { name: "HTML5", level: "Proficient", iconName: "FileCode" },
        { name: "CSS3", level: "Proficient", iconName: "Palette" },
        { name: "Front-end Development", level: "Responsive UI", iconName: "Layout" },
        { name: "JavaScript Basics", level: "Foundational", iconName: "Braces" }
      ]
    },
    {
      id: "mobile-backend",
      title: "Mobile & Backend",
      badge: "Currently Learning",
      skills: [
        { name: "Flutter", level: "Active Learning", iconName: "Smartphone" },
        { name: "Firebase", level: "Firestore & Auth", iconName: "Flame" }
      ]
    },
    {
      id: "soft-skills",
      title: "Soft Skills",
      badge: "Collaboration",
      skills: [
        { name: "Teamwork", level: "Collaborative Lead", iconName: "Users" },
        { name: "Problem-solving", level: "Analytical Thinking", iconName: "Brain" },
        { name: "Idea Pitching", level: "Communication", iconName: "Presentation" }
      ]
    }
  ],
  projects: [
    {
      id: "gigtrust",
      title: "GigTrust",
      subtitle: "Connecting Skilled Hands with Trusted Opportunities",
      period: "2026 – Present",
      status: "In Progress",
      description:
        "A hyper-local mobile marketplace platform designed to bridge the gap between household customers and verified, skilled service professionals (electricians, technicians, plumbers, and mechanics) in their immediate vicinity.",
      keyFeatures: [
        "Live location-based service and professional discovery",
        "Intuitive category-based worker matching and verified profiles",
        "Transparent customer feedback and trust ratings system",
        "Direct communication and booking workflow powered by Firebase"
      ],
      techStack: ["Flutter", "Firebase", "Cloud Firestore", "Geolocation", "Dart"],
      image: "/src/assets/images/project_gigtrust_1793176958660.jpg",
      githubUrl: "https://github.com/aravindh636919/GigTrust",
      liveDemoUrl: "#",
      hasInteractiveDemo: false
    },
    {
      id: "study-notes-generator",
      title: "Study Notes Generator",
      subtitle: "Exam-Oriented Structured Answer Synthesizer",
      period: "November 2025",
      status: "Completed",
      description:
        "An AI-powered academic assistant that takes any syllabus topic and generates exam-ready, structured answers formatted specifically for university exam question patterns (2, 3, 13, and 16 marks). Supports direct export as PDF and TXT.",
      keyFeatures: [
        "Custom answer length synthesizer: 2-mark definitions, 3-mark distinctions, 13-mark descriptive answers, and 16-mark comprehensive analyses",
        "ChatGPT API integration with carefully engineered academic prompt structures",
        "One-click formatted file generation: instant PDF download and clean TXT export",
        "Clean, responsive student-first web interface"
      ],
      techStack: ["Python", "HTML", "CSS", "ChatGPT API", "PDF Generation"],
      image: "/src/assets/images/project_studynotes_1793176957429.jpg",
      githubUrl: "https://github.com/aravindh636919/Study-Notes-Generator",
      liveDemoUrl: "#interactive-demo",
      hasInteractiveDemo: true
    }
  ],
  internships: [
    {
      id: "mechnido-internship",
      role: "Web Development Intern",
      company: "MECHNIDO",
      period: "13 June 2026 – 29 June 2026",
      location: "India (Industrial Training)",
      description:
        "Completed focused web development training under experienced industry professionals, gaining practical hands-on engineering knowledge to support academic rigor and professional career readiness.",
      highlights: [
        "Hands-on web development training using modern frontend standards and modular structures",
        "Collaborated with mentors to analyze real-world software specifications and UI responsive patterns",
        "Gained direct exposure to project development workflows, debugging techniques, and best practices"
      ]
    }
  ],
  certifications: [
    {
      id: "cert-python",
      title: "Basics of Python Programming",
      issuer: "Scaler Topics",
      category: "Programming & Data Structures",
      date: "2025"
    },
    {
      id: "cert-expo",
      title: "Project Expo Participation & Showcase",
      issuer: "SNS College of Technology",
      category: "Academic Innovation",
      date: "2025"
    },
    {
      id: "cert-html",
      title: "HTML Basics Certification",
      issuer: "Cursa",
      category: "Web Development Fundamentals",
      date: "2024"
    }
  ],
  achievements: [
    {
      id: "dt-expo-3rd",
      title: "3rd Place Winner",
      event: "Design Thinking (DT) Expo",
      issuer: "SNS College of Technology",
      place: "3rd Place",
      description:
        "Awarded 3rd Place among competing engineering teams for designing an innovative, user-centric technological solution applying the core tenets of empathy, rapid prototyping, and real-world feasibility.",
      isTopHighlight: true
    }
  ],
  hackathons: {
    totalCount: 6,
    title: "Hackathons & Innovation Events",
    summary:
      "A proven track record of diving into high-intensity sprint challenges, collaborating with cross-functional peers, and pitching novel tech prototypes under pressure.",
    stats: [
      {
        label: "Total Hackathons",
        count: 6,
        subtext: "Sprint competitions attended",
        breakdown: "Across 1st and 2nd Year"
      },
      {
        label: "2nd Year Hackathons",
        count: 3,
        subtext: "2 Online + 1 Offline hackathon",
        breakdown: "Deepened architecture & rapid prototyping"
      },
      {
        label: "1st Year Hackathons",
        count: 3,
        subtext: "Foundational sprint challenges",
        breakdown: "Explored team collaboration & ideation"
      },
      {
        label: "Idea Pitching Events",
        count: 1,
        subtext: "1st Year competitive pitch",
        breakdown: "Honed presentation & solution validation"
      }
    ],
    activities: [
      {
        title: "2nd Year Competitive Hackathons",
        timeline: "Academic Year 2024 – 2025",
        badge: "3 Hackathons (2 Online, 1 Offline)",
        description:
          "Tackled real-world problem statements including service accessibility and automated utility tooling. One on-site hackathon and two virtual national-level hackathons."
      },
      {
        title: "1st Year Hackathons & Rapid Prototyping",
        timeline: "Academic Year 2023 – 2024",
        badge: "3 Hackathons",
        description:
          "Jump-started competitive coding and project building early in college career. Formed interdisciplinary teams to build prototype solutions."
      },
      {
        title: "Freshman Idea Pitching Challenge",
        timeline: "1st Year",
        badge: "1 Competitive Pitch",
        description:
          "Formulated a technology concept to address campus workflow bottlenecks, structured the pitch deck, and defended product feasibility before faculty and industry panelists."
      }
    ]
  },
  resume: {
    fileName: "Aravindhan_M_Resume.pdf",
    downloadPath: "/resume.pdf",
    lastUpdated: "October 2026"
  }
};
