import React from 'react';
import './Projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const projects = [
  {
    name: 'MERN Stack Development Course From PW Skills',
    description: 'Completed an in-depth course on MERN stack development, covering all aspects of full-stack web development using MongoDB, Express.js, React.js, and Node.js.'
  },
  {
    name: 'Intern - Flutter Development   from Indus University (IITE)',
    description: 'Collaborated with UI/UX designers to implement responsive and visually appealing user interfaces.',
  },
  {
    name: 'Intern - Machine Learning    from Indus University (IITE)',
    description: 'Completed an internship in Machine Learning, where I developed and implemented predictive models using Python gaining hands-on experience in data preprocessing, model evaluation and soon.',
  },
  {
    name: 'Java Programming course-  from Udemy',
    description: 'Gained hands-on experience in object-oriented programming with Java. Worked with core Java concepts',
  },
];

const Internships = () => {
  return (
    <section id="projects" className="projects">
      <h2>Internships</h2>
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Internships;
