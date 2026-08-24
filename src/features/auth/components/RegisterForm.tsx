import { Link } from "react-router-dom";
// UI Library
import { Card, Input, Button, Form, Typography } from "antd";
// types
import type { FormikProps } from "formik";
import type { IRegisterForm } from "../types/register";
// styles
import "./styles/register_form.scss";

const { Text } = Typography;

interface RegisterFormProps {
  formik: FormikProps<IRegisterForm>;
}

const RegisterForm = ({ formik }: RegisterFormProps) => {
  return (
    <Card className="register-form">
      <Form layout="vertical" className="form">
        <Form.Item
          label={<span className="label">Full Name</span>}
          required={false}
          validateStatus={
            formik.touched.fullName && formik.errors.fullName ? "error" : ""
          }
          help={formik.touched.fullName ? formik.errors.fullName : undefined}
        >
          <Input
            className="input"
            name="fullName"
            autoComplete="off"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>

        <Form.Item
          label={<span className="label">Email</span>}
          required={false}
          validateStatus={
            formik.touched.email && formik.errors.email ? "error" : ""
          }
          help={formik.touched.email ? formik.errors.email : undefined}
        >
          <Input
            className="input"
            name="email"
            type={"email"}
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
            className="input"
            name="password"
            autoComplete="off"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>

        <Form.Item
          label={<span className="label">Confirm Password</span>}
          required={false}
          validateStatus={
            formik.touched.confirmPassword && formik.errors.confirmPassword
              ? "error"
              : ""
          }
          help={
            formik.touched.confirmPassword
              ? formik.errors.confirmPassword
              : undefined
          }
        >
          <Input.Password
            className="input"
            name="confirmPassword"
            autoComplete="off"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>

        <Button
          color="primary"
          variant="solid"
          className="btn"
          block
          loading={formik.isSubmitting}
          onClick={() => formik.submitForm()}
        >
          Create Account
        </Button>
      </Form>

      <div className="content-link">
        <Text type="secondary" className="text">
          Already have an account?
        </Text>{" "}
        <Link to="/login" className="link">
          Sign in
        </Link>
      </div>
    </Card>
  );
};

export default RegisterForm;
