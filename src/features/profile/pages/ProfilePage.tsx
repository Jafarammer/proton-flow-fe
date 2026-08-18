// UI Library
import { Row, Col } from "antd";
// layout
import PageLayout from "../../../layouts/appLayout/PageLayout";
// components
import PersonalInfoForm from "../components/PersonalInfoForm";
import SecurityCard from "../components/SecurityCard";
// hooks
import useProfile from "../hooks/useProfile";
// styles
import "./styles/profile_page.scss";

const ProfilePage = () => {
  // hooks
  const profile = useProfile();
  return (
    <PageLayout
      title="Profile"
      desc="Manage your personal information and account security."
      className="profile-page"
    >
      <Row gutter={[24, 24]} className="row">
        <Col xs={24} lg={14} xl={16}>
          <PersonalInfoForm
            formik={profile.profileFormik}
            showUpdate={profile.showUpdate}
            onOpenShowUpdate={profile.onOpenShowUpdate}
            onCloseShowUpdate={profile.onCloseShowUpdate}
          />
        </Col>

        <Col xs={24} lg={10} xl={8}>
          <SecurityCard
            open={profile.openPasswordModal}
            onOpen={profile.onOpenPasswordModal}
            onClose={profile.onClosePasswordModal}
            formik={profile.passwordFormik}
          />
        </Col>
      </Row>
    </PageLayout>
  );
};

export default ProfilePage;
