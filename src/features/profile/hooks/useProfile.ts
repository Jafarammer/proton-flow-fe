import { useState } from "react";
import { useFormik } from "formik";
import type { IChangePasswordForm, IProfileForm } from "../types/components";
import {
  profileSchema,
  changePasswordSchema,
} from "../validations/profileSchema";

const useProfile = () => {
  // useState
  const [openPasswordModal, setOpenPasswordModal] = useState<boolean>(false);
  const [showUpdate, setShowUpdate] = useState<boolean>(false);
  // formik
  const profileFormik = useFormik<IProfileForm>({
    initialValues: {
      name: "Wan Jafar",
      email: "wan@example.com",
    },
    validationSchema: profileSchema,
    onSubmit: async (values): Promise<void> => {
      alert(`Profile updated\n${JSON.stringify(values, null, 2)}`);
    },
  });

  const passwordFormik = useFormik<IChangePasswordForm>({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validationSchema: changePasswordSchema,
    onSubmit: async (values): Promise<void> => {
      alert(`Password updated\n${JSON.stringify(values, null, 2)}`);
      setOpenPasswordModal(false);
    },
  });

  // function
  const onOpenPasswordModal = (): void => {
    setOpenPasswordModal(true);
  };
  const onClosePasswordModal = (): void => {
    setOpenPasswordModal(false);
    passwordFormik.resetForm();
  };
  const onOpenShowUpdate = (): void => {
    setShowUpdate(true);
  };
  const onCloseShowUpdate = (): void => {
    profileFormik.resetForm();
    setShowUpdate(false);
  };

  return {
    profileFormik,
    passwordFormik,
    onClosePasswordModal,
    onOpenPasswordModal,
    openPasswordModal,
    showUpdate,
    onOpenShowUpdate,
    onCloseShowUpdate,
  };
};
export default useProfile;
