import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import dotenv from "dotenv";


function Contact() {

  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {

    e.preventDefault();

  emailjs
    .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
         import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {

        setStatus("Message sent successfully!");

        form.current.reset();

      })
      .catch(() => {

        setStatus(
          "Something went wrong. Please try again."
        );

      });

  };

  return (
    <section className="contact section" id="contact">

      <div className="section-title">
        {/* <span>04.</span> */}
        <h2>Let's Connect</h2>
      </div>

      <p className="contact-intro">
        Have an opportunity, project or question?
        I'd love to hear from you.
      </p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact-form"
      >

        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          required
        />

        <button type="submit">
          Send Message
        </button>

      </form>

      {status && (
        <p className="status">
          {status}
        </p>
      )}

    </section>
  );
}

export default Contact;