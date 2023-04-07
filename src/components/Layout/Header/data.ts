import i18n from "i18n/i18next";
const t = i18n.t;
i18n.setDefaultNamespace("header");
interface Menu {
  key: string;
  text: string;
  path?: string;
  children?: SubMenu[];
}

interface SubMenu {
  key: string;
  text: string;
  path: string;
}

export const listMenu: Menu[] = [
  {
    key: "sellMyCar",
    text: t("menu.car"),
    path: "sell-my-car",
  },
  {
    key: "howItWorks",
    text: t("menu.howItWorks"),
    path: "how-it-works",
  },
  {
    key: "more",
    text: t("menu.more"),
    children: [
      {
        key: "faq",
        text: t("menu.faq"),
        path: "faq",
      },
      {
        key: "support",
        text: t("menu.support"),
        path: "support",
      },
    ],
  },
  {
    key: "contactUs",
    text: t("menu.contact"),
    path: "contact-us",
  },
];

export const listMenuMobileWithoutLogin: Menu[] = [
  {
    key: "home",
    text: t("menu.home"),
    path: "/",
  },
  {
    key: "sellMyCar",
    text: t("menu.car"),
    path: "sell-my-car",
  },
  {
    key: "howItWorks",
    text: t("menu.howItWorks"),
    path: "how-it-works",
  },
  {
    key: "more",
    text: t("menu.more"),
    children: [
      {
        key: "faq",
        text: t("menu.faq"),
        path: "faq",
      },
      {
        key: "support",
        text: t("menu.support"),
        path: "support",
      },
    ],
  },
  {
    key: "contactUs",
    text: t("menu.contact"),
    path: "contact-us",
  },
  {
    key: "signIn",
    text: t("menu.signIn"),
    path: "login",
  },
  {
    key: "signUp",
    text: t("menu.signUp"),
    path: "sign-up",
  },
];
