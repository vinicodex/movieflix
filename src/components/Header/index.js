import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header>
      <Link className="logo" to="/">
        MovieFlix
      </Link>
      <Link className="favorite" to="/favorites">
        My movies
      </Link>
      <h1>Header</h1>
    </header>
  );
}

export default Header;
