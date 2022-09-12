import React, { useState } from "react";
import AddProduct from "./AddProduct";
import "./profile.scss";
import YourProducts from "./YourProducts";

const AccountBottom = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const yourProduct = () => {
    setTabIndex(0);
  };
  const addProduct = () => {
    setTabIndex(1);
  };

  let renderTab = () => {
    switch (tabIndex) {
      case 0:
        return <YourProducts />;
      case 1:
        return <AddProduct />;
      default:
        return <YourProducts />;
    }
  };

  return (
    <div className="profile-bottom">
      <div className="profile-bottom-sub">
        <div className="profile-bottom-left">
          <div
            onClick={yourProduct}
            className={
              tabIndex === 1
                ? "profile-your-products profile-left-sub profile-left-inactive"
                : "profile-your-products profile-left-sub profile-left-active"
            }
          >
            <p>
              <i className="fa-solid fa-chevron-right"></i> Registered Items
            </p>
          </div>
          <div
            onClick={addProduct}
            className={
              tabIndex === 1
                ? "profile-add-products profile-left-sub profile-left-active"
                : "profile-add-products profile-left-sub profile-left-inactive"
            }
          >
            <p>
              <i className="fa-solid fa-plus"></i> Register New Item
            </p>
          </div>
        </div>
        <div className="profile-bottom-right">{renderTab()}</div>
      </div>
    </div>
  );
};

export default AccountBottom;
