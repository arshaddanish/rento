import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useLocation, useNavigate } from "react-router-dom";

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

export default function AccountTabs() {
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
    "/account/store": 1,
    "/account/add-to-store": 2,
    "/account/buyer-requests": 3,
    "/account/seller-requests": 4,
    "/account/buyer-bookings": 5,
    "/account/seller-bookings": 6,
    "/account/subscriptions": 7,
    "/account/messages": 8,
    "/account/buyer-mode": 9,
    "/account/logout": 10,
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
          label="Store"
          {...a11yProps(1)}
          onClick={() => navigate("/account/store")}
        />
        <Tab
          label="Add To Store"
          {...a11yProps(2)}
          onClick={() => navigate("/account/add-to-store")}
        />
        <Tab
          label="Buyer Requests"
          {...a11yProps(3)}
          onClick={() => navigate("/account/buyer-requests")}
        />
        <Tab
          label="Seller Requests"
          {...a11yProps(4)}
          onClick={() => navigate("/account/seller-requests")}
        />
        <Tab
          label="Buyer Bookings"
          {...a11yProps(5)}
          onClick={() => navigate("/account/buyer-bookings")}
        />
        <Tab
          label="Seller Bookings"
          {...a11yProps(6)}
          onClick={() => navigate("/account/seller-bookings")}
        />
        <Tab
          label="Subscriptions"
          {...a11yProps(7)}
          onClick={() => navigate("/account/subscriptions")}
        />
        <Tab
          label="Messages"
          {...a11yProps(8)}
          onClick={() => navigate("/account/messages")}
        />
        <Tab
          label="Buyer Mode"
          {...a11yProps(9)}
          onClick={() => navigate("/account")}
        />
        <Tab
          label="Logout"
          {...a11yProps(10)}
          onClick={() => {
            localStorage.clear();
            navigate("/login");
          }}
        />
      </Tabs>
    </Box>
  );
}
