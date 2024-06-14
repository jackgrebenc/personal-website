import React from "react";
import { NavLink } from "react-router-dom";

interface ProjectTileProps {
  image: string; // URL of the image
  title: string; // Title of the project
  link: string; // URL to navigate on click
}

const ProjectTiles = ({ image, title, link }: ProjectTileProps) => {
  return (
    <div className="d-inline-block card p-2 bg-light shadow-sm mb-4 mr-4 mt-3">
      <NavLink to={link} style={{ textDecoration: "none" }}>
        <img src={image} className="card-img-top" alt={title} />
        <h5 className="card-body text-black text-center">{title}</h5>
      </NavLink>
    </div>
  );
};

export default ProjectTiles;
