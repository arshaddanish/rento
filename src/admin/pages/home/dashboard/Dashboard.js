import React, { useEffect, useState } from "react";
import "./dashboard.scss";
import { Paper } from "@mui/material";
import { httpHeaders } from "../../../../services/httpHeaders";
import apis from "../../../../apis";

export default function Dashboard() {
  let [dash, setDash] = useState();
  useEffect(() => {
    fethDash();
  }, []);

  let fethDash = async () => {
    let { data } = await apis.get("dashboard", httpHeaders("admin"));
    setDash(data);
  };

  if (!dash) {
    return null;
  }

  return (
    <div className="dashboard">
      <Paper className="admin-dash-tile" elevation={3}>
        <div className="admin-dash-tile-left">Listed Items</div>
        <div className="admin-dash-tile-right">{dash.itemCount}</div>
      </Paper>
      <Paper className="admin-dash-tile" elevation={3}>
        <div className="admin-dash-tile-left">Subscription Revenue</div>
        <div className="admin-dash-tile-right">{dash.subscriptionRevenue}</div>
      </Paper>
      <Paper className="admin-dash-tile" elevation={3}>
        <div className="admin-dash-tile-left">Users</div>
        <div className="admin-dash-tile-right">{dash.userCount}</div>
      </Paper>
      <Paper className="admin-dash-tile" elevation={3}>
        <div className="admin-dash-tile-left">Sellers</div>
        <div className="admin-dash-tile-right">{dash.sellerCount}</div>
      </Paper>
      <Paper className="admin-dash-tile" elevation={3}>
        <div className="admin-dash-tile-left">Active Sellers</div>
        <div className="admin-dash-tile-right">{dash.activeSellerCount}</div>
      </Paper>
      <Paper className="admin-dash-tile" elevation={3}>
        <div className="admin-dash-tile-left">Buyers</div>
        <div className="admin-dash-tile-right">{dash.buyerCount}</div>
      </Paper>
    </div>
  );
}
