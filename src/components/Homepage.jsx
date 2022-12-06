import { getRandomProject } from "./apiCalls.js";
import SingleProjectCard from "./SingleProjectCard";
import { useEffect, useState } from "react";
import "../styles/homepage.css";

const Homepage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // const [showRandomProj, setShowRandomProj] = useState(false);
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

  // const revealRandomProj = (event) => {
  //   if (showRandomProj === false) {
  //     setShowRandomProj(true);
  //   } else {
  //     setShowRandomProj(false);
  //   }
  // };

  return (
    <div className="homepageContainer">
      <div className="summaryBox">
        <h1>I'm Josh. A junior full-stack software developer.</h1>
      </div>

      <div className="innerContainer">
        <div className="summaryBox">
          <h4>My Story: </h4>
          <p>
            I have recently trained as a software developer through the
            Northcoders bootcamp after working as a Maths teacher for the last
            few years. I thoroughly enjoyed the coding bootcamp, and I am
            currently looking for my first job as a software developer.
          </p>
          <p>
            This is my portfolio site. I made it using a PSQL database with an
            Express API for the backend, and I used React for the frontend, feel
            free to take a look around. Below is the option to scroll through a
            random selection of projects I have worked on (there's also a "My
            Projects" page which you can look through more methodically!). If
            you have any questions, work, or feedback on the portfolio site,
            don't hesitate to get in touch!
          </p>
        </div>
        {/* {showRandomProj ? (
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
        )} */}

        {/* {showRandomProj ? (
          <div className="singleProjectCard"> */}
        {isError ? (
          <p>There was an error...</p>
        ) : isLoading ? (
          <div className="singleProjectCard">
            <div className="nextProjectButton">
              <button
                onClick={(event) => {
                  setNextProject(nextProject + 1);
                }}
              >
                Next project
              </button>
            </div>
            <SingleProjectCard
              project={{
                description: "loading",
                github: "N/A",
                hosted: "",
                image_url: undefined,
                language: "N/A",
                name: "Loading",
                tech: "",
                video_url: "",
                year: 2022,
              }}
            />
          </div>
        ) : (
          <div className="singleProjectCard">
            <div className="nextProjectButton">
              <button
                onClick={(event) => {
                  setNextProject(nextProject + 1);
                }}
              >
                Next project
              </button>
            </div>
            {console.log(randomProj)}
            <SingleProjectCard project={randomProj} />
          </div>
        )}
        {/*)}
          </div>
        ) : (
          <p></p>
        )} */}
      </div>
    </div>
  );
};
export default Homepage;
