import { React, useState } from "react";

// eslint-disable-next-line func-style
export default function Registerform() {
  const [username, setUsername] = useState(" ");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState(" ");
  // set todays date
  const currDate = new Date().toISOString().slice(0, 10);
  const [submitted, setDate] = useState(currDate);

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

  return (
    <form id="login" action="http://localhost:3333/register" method="POST">
      <h1 className="h3 mb-3 fw-normal">Register Here</h1>

      <div className="form-group">
        <label htmlFor="username">
          Username:&#32;
          <input
            className="form-control"
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={handleUsername}
            required
          />
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="email">
          Email:&#32;
          <input
            className="form-control"
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmail}
            required
          />
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="password">
          Password:&#32;
          <input
            className="form-control"
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePassword}
            required
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
  );
}
