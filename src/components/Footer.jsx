import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp
} from "react-icons/fa";

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">

      <div className="footer-content">

        <div className="footer-brand">

          <h3>
            Samiran Chanak
          </h3>

          <p>
            MCA Student & Aspiring Full Stack Developer
          </p>

        </div>


        <div className="footer-socials">

          <a
            href="https://github.com/samiran-user"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/samiran-chanak-b085b42a9"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="samiranchanak@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

        </div>


        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>

      </div>


      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Samiran Chanak.
          All Rights Reserved.
        </p>

        <p>
          Built with React.js ❤️
        </p>

      </div>

    </footer>
  );
}

export default Footer;