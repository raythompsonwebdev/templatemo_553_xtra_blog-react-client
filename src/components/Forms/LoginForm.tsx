import { SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToken } from "../../pages/auth/useToken";

const LoginForm = () => {
  const [email, setUserEmail] = useState("");
  const [password, setUserPassword] = useState("");
  const [errormessage, setErrorMessage] = useState("");

  const [token, setToken] = useToken();

  const navigate = useNavigate();

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

      setErrorMessage(result.message);
      setToken(result.token);
      navigate("/profile");
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  if (errormessage !== "") {
    console.log(errormessage);
  }

  if (token !== "") {
    console.log(token);
  }

  return (
    <form id="login" onSubmit={submitLogin}>
      <span>{errormessage ? errormessage : ""}</span>
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
