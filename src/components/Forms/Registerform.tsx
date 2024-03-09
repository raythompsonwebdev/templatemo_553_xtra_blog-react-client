import { SetStateAction, useState } from "react";

const Registerform = () => {
  const [username, setUsername] = useState('');
  const [hashpassword, setPassword] = useState('');
  const [email, setEmail] = useState('');
  // set todays date
  const currDate = new Date().toISOString().slice(0, 10);
  const [submitted, setDate] = useState(currDate);

  function handleUsername(e: { preventDefault: () => void , target: { value: SetStateAction<string> }}) {
    setUsername(e.target.value);
  }

  function handleEmail(e: { preventDefault: () => void , target: { value: SetStateAction<string> }}) {
    setEmail(e.target.value);
  }

  function handlePassword(e: { preventDefault: () => void , target: { value: SetStateAction<string> }}) {
    setPassword(e.target.value);
  }

  function handleDate(e: { preventDefault: () => void , target: { value: SetStateAction<string> }}) {
    setDate(e.target.value);
  }
   
  const submitRegister = (e: { preventDefault: () => void }) => {
    e.preventDefault();
     
    fetch('/api/register_user', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, email, hashpassword, submitted}),
    }).then((response) => {
        if (!response.ok) {
          throw new Error(`registerForm : ${response.status}: ${response.statusText}`);
        }        
        return response.json();
      }).then((response) => {
        // eslint-disable-next-line no-console
        console.log(response);
      }).catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err.toString());
        
      });
  };

  return (
    <div className="col-lg-7 ">
      <form className="mb-5 ml-auto mr-0" id="form" onSubmit={submitRegister}>
        <h1 className="h3 mb-3 fw-normal">Register Here</h1>

        <div className="form-group">
          <label htmlFor="username" style={{ width: '100%' }}>
            Username:&#32;
            <input
              className="form-control"
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={handleUsername}
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="email" style={{ width: '100%' }}>
            Email:&#32;
            <input
              className="form-control"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleEmail}
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="password" style={{ width: '100%' }}>
            Password:&#32;
            <input
              className="form-control"
              type="password"
              name="password"
              id="password"
              value={hashpassword}
              onChange={handlePassword}
            />
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="submitted">
            <input
              className="form-control"
              type="hidden"
              id="submitted"
              name="submitted"
              onChange={handleDate}
              value={submitted}
            />
          </label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Register
        </button>
        <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
      </form>
    </div>
  );
}

export default Registerform 