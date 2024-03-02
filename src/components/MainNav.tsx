import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


const MainNav = () => {

  const [loggedIn, setLoggedIn] = useState('');
 
  useEffect(() => {
   
    const fetchProducts = async () => {

      const response = await fetch('http://localhost:3333/api/user',{ 
        method: "GET",
        credentials: "include",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
    }); 
      const result = await response.json();
// eslint-disable-next-line no-console
      console.log(result)
  
      setLoggedIn(result.loggedIn)
    }

    fetchProducts();  
    
  },[]);

  // eslint-disable-next-line no-console
  console.log(loggedIn)

  return !loggedIn ? (
  
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
  ) : (
    <nav className="tm-nav" id="tm-nav">
      <ul>
        <li className="tm-nav-item active">
          <Link to="/profile" className="tm-nav-link">
            <i className="fas fa-home" />
            Profile
          </Link>
        </li>
        <li className="tm-nav-item">
          <Link to="/create-post" className="tm-nav-link">
            <i className="fas fa-pen" />
            Create Blog
          </Link>
        </li>
        <li className="tm-nav-item">
          <Link to="/logout" className="tm-nav-link">
            <i className="fas fa-pen" />
            Logout
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
  )
}

export default MainNav;
