export const portfolioData = {
  name: "Lars Fyhr",
  location: "Austin, TX",
  tagline: "I am not a front end developer and I made this! Imagine what I can build for you!",

  about: "Hi! My name is Lars Fyhr. I love to ski, wakesurf, bike, golf, and play soccer. I enjoy exploring the world to experience new cultures and cuisines. I grew up in Houston, TX and graduated from the University of Texas at Austin (hook 'em) with a BS in Electrical/Computer Engineering. I would love to go back to school to further my education. I am currently located in Austin, TX working as an AI Engineer at Meta. My interests include computer vision, quantitative finance, automation, and machine learning.",

  headshot: "/Headshot.jpg",
  heroImage: "/coding-freak.gif",

  skills: ["ML", "AI", "Python", "Kotlin", "TypeScript", "Java", "C++", "Linux"],
  tools: ["Spring", "Git", "Postman", "Docker", "Kubernetes", "Terraform", "Jenkins"],

  navLinks: ["Home", "About", "Projects", "Connect"],

  experience: [
    {
      name: "Started Coding",
      image: "/events/Start.png",
      year: "2016",
    },
    {
      name: "Golden Section Ventures",
      image: "/events/GSV.png",
      year: "2019",
    },
    {
      name: "Ping Identity",
      image: "/events/Ping.png",
      year: "2021",
    },
    {
      name: "UT Austin",
      image: "/events/UTAustin.png",
      year: "2022",
    },
    {
      name: "Oracle",
      image: "/events/Oracle.png",
      year: "2022",
    },
    {
      name: "Meta",
      image: "/events/Meta.png",
      year: "2024",
    },
  ],

  projects: [
    {
      name: "Meta Reality Labs",
      description: "Built a system VR application focused on mobile device interaction through iOS and Android native libraries and extensions.",
      tools: ["Swift", "Kotlin", "C++", "VR"],
      company: "Meta",
    },
    {
      name: "Meta Applied AI",
      description: "Building bespoke AI datasets to help researchers advance Meta's AI Frontier Models.",
      tools: ["Python", "ML", "Data Engineering"],
      company: "Meta",
    },
    {
      name: "Oracle Process Automation",
      description: "Built migration pipeline for legacy product and developed many features for the next-gen process automation platform.",
      tools: ["Java", "Kotlin", "Spring", "Kubernetes"],
      company: "Oracle",
    },
    {
      name: "Oracle AI EHR",
      description: "Built messaging/scheduling infrastructure powering millions of actions, notifications, and messages across the platform.",
      tools: ["Java", "Spring", "Kafka", "Terraform"],
      company: "Oracle",
    },
    {
      name: "SVVARM",
      description: "AI-generated automations platform enabling users to build and deploy intelligent workflows.",
      tools: ["Python", "TypeScript", "AI", "Automation"],
      company: "FyrLabs",
    },
    {
      name: "BUZZ",
      description: "Content automation pipeline enabling any user to create AI-generated TikTok content end-to-end.",
      tools: ["Python", "AI", "FFmpeg", "TikTok API"],
      company: "FyrLabs",
    },
    {
      name: "Pokemon Binder Creator",
      description: "Web app for organizing and displaying Pokemon card collections, scaled to 1000+ users.",
      tools: ["React", "Node.js", "MongoDB"],
      company: null,
    },
    {
      name: "Kaggle: Trading at the Close",
      description: "Finished top 10% in Kaggle competition projecting stock price swings at market close.",
      tools: ["Python", "ML", "XGBoost", "Pandas"],
      company: null,
    },
    {
      name: "DegenerateAssets",
      description: "Full-stack gambling game app with user accounts, coin economy, and competitive leaderboard.",
      tools: ["React", "Express", "Python", "MongoDB", "Docker"],
      company: null,
    },
    {
      name: "NFL Spread Predictions",
      description: "Trained XGBoost, CatBoost, and LightGBM models with grid-search tuning to predict NFL game spreads.",
      tools: ["Python", "ML", "XGBoost", "SKLearn"],
      company: null,
    },
    {
      name: "Image Stitching",
      description: "Pipeline that discovers keypoints across images, computes homographies, and stitches them into panoramas.",
      tools: ["Python", "OpenCV"],
      company: null,
    },
    {
      name: "Driver's License Reader",
      description: "Upload a license photo, get structured JSON back via perspective transform and feature matching.",
      tools: ["React", "Express", "Python", "OpenCV"],
      company: null,
    },
    {
      name: "Portfolio Site",
      description: "This site! Responsive design with interactive animations.",
      tools: ["Tailwind", "NextJS", "TypeScript"],
      company: null,
    },
  ],

  connect: [
    {
      name: "Email",
      icon: "/icons/Email.png",
      link: "",
      handle: "fyhr_lars [at] yahoo [dot] com",
    },
    {
      name: "LinkedIn",
      icon: "/icons/LI.png",
      link: "https://www.linkedin.com/in/lars-fyhr/",
      handle: "@lars-fyhr",
    },
    {
      name: "GitHub",
      icon: "/icons/GH.png",
      link: "https://www.github.com/lcfyhr/",
      handle: "@lcfyhr",
    },
  ],
} as const;

export type PortfolioData = typeof portfolioData;
export type Project = (typeof portfolioData.projects)[number] & { company?: string | null };
export type Experience = (typeof portfolioData.experience)[number];
export type ConnectItem = (typeof portfolioData.connect)[number];
