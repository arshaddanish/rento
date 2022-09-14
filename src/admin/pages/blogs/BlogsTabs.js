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

export default function BlogsTabs() {
  let navigate = useNavigate();
  let { pathname } = useLocation();
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    setValue(tabData[pathname]);
  }, [pathname]);

  const tabData = {
    "/admin/blogs": 0,
    "/admin/blogs/add-blog": 1,
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
          label="All Blogs"
          {...a11yProps(0)}
          onClick={() => navigate("/admin/blogs")}
        />
        <Tab
          label="Add Blog"
          {...a11yProps(1)}
          onClick={() => navigate("/admin/blogs/add-blog")}
        />
        <Tab label="Edit Categories" {...a11yProps(2)} />
      </Tabs>
    </Box>
  );
}
