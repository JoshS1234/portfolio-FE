import "../styles/navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navigation">
      <li>
        <button>
          <Link className="navLink" to="/home">
            Home
          </Link>
        </button>
      </li>
      <li>
        <button>
          <Link className="navLink" to="/projects">
            My Projects
          </Link>
        </button>
      </li>
      <li>
        <button>
          <Link className="navLink" to="/about-me">
            About Me
          </Link>
        </button>
      </li>
    </nav>
  );
}
