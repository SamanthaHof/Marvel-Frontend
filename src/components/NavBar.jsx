import { Link } from "react-router-dom";
import logo from "/marvel.svg";
import "../assets/styles/navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Logo MARVEL" className="logo" />
      </Link>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/personnages" className="nav-link">
            Personnages
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/comics" className="nav-link">
            Comics
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/favoris" className="nav-link">
            Favoris
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
