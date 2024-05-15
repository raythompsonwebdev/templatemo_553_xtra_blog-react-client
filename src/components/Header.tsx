import MainNav from "./MainNav";
import UserNav from "./UserNav";
import { useEffect, useContext } from "react";
import { UserContext } from "../useContext/context";
import { useUser } from "../pages/auth/useUser";

function Header() {
  // const [message, setMessage] = useState("");

  const { loggedIn, setLoggedIn } = useContext(UserContext);
  const user = useUser();

  useEffect(() => {
    if (user !== null) {
      setLoggedIn(true);
    }
  }, [setLoggedIn]);

  // eslint-disable-next-line no-console
  console.log(user, loggedIn);

  return (
    <header className="tm-header" id="tm-header">
      <div className="tm-header-wrapper">
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars" />
        </button>
        <div className="tm-site-header">
          <div className="mb-3 mx-auto tm-site-logo">
            <i className="fas fa-times fa-2x" />
          </div>
          <h1 className="text-center">Xtra Blog</h1>
        </div>
        {/* <LoginContext.Provider value={{userName, setUserName}}> */}
        {loggedIn ? <UserNav /> : <MainNav />}
        {/* </LoginContext.Provider> */}
        <div className="tm-mb-65">
          <a
            rel="nofollow"
            href="https://fb.com/templatemo"
            className="tm-social-link"
          >
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
