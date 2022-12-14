import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router";
import Homepage from "./components/Homepage";
import BiographyPage from "./components/BiographyPage";
import ProjectPage from "./components/ProjectPage";
import PageNotFound from "./components/PageNotFound";
import SingleProjectPage from "./components/singleProjectPage";
import HeaderBar from "./components/HeaderBar";
import ContactDetails from "./components/ContactDetails";
import { useState } from "react";

function App() {
  const [showingContact, setShowingContact] = useState(false);

  return (
    <div className="overallAppSpace">
      <HeaderBar
        setShowingContact={setShowingContact}
        showingContact={showingContact}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/home" element={<Homepage />}></Route>
        <Route path="/projects" element={<ProjectPage />}></Route>
        <Route
          path="/projects/:project_id"
          element={<SingleProjectPage />}
        ></Route>
        <Route path="/about-me" element={<BiographyPage />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <ContactDetails />
    </div>
  );
}

export default App;
