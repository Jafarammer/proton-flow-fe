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
// hooks
import useSettingsAppearance from "../hooks/useSettingsAppearance";
// styles
import "./styles/setting_page.scss";

const SettingPage = () => {
  // hooks
  const settingsAppearance = useSettingsAppearance();
  // config tabs
  const items: TabsProps["items"] = [
    {
      key: "appearance",
      label: "Appearance",
      children: (
        <AppearanceSettings
          appearance={settingsAppearance.appearance}
          onChangePrimaryColor={settingsAppearance.onChangePrimaryColor}
          onChangeSecondaryColor={settingsAppearance.onChangeSecondaryColor}
          onChangeBorderRadius={settingsAppearance.onChangeBorderRadius}
          onChangeTheme={settingsAppearance.onChangeTheme}
          onReset={settingsAppearance.onResetAppearance}
          onSave={settingsAppearance.onSaveAppearance}
        />
      ),
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
