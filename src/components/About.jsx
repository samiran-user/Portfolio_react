function About() {
  return (
    <section className="about section" id="about">

      <div className="section-title">
        {/* <span>01.</span> */}
        <h2>About Me</h2>
      </div>

      <div className="about-content">

        <div className="about-text">

          <p>
            I'm an MCA student passionate about software development,
            web technologies and problem solving.
          </p>

          <p>
            I enjoy transforming ideas into functional,
            responsive and user-friendly applications.
            My current focus is on building modern web
            applications using React.js and JavaScript.
          </p>

          <p>
            I'm continuously improving my development skills
            through academic projects, personal projects and
            hands-on learning.
          </p>

        </div>

        <div className="about-card">

          <h3>What I Bring</h3>

          <ul>
            <li>Problem Solving</li>
            <li>Clean & Maintainable Code</li>
            <li>Responsive UI Development</li>
            <li>Team Collaboration</li>
            <li>Continuous Learning</li>
          </ul>

        </div>

      </div>

    </section>
  );
}

export default About;