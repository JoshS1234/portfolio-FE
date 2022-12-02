import axios from "axios";

const api = axios.create({
  baseURL: "https://my-portfolio-backend-josh.herokuapp.com/",
});

export const getAllProjects = () => {
  return api
    .get("/projects")
    .then((data) => {
      return data;
    })
    .catch((err) => {
      return err;
    });
};

export const getRandomProject = () => {
  return api
    .get("/projects")
    .then((data) => {
      let projectsArr = data.data.projects;
      let randomInt = Math.floor(Math.random() * projectsArr.length);
      return Promise.all([randomInt]);
    })
    .then((randomIntArr) => {
      let randomInt = randomIntArr[0];
      return getSpecificProject(randomInt);
    })
    .then((data) => {
      return data.data.projects[0];
    })
    .catch((err) => {
      return err;
    });
};

export const getSpecificProject = (project_id) => {
  return api
    .get(`/projects/${project_id}`)
    .then((data) => {
      let specificProject = data;
      return specificProject;
    })
    .catch((err) => {
      console.log("There was an error");
      console.log(err);
      return err;
    });
};
