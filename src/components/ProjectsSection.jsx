import { useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";



const projects = [
  {
    id: 4,
    title: "AI-Powered Interview Prep",
    description:
      "Smart Interview Preparation App built with the MERN Stack and Gemini API. Features secure auth, AI-powered Q&A, role-based sessions, concept explanations, and modern UI.",
    image: "/images/ai-interview.png", 
    tags: ["MERN", "Gemini API", "TailwindCSS"],
    demoUrl: "https://ai-interview-preparation-1-e47v.onrender.com",
    githubUrl: "https://github.com/Deepakdass1326/Ai-Interview-Preparation",
  },
  {
    id: 3,
    title: "Full-Stack E-Commerce App",
    description:
      "Scalable MERN stack e-commerce app with authentication (JWT), product CRUD, PayPal integration, and performance enhancements.",
    image: "/images/ecommerce.png",
    tags: ["React", "Node.js", "MongoDB"],
    demoUrl: "https://mern-ecommerce-1-v90n.onrender.com",
    githubUrl: "https://github.com/Deepakdass1326/MERN-Ecommerce",
  },
  {
    id: 1,
    title: "Modern Business Landing Page",
    description:
      "Animated business landing page built with React, Tailwind CSS, and Framer Motion with performance optimizations.",
    image: "/images/TheNextDesign.png",
    tags: ["React", "TailwindCSS", "Framer Motion"],
    demoUrl: "https://the-next-design.vercel.app/",
    githubUrl: "https://github.com/Deepakdass1326/business-landing-page",
  },
  {
    id: 2,
    title: "Mobius Landing Page",
    description:
      "A modern, responsive landing page built using React 19, Vite 6, and Tailwind CSS. Features HMR, ESLint, Font Awesome, and Lucide icons.",
    image: "/images/MobuisEngine.png",
    tags: ["React", "Vite", "TailwindCSS", "ESLint"],
    demoUrl: "https://mobius-engine-landing-page-six.vercel.app/",
    githubUrl: "https://github.com/Deepakdass1326/MobiusEngine-LandingPage",
  },
   {
    id: 4,
    title: "Multi-Tenant Sales Dashboard",
    description:
      "Frontend-only multi-tenant sales dashboard built with React, Tailwind CSS, and React Router DOM. Uses Context API and localStorage for state persistence.",
    image: "/images/Dashboad.png", // image baad me add karna
    tags: ["React", "TailwindCSS", "React Router", "Context API", "LocalStorage"],
    demoUrl: "https://tenant-dashboard-ten.vercel.app/",
    githubUrl: "#",
  },

  // 🔥 NEW PROJECT 5
  {
    id: 5,
    title: "Animately – Animation Showcase",
    description:
      "Interactive animation-focused frontend project built with React and Tailwind CSS. Implements smooth routing and localStorage-based persistence.",
    image: "/images/Animately.png", // image baad me add karna
    tags: ["React", "TailwindCSS", "React Router", "Context API", "LocalStorage"],
    demoUrl: "https://animately.vercel.app/",
    githubUrl: "#",
  },
];


export const ProjectsSection = () => {
<<<<<<< HEAD
  const x = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);

  // speed in pixels per second
  const speed = 60;

  useAnimationFrame((t, delta) => {
    if (!isPaused) {
      const moveBy = (speed * delta) / 1000; // convert ms → px
      let current = x.get();
      current -= moveBy;

      // loop reset when fully scrolled
      const totalWidth = projects.length * 340; // card width ~320px + 20px gap
      if (Math.abs(current) >= totalWidth) {
        current = 0;
      }

      x.set(current);
    }
  });

  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
=======
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured <span className="text-primary">Projects</span>
>>>>>>> 8cd6f59 (more projects added)
        </h2>

        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          A selection of projects showcasing my frontend skills and clean UI
          practices.
        </p>

<<<<<<< HEAD
        {/* Infinite Carousel with pause on hover */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex space-x-6"
            style={{ x }}
          >
            {[...projects, ...projects].map((project, key) => (
              <div
                key={key}
                className="min-w-[320px] max-w-[320px] bg-card rounded-lg overflow-hidden shadow-md"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
=======
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold mb-1">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex gap-4">
                  {project.demoUrl !== "#" && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-primary transition"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}

                  {project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-primary transition"
                    >
                      <Github size={20} />
                    </a>
                  )}
>>>>>>> 8cd6f59 (more projects added)
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* View More Button */}
        {projects.length > 3 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="cosmic-button inline-flex items-center gap-2"
            >
              {showAll ? "Show Less" : "View More"}
              
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
