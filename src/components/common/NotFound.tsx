import { theme } from "antd";
import notFoundSvg from "../../assets/images/404-Error.svg?raw";

interface NotFoundProps {
  className?: string;
}

const NotFound = ({ className }: NotFoundProps) => {
  const { token } = theme.useToken();

  const themedSvg = notFoundSvg
    // primary accent
    .replace(/#407BFF/gi, token.colorPrimary)
    .replace(/#ebebeb/gi, token.colorBgBase);

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
