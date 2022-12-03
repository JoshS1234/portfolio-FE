import "../styles/HeaderBar.css";

const HeaderBar = () => {
  return (
    <div className="headerBarContainer">
      <div>
        <h1>Joshua Spence - Portfolio</h1>
      </div>
      <div>
        <p>Image of me?</p>
      </div>
      <div className="contactDetails">
        <p>Change these for buttons + logos?</p>
        <p>LinkedIn: www.linkedin.com/in/josh-s-spence</p>
        <p>Github: https://github.com/JoshS1234</p>
        <p>E-Mail: joshua.spence1994@googlemail.com</p>
      </div>
    </div>
  );
};

export default HeaderBar;
