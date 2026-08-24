// UI Library
import { Avatar, Typography } from "antd";
// icon
import { MdElectricBolt } from "react-icons/md";
// components
import ForgotPasswordForm from "../components/ForgotPasswordForm";
// hooks
import useForgotPassword from "../hooks/useForgotPassword";
// styles
import "./styles/forgot_password.scss";

const { Text, Title } = Typography;

const ForgotPassword = () => {
  // hooks
  const forgotPassword = useForgotPassword();
  return (
    <div className="forgot-password-pages">
      <div className="forgot-password-content">
        <Avatar icon={<MdElectricBolt />} className="logo" />
        <Title className="title-logo" level={3}>
          Proton Flow
        </Title>
        <Title className="title" level={5}>
          Reset your password
        </Title>
        <Text className="desc-logo" type="secondary">
          Enter your email address and we'll send you a link to reset your
          password.
        </Text>
        <ForgotPasswordForm formik={forgotPassword.formik} />
      </div>
    </div>
  );
};

export default ForgotPassword;
