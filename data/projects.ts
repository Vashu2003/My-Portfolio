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
    id: 2,
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
    id: 3,
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
];
