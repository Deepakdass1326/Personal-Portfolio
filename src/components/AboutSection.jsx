import { Server, Monitor, Plug } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Dedicated MERN Stack Developer & Continuous Learner
            </h3>

            <p className="text-muted-foreground">
              With a solid foundation in full-stack development, I specialize in building responsive, accessible, and high-performance web applications using modern technologies like React, Node.js, MongoDB, and Express.
            </p>

            <p className="text-muted-foreground">
              I'm deeply passionate about solving real-world problems with clean, scalable code and intuitive user interfaces. I stay committed to continuous learning, constantly exploring the latest tools and techniques to stay ahead in today’s fast-evolving tech landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

                  <a
  href="https://drive.google.com/file/d/1SI4ba18o9WMTB3hndxwmNsBDALySNrFW/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
>
  Download CV
</a>

            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Server className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Full-Stack Web Development</h4>
                  <p className="text-muted-foreground">
                    Building dynamic web applications using the MERN stack with scalable architecture.
                    
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Monitor className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Frontend Engineering</h4>
                  <p className="text-muted-foreground">
                    Designing responsive, interactive UIs with React, Tailwind CSS, and Framer Motion.
                    
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Plug className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">API Integration & State Management</h4>
                  <p className="text-muted-foreground">
                    Connecting frontends to powerful APIs and managing data with Redux Toolkit.
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
