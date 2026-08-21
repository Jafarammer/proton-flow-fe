import { theme } from "antd";
import comingSoonSvg from "../../assets/images/coming_soon.svg?raw";

interface ComingSoonProps {
  className?: string;
}

const ComingSoon = ({ className }: ComingSoonProps) => {
  const { token } = theme.useToken();

  const themedSvg = comingSoonSvg.replaceAll("#6c63ff", token.colorPrimary);
  return (
    <div
      className={`coming-soon ${className}`}
      dangerouslySetInnerHTML={{
        __html: themedSvg,
      }}
    />
  );
};

export default ComingSoon;
