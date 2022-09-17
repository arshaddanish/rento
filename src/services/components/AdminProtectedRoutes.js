import { Outlet, Navigate } from "react-router-dom";

const AdminProtectedRoutes = () => {
  let auth = localStorage.getItem("jwt_admin");
  console.log(auth);
  return auth ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default AdminProtectedRoutes;
