// UI Library
import { Button } from "antd";
// types
import type { IAppearanceSettings, ThemeMode } from "../../types/appearance";
// selector
import ThemeSelector from "./ThemeSelector";
import ColorSelector from "./ColorSelector";
import RadiusSelector from "./RadiusSelector";
import AppearancePreview from "./AppearancePreview";
// styles
import "../styles/appearance.scss";

interface AppearanceSettingsProps {
  appearance: IAppearanceSettings;
  onChangeTheme: (value: ThemeMode) => void;
  onChangePrimaryColor: (value: string) => void;
  onChangeSecondaryColor: (value: string) => void;
  onChangeBorderRadius: (value: number) => void;
  onReset: () => void;
  onSave: () => void;
}

const AppearanceSettings = ({
  appearance,
  onChangeTheme,
  onChangeBorderRadius,
  onChangePrimaryColor,
  onChangeSecondaryColor,
  onReset,
  onSave,
}: AppearanceSettingsProps) => {
  return (
    <div className="appearance-settings">
      <div className="appearance-grid">
        <div className="appearance-settings-content">
          {/* theme selector */}
          <ThemeSelector value={appearance.theme} onChange={onChangeTheme} />
          <div className="section-content">
            {/* color selector */}
            <ColorSelector
              primaryColor={appearance.primaryColor}
              secondaryColor={appearance.secondaryColor}
              onChangePrimary={onChangePrimaryColor}
              onChangeSecondary={onChangeSecondaryColor}
            />
            {/* radius selector */}
            <RadiusSelector
              value={appearance.borderRadius}
              onChange={onChangeBorderRadius}
            />
          </div>
          {/* actions */}
          <div className="appearance-actions">
            <Button
              color="primary"
              variant="filled"
              onClick={onReset}
              className="btn"
            >
              Reset
            </Button>

            <Button
              color="primary"
              variant="solid"
              onClick={onSave}
              className="btn"
            >
              Save Changes
            </Button>
          </div>
        </div>
        <AppearancePreview appearance={appearance} />
      </div>
    </div>
  );
};

export default AppearanceSettings;
