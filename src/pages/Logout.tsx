import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';



const Logout = () => {

    const [loggedIn, setLoggedIn] = useState('');


    useEffect(() => {
       
        const fetchProducts = async () => {
    
          const response = await fetch('/api/logout',{ 
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
        }); 
          const result = await response.json(); 
          setLoggedIn(result.loggedIn)
        }
    
        fetchProducts();  
        
      },[]);

      // eslint-disable-next-line no-console
  console.log(loggedIn)

      return (
    <main className="tm-main">
      {/* <div className="row tm-row">     
      <SearchForm />                                 
    </div>            
    <div className="row tm-row tm-mb-45">
        <GoogleMap />               
    </div> */}
      <div className="row tm-row tm-mb-120">
        <div className="col-12">
          <h2 className="tm-color-primary tm-post-title tm-mb-60">Your Logged Out</h2>
        </div>
        <div className="col-lg-7 tm-contact-left">
          
        </div>
        <div className="col-lg-5 tm-contact-right">
          <address className="mb-4 tm-color-gray">
            120 Lorem ipsum dolor sit amet, consectetur adipiscing 10550
          </address>
          <span className="d-block">
            Tel:
            <Link to="tel:060-070-0980" className="tm-color-gray">
              060-070-0980
            </Link>
          </span>
          <span className="mb-4 d-block">
            Email:
            <Link to="mailto:info@company.com" className="tm-color-gray">
              info@company.com
            </Link>
          </span>
          <p className="mb-5 tm-line-height-short">
            Maecenas eu mi eu dui cursus consequat non eu metus. Morbi ac turpis
            eleifend, commodo purus eget, commodo mauris.
          </p>
          <ul className="tm-social-links">
            <li className="mb-2">
              <Link
                to="https://facebook.com"
                className="d-flex align-items-center justify-content-center">
                <i className="fab fa-facebook" />
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="https://twitter.com"
                className="d-flex align-items-center justify-content-center">
                <i className="fab fa-twitter" />
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="https://youtube.com"
                className="d-flex align-items-center justify-content-center">
                <i className="fab fa-youtube" />
              </Link>
            </li>
            <li className="mb-2">
              <Link
                to="https://instagram.com"
                className="d-flex align-items-center justify-content-center mr-0">
                <i className="fab fa-instagram" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
      )
    }

export default Logout