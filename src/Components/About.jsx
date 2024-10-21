import React from "react";

import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";
const description =
  "I'm a Computer Science student at Bhagwan Parshuram Institute of Technology. I enjoy building full-stack web applications and solving coding challenges to sharpen my skills in modern web technologies.";

const skillsList = [
  "Full-stack web development",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "HTML/CSS",
  "Responsive web design",
  "MongoDB",
  "Tailwind CSS",
  "API integration",
  "RESTful APIs",
  "Problem-solving",
];

const detailOrQuote =
  "I am passionate about developing efficient and scalable solutions to real-world problems using cutting-edge technologies. My experience in full-stack development allows me to build user-friendly, responsive, and innovative web applications.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
