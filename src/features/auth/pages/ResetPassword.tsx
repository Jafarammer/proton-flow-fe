// UI Library
import { Avatar, Typography } from "antd";
// icon
import { MdElectricBolt } from "react-icons/md";
// hooks
import useResetPassword from "../hooks/useResetPassword";
// components
import ResetPasswordForm from "../components/ResetPasswordForm";
// styles
import "./styles/reset_password.scss";

const { Title, Text } = Typography;

const ResetPassword = () => {
  // hooks
  const resetPassword = useResetPassword();
  return (
    <div className="reset-password-pages">
      <div className="reset-password-content">
        <Avatar icon={<MdElectricBolt />} className="logo" />
        <Title className="title-logo" level={3}>
          Proton Flow
        </Title>
        <Title className="title" level={5}>
          Set New Password
        </Title>
        <Text className="desc-logo" type="secondary">
          Your new password must be different from previous used passwords.
        </Text>
        <ResetPasswordForm formik={resetPassword.formik} />
      </div>
    </div>
  );
};

export default ResetPassword;
