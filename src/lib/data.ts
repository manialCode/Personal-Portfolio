export interface SocialInfo {
  UserName: string;
  SocialLink: string | URL;
  SocialNetwork: string;
}

export const PersonalSocialLinks: SocialInfo[] = [
  {
    UserName: "jmonti51",
    SocialLink: "https://www.instagram.com/jmonti51/",
    SocialNetwork: "Instagram",
  },
  {
    UserName: "manialCode",
    SocialLink: "https://github.com/manialCode",
    SocialNetwork: "GitHub",
  },
  {
    UserName: "Juan Martín Monti",
    SocialLink: "https://www.linkedin.com/in/juan-mart%C3%ADn-monti-536a98203/",
    SocialNetwork: "LinkedIn",
  },
];

export interface Projects {
  title: string;
  description: String;
  link: string | URL;
  github: string | URL;
  image: string | URL;
  tags: string[];
}

export const PROJECTS: Projects[] = [
  {
    title: "Spotify clon",
    description:
      "Un clon funcional de la interfaz de Spotify construido con Astro v5, integrando React, TypeScript, y Zustand para el manejo del estado global. Este proyecto emula funcionalidades básicas de la plataforma de streaming musical, con un diseño interactivo.",
    link: "https://spotify-clon-astro-5.vercel.app/",
    github: "https://github.com/manialCode/Spotify-clon-Astro-5",
    image:
      "https://github.com/manialCode/Spotify-clon-Astro-5/blob/main/screenshots/homepage.png?raw=true",
    tags: ["Astro", "React", "Tailwind", "Zustand", "TypeScript"],
  },
  {
    title: "PDF_TALKER",
    description:
      "Este proyecto es una aplicación web construida con Astro que permite a los usuarios subir archivos PDF y procesarlos utilizando Cloudinary. La aplicación también utiliza Svelte para la interfaz de usuario y Tailwind CSS para el diseño.",
    link: "",
    github: "https://github.com/manialCode/PDF_TALKER",
    image: "",
    tags: ["Astro", "Svelte", "Tailwind", "TypeScript", "OpenAI"],
  },
];
