import { Typography, theme } from "antd";
import emptyDataSvg from "../../assets/images/empty.svg?raw";

const { Text } = Typography;

interface EmptyDataProps {
  className?: string;
  title?: string;
  description?: string;
}

const EmptyData = ({
  className = "",
  title = "No data available",
  description = "There is no data to display yet.",
}: EmptyDataProps) => {
  const { token } = theme.useToken();

  const themedSvg = emptyDataSvg
    .replace(/#6c63ff/gi, token.colorPrimary)
    .replace(/#f2f2f2/gi, token.colorBgLayout)
    .replace(/#e6e6e6/gi, token.colorBgLayout);

  return (
    <div className={`empty-data ${className}`}>
      <div
        className="empty-data-image"
        dangerouslySetInnerHTML={{
          __html: themedSvg,
        }}
      />

      <div className="empty-data-content">
        <Text className="empty-data-title">{title}</Text>

        {description && (
          <Text type="secondary" className="empty-data-description">
            {description}
          </Text>
        )}
      </div>
    </div>
  );
};

export default EmptyData;
