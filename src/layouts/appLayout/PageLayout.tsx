import React from "react";
import { Typography } from "antd";

const { Title, Text } = Typography;

interface PageLayoutProps {
  title?: string;
  desc?: string;
  className?: string;
  children: React.ReactNode;
}

const PageLayout = ({
  title = "Unknown",
  desc = "Unknown",
  className,
  children,
}: PageLayoutProps) => {
  return (
    <div className={className}>
      <Title level={3}>{title}</Title>
      <Text type="secondary">{desc}</Text>
      {children}
    </div>
  );
};

export default PageLayout;
