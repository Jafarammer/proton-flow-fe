// UI Library
import { Avatar, Typography } from "antd";
// icon
import { MdElectricBolt } from "react-icons/md";
// components
import RegisterForm from "../components/RegisterForm";
// hooks
import useRegister from "../hooks/useRegister";
// styles
import "./styles/register.scss";

const { Title, Text } = Typography;

const Register = () => {
  // hooks
  const register = useRegister();

  return (
    <div className="register-pages">
      <div className="register-content">
        <Avatar icon={<MdElectricBolt />} className="logo" />
        <Title className="title-logo" level={3}>
          Proton Flow
        </Title>
        <Title className="title" level={5}>
          Create your account
        </Title>
        <Text className="desc-logo" type="secondary">
          Join the enterprise AI revolution.
        </Text>
        <RegisterForm formik={register.formik} />
      </div>
    </div>
  );
};

export default Register;
