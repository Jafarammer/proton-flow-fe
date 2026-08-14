// UI Library
import { Form, Input } from "antd";
// types
import type { FormikProps } from "formik";
import type { ICreateWorkflowForm } from "../types/components";
// styles scss
import "./styles/workflow_basic_form.scss";

const { TextArea } = Input;

interface WorkflowBasicFormProps {
  formik: FormikProps<ICreateWorkflowForm>;
}

const WorkflowBasicForm = ({ formik }: WorkflowBasicFormProps) => {
  return (
    <div className="workflow-basic-form">
      <Form layout="vertical">
        <Form.Item
          label="Workflow Name"
          required={false}
          validateStatus={
            formik.touched.name && formik.errors.name ? "error" : ""
          }
          help={formik.touched.name ? formik.errors.name : undefined}
        >
          <Input
            name="name"
            placeholder="e.g., Customer Support Workflow"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>

        <Form.Item
          label="Description"
          validateStatus={
            formik.touched.description && formik.errors.description
              ? "error"
              : ""
          }
          help={
            formik.touched.description ? formik.errors.description : undefined
          }
        >
          <TextArea
            name="description"
            placeholder="Briefly describe what this workflow does..."
            rows={4}
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            showCount
            maxLength={300}
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default WorkflowBasicForm;
