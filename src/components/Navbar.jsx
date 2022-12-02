import "../styles/navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navigation">
      <li>
        <Link className="navLink" to="/home">
          <button>Home</button>
        </Link>
      </li>
      <li>
        <Link className="navLink" to="/projects">
          <button>My Projects</button>
        </Link>
      </li>
      <li>
        <Link className="navLink" to="/about-me">
          <button>About Me</button>
        </Link>
      </li>
    </nav>
  );
}
