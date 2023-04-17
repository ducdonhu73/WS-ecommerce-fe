import { IconChevronDown } from "assets/images";
import breakPoints from "constants/breakPoints";
import useWindowDimensions from "hooks/useWindowDimensions";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router";
import { twMerge } from "tailwind-merge";

import CookiePolicy from "./CookiePolicy/CookiePolicy";
import Privacy from "./Privacy/Privacy";
import TermsOfUse from "./TermsOfUse/TermsOfUse";

export enum CategoryEnum {
  PRIVACY = "Privacy",
  COOKIE_POLICY = "Cookie policy",
  TERMS_OF_USE = "Terms of use",
}
export interface SupportCategory {
  category: CategoryEnum;
}

const SupportPage = () => {
  const { hash } = useLocation();

  const { t } = useTranslation("support");
  const [activeCategory, setActiveCategory] = useState(0);
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const dimensions = useWindowDimensions();
  const [showMoreContent, setShowMoreContent] = useState({
    cookies: false,
    personalInformation: false,
    purposes: false,
    rights: false,
  });

  const data: SupportCategory[] = [
    {
      category: CategoryEnum.PRIVACY,
    },
    {
      category: CategoryEnum.COOKIE_POLICY,
    },
    {
      category: CategoryEnum.TERMS_OF_USE,
    },
  ];

  const selectedSupport = data[activeCategory];

  useEffect(() => {
    if (hash === "#privacy") {
      setActiveCategory(0);
    } else if (hash === "#cookie-policy") {
      setActiveCategory(1);
    } else if (hash === "#terms-of-use") {
      setActiveCategory(2);
    }
  }, [hash]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeCategory]);

  const renderContent = () => {
    switch (activeCategory) {
      case 0:
        return (
          <Privacy
            selectedSupport={selectedSupport}
            showMoreContent={showMoreContent}
            setShowMoreContent={setShowMoreContent}
            setActiveCategory={setActiveCategory}
          />
        );
      case 1:
        return <CookiePolicy selectedSupport={selectedSupport} />;
      case 2:
        return <TermsOfUse selectedSupport={selectedSupport} setActiveCategory={setActiveCategory} />;
      default:
        return <></>;
    }
  };
  return (
    <div className="mb-5 mt-28 tablet:mb-10 laptop:mb-28">
      <p className="mb-10 text-2xl font-bold tablet:mb-14 tablet:text-3xl laptop:mb-20 laptop:text-4xl">
        {t("support")}
      </p>
      <div className="flex flex-col gap-10 laptop:flex-row laptop:gap-[78px]">
        {dimensions.width > breakPoints.laptop ? (
          <div className="flex h-full flex-shrink-0 basis-[304px] flex-col rounded-md border-[1px] border-[#CCCCCC]">
            {data.map((item, index) => (
              <div
                key={index}
                className={twMerge(
                  "flex h-[52px] cursor-pointer items-center border-[#fff] px-5 pl-2 hover:bg-primary-1",
                  activeCategory === index && "border-l-8 border-primary bg-[#F7F7F7] pl-0",
                )}
                onClick={() => setActiveCategory(index)}
              >
                <div className="ml-8 items-center">{item.category}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="relative z-[1] flex flex-col rounded-md">
            <div
              className={twMerge(
                "flex h-[52px] cursor-pointer items-center justify-between rounded-t-md border-l-8 border-primary bg-[#F7F7F7] px-5 pl-0 font-bold text-text-8",
              )}
              onClick={() => setShowCategoryMenu(pre => !pre)}
            >
              <div className="ml-6 items-center">{selectedSupport.category}</div>
              <div className={twMerge("transition-all", showCategoryMenu && "rotate-180")}>
                <IconChevronDown color={showCategoryMenu ? "#ef4b4b" : undefined} />
              </div>
            </div>
            <div
              className={twMerge(
                "invisible absolute top-[52px] max-h-[0px] w-full overflow-hidden rounded-b-md border-b border-l border-r border-text-3 bg-white opacity-0 transition-all",
                showCategoryMenu && "visible max-h-[1000px] opacity-100",
              )}
            >
              {data.map((item, index) => (
                <div
                  key={index}
                  className={twMerge(
                    "flex h-[52px] cursor-pointer items-center px-5 pl-2 active:bg-primary-1",
                    activeCategory === index && "hidden",
                  )}
                  onClick={() => {
                    setShowCategoryMenu(false);
                    setActiveCategory(index);
                  }}
                >
                  <div className="ml-6 items-center text-text-5">{item.category}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div>{renderContent()}</div>
      </div>
    </div>
  );
};

export default SupportPage;
