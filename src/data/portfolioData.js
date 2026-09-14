export const portfolioData = {
  personal: {
    name: "Hajra Shahbaz",
    title: "Software Engineering Student & Aspiring Software Developer",
    shortBio: "Undergraduate Software Engineering student passionate about building clean web applications, implementing robust algorithms, and developing real-world software solutions.",
    email: "hajrashahbaz18@gmail.com",
    phone: "+92 326 9111187",
    location: "Lahore, Pakistan",
    cvPath: "/cv/Hajra_Shahbaz_CV.docx",
    summary: "Motivated Software Engineering undergraduate with hands-on experience building web applications and simulating real-world systems using core Data Structures & Algorithms. Skilled in C++, React.js, and database management, with a strong foundation in problem-solving and clean UI design. Brings a well-rounded, adaptable skill set from combined technical and digital marketing experience.",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:hajrashahbaz18@gmail.com",
      phone: "tel:+923269111187",
      whatsapp: "https://wa.me/923269111187"
    }
  },
  education: {
    degree: "BS Software Engineering",
    institution: "COMSATS University Islamabad, Lahore Campus",
    expectedGraduation: "2029",
    cgpa: "3.66 / 4.00",
    description: "Rigorous coursework focusing on Software Engineering principles, Data Structures & Algorithms, Object-Oriented Programming, and Database Systems."
  },
  skills: {
    languages: ["C++", "Java", "JavaScript", "HTML", "CSS"],
    frameworks: ["React.js", "JavaFX"],
    coreConcepts: [
      "Data Structures & Algorithms (DSA)",
      "Database Management Systems (DBMS)",
      "Object-Oriented Programming (OOP)",
      "Graph Algorithms & Optimization"
    ],
    designAndTools: [
      "Canva",
      "Microsoft Word (Flyer & Brochure Design)",
      "Git / GitHub Workflow",
      "VS Code"
    ],
    otherCompetencies: [
      "Digital Marketing & Brand Promotion",
      "Social Media & Content Creation",
      "Visual & Graphic Layouts"
    ],
    softSkills: [
      "Clear Communication",
      "Team Leadership & Collaboration",
      "Time Management",
      "Problem-Solving",
      "Adaptability"
    ]
  },
  projects: [
    {
      id: "emergency-resource-management-system",
      title: "Emergency Resource Management System",
      category: "DSA Simulation Project",
      shortDescription: "Graph-based real-time emergency dispatch simulation utilizing Dijkstra's algorithm and priority queues.",
      fullDescription: "Designed and developed an algorithmic simulation system that dispatches emergency resources — ambulances, fire trucks, and rescue units — to requested locations across a city network in real time.\n\nImplemented a shortest-path routing algorithm (graph-based, using Dijkstra's Algorithm) to identify and assign the fastest available route for each dispatch while taking road networks into account.\n\nModeled the road and location network as a graph data structure and leveraged priority queues (min-heaps) to optimize resource allocation, reduce wait intervals, and maximize emergency response efficiency.",
      tags: ["C++", "Dijkstra's Algorithm", "Graph Theory", "Priority Queues", "Data Structures", "Simulation"],
      highlights: [
        "Real-time dispatching of ambulances, fire trucks, and rescue personnel",
        "Shortest path calculation over dynamic weighted graph nodes",
        "Priority-queue based resource allocation for critical high-priority incidents",
        "Modular architecture in C++ adhering to structured programming best practices"
      ],
      deliverables: ["Graph Network Engine", "Dispatch Routing Logic", "Resource Queue Manager"],
      featured: true
    },
    {
      id: "task-and-motivation-web-app",
      title: "Task & Motivation Web App",
      category: "React.js Application",
      shortDescription: "Interactive productivity dashboard built with React components, hooks, and automated task deadline alerts.",
      fullDescription: "Built a responsive React.js web application designed to help users cultivate daily consistency, overcome procrastination, and stay on top of critical commitments.\n\nDeveloped a smart task reminder feature that monitors task progress and proactively alerts users of upcoming deadlines and pending to-dos, encouraging consistent daily execution.\n\nConstructed the application using modern modular React functional components, custom state management hooks, and clean responsive CSS for a frictionless user experience.",
      tags: ["React.js", "JavaScript", "Frontend Development", "State Management", "Hooks", "CSS3"],
      highlights: [
        "Dynamic task creation, categorization, and status tracking",
        "Automated deadline reminder notification system",
        "Responsive component architecture tailored for both mobile and desktop screens",
        "Persistent client-side state handling using React Hooks"
      ],
      deliverables: ["Productivity Dashboard", "Reminder Engine", "Interactive Task Board"],
      featured: true
    },
    {
      id: "student-database-management-system",
      title: "Student Database Management System",
      category: "C++ Academic Project",
      shortDescription: "Structured student record management system with file persistence and full CRUD capabilities.",
      fullDescription: "Designed and implemented a high-integrity Database Management System for institutional student records using structured programming in C++.\n\nEngineered complete CRUD operations allowing administrators to seamlessly enter student records, search by multiple keys, update information, and delete obsolete data with validation checks.\n\nGained hands-on mastery of persistent file handling, stream I/O operations, user-interface terminal navigation, and clean modular code separation.",
      tags: ["C++", "Database Management", "File Handling", "Data Validation", "Modular Programming"],
      highlights: [
        "Full CRUD operations (Create, Read, Update, Delete) for academic records",
        "Robust file handling for persistent on-disk data storage",
        "Defensive input validation and error handling",
        "Optimized searching and filtering algorithms"
      ],
      deliverables: ["Record Engine", "File Storage Handler", "Admin Navigation Interface"],
      featured: true
    },
    {
      id: "sauga-fighters",
      title: "Sauga Fighters",
      category: "JavaFX Game Development Project",
      shortDescription: "2D fighting game featuring custom character classes, real-time collision detection, and OOP combat mechanics.",
      fullDescription: "Developed 'Sauga Fighters', an engaging 2D desktop fighting game built using JavaFX and core Object-Oriented Programming (OOP) paradigms.\n\nEngineered character hierarchies, specialized combat mechanics, and game state logic by applying inheritance, encapsulation, and polymorphic character abilities.\n\nProgrammed the real-time game loop, frame-by-frame sprite animations, and precise bounding-box collision detection to handle fluid player interactions and attacks.",
      tags: ["Java", "JavaFX", "Object-Oriented Programming", "Game Loop", "Collision Detection", "GUI"],
      highlights: [
        "Class hierarchy utilizing OOP inheritance and polymorphism for distinct combatants",
        "60 FPS real-time game loop handling physics, input, and state transitions",
        "Bounding box collision detection and attack hit-registration logic",
        "Interactive JavaFX GUI with dynamic health bars and battle effects"
      ],
      deliverables: ["Game Loop Engine", "Fighter Character Classes", "JavaFX UI Canvas"],
      featured: true
    }
  ],
  experience: [
    {
      role: "Digital Network Marketing Associate",
      company: "Forever Living Products (FLP)",
      period: "Practical Experience",
      location: "Remote / Online",
      description: "Promoted premium health and wellness products through digital channels and social media platforms. Built strong practical expertise in customer engagement, strategic digital communication, and brand storytelling."
    }
  ],
  leadership: [
    {
      role: "Team Lead",
      organization: "Computer Science Society, COMSATS University Islamabad",
      period: "Undergraduate Leadership",
      location: "Lahore, Pakistan",
      description: "Led a team within the university's CS Society, coordinating members and driving tech-focused student initiatives, workshops, and university events. Collaborated across departments to foster peer learning, technical teamwork, and project execution."
    }
  ],
  reference: {
    name: "Eman Shahbaz",
    title: "App Developer",
    relation: "Sister",
    email: "eman shahbaz123@gmail.com",
    phone: "+92 309 7275313"
  }
};
