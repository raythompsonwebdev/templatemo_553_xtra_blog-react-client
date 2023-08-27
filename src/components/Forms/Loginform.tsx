import { SetStateAction, useState } from "react";

 
const Loginform = () => {
  const [username, setUserName] = useState('');
  const [password, setUserPassword] = useState('');

  const handleUserName = (e: { preventDefault: () => void , target: { value: SetStateAction<string> }})=> {
    setUserName(e.target.value);
  }

  const handleuserPassword = (e: { preventDefault: () => void , target: { value: SetStateAction<string> }}) => {
    setUserPassword(e.target.value);
  }

  const submitLogin = (e: { preventDefault: () => void }) => {
    
    e.preventDefault();

    const myForm = document.getElementById("login") as HTMLFormElement;

    const formData : FormData = new FormData(myForm);

    //get url query params
    const username: FormDataEntryValue | null = formData.get('username')
    const password: FormDataEntryValue | null = formData.get('password')

    // eslint-disable-next-line no-console
    console.log(formData);

    fetch('http://localhost:3333/api/login', {
      method: 'POST',
      body: JSON.stringify({username, password}),
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
          Username:&#32;
          <input
            className="form-control"
            type="text"
            name="username"
            id="text"
            value={username}
            onChange={handleUserName}
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
            value={password}
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

export default Loginform
