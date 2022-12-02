import { getAllProjects, getSpecificProject } from "./apiCalls.js";
import { useEffect, useState } from "react";
import "../styles/projectPage.css";
import { Link } from "react-router-dom";

const ProjectPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [pythonProjectList, setPythonProjectList] = useState([]);
  const [javascriptProjectList, setJavascriptProjectList] = useState([]);
  const [matlabProjectList, setMatlabProjectList] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    getAllProjects()
      .then((data) => {
        console.log(data.data.projects);
        let projectArr = data.data.projects;
        setPythonProjectList(
          projectArr.filter((element) => {
            return element.language === "Python";
          })
        );
        setJavascriptProjectList(
          projectArr.filter((element) => {
            return element.language === "Javascript";
          })
        );
        setMatlabProjectList(
          projectArr.filter((element) => {
            return element.language === "MATLAB";
          })
        );
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
      });
  }, []);

  return (
    <div className="projectListContainer">
      <div className="projectListBox">
        {isLoading ? (
          <p>Loading</p>
        ) : (
          <>
            <h3>Javascript projects</h3>
            <ul>
              {javascriptProjectList.map((project) => {
                return (
                  <>
                    <li key={project.project_id.toString()}>{project.name}</li>
                    <Link
                      className="navLink"
                      to={`/projects/${project.project_id}`}
                    >
                      <button>more details...</button>
                    </Link>
                  </>
                );
              })}
            </ul>
          </>
        )}
      </div>
      <div className="projectListBox">
        {isLoading ? (
          <p>Loading</p>
        ) : (
          <>
            <h3>Python projects</h3>
            <ul>
              {pythonProjectList.map((project) => {
                return (
                  <>
                    <li key={project.project_id.toString()}>{project.name}</li>
                    <Link
                      className="navLink"
                      to={`/projects/${project.project_id}`}
                    >
                      <button>more details...</button>
                    </Link>
                  </>
                );
              })}
            </ul>
          </>
        )}
      </div>
      <div className="projectListBox">
        {isLoading ? (
          <p>Loading</p>
        ) : (
          <>
            <h3>MATLAB projects</h3>
            <ul>
              {matlabProjectList.map((project) => {
                return (
                  <>
                    <li key={project.project_id.toString()}>{project.name}</li>
                    <Link
                      className="navLink"
                      to={`/projects/${project.project_id}`}
                    >
                      <button>more details...</button>
                    </Link>
                  </>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectPage;
