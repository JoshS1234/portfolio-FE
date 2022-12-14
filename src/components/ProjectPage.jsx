import { getAllProjects } from "./apiCalls.js";
import { useEffect, useState } from "react";
import "../styles/projectPage.css";
import { Link } from "react-router-dom";

const ProjectPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [pythonProjectList, setPythonProjectList] = useState([]);
  const [javascriptProjectList, setJavascriptProjectList] = useState([]);
  const [matlabProjectList, setMatlabProjectList] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    getAllProjects()
      .then((data) => {
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
      });
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="projectListContainer">
      <div className="projectListBox">
        <h3>Javascript projects</h3>
        <ul>
          {javascriptProjectList.map((project) => {
            return (
              // <li key={project.project_id}>
              //   <div className="nameAndButton">
              //     {project.name}{" "}
              //     <Link
              //       className="navLink"
              //       to={`/projects/${project.project_id}`}
              //     >
              //       <button>more details...</button>
              //     </Link>
              //   </div>
              // </li>
              <li>
                <Link
                  className="navLink"
                  to={`/projects/${project.project_id}`}
                >
                  <button className="box">{`${project.name}, ${project.year}`}</button>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="projectListBox">
        <h3>Python projects</h3>
        <ul>
          {pythonProjectList.map((project) => {
            return (
              <li>
                <Link
                  className="navLink"
                  to={`/projects/${project.project_id}`}
                >
                  <button className="box">
                    {`${project.name}, ${project.year}`}
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="projectListBox">
        <h3>MATLAB projects</h3>
        <ul>
          {matlabProjectList.map((project) => {
            return (
              <li>
                <Link
                  className="navLink"
                  to={`/projects/${project.project_id}`}
                >
                  <button className="box">
                    {`${project.name}, ${project.year}`}
                  </button>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProjectPage;
