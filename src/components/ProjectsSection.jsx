import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI-Powered Interview Prep",
    description:
      "Smart Interview Preparation App built with the MERN Stack and Gemini API. Features secure auth, AI-powered Q&A, role-based sessions, concept explanations, and modern UI.",
    image: "/images/ai-interview.png",
    tags: ["MERN", "Gemini API", "TailwindCSS"],
    demoUrl: "https://ai-interview-preparation-1-e47v.onrender.com",
    githubUrl: "https://github.com/Deepakdass1326/Ai-Interview-Preparation",
  },
  {
    id: 2,
    title: "Full-Stack E-Commerce App",
    description:
      "Scalable MERN stack e-commerce app with authentication (JWT), product CRUD, PayPal integration, and performance enhancements.",
    image: "/images/ecommerce.png",
    tags: ["React", "Node.js", "MongoDB"],
    demoUrl: "https://mern-ecommerce-1-v90n.onrender.com",
    githubUrl: "https://github.com/Deepakdass1326/MERN-Ecommerce",
  },
  {
    id: 3,
    title: "Modern Business Landing Page",
    description:
      "Animated business landing page built with React, Tailwind CSS, and Framer Motion with performance optimizations.",
    image: "/images/TheNextDesign.png",
    tags: ["React", "TailwindCSS", "Framer Motion"],
    demoUrl: "https://the-next-design.vercel.app/",
    githubUrl: "https://github.com/Deepakdass1326/business-landing-page",
  },
  {
    id: 4,
    title: "Mobius Landing Page",
    description:
      "A modern, responsive landing page built using React 19, Vite 6, and Tailwind CSS.",
    image: "/images/MobuisEngine.png",
    tags: ["React", "Vite", "TailwindCSS"],
    demoUrl: "https://mobius-engine-landing-page-six.vercel.app/",
    githubUrl: "https://github.com/Deepakdass1326/MobiusEngine-LandingPage",
  },
  {
    id: 5,
    title: "Multi-Tenant Sales Dashboard",
    description:
      "Frontend-only multi-tenant sales dashboard built with React, Tailwind CSS, and React Router DOM.",
    image: "/images/Dashboad.png",
    tags: ["React", "TailwindCSS", "React Router", "Context API"],
    demoUrl: "https://tenant-dashboard-ten.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Animately – Animation Showcase",
    description:
      "Interactive animation-focused frontend project built with React and Tailwind CSS.",
    image: "/images/Animately.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://animately.vercel.app/",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          A selection of projects showcasing my frontend skills and clean UI
          practices.
        </p>

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

                <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
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
                </div>
              </div>
            </div>
          ))}
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
