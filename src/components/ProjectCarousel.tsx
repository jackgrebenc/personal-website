import Carousel from "react-bootstrap/Carousel";
import { Projects } from "./Projects";
import StandardizedImage from "./StandardizedImage";
import { NavLink } from "react-router-dom";

const ProjectCarousel = () => {
  return (
    <Carousel>
      {Projects.map((project, index) => (
        <Carousel.Item
          key={index}
          className="carousel-item-custom"
          interval={100000}
        >
          <NavLink className="nav-link" to={project.link} aria-current="page">
            <StandardizedImage
              src={project.image}
              alt={project.title}
              width={100}
              height={50}
            />
            <Carousel.Caption className="carousel-caption-custom">
              <h3 className="carousel-title">{project.title}</h3>
              <p className="carousel-description">{project.description}</p>
            </Carousel.Caption>
          </NavLink>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProjectCarousel;
