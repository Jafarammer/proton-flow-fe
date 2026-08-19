import { Layout, Menu, Avatar, Typography, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { MdOutlineDashboard, MdElectricBolt } from "react-icons/md";
import { GoWorkflow, GoProjectTemplate } from "react-icons/go";
import { IoExtensionPuzzleOutline, IoSettingsOutline } from "react-icons/io5";
import { FaPlusCircle } from "react-icons/fa";
import "./styles/app_sidebar.scss";

const { Sider } = Layout;
const { Title, Text } = Typography;

interface SidebarProps {
  collapse: boolean;
}

const AppSidebar = ({ collapse }: SidebarProps) => {
  const navigate = useNavigate();

  return (
    <Sider
      width={240}
      trigger={null}
      collapsible
      collapsed={collapse}
      theme="light"
      className="sidebar"
    >
      <div className="sidebar-content">
        <Avatar icon={<MdElectricBolt size={20} />} className="logo" />
        <div className={`logo-label ${collapse ? "collapsed" : ""}`}>
          <Title className="title-logo" level={4}>
            Proton Flow
          </Title>

          <Text className="desc-logo" type="secondary">
            AI Workflow Builder
          </Text>
        </div>
      </div>
      <div className="btn-container">
        <Button
          type="primary"
          block
          icon={<FaPlusCircle size={16} />}
          onClick={() => navigate("/workflows/create")}
        >
          {!collapse && "New Workflow"}
        </Button>
      </div>

      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["/dashboard"]}
        onClick={({ key }) => navigate(key)}
        items={[
          {
            key: "/dashboard",
            icon: <MdOutlineDashboard size={24} />,
            label: "Dashboard",
          },
          {
            key: "/workflows",
            icon: <GoWorkflow size={24} />,
            label: "Workflows",
          },
          {
            key: "/templates",
            icon: <GoProjectTemplate size={24} />,
            label: "Templates",
          },
          {
            key: "/integrations",
            icon: <IoExtensionPuzzleOutline size={24} />,
            label: "Integration",
          },
          {
            key: "/settings",
            icon: <IoSettingsOutline size={24} />,
            label: "Settings",
          },
        ]}
      />
    </Sider>
  );
};

export default AppSidebar;
