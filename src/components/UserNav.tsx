import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function UserNav() {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/logout");
  };

  return (
    <nav className="tm-nav" id="tm-nav">
      <ul>
        <li className="tm-nav-item active">
          <Link to="/" className="tm-nav-link">
            <i className="fas fa-home" />
            Blog Home
          </Link>
        </li>
        <li className="tm-nav-item ">
          <Link to="/profile" className="tm-nav-link">
            <i className="fas fa-home" />
            User Profile
          </Link>
        </li>
        <li className="tm-nav-item">
          <Link to="/create-post" className="tm-nav-link">
            <i className="fas fa-pen" />
            Create Blog
          </Link>
        </li>
        <li className="tm-nav-item">
          <button className="tm-nav-link" onClick={logOut}>
            <i className="fas fa-pen" />
            Logout
          </button>
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

export default UserNav;
