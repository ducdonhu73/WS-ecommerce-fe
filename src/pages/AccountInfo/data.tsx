import { InputTypeModel, SubNavModel } from "models";

export const listSubNav: SubNavModel[] = [
  {
    href: "",
    title: "Account",
  }
]

export const listNavAccount: string[] = [
  "Offer list",
  "Personal information",
  "Log out",
]

export const listInput: InputTypeModel[] = [
  {
    type: "inputText",
    value: "",
    placeholder: "",
    label: "First name",
    id: "firstName",
    typeInput: "",
  },
  {
    type: "inputText",
    label: "Last name",
    id: "lastName",
    typeInput: "",
  },
  {
    type: "inputText",
    label: "Mobile number",
    id: "phoneNumber",
    typeInput: "",
  },
  {
    type: "inputText",
    label: "Email",
    id: "email",
    typeInput: "",
  },
];

export const listInputAddress: InputTypeModel[] = [
  {
    type: "inputText",
    value: "",
    placeholder: "",
    label: "Stress adress",
    id: "stress",
    typeInput: "",
    span: 2,
  },
  {
    type: "inputText",
    label: "City",
    id: "city",
    typeInput: "",
  },
  {
    type: "inputText",
    label: "Country",
    id: "country",
    typeInput: "",
  },
  {
    type: "inputText",
    label: "Province",
    id: "province",
    typeInput: "",
  },
  {
    type: "inputText",
    label: "Postal code",
    id: "postalCode",
    typeInput: "",
  },
];