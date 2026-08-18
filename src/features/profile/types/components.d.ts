export interface IProfileForm {
  name: string;
  email: string;
}

export interface IChangePasswordForm {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}
