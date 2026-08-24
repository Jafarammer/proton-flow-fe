import { useNavigate } from "react-router-dom";
// formik
import { useFormik } from "formik";
// types
import type { IResetPasswordForm } from "../types/resetPassword";
// validations
import { resetPasswordSchema } from "../validations";

const useResetPassword = () => {
  // router
  const navigate = useNavigate();
  // formik
  const formik = useFormik<IResetPasswordForm>({
    initialValues: {
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: resetPasswordSchema,
    onSubmit: async (values): Promise<void> => {
      alert(`Reset Password\n${JSON.stringify(values, null, 2)}`);
      navigate("/login");
    },
  });

  return {
    formik,
  };
};

export default useResetPassword;
