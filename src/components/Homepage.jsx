import { getRandomProject } from "./apiCalls.js";
import SingleProjectCard from "./SingleProjectCard";
import { useEffect, useState } from "react";
import "../styles/homepage.css";

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const [showRandomProj, setShowRandomProj] = useState(false);
  const [randomProj, setRandomProj] = useState({});
  const [nextProject, setNextProject] = useState(0);

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
  }, [nextProject]);

  const revealRandomProj = (event) => {
    if (showRandomProj === false) {
      setShowRandomProj(true);
    } else {
      setShowRandomProj(false);
    }
  };

  return (
    <div className="homepageContainer">
      <div
        className="summaryBox"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1>I'm Josh. A junior full-stack software developer.</h1>
      </div>
      <div className="summaryBox">
        <h4>My Story: </h4>
        <p>
          I have recently trained as a software developer through the
          Northcoders software development bootcamp after working as a Maths
          teacher for the last few years. I thoroughly enjoyed the coding
          bootcamp, and I am currently looking for my first job as a software
          developer.
        </p>
        <p>
          This is my portfolio site made using express on the backend, and react
          for the frontend, feel free to take a look around. Below is the option
          to scroll through a random selection of projects I have worked on
          (there's also a "My Projects" page which you can look through more
          methodically!). Feel free to get in touch if you have any questions,
          work, or feedback on the portfolio site.
        </p>
      </div>
      {showRandomProj ? (
        <button
          onClick={(event) => {
            revealRandomProj(event);
          }}
        >
          Hide random project
        </button>
      ) : (
        <button
          onClick={(event) => {
            revealRandomProj(event);
          }}
        >
          Show random project
        </button>
      )}

      {showRandomProj ? (
        <div className="singleProjectCard">
          {isError ? (
            <p>There was an error...</p>
          ) : isLoading ? (
            <p>Loading</p>
          ) : (
            <>
              <button
                onClick={(event) => {
                  setNextProject(nextProject + 1);
                }}
              >
                Next project
              </button>
              <SingleProjectCard project={randomProj} />
            </>
          )}
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};
export default Homepage;
