import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line func-style
function MainNav() {
  return (
    <nav className="tm-nav" id="tm-nav">            
      <ul>
          <li className="tm-nav-item active"><Link to="/" className="tm-nav-link">
              <i className="fas fa-home"></i>
              Blog Home
          </Link></li>
          {/* <li className="tm-nav-item"><Link to="/" className="tm-nav-link">
              <i className="fas fa-pen"></i>
              Single Post
          </Link></li> */}
          <li className="tm-nav-item"><Link to="/about" className="tm-nav-link">
              <i className="fas fa-users"></i>
              About Xtra
          </Link></li>
          <li className="tm-nav-item"><Link to="/contact" className="tm-nav-link">
              <i className="far fa-comments"></i>
              Contact Us
          </Link></li>
      </ul>
            </nav>
  );
}

export default MainNav;
