import { EyeOff } from "assets/images";
import { InputTypeModel } from "models";

export const listInput: InputTypeModel[] = [
  {
    type: "inputText",
    label: "First name",
    id: "firstName",
    with: 50,
    typeInput: "text",
  },
  {
    type: "inputText",
    label: "Last name",
    id: "lastName",
    with: 50,
    typeInput: "text",
  },
  {
    type: "inputText",
    label: "Email",
    id: "email",
    typeInput: "email",
    span: 2,
  },
  {
    type: "inputText",
    label: "Phone number",
    id: "phoneNumber",
    typeInput: "text",
    span: 2,
  },
  {
    type: "inputText",
    label: "Password",
    icon: <EyeOff />,
    id: "password",
    isPassword: true,
    typeInput: "text",
    min: 6,
    max: 20,
    span: 2,
  },
  {
    type: "inputText",
    label: "Confirm password",
    icon: <EyeOff />,
    id: "confirmPassword",
    isPassword: true,
    typeInput: "text",
    min: 6,
    max: 20,
    span: 2,
  },
];

export interface FormValue {
  value: string;
  id: string;
}
export interface SignUpForm {
  firstName: FormValue;
  lastName: FormValue;
  email: FormValue;
  phoneNumber: FormValue;
  password: FormValue;
  confirmPassword: FormValue;
}
