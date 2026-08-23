// UI Library
import { Avatar, Dropdown } from "antd";
//types
import type { MenuProps } from "antd";
// router
import { useNavigate } from "react-router-dom";
// constants
import { headerListProfile } from "../constants";
// styles scss
import "./styles/header_profile.scss";

const HeaderProfile = () => {
  // router
  const navigate = useNavigate();
  // function
  const onMenuClick: MenuProps["onClick"] = ({ key }) => {
    if (key === "profile") {
      navigate("/profile");
    }
    if (key === "logout") {
      navigate("/login");
    }
  };

  return (
    <Dropdown
      menu={{
        items: headerListProfile,
        onClick: onMenuClick,
      }}
      trigger={["click"]}
      placement="bottomRight"
    >
      <Avatar className="header-profile">W</Avatar>
    </Dropdown>
  );
};

export default HeaderProfile;
