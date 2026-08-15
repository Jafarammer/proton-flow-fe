// UI Library
import { Form, Radio, Typography } from "antd";
// icon
import { MdOutlineWebhook, MdSchedule } from "react-icons/md";
import { PiHandTapBold } from "react-icons/pi";
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
      <Form layout="vertical">
        <Form.Item
          label={
            <div className="form-label-container">
              <Text className="label-title">Initial Trigger</Text>
              <Paragraph type="secondary" className="label-description">
                How should this workflow start executing?
              </Paragraph>
            </div>
          }
          required={false}
          validateStatus={
            formik.touched.trigger && formik.errors.trigger ? "error" : ""
          }
          help={formik.touched.trigger ? formik.errors.trigger : undefined}
        >
          <Radio.Group
            name="trigger"
            value={formik.values.trigger}
            onChange={(event) => {
              formik.setFieldValue("trigger", event.target.value);
            }}
            onBlur={() => {
              formik.setFieldTouched("trigger", true);
            }}
            className="trigger-options"
          >
            <Radio value={"webhook"} className="trigger-option">
              <div className="trigger-option-layout">
                <div className="trigger-icon">
                  <MdOutlineWebhook />
                </div>
                <div className="trigger-option-content">
                  <Title level={5}>Webhook</Title>
                  <Paragraph
                    type="secondary"
                    ellipsis={{ rows: 3, tooltip: true }}
                    className="trigger-option-description"
                  >
                    Run the workflow when an external webhook request is
                    received.
                  </Paragraph>
                </div>
              </div>
            </Radio>

            <Radio value={"schedule"} className="trigger-option">
              <div className="trigger-option-layout">
                <div className="trigger-icon">
                  <MdSchedule />
                </div>
                <div className="trigger-option-content">
                  <Title level={5}>Schedule</Title>
                  <Paragraph
                    type="secondary"
                    ellipsis={{ rows: 3, tooltip: true }}
                    className="trigger-option-description"
                  >
                    Run the workflow automatically on a scheduled interval.
                  </Paragraph>
                </div>
              </div>
            </Radio>

            <Radio value={"manual"} className="trigger-option">
              <div className="trigger-option-layout">
                <div className="trigger-icon">
                  <PiHandTapBold />
                </div>
                <div className="trigger-option-content">
                  <Title level={5}>Manual</Title>
                  <Paragraph
                    type="secondary"
                    ellipsis={{ rows: 3, tooltip: true }}
                    className="trigger-option-description"
                  >
                    Run the workflow manually from the workflow builder.
                  </Paragraph>
                </div>
              </div>
            </Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </div>
  );
};

export default WorkflowTrigger;
