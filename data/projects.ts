import { on } from "events";

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  images: {
    url: string;
    alt: string;
  }[];
  liveUrl?: string; // Optional deployed link
  githubUrl?: string; // Optional GitHub repo
  date: string; // Format: "YYYY-MM-DD"
  content?: string; // Markdown for detailed description
}
export const projects: Project[] = [
  {
    id: 1,
    title: "HyperHive",
    description:
      "HyperHive is a futuristic collaborative project management platform designed for students and project groups. Built with the modern MERN stack, it provides a seamless experience for managing project groups, tasks, notes, and virtual meetings in one place.",
    tags: ["MERN Stack", "Socket.io", "JWT Authentication", "Docker"],
    images: [
      {
        url: "/project-images/hiperhive-1.png",
        alt: "HyperHive homepage",
      },
      {
        url: "/project-images/hiperhive-2.png",
        alt: "HyperHive with detection overlay",
      },
      {
        url: "/project-images/hiperhive-3.png",
        alt: "HyperHive with detection overlay",
      },
      {
        url: "/project-images/hiperhive-4.png",
        alt: "HyperHive with detection overlay",
      },
      {
        url: "/project-images/hiperhive-5.png",
        alt: "HyperHive with detection overlay",
      },
      {
        url: "/project-images/hiperhive-6.png",
        alt: "HyperHive with detection overlay",
      },
      {
        url: "/project-images/hiperhive-7.png",
        alt: "HyperHive with detection overlay",
      },
    ],
    liveUrl: "https://hyperhive-frontend.onrender.com",
    githubUrl: "https://github.com/Vashu2003/HyperHive",
    date: "2025-03-01",
    content: `# Project Overview: HyperHive

**HyperHive** is a futuristic collaborative project management platform built for students and project teams. It streamlines task management, note sharing, group collaboration, and virtual meetings—all in one modern web app powered by the MERN stack.

## Key Features  
- ✔ **Group Collaboration** – Create project groups, manage roles, and post announcements  
- ✔ **Task Management** – Assign tasks, set priorities, and track progress with real-time updates  
- ✔ **Rich Notes & Attachments** – Share formatted notes, upload resources, and track version history  
- ✔ **Virtual Meetings** – Schedule and host audio/video sessions with screen sharing  
- ✔ **Calendar & Timeline** – View project events and deadlines in a timeline or calendar format  
- ✔ **Role-Based Access** – Secure authentication with admin and member permissions  

## Tech Stack  
- **Frontend:** React.js (Vite)  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose)  
- **Styling:** Tailwind CSS  
- **Real-time:** Socket.io  
- **Auth & Security:** JWT Authentication  
- **File Storage:** Cloudinary  
- **Deployment:** Frontend & Backend on Render  

## Challenges & Solutions  
🔹 **Real-Time Sync** – Used Socket.io to sync tasks and messages instantly across clients  
🔹 **Secure Access Control** – Implemented JWT-based role validation and protected routes  
🔹 **Scalable File Handling** – Integrated Cloudinary for efficient and scalable media storage  
🔹 **Containerization** – Used Docker + Docker Compose for simplified development and deployment  
🔹 **User Experience** – Focused on responsiveness, intuitive UI, and dark/light mode themes  

`,
  },
  {
    id: 2,
    title: "Movie DB",
    description:
      "A modern, responsive React application for discovering and managing your favorite movies. Built with React, Tailwind CSS, and powered by the TMDB API.",
    tags: ["React", "Tailwind CSS", "TMDB API"],
    images: [
      {
        url: "/project-images/movie-db-1.png",
        alt: "Movie DB homepage",
      },
      {
        url: "/project-images/movie-db-2.png",
        alt: "Movie DB with detection overlay",
      },
      {
        url: "/project-images/movie-db-3.png",
        alt: "Movie DB with detection overlay",
      },
      {
        url: "/project-images/movie-db-4.png",
        alt: "Movie DB with detection overlay",
      },
      {
        url: "/project-images/movie-db-5.png",
        alt: "Movie DB with detection overlay",
      },
      {
        url: "/project-images/movie-db-6.png",
        alt: "Movie DB with detection overlay",
      },
      {
        url: "/project-images/movie-db-7.png",
        alt: "Movie DB with detection overlay",
      },
    ],
    liveUrl: "https://cool-churros-f65dec.netlify.app/",
    githubUrl: "https://github.com/Vashu2003/MovieDB",
    date: "2025-03-01",
    content: `# Project Overview: MovieDB  

**MovieDB** is a dynamic web application that lets users explore, search, and discover movies. It pulls real-time data from The Movie Database (TMDB) API, displaying detailed information such as ratings, release dates, cast, and trailers.  

## Key Features  
- ✔ **Browse Movies** – View trending, top-rated, and upcoming films  
- ✔ **Advanced Search** – Filter by genre, release year, and ratings  
- ✔ **Detailed Movie Pages** – Includes trailers, cast info, and recommendations  
- ✔ **Responsive Design** – Works smoothly on mobile, tablet, and desktop  
- ✔ **Dark/Light Mode** – Toggle between themes for better user experience  

## Tech Stack  
- **Frontend:** React.js (with Hooks)  
- **State Management:** Context API  
- **Styling:** Tailwind CSS / CSS Modules  
- **API Integration:** TMDB API  
- **Deployment:** Hosted on Netlify  

## Challenges & Solutions  
🔹 **Optimized API Calls** – Implemented caching to reduce unnecessary requests  
🔹 **Performance** – Used lazy loading and pagination for faster load times  
🔹 **Responsive UI** – Ensured smooth experience across all devices  
`,
  },
  {
    id: 3,
    title: "WSI Viewer",
    description:
      "A modern, interactive Whole Slide Image (WSI) viewer application built with React and OpenSeadragon. This application allows medical professionals to view and analyze whole slide images with detection overlays, making it easier to identify and analyze various cell types in blood smears.",
    tags: ["React", "OpenSeadragon", "Tailwind CSS"],
    images: [
      {
        url: "/project-images/wsi-viewer-1.png",
        alt: "WSI viewer homepage",
      },
      {
        url: "/project-images/wsi-viewer-2.png",
        alt: "WSI viewer with detection overlay",
      },
    ],
    liveUrl: "https://golden-donut-825f95.netlify.app/",
    githubUrl: "https://github.com/Vashu2003/WSI-Viewer",
    date: "2023-10-15",
    content: `# Project Overview: WSI-Viewer

**WSI-Viewer** is an interactive web application designed for viewing and analyzing Whole Slide Images (WSI)—high-resolution digital scans used in pathology and medical research. The tool offers a seamless, browser-based experience for zooming, panning, and inspecting microscopic details without compromising performance.

## Key Features
- **High-Resolution Viewing** – Smoothly navigate gigapixel-sized WSI files with multi-scale rendering.
- **Intuitive Controls** – Pan, zoom, and adjust brightness/contrast for detailed analysis.
- ⚡ **Optimized Performance** – Leverages tiled image rendering to handle large files efficiently.
- 📱 **Responsive Design** – Works across desktops, tablets, and touch-enabled devices.
- 🔄 **Custom Overlays** – Supports annotations and region-of-interest (ROI) markers.

## Tech Stack
- **Frontend:** React.js (with Hooks)  
- **State Management:** Context API  
- **Styling:** Tailwind CSS / CSS Modules  
- **Library:** OpenSeadragon  
- **Deployment:** Hosted on Netlify  

## Challenges & Solutions
🔹 **Large Image Handling** – Implemented tiled image streaming to avoid memory overload.  
🔹 **Smooth Zoom/Pan** – Used Web Workers to offload heavy computations.  
🔹 **Cross-Browser Support** – Ensured compatibility with Chrome, Firefox, and Safari.  
`,
  },
  {
    id: 4,
    title: "Student Portal",
    description:
      "A modern, React-based Student Portal that provides a comprehensive platform for managing academic activities and information. This web application streamlines student access to course materials, assignments, schedules, and academic performance tracking.",
    tags: ["React", "Tailwind CSS", "localStorage"],
    date: "2023-10-15",
    images: [
      {
        url: "/project-images/student-portal-1.png",
        alt: "Student portal homepage",
      },
      {
        url: "/project-images/student-portal-2.png",
        alt: "Student portal with assignments",
      },
      {
        url: "/project-images/student-portal-3.png",
        alt: "Student portal with assignments",
      },
      {
        url: "/project-images/student-portal-4.png",
        alt: "Student portal with assignments",
      },
      {
        url: "/project-images/student-portal-5.png",
        alt: "Student portal with assignments",
      },
      {
        url: "/project-images/student-portal-6.png",
        alt: "Student portal with assignments",
      },
    ],
    liveUrl: "https://cheerful-faun-d8b61f.netlify.app/",
    githubUrl: "https://github.com/Vashu2003/Student-Portal",
    content: `# Student Portal (Frontend Demo)
*A responsive academic interface built with modern React*

## Key Features  
📌 **Mock Authentication Flow**  
- Login/logout simulation with React Context  
- Role-based UI (Student/Teacher views)  

📌 **Interactive Dashboard**  
- Course cards with progress indicators  
- Placeholder data for assignments/grades  
- Animated transitions between views  

📌 **UI Components**  
- Custom date picker for assignment deadlines  
- Responsive data tables with sorting  
- Dynamic form validation  

## Tech Stack  
⚙️ **Core**  
- React 18 (Vite build)  
- TypeScript  
- CSS Modules  

📚 **Key Dependencies**  
- \`react-router-dom\` v6 for navigation  
- \`date-fns\` for date handling  
- \`react-icons\` for vector icons  
- \`framer-motion\` for animations  
`
,
  },
  {
    id: 5,
    title: "HOM Landing Page",
    description: "A sleek, responsive landing page for HOM (House of Music), designed to showcase music services with modern UI/UX principles. Built with HTML, CSS, and JavaScript for seamless interactivity.",
    tags: ["React", "Tailwind CSS", "Axios", "Lodash"],
    images: [
      {
        url: "/project-images/landing-page-1.png",
        alt: "HOM Landing Page hero section",
      },
      {
        url: "/project-images/landing-page-2.png",
        alt: "HOM services section",
      },
      {
        url: "/project-images/landing-page-3.png",
        alt: "HOM testimonials section",
      },
      {
        url: "/project-images/landing-page-4.png",
        alt: "HOM testimonials section",
      },
      {
        url: "/project-images/landing-page-5.png",
        alt: "HOM testimonials section",
      },
    ],
    liveUrl: "https://beamish-empanada-93cfd1.netlify.app/",
    githubUrl: "https://github.com/Vashu2003/HOM-Landing-Page",
    date: "2024-02-15",
    content: `# Project Overview: HOM Landing Page  
  
  **HOM Landing Page** is a visually appealing, performance-optimized webpage designed to promote House of Music (HOM) services. It features smooth animations, responsive layouts, and clean code architecture.  
  
  ## Key Features  
  - ✔ **Modern UI/UX** – Minimalist design with attention to typography and spacing.  
  - ✔ **Mobile-First** – Fully responsive across all devices (desktop, tablet, mobile).  
  - ✔ **Interactive Elements** – Animated CTAs, hover effects, and dynamic scrolling.  
  - ✔ **Performance Optimized** – Fast load times with optimized assets and lazy loading.  
  
  ## Tech Stack  
  - **Frontend:** HTML5, CSS3, JavaScript (ES6+)  
  - **Styling:** Flexbox, CSS Grid, and custom animations  
  - **Deployment:** Hosted on GitHub Pages  
  
  ## Challenges & Solutions  
  🔹 **Cross-Browser Compatibility** – Used progressive enhancement techniques for consistent rendering.  
  🔹 **Animation Smoothness** – Implemented CSS transitions for fluid motion.  
  🔹 **SEO Basics** – Structured semantic HTML for better search engine visibility.  
  `
  },
  {
    id: 6,
    title: "Memory Card Game",
    description: "A fun and interactive memory matching game built with vanilla JavaScript, HTML, and CSS. Test your memory by flipping cards to find matching pairs of fruits.",
    tags: ["JavaScript", "HTML5", "CSS3", "Game Development"],
    images: [
      {
        url: "/project-images/memory-game-1.png",
        alt: "Memory Card Game hero section",
      },
      {
        url: "/project-images/memory-game-2.png",
        alt: "Memory Card Game hero section",
      },
    ],
    liveUrl: "https://fliping-card-game.netlify.app/", 
    githubUrl: "https://github.com/Vashu2003/Web-Projects", 
    date: "2024-02-17", 
    content: `# Project Overview: Memory Card Game  
  
  **Memory Card Game** is a classic matching game where players flip cards to find matching pairs. The game tracks time, moves, and announces when the player wins.
  
  ## Key Features  
  - ✔ **Interactive Gameplay** - Flip cards to reveal hidden fruit emojis  
  - ✔ **Score Tracking** - Real-time tracking of moves and time  
  - ✔ **Win Condition** - Game detects when all pairs are matched  
  - ✔ **Restart Functionality** - Reset the game with one click  
  - ✔ **Responsive Design** - Works on various screen sizes  
  
  ## Tech Stack  
  - **Frontend:** Vanilla JavaScript, HTML5, CSS3  
  - **Game Logic:** Custom shuffle algorithm, event listeners  
  - **Animations:** CSS transitions for card flipping  
  
  ## Challenges & Solutions  
  🔹 **Card Matching Logic** - Implemented a comparison system for flipped cards  
  🔹 **Game State Management** - Tracked flipped cards and matches  
  🔹 **Timer Implementation** - Created a real-time counter  
  🔹 **Shuffle Algorithm** - Used Fisher-Yates for random card distribution  
  `
  },
  {
    id: 7,
    title: "Interactive Quiz App",
    description: "A dynamic web-based quiz application built with vanilla JavaScript that tests users on general knowledge questions with instant feedback and score calculation.",
    tags: ["JavaScript", "HTML5", "CSS3", "Interactive Web App"],
    images: [
      {
        url: "/project-images/quiz-1.png",
        alt: "Quiz App hero section",
      },
      {
        url: "/project-images/quiz-2.png",
        alt: "Quiz App hero section",
      },
      {
        url: "/project-images/quiz-3.png",
        alt: "Quiz App hero section",
      },
    ],
    liveUrl: "https://quizwebsiteapplication.netlify.app/", 
    githubUrl: "https://github.com/Vashu2003/Web-Projects", 
    date: "2024-02-25", 
    content: `# Project Overview: Quiz App  
  
  **Quiz App** is an interactive web application that presents users with a series of questions and tracks their score. The app features smooth transitions between questions and immediate scoring.
  
  ## Key Features  
  - ✔ **Question Bank** - 10 diverse general knowledge questions
  - ✔ **Option Selection** - Radio button interface for answer choices
  - ✔ **Score Tracking** - Real-time score calculation
  - ✔ **Progress Flow** - Sequential question navigation
  - ✔ **Completion Screen** - Final score display with performance metrics
  
  ## Tech Stack  
  - **Frontend:** Vanilla JavaScript, HTML5, CSS3
  - **Data Structure:** Array of question objects
  - **DOM Manipulation:** Dynamic element creation and updates
  
  ## Challenges & Solutions  
  🔹 **State Management** - Tracked current question index and score
  🔹 **User Input Validation** - Implemented option selection requirement
  🔹 **Dynamic UI Updates** - Rebuilt options for each new question
  🔹 **Score Calculation** - Compared selected option against correct answer
  
  ## Potential Enhancements
  - Timer for each question
  - Multiple quiz categories
  - High score tracking
  - Animations for correct/incorrect answers
  `
  },
];
