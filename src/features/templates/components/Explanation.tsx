// UI Library
import { Typography, Steps } from "antd";
// type
import type { ITemplateExplanation } from "../types/templatePreview";
// style
import "./styles/explanation.scss";

const { Title } = Typography;

interface ExplanationProps {
  step: ITemplateExplanation[];
}

const Explanation = ({ step }: ExplanationProps) => {
  return (
    <div className="explanation">
      <Title level={5}>How it works ?</Title>
      <Steps
        className="step"
        orientation="vertical"
        current={step.length}
        items={step}
      />
    </div>
  );
};

export default Explanation;
