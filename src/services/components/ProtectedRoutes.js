import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  let auth = localStorage.getItem("jwt_token");
  // console.log(auth);
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
