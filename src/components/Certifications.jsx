import { motion } from "framer-motion";
import {
  FaCertificate,
  FaExternalLinkAlt
} from "react-icons/fa";

function Certifications() {

  const certifications = [
    {
      title: "JAVA NPTEL CERTIFICATION",
      organization: "IIT Kharagpur",
      year: "2025",
      description:
        "Certification covering Java programming fundamentals, object-oriented programming, data structures, exception handling, and core Java concepts.",
      link: "public/Programming In Java.pdf"
    },

    // {
    //   title: "JavaScript Development",
    //   organization: "Your Certification Platform",
    //   year: "2025",
    //   description:
    //     "Certification covering JavaScript fundamentals, ES6+, DOM manipulation and programming concepts.",
    //   link: "#"
    // },

    {
      title: "Web Development",
      organization: "Brainware university",
      year: "2025",
      description:
        "Certification covering HTML, CSS, React JS, responsive design and modern web development.",
      link: "public/web Dev.pdf"
    }
  ];

  return (
    <section
      id="certifications"
      className="section certifications-section"
    >

      <div className="section-heading">
        {/* <span>05.</span> */}
        <h2>Certifications</h2>
      </div>

      <div className="certifications-grid">

        {certifications.map((certificate, index) => (

          <motion.div
            className="certificate-card"
            key={certificate.title}
            initial={{
              opacity: 0,
              y: 40
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.15
            }}
            whileHover={{
              y: -10
            }}
          >

            <div className="certificate-top">

              <div className="certificate-icon">
                <FaCertificate />
              </div>

              <span className="certificate-year">
                {certificate.year}
              </span>

            </div>

            <h3>
              {certificate.title}
            </h3>

            <h4>
              {certificate.organization}
            </h4>

            <p>
              {certificate.description}
            </p>

            <a
              href={certificate.link}
              target="_blank"
              rel="noreferrer"
              className="certificate-link"
            >
              View Certificate
              <FaExternalLinkAlt />
            </a>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Certifications;