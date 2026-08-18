// UI Library
import { Button, Card, Form, Input, Typography } from "antd";
// icon
import { LuKeyRound, LuShieldCheck } from "react-icons/lu";
// types
import type { FormikProps } from "formik";
import type { IChangePasswordForm } from "../types/components";
// global components
import { AppModal } from "../../../components/common";
// styles scss
import "./styles/security_card.scss";

const { Title, Paragraph } = Typography;

interface SecurityCardProps {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  formik: FormikProps<IChangePasswordForm>;
}

const SecurityCard = ({ open, onClose, onOpen, formik }: SecurityCardProps) => {
  return (
    <Card className="security-card">
      <div className="security-section-title">
        <div className="security-icon">
          <LuShieldCheck />
        </div>
        <div className="layout-label">
          <Title level={4} className="label-title">
            Security
          </Title>
          <Paragraph type="secondary" className="label-description">
            Manage your account password and security.
          </Paragraph>
        </div>
      </div>

      <div className="security-item">
        <div className="security-info">
          <Title level={5} className="info-title">
            Password
          </Title>
          <Paragraph type="secondary" className="info-description">
            Update your password regularly to keep your account secure.
          </Paragraph>
        </div>
        <Button
          icon={<LuKeyRound size={20} />}
          onClick={onOpen}
          color="primary"
          variant="solid"
          className="btn"
        >
          Change Password
        </Button>
      </div>

      {/* modal */}
      <AppModal
        title="Change Password"
        open={open}
        onCancel={onClose}
        className="security-modal"
      >
        <Form layout="vertical" className="form">
          <Form.Item
            label={<span className="form-label">Current Password</span>}
            required={false}
            validateStatus={
              formik.touched.currentPassword && formik.errors.currentPassword
                ? "error"
                : ""
            }
            help={
              formik.touched.currentPassword
                ? formik.errors.currentPassword
                : undefined
            }
          >
            <Input.Password
              className="input"
              name="currentPassword"
              value={formik.values.currentPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Item>

          <Form.Item
            label={<span className="form-label">New Password</span>}
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
              className="input"
              value={formik.values.newPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Item>

          <Form.Item
            label={<span className="form-label">Confirm Password</span>}
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
              className="input"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Item>

          <div className="password-modal-actions">
            <Button onClick={onClose} color="primary" variant="filled">
              Cancel
            </Button>
            <Button
              color="primary"
              variant="solid"
              loading={formik.isSubmitting}
              onClick={() => formik.submitForm()}
            >
              Update Password
            </Button>
          </div>
        </Form>
      </AppModal>
    </Card>
  );
};

export default SecurityCard;
