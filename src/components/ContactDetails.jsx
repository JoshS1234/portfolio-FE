import "../styles/contactDetails.css";

const ContactDetails = () => {
  return (
    <div className="linkContainer">
      <ul>
        <li>
          <p>E-Mail: joshua.spence@hotmail.co.uk</p>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/josh-s-spence"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/JoshS1234"
          >
            Github
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/u/0/uc?id=14DrBv531MijNcyJL3o3tMyunopoaSEx8&export=download"
          >
            CV
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactDetails;
