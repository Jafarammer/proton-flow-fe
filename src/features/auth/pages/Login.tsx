// UI Library
import { Avatar, Typography } from "antd";
// icon
import { MdElectricBolt } from "react-icons/md";
// components
import LoginForm from "../components/LoginForm";
// hooks
import useLogin from "../hooks/useLogin";
// styles
import "./styles/login.scss";

const { Title, Text } = Typography;

const Login = () => {
  // hooks
  const login = useLogin();
  return (
    <div className="login-pages">
      <div className="login-content">
        <Avatar icon={<MdElectricBolt />} className="logo" />
        <Title className="title-logo" level={3}>
          Proton Flow
        </Title>
        <Text className="desc-logo" type="secondary">
          Welcome back. Sign in to your account.
        </Text>
        <LoginForm formik={login.formik} />
      </div>
    </div>
  );
};

export default Login;
