// router
import { useNavigate } from "react-router-dom";
// formik
import { useFormik } from "formik";
// types
import type { IRegisterForm } from "../types/register";
// validations
import { registerSchema } from "../validations";

const useRegister = () => {
  // router
  const navigate = useNavigate();
  // formik
  const formik = useFormik<IRegisterForm>({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit: async (values): Promise<void> => {
      alert(`Register\n${JSON.stringify(values, null, 2)}`);
      navigate("/login");
    },
  });

  return {
    formik,
  };
};

export default useRegister;
