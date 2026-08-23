import { Link } from "react-router-dom";
// UI Library
import { Card, Input, Button, Form, Typography } from "antd";
// types
import type { FormikProps } from "formik";
import type { ILoginForm } from "../types/login";

// styles
import "./styles/login_form.scss";

const { Text } = Typography;

interface LoginFormProps {
  formik: FormikProps<ILoginForm>;
}

const LoginForm = ({ formik }: LoginFormProps) => {
  return (
    <Card className="login-form">
      <Form layout="vertical" className="form">
        <Form.Item
          label={<span className="label">Email</span>}
          required={false}
          validateStatus={
            formik.touched.email && formik.errors.email ? "error" : ""
          }
          help={formik.touched.email ? formik.errors.email : undefined}
        >
          <Input
            name="email"
            type={"email"}
            className="input"
            placeholder="name@company.com"
            autoComplete="off"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>

        <Form.Item
          label={<span className="label">Password</span>}
          required={false}
          validateStatus={
            formik.touched.password && formik.errors.password ? "error" : ""
          }
          help={formik.touched.password ? formik.errors.password : undefined}
        >
          <Input.Password
            name="password"
            className="input"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>

        <Button
          color="primary"
          variant="solid"
          block
          className="btn"
          loading={formik.isSubmitting}
          onClick={() => formik.submitForm()}
        >
          Sign In
        </Button>
      </Form>
      <div className="content-link">
        <Text type="secondary" className="text">
          Don't have an account?
        </Text>{" "}
        <Link to="/register" className="link">
          Sign up
        </Link>
      </div>
    </Card>
  );
};

export default LoginForm;
