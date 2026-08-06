import { useState } from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";

const { Content } = Layout;

const MainLayout = () => {
  // useState
  const [collapse, setCollapse] = useState<boolean>(false);
  return (
    <Layout className="app-layout">
      <AppSidebar collapse={collapse} />
      <Layout>
        <AppHeader setCollapse={setCollapse} collapse={collapse} />
        <Content className="content">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
