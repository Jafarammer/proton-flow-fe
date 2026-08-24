import { useNavigate } from "react-router-dom";
// formik
import { useFormik } from "formik";
// types
import type { IForgotPasswordForm } from "../types/forgotPassword";
// validations
import { forgotPasswordSchema } from "../validations";

const useForgotPassword = () => {
  // router
  const navigate = useNavigate();
  // formik
  const formik = useFormik<IForgotPasswordForm>({
    initialValues: {
      email: "",
    },
    validationSchema: forgotPasswordSchema,
    onSubmit: async (values): Promise<void> => {
      alert(`Forgot password\n${JSON.stringify(values, null, 2)}`);
      navigate("/login");
    },
  });

  return {
    formik,
  };
};

export default useForgotPassword;
