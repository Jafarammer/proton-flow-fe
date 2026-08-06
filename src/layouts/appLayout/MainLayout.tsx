import { useState } from "react";
import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";

const { Content } = Layout;

const MainLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  // useState
  const [collapse, setCollapse] = useState<boolean>(false);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <AppSidebar collapse={collapse} />
      <Layout>
        <AppHeader setCollapse={setCollapse} collapse={collapse} />
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: "80vh",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
