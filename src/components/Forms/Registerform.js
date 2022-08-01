import React, { useState } from 'react';

export default function Registerform() {
  const [username, setUsername] = useState('');
  const [hashpassword, setPassword] = useState('');
  const [email, setEmail] = useState('');
  // set todays date
  const currDate = new Date().toISOString().slice(0, 10);
  const [datesubmitted, setDate] = useState(currDate);

  function handleUsername(e) {
    setUsername(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleDate(e) {
    setDate(e.target.value);
  }

  // eslint-disable-next-line func-style
  const submitRegister = (e) => {
    e.preventDefault();

    const formData = {
      username,
      hashpassword,
      email,
      datesubmitted,
    };

    // eslint-disable-next-line no-console
    console.log(formData);

    fetch('http://localhost:3333/api/register-user', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          // error processing
          throw new Error(`${response.status}: ${response.statusText}`);
        }
        return response.text();
      })
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response);
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
              value={datesubmitted}
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
