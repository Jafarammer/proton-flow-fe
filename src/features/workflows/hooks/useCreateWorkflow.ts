import type { ICreateWorkflowForm } from "../types/components";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { createWorkflowSchema } from "../validations/createWorkflowSchema";

const useCreateWorkflow = () => {
  // router
  const navigate = useNavigate();
  // formik
  const formik = useFormik<ICreateWorkflowForm>({
    initialValues: {
      name: "",
      description: "",
      trigger: "manual",
      startingPoint: "blank",
    },
    validationSchema: createWorkflowSchema,
    onSubmit: async (values: ICreateWorkflowForm): Promise<void> => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  // function
  const onCancel = (): void => {
    navigate("/workflows");
  };

  return {
    formik,
    onCancel,
  };
};

export default useCreateWorkflow;
