import { SetStateAction, useState } from "react";

const Registerform = () => {
  const [username, setUsername] = useState('');
  const [hashpassword, setPassword] = useState('');
  const [email, setEmail] = useState('');
  // set todays date
  const currDate = new Date().toISOString().slice(0, 10);
  const [datesubmitted, setDate] = useState(currDate);

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

    const myForm = document.getElementById("form") as HTMLFormElement;

    const formData : FormData = new FormData(myForm);

    //get url query params
    const username: FormDataEntryValue | null = formData.get('username')
    const email: FormDataEntryValue | null = formData.get('email')
    const password: FormDataEntryValue | null = formData.get('password')
    const submitted: FormDataEntryValue | null = formData.get('submitted')

    // eslint-disable-next-line no-console
    console.log(formData.get('username'))      

    fetch('http://localhost:3333/api/registeruser', {
      method: 'POST',
      headers: {
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({username, email, password, submitted}),
    })
      .then((response) => {
        if (!response.ok) {
          // error processing
          throw new Error(`registerForm : ${response.status}: ${response.statusText}`);
        }
        return response.json();
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

export default Registerform 