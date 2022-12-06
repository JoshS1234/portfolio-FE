import "../styles/HeaderBar.css";
import ContactDetails from "./ContactDetails";

const HeaderBar = ({ showingContact, setShowingContact }) => {
  return (
    <div className="headerBarContainer">
      <div className="title">
        <h1>Joshua Spence</h1>
        <h1>Portfolio</h1>
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
          {showingContact ? "Hide contact details" : "Contact me"}
        </button>
      </div>
      {showingContact ? (
        <div className="contacts">
          <ContactDetails />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default HeaderBar;
