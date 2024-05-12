import { SetStateAction, useState } from "react";
// import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setUserEmail] = useState("");
  const [password, setUserPassword] = useState("");
  const [message, setErrorMessage] = useState("");

  // const navigate = useNavigate();

  const handleUserEmail = (e: {
    preventDefault: () => void;
    target: { value: SetStateAction<string> };
  }) => {
    setUserEmail(e.target.value);
  };

  const handleuserPassword = (e: {
    preventDefault: () => void;
    target: { value: SetStateAction<string> };
  }) => {
    setUserPassword(e.target.value);
  };

  const submitLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();

      if (result.message !== "") {
        setErrorMessage(result.message);
      } else {
        //navigate("/profile");
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  return (
    <form id="login" onSubmit={submitLogin}>
      <span>{message ? message : ""}</span>
      <div className="form-group">
        <label htmlFor="username" style={{ width: "100%" }}>
          Email:&#32;
          <input
            className="form-control"
            type="email"
            name="email"
            id="text"
            value={email}
            onChange={handleUserEmail}
            required
          />
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="password" style={{ width: "100%" }}>
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
};

export default LoginForm;
