export interface Certification {
    id: number;
    title: string;
    issuer: string;
    date: string;
    credentialId?: string;
    credentialUrl: string;
    imageUrl: string;
    skills: string[];
  }
  
  export const certifications: Certification[] = [
    {
      id: 1,
      title: "React.js Certified Developer",
      issuer: "Scaler",
      date: "2025-03-29",
      credentialId: "VER-1234-4538",
      credentialUrl: "#",
      imageUrl: "/certifications/reactjs-cert.png",
      skills: ["React", "JavaScript", "ES6"]
    },
  ];