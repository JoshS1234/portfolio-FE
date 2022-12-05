import { useEffect } from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import "../styles/singleProjectCard.css";

const SingleProjectCard = ({ project }) => {
  useEffect(() => {}, [project]);

  return (
    <div className="projectCard">
      <h3>Project Title: {project.name}</h3>
      <div className="detailsAndImage">
        <div className="imageOrVideo">
          {project.image_url === "" ? (
            <></>
          ) : (
            <img
              className="projectImage"
              src={require(`./Images/${project.project_id}.png`)}
              alt="demonstration of the functionality of this project"
            />
          )}
          {project.video_url === "" ? (
            <></>
          ) : (
            <YoutubeEmbed
              className="projectVideo"
              embedId={project.video_url}
            />
          )}
        </div>
        <div className="details">
          <h5>Programming Language: {project.language}</h5>
          {project.tech === "" ? (
            <p></p>
          ) : (
            <h5>Additional tech: {project.tech}</h5>
          )}
          <h5>Description: {project.description}</h5>
          {project.github === "" ? (
            <h5>Github: N/A</h5>
          ) : (
            <h5>
              Github:{" "}
              <a target="_blank" rel="noreferrer" href={project.github}>
                {project.github}
              </a>
            </h5>
          )}
          {project.hosted === "" ? (
            <h5>Hosted Site: N/A</h5>
          ) : (
            <h5>
              Hosted Site:{" "}
              <a target="_blank" rel="noreferrer" href={project.github}>
                {project.hosted}
              </a>
            </h5>
          )}
          <h5>Year: {project.year}</h5>
        </div>
      </div>
    </div>
  );
};

export default SingleProjectCard;
