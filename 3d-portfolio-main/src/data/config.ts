const config = {
  title: "Kishor Solanki | Frontend Developer",
  description: {
    long: "Explore the portfolio of Kishor Solanki, a frontend developer focused on building fast, user-friendly web experiences with clean UI/UX using modern web technologies.",
    short:
      "I build fast, user-friendly frontend experiences with clean UI/UX.",
  },
  keywords: [
    "Kishor",
    "Kishor Solanki",
    "portfolio",
    "frontend developer",
    "web development",
    "UI",
    "UX",
    "React",
    "Next.js",
    "JavaScript",
  ],
  author: "Kishor Solanki",
  email: "kishoresolanki2005@gmail.com",
  site: "https://github.com/Kishor-solanki",

  // for github stars button
  githubUsername: "naresh-khatri",
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
