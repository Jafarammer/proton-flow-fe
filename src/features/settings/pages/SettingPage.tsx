// UI Library
import { Tabs } from "antd";
// types
import type { TabsProps } from "antd";
// layout
import PageLayout from "../../../layouts/appLayout/PageLayout";
// components
import AppearanceSettings from "../components/appearance/AppearanceSettings";
import BuilderSettings from "../components/builder/BuilderSettings";
import StatisticsSettings from "../components/statistics/StatisticsSettings";
// styles
import "./styles/setting_page.scss";

const SettingPage = () => {
  // config tabs
  const items: TabsProps["items"] = [
    {
      key: "appearance",
      label: "Appearance",
      children: <AppearanceSettings />,
    },
    {
      key: "builder",
      label: "Builder",
      children: <BuilderSettings />,
    },
    {
      key: "statistics",
      label: "Statistics",
      children: <StatisticsSettings />,
    },
  ];

  return (
    <PageLayout
      title="Settings"
      desc="Customize the appearance and preferences of Proton Flow."
      className="setting-page"
    >
      <Tabs
        defaultActiveKey="appearance"
        items={items}
        className="settings-tabs"
      />
    </PageLayout>
  );
};

export default SettingPage;
