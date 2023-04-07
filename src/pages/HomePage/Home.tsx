import { carBanner, carSellingPlatform, customerAvatar, IconQuote, IconStar, whyGear } from "assets/images";
import { PrimaryButton } from "components";
import TextTitle from "components/common/TextTitle";
import { maxStarRate } from "components/constants/common";
import LayoutFull from "components/Layout/LayoutFull";
import Slider from "components/Slider/Slider";
import { useTranslation } from "react-i18next";
import {
  customerList,
  customSettingCustomers,
  customSettingJoinOthersSlider,
  howItWorksList,
  joinOthersList,
  serviceList,
} from "./data";

const HomePage = () => {
  const { t } = useTranslation("home");
  return (
    <div className="pt-[68px] laptop:pt-[72px]">
      <LayoutFull className="bg-background-1 py-8 laptop:pt-32 laptop:pb-24">
        <div className="flex flex-col items-center justify-between gap-y-14 laptop:flex-row">
          <div className="laptop:max-w-[558px]">
            <div className="mb-5 tablet:mb-8 laptop:mb-16">
              <div className="mb-5 border-l-8 border-primary pl-3 text-3xl font-semibold tablet:mb-8 laptop:mb-10 laptop:text-5xl laptop:font-extrabold">
                <div>{t("title1")}</div>
                <div>{t("title2")}</div>
              </div>
              <p className="text-lg text-[#141C1E]">{t("description")}</p>
            </div>
            <div className="mb-5 tablet:mb-6">
              <input
                type="text"
                placeholder="Enter Rego/Vin"
                className="w-full max-w-[558px] border border-[rgba(0,0,0,0.23)] bg-white px-3 py-4 font-extrabold text-[rgba(0,0,0,0.6)]"
              />
            </div>
            <div>
              <PrimaryButton className="h-[56px] max-w-[558px] text-xl" text={t("getValuation")} />
            </div>
          </div>
          <div>
            <img src={carBanner} alt="" className="scale-75 laptop:scale-100" />
          </div>
        </div>
      </LayoutFull>
      <div className="mt-20">
        <div className="grid grid-cols-1 gap-x-6 gap-y-6 tablet:grid-cols-2 laptop:grid-cols-4">
          {serviceList.map((item, index) => (
            <div
              key={index}
              className="flex h-[393px] flex-col justify-between py-5 px-5 shadow-[0_2.31px_2.72px_0_rgba(0,0,0,0.024),0_15.38px_18.09px_0_rgba(0,0,0,0.0456)] laptop:py-8"
            >
              <div className="flex h-[193px] flex-col justify-between">
                <div className="flex h-[100px] items-center justify-center">
                  <img src={item.image} alt="" />
                </div>
                <div className="flex h-[56px] text-2xl font-bold text-text-10">{item.title}</div>
              </div>
              <div className="flex h-[122px] text-lg font-medium text-text-8">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-32 hidden items-center justify-between laptop:flex">
        <div className="max-w-[538px]">
          <TextTitle variant="h3" text={t("whyGear.title")} className="mb-10" />
          <div className="mb-10">
            <div className="mb-4 text-text-6">{t("whyGear.description1")}</div>
            <div className="mb-4 text-text-6">{t("whyGear.description2")}</div>
            <div className="text-text-6">{t("whyGear.description3")}</div>
          </div>
          <PrimaryButton text={t("learnMore")} className="h-[42px] max-w-[161px] font-bold" />
        </div>
        <div className="-mr-8 inline-block shrink-0 tablet:-mr-10 laptop:-mr-20 desktop:-mr-80">
          <img src={whyGear} alt="" className="ml-auto w-[50%] laptop:w-[70%] desktop:w-full" />
        </div>
      </div>
      <LayoutFull className="bg-text-2">
        <div className="pb-14 pt-[70px]">
          <div className="mb-10 text-center text-3xl font-semibold text-text-10 tablet:mb-14 laptop:mb-20 laptop:text-4xl laptop:font-black">
            {t("joinOthers")}
          </div>
          <div className="layout-full overflow-hidden">
            <Slider customSetting={customSettingJoinOthersSlider}>
              {joinOthersList.map((item, index) => (
                <div key={index} className="px-5">
                  <div className="flex items-center justify-center gap-x-5 py-3.5 px-3">
                    <div className="shrink-0 rounded">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="max-w-[206px]">
                      <div className="mb-3 text-2xl font-bold">{item.title}</div>
                      <p className="mb-3 font-medium text-text-9">{item.content}</p>
                      <div className="font-semibold text-text-6">{item.time}</div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </LayoutFull>
      <div className="py-8 tablet:py-12 laptop:py-24 desktop:py-32">
        <div className="mb-10 text-center text-3xl font-semibold text-text-10 tablet:mb-14 laptop:mb-20 laptop:text-4xl laptop:font-black">
          {t("howItWorks.title")}
        </div>
        <div className="mb-10 grid grid-cols-1 gap-x-12 gap-y-20 tablet:mb-14 tablet:grid-cols-2 laptop:mb-20 laptop:grid-cols-3">
          {howItWorksList.map((item, index) => (
            <div key={index}>
              <div className="mb-4 flex justify-center">
                <img src={item.image} alt="" />
              </div>
              <TextTitle variant="subtitle2" text={item.title} className="mb-4 text-lg text-text-10 laptop:text-2xl" />
              <p className="whitespace-pre-line text-lg text-text-9">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <TextTitle
            text={t("howItWorks.subTitle")}
            variant="subtitle1"
            className="mb-4 text-2xl text-text-10 laptop:text-3xl"
          />
          <p className="text-text-9 laptop:text-lg">{t("howItWorks.subDescription")}</p>
        </div>
      </div>
      <LayoutFull className="bg-text-2">
        <div className="py-8 tablet:py-12 laptop:py-24 desktop:py-32">
          <div className="mb-10 text-center text-3xl font-black tablet:mb-14 laptop:mb-20 laptop:text-4xl">
            {t("customer")}
          </div>
          <div>
            <Slider
              customSetting={customSettingCustomers}
              classNameNextArrow="translate-x-14"
              classNamePrevArrow="-translate-x-14"
            >
              {customerList.map((item, index) => (
                <div key={index} className="px-3">
                  <div className="bg-white px-6 py-[26px] shadow-[0_2.31px_2.72px_0_rgba(0,0,0,0.0244),0_6.39px_7.51px_0_rgba(0,0,0,0.035)]">
                    <div className="mb-8 flex justify-between">
                      <div className="flex gap-x-4">
                        <div className="rounded-full">
                          <img src={customerAvatar} alt="" />
                        </div>
                        <div>
                          <div className="mb-2.5 text-lg font-bold text-secondary-5">{item.name}</div>
                          <div className="flex items-center justify-between gap-x-2.5">
                            <div className="flex items-center gap-x-0.5">
                              {Array(item.rate)
                                .fill(0)
                                .map((_, index) => (
                                  <IconStar key={index} />
                                ))}
                              {Array(maxStarRate - item.rate)
                                .fill(0)
                                .map((_, index) => (
                                  <IconStar key={index} color="#E6E6E6" />
                                ))}
                            </div>
                            <span className="text-sm font-bold text-text-7">{item.rate.toFixed(1)}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <IconQuote />
                      </div>
                    </div>
                    <div className="text-sm font-semibold">{item.content}</div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </LayoutFull>
      <LayoutFull className="bg-background-1">
        <div className="flex flex-col-reverse items-center justify-between gap-y-14 py-8 tablet:py-12 laptop:flex-row laptop:gap-y-0 laptop:py-24 desktop:py-32">
          <div>
            <img src={carSellingPlatform} alt="" className="scale-75 laptop:scale-100" />
          </div>
          <div className="w-full max-w-[566px]">
            <div className="mb-4 text-2xl font-extrabold tablet:mb-8 laptop:mb-11 laptop:text-3xl">
              {t("carSellingPlatform.title")}
            </div>
            <div className="mb-10">
              <p className="mb-6 font-medium">{t("carSellingPlatform.description1")}</p>
              <p className="mb-4 font-medium">{t("carSellingPlatform.description2")}</p>
              <p className="font-medium">{t("carSellingPlatform.description3")}</p>
            </div>
            <PrimaryButton text={t("learnMore")} className="h-[42px] max-w-[162px] font-extrabold" />
          </div>
        </div>
      </LayoutFull>
    </div>
  );
};

export default HomePage;
