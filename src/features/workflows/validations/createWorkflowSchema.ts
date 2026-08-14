import * as Yup from "yup";

export const createWorkflowSchema = Yup.object({
  name: Yup.string()
    .required("Workflow name is required")
    .max(50, "Workflow name must be at most 50 characters"),
  description: Yup.string().max(
    300,
    "Description must be at most 300 characters",
  ),
  trigger: Yup.string().required("Trigger is required"),
  startingPoint: Yup.string().required("Starting point is required"),
});
