import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useToken } from "../pages/auth/useToken";
import EmailSuccess from "../components/EmailSuccess";
import EmailFail from "../components/EmailFail";

const EmailLandingPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const { verificationString } = useParams();
  const [, setToken] = useToken();

  useEffect(() => {
    const loadVerification = async () => {
      try {
        const response = await axios.put("/api/verify-email", {
          verificationString,
        });

        console.log(response);
        const { token }: any = response.data;
        setToken(token);
        setIsSuccess(true);
        setIsLoading(false);
      } catch (e) {
        setIsSuccess(false);
        setIsLoading(false);
      }
    };

    loadVerification();
  }, [setToken, verificationString]);

  if (isLoading) return <p>Loading...</p>;
  if (!isSuccess) return <EmailFail />;
  return <EmailSuccess />;
};

export default EmailLandingPage;
