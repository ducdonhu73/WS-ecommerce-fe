import i18n from "i18n/i18next";
const t = i18n.t;
i18n.setDefaultNamespace("footer");

interface FooterSubItem {
  title: string;
  path?: string;
}

interface FooterItem {
  title: string;
  children: FooterSubItem[];
}

export const footerList: FooterItem[] = [
  {
    title: t("company.title"),
    children: [
      {
        title: t("company.aboutUs"),
        path: "/",
      },
      {
        title: t("company.press"),
        path: "/",
      },
      {
        title: t("company.careers"),
        path: "/",
      },
    ],
  },
  {
    title: t("explore.title"),
    children: [
      {
        title: t("explore.sellMyCar"),
        path: "/",
      },
      {
        title: t("explore.cash"),
        path: "/",
      },
      {
        title: t("explore.carValuation"),
        path: "/",
      },
    ],
  },
  {
    title: t("contact.title"),
    children: [
      {
        title: t("contact.chat"),
        path: "/",
      },
      {
        title: t("contact.email"),
        path: "/",
      },
    ],
  },
];
