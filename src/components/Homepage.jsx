import {
  getAllProjects,
  getRandomProject,
  getSpecificProject,
} from "./apiCalls.js";
import SingleProjectCard from "./SingleProjectCard";
import { useEffect, useState } from "react";
import "../styles/homepage.css";

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [randomProj, setRandomProj] = useState({});

  useEffect(() => {
    setIsLoading(true);
    setRandomProj({});

    getRandomProject()
      .then((data) => {
        setRandomProj(data);
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        setIsError(true);
      });
  }, []);

  return (
    <div className="homepageContainer">
      <div className="summaryBox">
        <h2>Summary: </h2>
        <p>Intro to Josh!!!</p>
      </div>
      <div className="singleProjectCard">
        {isLoading ? (
          <p>Loading</p>
        ) : (
          <SingleProjectCard project={randomProj} />
        )}
      </div>
    </div>
  );
};
export default Homepage;
