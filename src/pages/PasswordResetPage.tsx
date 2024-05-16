import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { PasswordResetSuccess } from "../components/PasswordResetSuccess";
import { PasswordResetFail } from "../components/PasswordResetFail";

const PasswordResetPage = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const { passwordResetCode } = useParams();

  const onResetClicked = async () => {
    try {
      await axios.put(`/api/users/${passwordResetCode}/reset-password`, {
        newPassword: passwordValue,
      });
      setIsSuccess(true);
    } catch (e) {
      setIsFailure(true);
    }
  };

  if (isFailure) return <PasswordResetFail />;
  if (isSuccess) return <PasswordResetSuccess />;

  return (
    <main className="tm-main">
      <h1>Reset Password</h1>
      <p>Please enter a new password</p>
      <div className="row tm-row">
        <form className="mb-5 ml-auto mr-0" id="form" onSubmit={onResetClicked}>
          <div className="form-group">
            <label htmlFor="password" style={{ width: "100%" }}>
              Password
            </label>
            <input
              id="password"
              type="password"
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmpassword" style={{ width: "100%" }}>
              Password
            </label>
            <input
              id="confirmpassword"
              type="password"
              value={confirmPasswordValue}
              onChange={(e) => setConfirmPasswordValue(e.target.value)}
              placeholder="Confirm Password"
            />
          </div>
          <div className="form-group">
            <button
              disabled={
                !passwordValue ||
                !confirmPasswordValue ||
                passwordValue !== confirmPasswordValue
              }
              type="submit"
              className="w-100 btn btn-lg btn-primary"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default PasswordResetPage;
