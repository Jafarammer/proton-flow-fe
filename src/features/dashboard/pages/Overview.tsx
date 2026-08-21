// UI Library
import {Typography} from 'antd'
// global component
import {ComingSoon} from '../../../components/common'
// layout
import PageLayout from "../../../layouts/appLayout/PageLayout";
// styles
import './styles/overview.scss'

const {Title,Text} = Typography

const Overview = () => {
  return (
    <PageLayout title="Overview" desc="Monitor your AI workflows and system performance." className="overview-page">
      <div className="overview-content">
        <ComingSoon/>
    <Title level={3}>
        Coming Soon
      </Title>

      <Text type="secondary">
        This feature is currently under development.
      </Text>
      </div>
    </PageLayout>
  );
};

export default Overview;
