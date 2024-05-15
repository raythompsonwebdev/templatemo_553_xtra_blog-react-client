import { useState } from "react";

export const useToken = (): [any, (newToken: any) => void] => {
  const [token, setTokenInternal] = useState(() => {
    return localStorage.getItem("token");
  });

  const setToken = (newToken: any) => {
    if (newToken) {
      localStorage.setItem("token", newToken);
    } else {
      localStorage.removeItem("token");
    }
    setTokenInternal(newToken);
  };

  return [token, setToken];
};
