// UI Library
import { Card, Typography } from "antd";
// types
import type { FormikProps } from "formik";
import type { ICreateWorkflowForm } from "../types/components";
// constants
import { startingPointList } from "../constants";
// styles scss
import "./styles/workflow_starting_point.scss";

const { Title, Text, Paragraph } = Typography;

interface WorkflowStartingPointProps {
  formik: FormikProps<ICreateWorkflowForm>;
}

const WorkflowStartingPoint = ({ formik }: WorkflowStartingPointProps) => {
  return (
    <div className="workflow-starting-point">
      <div className="starting-point-header">
        <Title level={4} className="title">
          Starting Point
        </Title>
        <Text type="secondary" className="description">
          Choose how you want to start building this workflow.
        </Text>
      </div>

      <div className="starting-point-options">
        {startingPointList.map((item) => {
          const Icon = item.icon;
          const isSelected = formik.values.startingPoint === item.value;

          return (
            <Card
              key={item.id}
              className={`starting-point-card ${isSelected ? "selected" : ""}`}
              onClick={() => {
                formik.setFieldValue("startingPoint", item.value);
                formik.setFieldTouched("startingPoint", true);
              }}
            >
              <div className="starting-point-content">
                <div className="starting-point-icon">
                  <Icon size={20} />
                </div>
                <Title level={5} className="title-content">
                  {item.title}
                </Title>
                <Paragraph
                  type="secondary"
                  className="description-content"
                  ellipsis={{ rows: 4, tooltip: true }}
                >
                  {item.description}
                </Paragraph>
              </div>
            </Card>
          );
        })}
      </div>
      {formik.touched.startingPoint && formik.errors.startingPoint && (
        <div className="starting-point-error">
          {formik.errors.startingPoint}
        </div>
      )}
    </div>
  );
};

export default WorkflowStartingPoint;
