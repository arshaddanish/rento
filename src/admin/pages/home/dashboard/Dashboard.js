import React from "react";
import "./dashboard.scss";
import { Paper } from "@mui/material";

export default function Dashboard() {
  return <div className="dashboard">
    <Paper className="admin-dash-tile" elevation={3}>
      <div className="admin-dash-tile-left">Active Buyers:</div><div className="admin-dash-tile-right">20</div>
    </Paper>
    <Paper className="admin-dash-tile" elevation={3}>
      
    <div className="admin-dash-tile-left">Active Sellers:</div><div className="admin-dash-tile-right">20</div>
    </Paper>
    <Paper className="admin-dash-tile" elevation={3}>
      
    <div className="admin-dash-tile-left">Active Buyers:</div><div className="admin-dash-tile-right">20</div>
    </Paper>
    <Paper className="admin-dash-tile" elevation={3}>
      
    <div className="admin-dash-tile-left">Active Buyers:</div><div className="admin-dash-tile-right">20</div>
    </Paper>
  </div>;
}
