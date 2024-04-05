import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <div className="header">
      <Link to={"/"}>
        <img src={logo} alt="" />
      </Link>
      <div className="left-header">
        <Link to={"/Characters"}>Characters</Link>
        <Link to={"/Comics"}>Comics</Link>
      </div>
    </div>
  );
};

export default Header;
