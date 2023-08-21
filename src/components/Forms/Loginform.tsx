import { SetStateAction, useState } from "react";

 
export default function Loginform() {
  const [email, setUserEmail] = useState(' ');
  const [hashpassword, setUserPassword] = useState(' ');

  function handleUserEmail(e: { preventDefault: () => void , target: { value: SetStateAction<string> }}) {
    setUserEmail(e.target.value);
  }

  function handleuserPassword(e: { preventDefault: () => void , target: { value: SetStateAction<string> }}) {
    setUserPassword(e.target.value);
  }

  function submitLogin(e: { preventDefault: () => void }) {
    
    e.preventDefault();

    const myForm = document.getElementById("login") as HTMLFormElement;

    const formData : FormData = new FormData(myForm);

    // const formData = {
    //   email,
    //   hashpassword,
    // };
    // eslint-disable-next-line no-console
    console.log(formData);

    fetch('http://localhost:3333/api/login', {
      method: 'POST',
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
        console.error('Fetch Error : ', err.message);
        // throw new Error(err.message);
      });
  }

  return (
    <form id="login" onSubmit={submitLogin}>
      <h1 className="h3 mb-3 fw-normal">Login Here </h1>

      <div className="form-group">
        <label htmlFor="username" style={{ width: '100%' }}>
          Email:&#32;
          <input
            className="form-control"
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={handleUserEmail}
            required
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
