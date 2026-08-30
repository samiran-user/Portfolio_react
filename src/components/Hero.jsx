import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

// import "./Hero.css";

function Hero() {
  const roles = [
    "Frontend Developer",
    "React Developer",
    "Full Stack Developer",
    "MCA Student",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    let timeout;

    if (!isDeleting && displayText.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(
          currentRole.substring(0, displayText.length + 1)
        );
      }, 100);
    }

    else if (
      !isDeleting &&
      displayText.length === currentRole.length
    ) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    }

    else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(
          currentRole.substring(0, displayText.length - 1)
        );
      }, 60);
    }

    else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);

      setRoleIndex(
        (previousIndex) =>
          (previousIndex + 1) % roles.length
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="hero">

      <div className="hero-container">

        {/* =================================
            LEFT SIDE - CONTENT
        ================================= */}

        <div className="hero-content">

          <p className="hero-greeting">
            Hello, I'm
          </p>

          <h1 className="hero-name">
            Samiran Chanak
          </h1>

          <h2 className="hero-title">
            MCA Student &{" "}
            <span className="typing-text">
              {displayText}
              <span className="cursor">|</span>
            </span>
          </h2>

          <p className="hero-description">
            I build responsive, interactive and user-friendly
            web applications using modern technologies. I enjoy
            turning ideas into clean, functional and engaging
            digital experiences.
          </p>

          {/* =================================
              BUTTONS
          ================================= */}

          <div className="hero-buttons">

            <a
              href="#projects"
              className="project-btn"
            >
              View Projects
              <FaArrowRight />
            </a>

            <a
              href="public\Resume.pdf"
              download="Samiran-Chanak-CV.pdf"
              className="cv-btn"
            >
              Download CV
              <FaDownload />
            </a>

          </div>

          {/* =================================
              SOCIAL ICONS
          ================================= */}

          <div className="social-links">

            <a
              href="https://github.com/samiran-user/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/samiran-chanak-b085b42a9/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

          </div>

        </div>


        {/* =================================
            RIGHT SIDE - PROFILE IMAGE
        ================================= */}

        <div className="hero-image-section">

          <div className="image-glow"></div>

          <div className="image-container">

            <img
              src="./public/SAMIRANDP.JPG"
            //   alt="Samiran"
              className="profile-image"
            />

          </div>

          {/* Decorative circles */}

          <div className="decorative-circle circle-one"></div>

          <div className="decorative-circle circle-two"></div>

          <div className="image-dots"></div>

        </div>

      </div>

    </section>
  );
}

export default Hero;