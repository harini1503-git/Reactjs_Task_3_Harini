import React from 'react';
import './Projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const projects = [
  {
    name: 'Travel website:  Wanderlust',
    description: 'Our project focuses on developing a travel website that replicates the core functionalities and user experience. The goal is to create a comprehensive platform where users can search for, book, and host accommodations worldwide, offering a seamless and reliable service for both travelers and property owners by using MERN stack which implies MongoDB, Express js, React js, Node js.',
    link: 'https://github.com/harini1503-git/wanderlust--travel-website-fullstack',
  },
  {
    name: 'Karma: Your Groceries, Your Good Deeds',
    description: 'Karma is a Flutter-based mobile application designed to revolutionize your grocery shopping experience. It focuses on the UI development more then backend. With Karma, every grocery purchase contributes to a better world, helping you make mindful choices that positively impact both the environment .',
    link: 'https://github.com/harini1503-git/Flutter/tree/main/Flutter',
  },
  {
    name: 'Fitness Application:  Fitness Mini Trainer application',
    description: 'Developed a mobile fitness application called "Fitness Mini Trainer" using XML and Java. The application is designed to help users create personalized workout routines, track their fitness progress, and access detailed exercise instructions with diet routines and exercises for weight gain and loss.',
    link: 'https://github.com/harini1503-git/Android-Application',
  },
  {
    name: 'Simon Says Game',
    description: 'Technologies: HTML, CSS, JavaScript Developed an interactive, browser-based version of the classic Simon Says game using HTML, CSS, and JavaScript. The game challenges players to memorize and repeat sequences of colors and sounds generated in increasing difficulty.',
    link: 'https://github.com/harini1503-git/Simon-Says-Game-JavaScript',
  },
  {
    name: 'Python Music Player',
    description: 'Technologies: Python, Tkinter Developed a fully functional music player application using Python and the Tkinter library. The player allows users to load, play, pause, and navigate through audio tracks. ',
    link: 'https://github.com/harini1503-git/Python-music-player',
  },
  {
    name: 'Mini-Posts Application',
    description: 'Technologies: JavaScript (Node.js, Express), MongoDB, HTML, CSS, Restful APIs Developed a full-stack web application that allows users to create, view, and manage posts, with a backend connected to a database for persistent storage.',
    link: 'https://github.com/harini1503-git/Mini-posts',
  },
  {
    name: 'Amazon Clone UI',
    description: 'Technologies: HTML, CSS Developed a responsive, pixel-perfect clone of the Amazon website front-end using HTML and CSS. The project focuses on replicating the core design and layout of Amazon’s homepage, product pages, and navigation.',
    link: 'https://github.com/harini1503-git/Amazon-cloning-',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <Swiper
        spaceBetween={35}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]} // Import navigation and pagination as modules
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
