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
    // if (
    //   pathname.slice(0, pathname.lastIndexOf("/")) === "/admin/blogs/edit-blog"
    // )
    //   setValue(0);
    setValue(tabData[pathname]);
  }, [pathname]);

  const tabData = {
    "/account": 0,
    "/account/bookings": 1,
    "/account/rented-items": 2,
    "/account/subscription": 3,
    "/account/logout": 4,
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
          label="Dashboard"
          {...a11yProps(0)}
          onClick={() => navigate("/account")}
        />
        <Tab
          label="Seller Verification"
          {...a11yProps(1)}
          onClick={() => navigate("/account/bookings")}
        />
        <Tab
          label="Verification History"
          {...a11yProps(2)}
          onClick={() => navigate("/account/verification-history")}
        />
        <Tab
          label="Users"
          {...a11yProps(3)}
          onClick={() => navigate("/account/users")}
        />
      </Tabs>
    </Box>
  );
}
