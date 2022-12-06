import { useEffect, useState } from "react";
import { getSpecificProject } from "./apiCalls";
import YoutubeEmbed from "./YoutubeEmbed";
import "../styles/singleProjectPage.css";
import { Link } from "react-router-dom";

const SingleProjectPage = () => {
  let url = window.location.href;
  // let project_id = url.split(
  //   "https://portfolio-joshua-spence.netlify.app/projects/"
  // )[1];

  let project_id = url.split("localhost:3000/projects/")[1];

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [project, setProject] = useState({});

  useEffect(() => {
    setIsLoading(true);
    setIsError(false);

    getSpecificProject(project_id)
      .then((data) => {
        let projectData = data.data.projects[0];
        setProject(projectData);
      })
      .then(() => {
        setIsLoading(false);
        setIsError(false);
      })
      .catch((err) => {
        console.log(err);
        setIsError(true);
      });
  }, [project_id]);

  return isError ? (
    <p>There is an error, this project id does not exist</p>
  ) : isLoading ? (
    <p>Loading</p>
  ) : (
    <div className="projectCardContainer">
      <div className="singleProjectCard">
        <Link className="navLink" to={`/projects`}>
          <button>Back to projects</button>
        </Link>
        <div>
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
                <YoutubeEmbed embedId={project.video_url} />
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
      </div>
    </div>
  );
};

export default SingleProjectPage;
