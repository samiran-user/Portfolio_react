import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaGitAlt,
  FaPython
} from "react-icons/fa";

function Skills() {

  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, level: "90%" },
    { name: "CSS3", icon: <FaCss3Alt />, level: "85%" },
    { name: "JavaScript", icon: <FaJs />, level: "75%" },
    { name: "React.js", icon: <FaReact />, level: "75%" },
    { name: "Java", icon: <FaJava />, level: "75%" },
    { name: "python", icon: <FaPython />, level: "75%" },
    { name: "Git", icon: <FaGitAlt />, level: "70%" }
  ];

  return (
    <section className="skills section" id="skills">

      <div className="section-title">
        {/* <span>02.</span> */}
        <h2>Technical Skills</h2>
      </div>

      <div className="skills-grid">

        {skills.map((skill, index) => (

          <div className="skill-card" key={index}>

            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>

            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: skill.level }}
              />
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;