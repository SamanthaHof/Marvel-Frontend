import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <header>
      {" "}
      <div className="header">
        <Link to={"/"}>
          <img src={logo} alt="" />
        </Link>
        <div className="left-header">
          <Link to={"/Personnages"}>
            <button>Personnages</button>
          </Link>
          <Link to={"/Comics"}>
            <button>Comics</button>
          </Link>
          <button>Favoris</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
