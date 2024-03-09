import MainNav from './MainNav';
import UserNav from './UserNav';
import { useEffect, useState } from 'react';
// import {LoginContext} from "../useContext/context"


function Header () {

  const [loggedIn, setLoggedIn] = useState('');
  const [message, setMessage] = useState('');
  const [userName, setUserName] = useState('');
  // const [cookieName , setCookieName] = useState<string>('') ;
 
  useEffect(() => {
   
    const fetchUserProfile = async () => {

      const response = await fetch('/api/profile',{ 
        method: "GET",        
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
    }); 
      const result = await response.json();

      setLoggedIn(result.loggedIn)
      setMessage(result.message)
      setUserName(result.token.username);
    }

    fetchUserProfile(); 
       
    
  },[]);

  // eslint-disable-next-line no-console
  console.log(message, loggedIn, userName)
  // eslint-disable-next-line no-console
  // console.log(cookieName)

  return(
    
    <header className="tm-header" id="tm-header">
      <div className="tm-header-wrapper">
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation">
          <i className="fas fa-bars" />
        </button>
        <div className="tm-site-header">
          <div className="mb-3 mx-auto tm-site-logo">
            <i className="fas fa-times fa-2x" />
          </div>
          <h1 className="text-center">Xtra Blog</h1>
        </div>
        {/* <LoginContext.Provider value={{userName, setUserName}}> */}
          {!loggedIn ? <MainNav /> : <UserNav />}
        {/* </LoginContext.Provider> */}
        <div className="tm-mb-65">
          <a
            rel="nofollow"
            href="https://fb.com/templatemo"
            className="tm-social-link">
            <i className="fab fa-facebook tm-social-icon" />
          </a>
          <a href="https://twitter.com" className="tm-social-link">
            <i className="fab fa-twitter tm-social-icon" />
          </a>
          <a href="https://instagram.com" className="tm-social-link">
            <i className="fab fa-instagram tm-social-icon" />
          </a>
          <a href="https://linkedin.com" className="tm-social-link">
            <i className="fab fa-linkedin tm-social-icon" />
          </a>
        </div>
        <p className="tm-mb-80 pr-5 text-white">
          Xtra Blog is a multi-purpose HTML template from TemplateMo website.
          Left side is a sticky menu bar. Right side content will scroll up and
          down.
        </p>
      </div>
    </header>
    
  );
  
}

export default Header;
