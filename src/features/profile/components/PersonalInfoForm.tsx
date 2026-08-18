// UI Library
import { Avatar, Button, Card, Form, Input, Typography, Upload } from "antd";
// type
import type { FormikProps } from "formik";
import type { IProfileForm } from "../types/components";
// icon
import { LuCamera, LuUserRound } from "react-icons/lu";
// styles scss
import "./styles/personal_Info_form.scss";

const { Title, Paragraph } = Typography;

interface PersonalInfoFormProps {
  formik: FormikProps<IProfileForm>;
  showUpdate: boolean;
  onOpenShowUpdate: () => void;
  onCloseShowUpdate: () => void;
}

const PersonalInfoForm = ({
  formik,
  showUpdate,
  onOpenShowUpdate,
  onCloseShowUpdate,
}: PersonalInfoFormProps) => {
  return (
    <Card className="personal-info-form personal-info-card">
      <div className="profile-section-title">
        <div className="profile-icon">
          <LuUserRound />
        </div>
        <div className="layout-label">
          <Title level={4} className="label-title">
            Personal Information
          </Title>

          <Paragraph type="secondary" className="label-description">
            Manage your personal account information.
          </Paragraph>
        </div>
      </div>

      <div className="profile-avatar-wrapper">
        <div className="profile-avatar">
          <Avatar className="avatar">W</Avatar>
          {showUpdate && (
            <Upload showUploadList={false} beforeUpload={() => false}>
              <Button
                shape="circle"
                className="avatar-edit-button"
                icon={<LuCamera size={20} />}
              />
            </Upload>
          )}
        </div>

        <div className="profile-avatar-info">
          <Title level={4} className="info-title">
            {formik.values.name}
          </Title>
          <Paragraph type="secondary" className="info-description">
            {formik.values.email}
          </Paragraph>
        </div>
      </div>

      <Form layout="vertical" className="form">
        <Form.Item
          label={<span className="form-label">Full Name</span>}
          required={false}
          validateStatus={
            formik.touched.name && formik.errors.name ? "error" : ""
          }
          help={formik.touched.name ? formik.errors.name : undefined}
        >
          <Input
            name="name"
            className="input"
            placeholder="Enter your full name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            readOnly={!showUpdate}
          />
        </Form.Item>

        <Form.Item
          label={<span className="form-label">Email Address</span>}
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
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            readOnly={!showUpdate}
          />
        </Form.Item>

        <div className="profile-form-action">
          {!showUpdate && (
            <Button
              color="primary"
              variant="solid"
              onClick={onOpenShowUpdate}
              className="btn"
            >
              Update Personal Information
            </Button>
          )}

          {showUpdate && (
            <div className="show-update-action">
              <Button
                color="primary"
                variant="filled"
                onClick={onCloseShowUpdate}
                className="btn"
              >
                Cancel
              </Button>

              <Button
                color="primary"
                variant="solid"
                loading={formik.isSubmitting}
                onClick={() => formik.submitForm()}
                className="btn"
              >
                Save Changes
              </Button>
            </div>
          )}
        </div>
      </Form>
    </Card>
  );
};

export default PersonalInfoForm;
