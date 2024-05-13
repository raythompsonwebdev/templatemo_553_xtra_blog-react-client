import { useState } from "react";

export const useToken = (): [
  string | null,
  (newToken: string | null) => void,
] => {
  const [token, setTokenInternal] = useState(() => {
    return localStorage.getItem("token");
  });

  const setToken = (newToken: string | null) => {
    if (newToken) {
      localStorage.setItem("token", newToken);
    } else {
      localStorage.removeItem("token");
    }
    setTokenInternal(newToken);
  };

  return [token, setToken];
};
