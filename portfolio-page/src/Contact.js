import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out to me on any of my social media platforms:</p>
      <ul>
        <li>
          <a href="https://github.com/harini1503-git" target="_blank" rel="noopener noreferrer">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/harini-mudaliar-481a01272/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </li>
        <li>
          <a href="mailto:harinimudaliar1503@gmail.com">Email</a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;