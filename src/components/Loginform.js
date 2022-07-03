import { React, useState } from "react";

// eslint-disable-next-line func-style
export default function Loginform() {
  const [userEmail, setUserEmail] = useState(" ");
  const [userPassword, setUserPassword] = useState(" ");

  function handleUserEmail(e) {
    setUserEmail(e.target.value);
  }

  function handleuserPassword(e) {
    setUserPassword(e.target.value);
  }

  function submit() {
    const myForm = document.getElementById("login");

    const formData = new FormData(myForm);
    // eslint-disable-next-line no-console
    console.log(formData);

    fetch("http://localhost:3333/login", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          // error processing
          throw new Error(`${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error("Fetch Error : ", err.message);
        // throw new Error(err.message);
      })
      .finally((result) => {
        // eslint-disable-next-line no-console
        console.log(`finished  -${result}`);
      });
  }

  return (
    <form id="login" onSubmit={submit}>
      <h1 className="h3 mb-3 fw-normal">Login Here </h1>

      <div className="form-group">
        <label htmlFor="username">
          Email:&#32;
          <input
            className="form-control"
            type="text"
            name="email"
            id="email"
            value={userEmail}
            onChange={handleUserEmail}
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
            value={userPassword}
            onChange={handleuserPassword}
            required
          />
        </label>
      </div>

      <button className="w-100 btn btn-lg btn-primary" type="submit">
        Login
      </button>
      <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
    </form>
  );
}
