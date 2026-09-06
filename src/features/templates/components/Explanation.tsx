// UI Library
import { Typography, Steps } from "antd";
// style
import "./styles/explanation.scss";

const { Title } = Typography;

const Explanation = () => {
  const items = [
    {
      title: "Ticket Received",
      content: "A new support ticket enters Proton Flow through a webhook.",
      status: "process" as const,
    },
    {
      title: "Intent Analysis",
      content:
        "The AI analyzes the customer's request and determines whataction should happen next.",
      status: "process" as const,
    },
    {
      title: "Smart Routing",
      content:
        "Proton Flow answers from the knowledge base, requests more information, or escalates the ticket to a human agent.",
      status: "process" as const,
    },
  ];

  return (
    <div className="explanation">
      <Title level={5}>How it works ?</Title>
      <Steps
        className="step"
        orientation="vertical"
        current={items.length}
        items={items}
      />
    </div>
  );
};

export default Explanation;
