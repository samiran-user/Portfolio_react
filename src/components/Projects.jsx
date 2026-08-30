
const projects = [
  {
    title: "Pustak Sahay ",
    description:"A responsive used books reseller platform ",
    technologies: ["React", "JavaScript", "CSS", "Tailwind CSS ","MongoDb"],
    github: "https://github.com/YOUR_USERNAME/project",
    demo: "https://your-demo-link.com"
  },

  {
    title: "E-Commerce Website",
    description:"A responsive shopping application with product browsing, cart management and modern UI.(coming soon)",
    technologies: ["React", "JavaScript", "CSS"],
    github: "https://github.com/YOUR_USERNAME/project",
    demo: "https://your-demo-link.com"
  }
];

import { motion } from "framer-motion";

function Projects() {

  return (
    <section className="projects section" id="projects">

      <div className="section-title">
        {/* <span>03.</span> */}
        <h2>Featured Projects</h2>
      </div>

      <div className="projects-grid">

        {projects.map((project, index) => (

          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -10 }}
          >

            <div className="project-number">
              0{index + 1}
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="technologies">

              {project.technologies.map((tech) => (
                <span key={tech}>
                  {tech}
                </span>
              ))}

            </div>

            <div className="project-links">

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo ↗
              </a>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Projects;