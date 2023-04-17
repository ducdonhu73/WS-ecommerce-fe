import { ReactElement } from "react";

export interface InputTypeModel {
  type: "inputText" | "select" | "rangeSelect" | "textarea" | "radio" | "number" | "currency";
  value?: string | number;
  placeholder?: string;
  label: string;
  keyOptionLabel?: string;
  keyOptionValue?: string;
  options?: Record<string, string | number>[];
  icon?: ReactElement;
  id?: string;
  isRequired?: boolean;
  disabled?: boolean;
  isPassword?: boolean;
  with?: number;
  typeInput: string;
  max?: number;
  min?: number;
  span?: number;
}
export interface InputSelect extends InputTypeModel {
  value2?: string;
  placeholder2?: string;
  options2?: Record<string, string | number>[];
  id2?: string;
}
export interface IconModel {
  width?: number;
  height?: number;
  color?: string;
  backgroundColor?: string;
}
export interface Search {
  title: string;
  listKey: string[];
}
export interface Checkbox {
  label?: string | ReactElement;
  isChecked?: boolean;
  value?: number | string;
}

export interface FormValue {
  value: string;
  id: string;
}

export interface SubNavModel {
  title: string;
  href: string;
}
