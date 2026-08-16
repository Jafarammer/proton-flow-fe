// UI Library
import { Typography, Card } from "antd";
// constants
import { triggerList } from "../constants";
// types
import type { FormikProps } from "formik";
import type { ICreateWorkflowForm } from "../types/components";
// styles
import "./styles/workflow_trigger.scss";

const { Text, Title, Paragraph } = Typography;

interface WorkflowTriggerProps {
  formik: FormikProps<ICreateWorkflowForm>;
}

const WorkflowTrigger = ({ formik }: WorkflowTriggerProps) => {
  return (
    <div className="workflow-trigger">
      <div className="trigger-header">
        <Title level={4} className="title-header">
          Initial Trigger
        </Title>
        <Text type="secondary" className="description-header">
          How should this workflow start executing?
        </Text>
      </div>

      <div className="trigger-options">
        {triggerList.map((item) => {
          const Icon = item.icon;
          const isSelected = formik.values.trigger === item.value;

          return (
            <Card
              key={item.id}
              className={`trigger-card ${isSelected ? "selected" : ""}`}
              onClick={() => {
                formik.setFieldValue("trigger", item.value);
                formik.setFieldTouched("trigger", true);
              }}
            >
              <div className="trigger-option-layout">
                <div className="trigger-icon">
                  <Icon />
                </div>
                <div className="trigger-option-content">
                  <Title level={5}>{item.title}</Title>
                  <Paragraph
                    type="secondary"
                    ellipsis={{ rows: 3, tooltip: true }}
                    className="trigger-option-description"
                  >
                    {item.description}
                  </Paragraph>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      {formik.touched.trigger && formik.errors.trigger && (
        <div className="trigger-error">{formik.errors.trigger}</div>
      )}
    </div>
  );
};

export default WorkflowTrigger;
