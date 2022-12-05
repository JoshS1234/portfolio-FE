import "../styles/HeaderBar.css";
import ContactDetails from "./ContactDetails";

const HeaderBar = ({ showingContact, setShowingContact }) => {
  return (
    <div className="headerBarContainer">
      <div className="title">
        <h2>Joshua Spence - Portfolio</h2>
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
      <div className="contacts">
        {showingContact ? <ContactDetails /> : <></>}
      </div>
    </div>
  );
};

export default HeaderBar;
