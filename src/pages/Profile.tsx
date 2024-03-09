import { useEffect, useState } from 'react';


const Profile = () => {
  
  const [loggedIn, setLoggedIn] = useState('');
  const [message, setMessage] = useState('');
  const [userName, setUserName] = useState('');
 
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
  console.log(message, loggedIn)


  return (
    <main className="tm-main">
      <div className="row tm-row">
      </div>
      <div className="row tm-row tm-mb-45">
        <div className="col-12">
          <hr className="tm-hr-primary tm-mb-55" />
        </div>
      </div>
      <div className="row tm-row tm-mb-40">
        <div className="col-12">
          <div className="mb-4">
            <h2 className="pt-2 tm-mb-40 tm-color-primary tm-post-title">
              Welcome {userName} 
            </h2>
                       
          </div>
        </div>
      </div>
      <div className="row tm-row tm-mb-120">
        <div className="col-lg-4 tm-about-col">
          <div className="tm-bg-gray tm-about-pad">
            <div className="text-center tm-mt-40 tm-mb-60">
              <i className="fas fa-bezier-curve fa-4x tm-color-primary" />
            </div>
            <h2 className="mb-3 tm-color-primary tm-post-title">Background</h2>
            <p className="mb-0 tm-line-height-short">
              Phasellus pulvinar nisl ornare leo porttitor, et vestibulum lorem
              semper. Duis risus ex, molestie sit amet magna in, pharetra
              pellentesque est. Curabitur elit metus.
            </p>
          </div>
        </div>
        <div className="col-lg-8 tm-about-col">
          <div className="tm-bg-gray tm-about-pad">
            <div className="text-center tm-mt-40 tm-mb-60">
              <i className="fas fa-users-cog fa-4x tm-color-primary" />
            </div>
            <h2 className="mb-3 tm-color-primary tm-post-title">Teamwork</h2>
            <p className="mb-0 tm-line-height-short">
              Suspendisse ullamcorper, mi vel molestie ornare, arcu magna
              euismod ipsum, in malesuada nulla magna ut enim. Morbi lacinia
              magna sed auctor, vitae nunc cursus.
            </p>
          </div>
        </div>
      
      </div>
      <div className="row tm-row tm-mb-60">
        <div className="col-12">
          <hr className="tm-hr-primary  tm-mb-55" />
        </div>
        <div className="col-lg-6 tm-mb-60 tm-person-col">
          <div className="media tm-person">
            <img
              src="/images/about-02.jpg"
              alt="two"
              className="img-fluid mr-4"
            />
            <div className="media-body">
              <h2 className="tm-color-primary tm-post-title mb-2">
                John Henry
              </h2>
              <h3 className="tm-h3 mb-3">CEO/Founder</h3>
              <p className="mb-0 tm-line-height-short">
                Aliquam non vulputate lectus, vel ultricies diam. Suspendisse at
                ipsum hendrerit, vestibulum mi id, mattis tortor.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 tm-mb-60 tm-person-col">
          <div className="media tm-person">
            <img
              src="/images/about-03.jpg"
              alt="three"
              className="img-fluid mr-4"
            />
            <div className="media-body">
              <h2 className="tm-color-primary tm-post-title mb-2">Timy Cake</h2>
              <h3 className="tm-h3 mb-3">Project Director</h3>
              <p className="mb-0 tm-line-height-short">
                Quisque in bibendum elit, in egestas turpis. Vestibulum ornare
                sollicitudin congue. Aliquam lorem mi, maximus at iaculis ut.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 tm-mb-60 tm-person-col">
          <div className="media tm-person">
            <img
              src="/images/about-04.jpg"
              alt="four"
              className="img-fluid mr-4"
            />
            <div className="media-body">
              <h2 className="tm-color-primary tm-post-title mb-2">Jay Zoona</h2>
              <h3 className="tm-h3 mb-3">Supervisor</h3>
              <p className="mb-0 tm-line-height-short">
                Maecenas eu mi eu dui cursus consequat non eu metus. Morbi ac
                turpis eleifend, commodo purus eget, commodo mauris.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6 tm-mb-60 tm-person-col">
          <div className="media tm-person">
            <img
              src="/images/about-05.jpg"
              alt="five"
              className="img-fluid mr-4"
            />
            <div className="media-body">
              <h2 className="tm-color-primary tm-post-title mb-2">
                Catherine Soft
              </h2>
              <h3 className="tm-h3 mb-3">Team Leader</h3>
              <p className="mb-0 tm-line-height-short">
                Integer eu sapien hendrerit, imperdiet arcu sit amet,
                sollicitudin ipsum. Phasellus consequat suscipit ligula eget
                bibendum.
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="row tm-row">
        <div className="col-md-6 col-12 tm-color-gray">
          Design:{' '}
          <a
            rel="nofollow"
            target="_parent"
            href="https://templatemo.com"
            className="tm-external-link">
            TemplateMo
          </a>
        </div>
        <div className="col-md-6 col-12 tm-color-gray tm-copyright">
          Copyright 2020 Xtra Blog Company Co. Ltd.
        </div>
      </footer>
    </main>
  )
}

export default Profile; 