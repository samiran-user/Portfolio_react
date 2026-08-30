import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <section id="education" className="section education-section">

      <div className="section-heading">
        {/* <span>04.</span> */}
        <h2>Education</h2>
      </div>

      <div className="education-container">

        <motion.div
          className="education-card"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -8 }}
        >

          <div className="education-icon">
            <FaGraduationCap />
          </div>

          <div className="education-content">

            <span className="education-year">
              2025 - 2027
            </span>

            <h3>
              Master of Computer Applications
            </h3>

            <h4>
              Brainware University
            </h4>

            <p>
              Currently pursuing my MCA with a focus on
              software development, web technologies,
              database systems and programming.
            </p>

            <div className="education-tags">
              <span>Computer Science</span>
              <span>Software Development</span>
              <span>Web Technologies</span>
            </div>

          </div>

        </motion.div>


        <motion.div
          className="education-card"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -8 }}
        >

          <div className="education-icon">
            <FaGraduationCap />
          </div>

          <div className="education-content">

            <span className="education-year">
              2022 - 2025
            </span>

            <h3>
              Bachelor Degree
            </h3>

            <h4>
              Brainware University
            </h4>

            <p>
              Completed my undergraduate degree and
              developed a strong foundation in programming,
              computer science and problem solving.
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Education;