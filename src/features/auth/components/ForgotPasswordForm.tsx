import { useNavigate } from "react-router-dom";
// UI Library
import { Form, Card, Input, Button } from "antd";
// types
import type { FormikProps } from "formik";
import type { IForgotPasswordForm } from "../types/forgotPassword";
// styles
import "./styles/forgot_password_form.scss";

interface ForgotPasswordFormProps {
  formik: FormikProps<IForgotPasswordForm>;
}

const ForgotPasswordForm = ({ formik }: ForgotPasswordFormProps) => {
  // router
  const navigate = useNavigate();
  return (
    <Card className="forgot-password-form">
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
            className="input"
            autoComplete="off"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>

        <div className="forgot-password-actions">
          <Button
            color="primary"
            variant="filled"
            onClick={() => navigate("/login")}
            className="btn"
          >
            Back To Login
          </Button>
          <Button
            color="primary"
            variant="solid"
            className="btn"
            loading={formik.isSubmitting}
            onClick={() => formik.submitForm()}
          >
            Send Reset Link
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default ForgotPasswordForm;
