import { useEffect } from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import "../styles/singleProjectCard.css";

const SingleProjectCard = ({ project }) => {
  useEffect(() => {}, [project]);

  return (
    <div>
      <h3>Project Title: {project.name}</h3>
      <h5>Programming Language: {project.language}</h5>
      {project.image_url === "" ? (
        project.video_url ? (
          <YoutubeEmbed embedId={project.video_url} />
        ) : (
          <p></p>
        )
      ) : (
        <img
          className="projectImage"
          src={require(`./Images/${project.project_id}.png`)}
          alt="demonstration of the functionality of this project"
        />
      )}
      {/* {project.video_url === "" ? (
        <p></p>
      ) : (
        <YoutubeEmbed embedId={project.video_url} />
      )} */}
      {project.tech === "" ? <p></p> : <h5>Additional tech: {project.tech}</h5>}
      <h5>Description: {project.description}</h5>
      {project.github === "" ? (
        <h5>Github: N/A</h5>
      ) : (
        <h5>
          Github:
          <a target="_blank" rel="noreferrer" href={project.github}>
            {project.github}
          </a>
        </h5>
      )}
      {project.hosted === "" ? (
        <h5>Hosted Site: N/A</h5>
      ) : (
        <h5>
          Hosted Site:
          <a target="_blank" rel="noreferrer" href={project.github}>
            {project.hosted}
          </a>
        </h5>
      )}
      <h5>Year: {project.year}</h5>
    </div>
  );
};

export default SingleProjectCard;
