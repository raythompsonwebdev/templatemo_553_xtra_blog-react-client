import { Outlet, Navigate } from "react-router-dom";
import { useUser } from "./useUser";

//chatgtp
export const PrivateRoute = () => {
  const user = useUser();

  return !user ? <Navigate to="/login" /> : <Outlet />; // Redirect the user to the login page if not authenticated

  // // return <Route {...rest} element={element} />;

  // return <Route {...rest} element={element} />;
};
