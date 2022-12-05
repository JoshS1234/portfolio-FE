import "../styles/HeaderBar.css";

const HeaderBar = ({ showingContact, setShowingContact }) => {
  return (
    <div className="headerBarContainer">
      <div>
        <h1>Joshua Spence - Portfolio</h1>
      </div>
      <div className="selfie">
        <img
          src={require("./Images/WebsitePhoto.jpg")}
          alt="Josh spence - Selfie"
        />
        <button
          onClick={() => {
            if (showingContact) {
              setShowingContact(false);
            } else {
              setShowingContact(true);
            }
          }}
        >
          {showingContact ? "Hide" : "Contact me"}
        </button>
      </div>
    </div>
  );
};

export default HeaderBar;
