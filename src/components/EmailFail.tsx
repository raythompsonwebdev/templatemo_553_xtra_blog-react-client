import { useNavigate } from "react-router-dom";

const EmailVerificationFail = () => {
  const navigate = useNavigate();

  return (
    <main className="tm-main">
      <div className="row tm-row">
        <h1>Uh oh...</h1>
        <p>Something went wrong while trying to verify your email.</p>
        <button onClick={() => navigate("/signup")}>Back to Sign-up</button>
      </div>
    </main>
  );
};

export default EmailVerificationFail;
