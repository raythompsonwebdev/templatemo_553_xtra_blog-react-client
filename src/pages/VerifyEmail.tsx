import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PleaseVerifyEmailPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, []);

  return (
    <main className="tm-main">
      <div className="row tm-row">
        <h1>Thanks for Signing Up!</h1>
        <p>
          A verification email has been sent to the email address you provided.
          Please verify your email to unlock full site features.
        </p>
      </div>
    </main>
  );
};

export default PleaseVerifyEmailPage;
