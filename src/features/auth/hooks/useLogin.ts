import { useNavigate } from "react-router-dom";
// formik
import { useFormik } from "formik";
// types
import type { ILoginForm } from "../types/login";
// validations
import { loginSchema } from "../validations";

const useLogin = () => {
  // router
  const navigate = useNavigate();
  // formik
  const formik = useFormik<ILoginForm>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values): Promise<void> => {
      alert(`Login\n${JSON.stringify(values, null, 2)}`);
      navigate("/dashboard");
    },
  });

  return {
    formik,
  };
};
export default useLogin;
