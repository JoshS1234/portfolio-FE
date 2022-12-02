import { useEffect } from "react";
import YoutubeEmbed from "./YoutubeEmbed";

const SingleProjectCard = ({ project }) => {
  useEffect(() => {}, [project]);

  return (
    <div>
      <h3>Project Title: {project.name}</h3>
      <h5>Programming Language: {project.language}</h5>
      {project.tech === "" ? <p></p> : <h5>Additional tech: {project.tech}</h5>}
      <h5>Description: {project.description}</h5>
      {project.image_url === "" ? (
        <p></p>
      ) : (
        <img
          src="2wCEAAkGBxIRERUTEhIWFhUWGRgZGBcYGB4gGhUdFRUYHh4YGxgaICggGB0lHRcXITEhJSkrLi4uGiIzODMtNygtLisBCgoKDg0OGxAQGy0mICUwLS0tLy0vLi0tLS0tLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf"
          alt="demonstration of the functionality of this project"
        />
      )}
      {project.video_url === "" ? (
        <p></p>
      ) : (
        <YoutubeEmbed embedId={"AQ8lAIMnS18"} />
      )}
      {project.github === "" ? (
        <h5>Github: N/A</h5>
      ) : (
        <h5>Github: {project.github}</h5>
      )}
      {project.hosted === "" ? (
        <h5>Hosted Site: N/A</h5>
      ) : (
        <h5>Hosted Site: {project.hosted}</h5>
      )}
      <h5>Year: {project.year}</h5>
    </div>
  );
};

export default SingleProjectCard;
