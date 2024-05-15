import { useNavigate } from "react-router-dom";

const EmailVerificationSuccess = () => {
  const navigate = useNavigate();

  return (
    <main className="tm-main">
      <div className="row tm-row">
        <h1>Success!</h1>
        <p>
          Thanks for verifying your email, now you can use all the app's
          features.
        </p>
        <button onClick={() => navigate("/")}>Go to home page</button>
      </div>
    </main>
  );
};

export default EmailVerificationSuccess;
