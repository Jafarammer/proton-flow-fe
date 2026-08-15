// UI Library
import { Col, Row } from "antd";
// layout
import PageLayout from "../../../layouts/appLayout/PageLayout";
// components
import TemplateCard from "../components/TemplateCard";
// hooks
import useTemplates from "../hooks/useTemplates";
// constants
import { templatesCardData } from "../contstants";
// style scss
import "./styles/template_list_page.scss";

const TemplateListPage = () => {
  // hooks
  const templates = useTemplates();
  return (
    <PageLayout
      title="Template Library"
      desc="Jumpstart your AI workflows with pre-configured templates designed for high-performance automation."
      className="template-list-page"
    >
      <Row gutter={[24, 24]} wrap>
        {templatesCardData.map((item) => (
          <Col key={item.id} xs={24} sm={12} lg={8} xxl={6}>
            <TemplateCard
              data={item}
              onPreview={(item) => templates.onPreview(item.id)}
              onUseTemplate={(item) => templates.onUseTemplate(item.id)}
            />
          </Col>
        ))}
      </Row>
    </PageLayout>
  );
};

export default TemplateListPage;
