import { Navigate, Route } from "react-router-dom";

//chatgtp
export const PrivateRoute = ({ element, ...rest }: any) => {
  const user = null; // You should replace this with your actual user authentication logic

  if (!user) return <Navigate to="/login" />; // Redirect the user to the login page if not authenticated

  return <Route {...rest} element={element} />;
};
