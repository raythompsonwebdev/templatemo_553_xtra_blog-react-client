import { useNavigate } from "react-router-dom";

export const PasswordResetFail = () => {
  const navigate = useNavigate();

  return (
    <main className="tm-main">
      <div className="row tm-row">
        <h1>Uh oh...</h1>
        <p>Something went wrong while trying to reset your password.</p>
        <button onClick={() => navigate("/login")}>Back to Log in</button>
      </div>
    </main>
  );
};
