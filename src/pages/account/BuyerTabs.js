import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useLocation, useNavigate } from "react-router-dom";
import { httpHeaders } from "../../services/httpHeaders";
import apis from "../../apis";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function BuyerTabs({ verStatus, onModeChange }) {
  let navigate = useNavigate();
  let { pathname } = useLocation();
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (pathname.slice(0, pathname.lastIndexOf("/")) === "/account/edit-item")
      setValue(1);
    else setValue(tabData[pathname]);
  }, [pathname]);

  const tabData = {
    "/account": 0,
    "/account/buyer-requests": 1,
    "/account/buyer-bookings": 2,
    "/account/subscriptions": 3,
  };

  let changeMode = async () => {
    await apis.get("users/switch-mode", httpHeaders("user"));
    onModeChange();
    navigate("/account");
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        background: "#fff",
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab
          label="Profile"
          {...a11yProps(0)}
          onClick={() => navigate("/account")}
        />

        <Tab
          label="Requests"
          {...a11yProps(1)}
          onClick={() => navigate("/account/buyer-requests")}
        />
        <Tab
          label="Bookings"
          {...a11yProps(2)}
          onClick={() => navigate("/account/buyer-bookings")}
        />
        <Tab
          label="Subscriptions"
          {...a11yProps(3)}
          onClick={() => navigate("/account/subscriptions")}
        />
        {/* <Tab
          label="Messages"
          {...a11yProps(8)}
          onClick={() => navigate("/account/messages")}
        /> */}
        {verStatus === "Verified" && (
          <Tab label="Seller Mode" {...a11yProps(4)} onClick={changeMode} />
        )}
        <Tab
          label="Logout"
          {...a11yProps(5)}
          onClick={() => {
            localStorage.removeItem("jwt_token");
            navigate("/login");
          }}
        />
      </Tabs>
    </Box>
  );
}
