import { useNavigate } from "react-router-dom";
// UI Library
import { Card, Form, Input, Button } from "antd";
// types
import type { FormikProps } from "formik";
import type { IResetPasswordForm } from "../types/resetPassword";
// styles
import "./styles/reset_password_form.scss";

interface ResetPasswordFormProps {
  formik: FormikProps<IResetPasswordForm>;
}

const ResetPasswordForm = ({ formik }: ResetPasswordFormProps) => {
  // router
  const navigate = useNavigate();
  return (
    <Card className="reset-password-form">
      <Form layout="vertical" className="form">
        <Form.Item
          label={<span className="label">New Password</span>}
          required={false}
          validateStatus={
            formik.touched.newPassword && formik.errors.newPassword
              ? "error"
              : ""
          }
          help={
            formik.touched.newPassword ? formik.errors.newPassword : undefined
          }
        >
          <Input.Password
            name="newPassword"
            autoComplete="off"
            className="input"
            value={formik.values.newPassword}
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
            name="confirmPassword"
            autoComplete="off"
            className="input"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>

        <div className="reset-password-actions">
          <Button
            color="primary"
            variant="filled"
            className="btn"
            onClick={() => navigate("/login")}
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
            Reset Password
          </Button>
        </div>
      </Form>
    </Card>
  );
};

export default ResetPasswordForm;
