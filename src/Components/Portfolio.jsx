import React from "react";

import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "HouseTrip - Full-Stack Vacation Rental Platform",
    description:
      "A full-stack vacation rental platform where users can search for rentals, list properties, and leave reviews. Features user authentication (Passport.js), property listings with map locations (OpenStreetMap API, Leaflet.js), and search functionality with filters. Managed data with MongoDB Atlas and Cloudinary for image uploads. Fully responsive and deployed on Render.",
    githubUrl: "https://github.com/Abhay9999Sh/HouseTrip",
    liveDemo: "https://housetrip.onrender.com/",
  },
  {
    title: "Weather App - Real-Time Weather Data",
    description:
      "A web app built with React that provides real-time weather data using the OpenWeatherMap API. Integrated Leaflet.js for location-based weather info and a responsive UI built with CSS and Bootstrap for seamless device compatibility.",
    githubUrl: "https://github.com/Abhay9999Sh/React-Weather-App",
    liveDemo: "https://react-weather-app-five-gamma.vercel.app/",
  },
  {
    title: "Printify Pro - Responsive Homepage",
    description:
      "A fully responsive homepage built with React and styled using Tailwind CSS. Designed for easy maintenance and scalability, the project delivers strong performance across devices with a focus on both design and functionality.",
    githubUrl: "https://github.com/Abhay9999Sh/printify-homepage",
    liveDemo: "https://printify-pro.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
              <div>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                {" | "}
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
