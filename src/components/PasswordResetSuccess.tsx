import { useNavigate } from "react-router-dom";

export const PasswordResetSuccess = () => {
  const navigate = useNavigate();

  return (
    <main className="tm-main">
      <div className="row tm-row">
        <h1>Success!</h1>
        <p>
          Your password has been reset, now please login with your new password.
        </p>
        <button onClick={() => navigate("/login")}>Log in</button>
      </div>
    </main>
  );
};
