import React from "react";
import "./footer.scss";
import { useLocation } from "react-router-dom";
// import TextField from "@mui/material/TextField";

export default function AdminFooter() {

  let { pathname } = useLocation();
  if (pathname === "/admin/login" || pathname === "/admin/forgot" || pathname === "/resetpass" || !pathname.match("/admin")) {
    return null;
  }

  return (
    <div className="admin-footer">
      <div className="admin-copyright">
        <p>&copy; Rento 2022</p>
      </div>
    </div>
  );
}
