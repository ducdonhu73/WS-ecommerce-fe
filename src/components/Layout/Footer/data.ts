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
        path: "/about-us",
      },
      // {
      //   title: t("company.press"),
      //   path: "/",
      // },
      // {
      //   title: t("company.careers"),
      //   path: "/",
      // },
    ],
  },
  // {
  //   title: t("explore.title"),
  //   children: [
  //     {
  //       title: t("explore.sellMyCar"),
  //       path: "/",
  //     },
  //     {
  //       title: t("explore.cash"),
  //       path: "/",
  //     },
  //     {
  //       title: t("explore.carValuation"),
  //       path: "/",
  //     },
  //   ],
  // },
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
      {
        title: t("contact.sitemap"),
        path: "/",
      },
    ],
  },
  {
    title: t("policy.title"),
    children: [
      {
        title: t("policy.terms"),
        path: "/support#terms-of-use",
      },
      {
        title: t("policy.privacy"),
        path: "/support#privacy",
      },
      {
        title: t("policy.cookie"),
        path: "/support#cookie-policy",
      },
    ],
  },
];
