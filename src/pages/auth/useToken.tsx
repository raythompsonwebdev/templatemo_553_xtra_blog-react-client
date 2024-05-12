import { SetStateAction, useState } from "react";

export const useToken = () => {
  const [token, setTokenInternal] = useState(() => {
    return localStorage.getItem("token");
  });

  const setToken = (newToken: SetStateAction<any | null>) => {
    localStorage.setItem("token", newToken);
    setTokenInternal(newToken);
  };

  return [token, setToken];
};
