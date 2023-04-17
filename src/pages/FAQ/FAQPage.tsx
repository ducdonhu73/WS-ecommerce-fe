import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import useWindowDimensions from "hooks/useWindowDimensions";
import breakPoints from "constants/breakPoints";
import { IconChevronDown } from "assets/images";
import FAQSection from "./FAQSection";
import { useGetFaqCategories, useGetFaqs } from "queries/faqQueries";

const FAQPage = () => {
  const { t } = useTranslation("faq");
  const [activeCategoryId, setActiveCategoryId] = useState("");
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const dimensions = useWindowDimensions();
  const { data: faqCategories } = useGetFaqCategories();
  const { data: faqs } = useGetFaqs();

  useEffect(() => {
    if (faqCategories) {
      setActiveCategoryId(faqCategories[0].id);
    }
  }, [faqCategories]);

  const getFaqsByCategoryId = (categoryId: string) => {
    return faqs?.filter(faq => faq.categoryId === categoryId);
  };

  const getCurrentCategoryName = (categoryId: string) => {
    const currentCategory = faqCategories?.find(item => item.id === categoryId);
    return currentCategory?.name || "";
  };

  return (
    <div className="my-28">
      <p className="mb-3 text-2xl font-bold tablet:text-3xl laptop:mb-6 laptop:text-4xl">{t("faq")}</p>
      <p className="mb-10 text-lg tablet:mb-14 laptop:mb-20">
        Discover tips and tricks, find answers to common questions, and get help!
      </p>
      <div className="flex flex-col gap-10 laptop:flex-row laptop:gap-[78px]">
        {dimensions.width > breakPoints.laptop ? (
          <div className="flex h-full flex-shrink-0 flex-col rounded-md border-[1px] border-[#CCCCCC]">
            {faqCategories &&
              faqCategories?.map(item => (
                <div
                  key={item.id}
                  className={twMerge(
                    "flex h-[52px] cursor-pointer items-center border-[#fff] px-5 pl-2 hover:bg-primary-1",
                    activeCategoryId === item.id && "border-l-8 border-[#EF4B4B] bg-[#F7F7F7] pl-0",
                  )}
                  onClick={() => setActiveCategoryId(item.id)}
                >
                  <div className="ml-8 items-center">{item.name}</div>
                </div>
              ))}
          </div>
        ) : (
          <div className="relative z-[1] flex flex-col">
            <div
              className={twMerge(
                "flex h-[52px] cursor-pointer items-center justify-between rounded-t-md border-l-8 border-primary bg-[#F7F7F7] px-5 pl-0 font-bold text-text-8",
              )}
              onClick={() => setShowCategoryMenu(pre => !pre)}
            >
              <div className="ml-6 items-center">{getCurrentCategoryName(activeCategoryId)}</div>
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
              {faqCategories &&
                faqCategories?.map((item, index) => (
                  <div
                    key={index}
                    className={twMerge(
                      "flex h-[52px] cursor-pointer items-center px-5 pl-2 active:bg-primary-1",
                      activeCategoryId === item.id && "hidden",
                    )}
                    onClick={() => {
                      setShowCategoryMenu(false);
                      setActiveCategoryId(item.id);
                    }}
                  >
                    <div className="ml-6 items-center text-text-5">{item.name}</div>
                  </div>
                ))}
            </div>
          </div>
        )}
        <div className="flex-1">
          {getFaqsByCategoryId(activeCategoryId)?.map((faq, index) => (
            <div key={index}>
              <FAQSection title={faq.question}>{faq.answer}</FAQSection>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
