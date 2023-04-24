import {
  customerAvatar,
  joinOthersCar,
  process1,
  process2,
  process3,
  process4,
  service1,
  service2,
  service3,
  service4,
} from "assets/images";
import breakPoints from "constants/breakPoints";
import i18n from "i18n/i18next";
import { Settings } from "react-slick";
const t = i18n.t;
i18n.setDefaultNamespace("home");

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

export const processList: Item[] = [
  {
    title: t("process.step1.title"),
    description: t("process.step1.description"),
    image: process1,
  },
  {
    title: t("process.step2.title"),
    description: t("process.step2.description"),
    image: process2,
  },
  {
    title: t("process.step3.title"),
    description: t("process.step3.description"),
    image: process3,
  },
  {
    title: t("process.step4.title"),
    description: t("process.step4.description"),
    image: process4,
  },
];

export const joinOthersList: JoinOthersItem[] = [
  {
    title: "Purchased by Evelyn Tran",
    content: "Maybelline Great Lash Mascara",
    time: "13 hours ago",
    image: joinOthersCar,
  },
  {
    title: "Purchased by Toc Tien",
    content: "NARS Radiant Creamy Concealer",
    time: "13 hours ago",
    image: joinOthersCar,
  },
  {
    title: "Purchased by My Linh",
    content: "MAC Ruby Woo Lipstick",
    time: "13 hours ago",
    image: joinOthersCar,
  },
  {
    title: "Purchased by Ngoc Ha",
    content: "MAC Ruby Woo Lipstick",
    time: "13 hours ago",
    image: joinOthersCar,
  },
  {
    title: "Purchased by Chau Bui",
    content: "Urban Decay Palette",
    time: "13 hours ago",
    image: joinOthersCar,
  },
  {
    title: "Purchased by Vu Tram",
    content: "Anastasia Beverly Hills Dipbrow",
    time: "13 hours ago",
    image: joinOthersCar,
  },
  {
    title: "Purchased by Maria",
    content: "Estée Lauder Double Wear",
    time: "13 hours ago",
    image: joinOthersCar,
  },
  {
    title: "Purchased by Thao Mai",
    content: "Clinique Moisturizing Lotion",
    time: "13 hours ago",
    image: joinOthersCar,
  },
  {
    title: "Purchased by Nhu Ngoc",
    content: "NYX Soft Matte Lip Cream",
    time: "13 hours ago",
    image: joinOthersCar,
  },
  {
    title: "Purchased by Bao An",
    content: "Clinique Mascara",
    time: "13 hours ago",
    image: joinOthersCar,
  },
];

export const customerList: CustomerItem[] = [
  {
    name: "Stephany Young",
    content:
      "I had an amazing experience at this store! The staff was incredibly helpful and knowledgeable about all the products. They went above and beyond to help me find the perfect shade of foundation and even gave me some great tips on how to apply it.",
    image: customerAvatar,
    rate: 4,
  },
  {
    name: "Mason Ngoc",
    content:
      "I had an amazing experience at this store! The staff was incredibly helpful and knowledgeable about all the products. They went above and beyond to help me find the perfect shade of foundation and even gave me some great tips on how to apply it.",
    image: customerAvatar,
    rate: 5,
  },
  {
    name: "Nhu Thanh",
    content:
      "My experience at this store was okay. The staff was friendly, but they didn't seem to know much about the products. The store had a limited selection of items, and I had trouble finding what I needed. The prices were also a bit high for the quality of the products.",
    image: customerAvatar,
    rate: 3,
  },
  {
    name: "Xuan Dieu",
    content:
      "Lorem ipsum dolor sit amet. Vel voluptas exercitationem est iusto exercitationem ut rerum magnam nam illo culpa eos eaque ipsum ut neque omnis et autem porro.",
    image: customerAvatar,
    rate: 2,
  },
  {
    name: "Evelyn Mount",
    content:
      "I had a great experience at this cosmetic store. The staff was knowledgeable and helped me find the perfect products for my skin type. The store was well-organized and had a good selection of products.",
    image: customerAvatar,
    rate: 4,
  },
  {
    name: "Ngoc Bich",
    content:
      "The store had a wide variety of high-quality products, and I was able to find everything I was looking for. I highly recommend this store to anyone looking for a great selection of cosmetics and top-notch customer service.",
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
