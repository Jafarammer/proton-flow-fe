import { theme } from "antd";
import notFoundSvg from "../../assets/images/not_found.svg?raw";

interface NotFoundProps {
  className?: string;
}

const NotFound = ({ className }: NotFoundProps) => {
  const { token } = theme.useToken();

  const themedSvg = notFoundSvg
    // primary accent
    .replace(/#6c63ff/gi, token.colorPrimary)

    // dark illustration
    .replace(/#3f3d56/gi, token.colorText)

    // border / line illustration
    .replace(/#cacaca/gi, token.colorBorder)
    .replace(/#ccc/gi, token.colorBorder);

  return (
    <div
      className={`not-found ${className}`}
      dangerouslySetInnerHTML={{
        __html: themedSvg,
      }}
    />
  );
};

export default NotFound;
