import { EyeOff } from "assets/images";
import { InputTypeModel } from "models";

export const listInput: InputTypeModel[] = [
  {
    type: "inputText",
    value: "",
    placeholder: "",
    label: "Email",
    id: "email",
    typeInput: "email",
  },
  {
    type: "inputText",
    label: "Password",
    icon: <EyeOff />,
    id: "password",
    isPassword: true,
    typeInput: "",
    min: 6,
    max: 20,
  },
];

export interface FormValue {
  value: string;
  id: string;
}
export interface LoginForm {
  email: FormValue;
  password: FormValue;
}

export interface LoginError {
  success: boolean;
  error: { message: string};
}
