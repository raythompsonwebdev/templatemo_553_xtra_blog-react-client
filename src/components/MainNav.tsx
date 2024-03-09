import { Link } from "react-router-dom";

function MainNav() {
  return (
    <nav className="tm-nav" id="tm-nav">
      <ul>
        <li className="tm-nav-item active">
          <Link to="/" className="tm-nav-link">
            <i className="fas fa-home" />
            Blog Home
          </Link>
        </li>
        <li className="tm-nav-item">
          <Link to="/register" className="tm-nav-link">
            <i className="fas fa-pen" />
            Register
          </Link>
        </li>
        <li className="tm-nav-item">
          <Link to="/login" className="tm-nav-link">
            <i className="fas fa-pen" />
            Login
          </Link>
        </li>
        <li className="tm-nav-item">
          <Link to="/about" className="tm-nav-link">
            <i className="fas fa-users" />
            About Xtra
          </Link>
        </li>
        <li className="tm-nav-item">
          <Link to="/contact" className="tm-nav-link">
            <i className="far fa-comments" />
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
