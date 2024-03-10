import { SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";

const Loginform = () => {
  const [username, setUserName] = useState("");
  const [password, setUserPassword] = useState("");

  const handleUserName = (e: {
    preventDefault: () => void;
    target: { value: SetStateAction<string> };
  }) => {
    setUserName(e.target.value);
  };

  const handleuserPassword = (e: {
    preventDefault: () => void;
    target: { value: SetStateAction<string> };
  }) => {
    setUserPassword(e.target.value);
  };

  const navigate = useNavigate();

  const submitLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const result = await response.json();
      // eslint-disable-next-line no-console
      console.log("Success:", result);
      navigate("/profile");
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Error:", error);
    }
  };

  return (
    <form id="login" onSubmit={submitLogin}>
      <div className="form-group">
        <label htmlFor="username" style={{ width: "100%" }}>
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

export default Loginform;
