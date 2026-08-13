const config = {
  title: "Kishor Solanki | Software Developer",
  description: {
    long: "Portfolio of Kishor Solanki, a final-year B.Tech student and aspiring software developer focused on full-stack web development, AI-integrated applications, real-time systems, and building practical technology products.",
    short:
      "Final-year B.Tech student building full-stack web apps, AI-integrated platforms, and real-time systems.",
  },
  keywords: [
    "Kishor",
    "Kishor Solanki",
    "portfolio",
    "software developer",
    "full-stack",
    "web development",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Python",
    "AI",
    "Machine Learning",
    "MapTiler",
    "MapLibre",
  ],
  author: "Kishor Solanki",
  email: "kishoresolanki2005@gmail.com",
  site: "https://github.com/Kishor-solanki",

  // for github stars button
  githubUsername: "Kishor-solanki",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/KISHORE03511910",
    linkedin: "https://www.linkedin.com/in/kishor-kumar-a63739291",
    instagram: "https://instagram.com/solankiiii_kishor",
    facebook: "",
    github: "https://github.com/Kishor-solanki",
  },
};
export { config };
