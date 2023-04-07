import i18n from "i18n/i18next";
const t = i18n.t;
i18n.setDefaultNamespace("home");

import {
  service1,
  service2,
  service3,
  service4,
  howItWorks1,
  howItWorks2,
  howItWorks3,
  howItWorks4,
  howItWorks5,
  howItWorks6,
  joinOthersCar,
  customerAvatar,
} from "assets/images";
import { breakPoints } from "components/constants";
import { Settings } from "react-slick";

interface Item {
  title: string;
  description: string;
  image?: string;
  icon?: React.ReactNode;
}

interface JoinOthersItem {
  title: string;
  content: string;
  time: string;
  image: string;
}

interface CustomerItem {
  name: string;
  content: string;
  image: string;
  rate: number;
}

export const serviceList: Item[] = [
  {
    title: t("service.service1.title"),
    description: t("service.service1.description"),
    image: service1,
  },
  {
    title: t("service.service2.title"),
    description: t("service.service2.description"),
    image: service2,
  },
  {
    title: t("service.service3.title"),
    description: t("service.service3.description"),
    image: service3,
  },
  {
    title: t("service.service4.title"),
    description: t("service.service4.description"),
    image: service4,
  },
];

export const howItWorksList: Item[] = [
  {
    title: t("howItWorks.step1.title"),
    description: t("howItWorks.step1.description"),
    image: howItWorks1,
  },
  {
    title: t("howItWorks.step2.title"),
    description: t("howItWorks.step2.description"),
    image: howItWorks2,
  },
  {
    title: t("howItWorks.step3.title"),
    description: t("howItWorks.step3.description"),
    image: howItWorks3,
  },
  {
    title: t("howItWorks.step4.title"),
    description: t("howItWorks.step4.description"),
    image: howItWorks4,
  },
  {
    title: t("howItWorks.step5.title"),
    description: t("howItWorks.step5.description"),
    image: howItWorks5,
  },
  {
    title: t("howItWorks.step6.title"),
    description: t("howItWorks.step6.description"),
    image: howItWorks6,
  },
];

export const joinOthersList: JoinOthersItem[] = [
  {
    title: "Sold by Michael",
    content: "Mitsubishi Eclipse, sold for £15,471.",
    time: "13 hours ago",
    image: joinOthersCar,
  },
  {
    title: "Sold by Michael",
    content: "Mitsubishi Eclipse, sold for £15,471.",
    time: "13 hours ago",
    image: joinOthersCar,
  },
  {
    title: "Sold by Michael",
    content: "Mitsubishi Eclipse, sold for £15,471.",
    time: "13 hours ago",
    image: joinOthersCar,
  },
  {
    title: "Sold by Michael",
    content: "Mitsubishi Eclipse, sold for £15,471.",
    time: "13 hours ago",
    image: joinOthersCar,
  },
  {
    title: "Sold by Michael",
    content: "Mitsubishi Eclipse, sold for £15,471.",
    time: "13 hours ago",
    image: joinOthersCar,
  },
  {
    title: "Sold by Michael",
    content: "Mitsubishi Eclipse, sold for £15,471.",
    time: "13 hours ago",
    image: joinOthersCar,
  },
  {
    title: "Sold by Michael",
    content: "Mitsubishi Eclipse, sold for £15,471.",
    time: "13 hours ago",
    image: joinOthersCar,
  },
  {
    title: "Sold by Michael",
    content: "Mitsubishi Eclipse, sold for £15,471.",
    time: "13 hours ago",
    image: joinOthersCar,
  },
  {
    title: "Sold by Michael",
    content: "Mitsubishi Eclipse, sold for £15,471.",
    time: "13 hours ago",
    image: joinOthersCar,
  },
  {
    title: "Sold by Michael",
    content: "Mitsubishi Eclipse, sold for £15,471.",
    time: "13 hours ago",
    image: joinOthersCar,
  },
];

export const customerList: CustomerItem[] = [
  {
    name: "Mason Mount",
    content:
      "Lorem ipsum dolor sit amet. Vel voluptas exercitationem est iusto exercitationem ut rerum magnam nam illo culpa eos eaque ipsum ut neque omnis et autem porro.",
    image: customerAvatar,
    rate: 4,
  },
  {
    name: "Mason Mount",
    content:
      "Lorem ipsum dolor sit amet. Vel voluptas exercitationem est iusto exercitationem ut rerum magnam nam illo culpa eos eaque ipsum ut neque omnis et autem porro.",
    image: customerAvatar,
    rate: 5,
  },
  {
    name: "Mason Mount",
    content:
      "Lorem ipsum dolor sit amet. Vel voluptas exercitationem est iusto exercitationem ut rerum magnam nam illo culpa eos eaque ipsum ut neque omnis et autem porro.",
    image: customerAvatar,
    rate: 3,
  },
  {
    name: "Mason Mount",
    content:
      "Lorem ipsum dolor sit amet. Vel voluptas exercitationem est iusto exercitationem ut rerum magnam nam illo culpa eos eaque ipsum ut neque omnis et autem porro.",
    image: customerAvatar,
    rate: 2,
  },
  {
    name: "Mason Mount",
    content:
      "Lorem ipsum dolor sit amet. Vel voluptas exercitationem est iusto exercitationem ut rerum magnam nam illo culpa eos eaque ipsum ut neque omnis et autem porro.",
    image: customerAvatar,
    rate: 4,
  },
  {
    name: "Mason Mount",
    content:
      "Lorem ipsum dolor sit amet. Vel voluptas exercitationem est iusto exercitationem ut rerum magnam nam illo culpa eos eaque ipsum ut neque omnis et autem porro.",
    image: customerAvatar,
    rate: 5,
  },
];

export const customSettingJoinOthersSlider: Settings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2500,
  responsive: [
    {
      breakpoint: breakPoints.laptop,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: breakPoints.tablet,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const customSettingCustomers: Settings = {
  dots: false,
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: breakPoints.laptop,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: breakPoints.tablet,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
