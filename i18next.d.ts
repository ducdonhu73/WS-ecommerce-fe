import "i18next";
import en from "./src/i18n/en.json";
declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "";
    resources: typeof en;
  }
}
