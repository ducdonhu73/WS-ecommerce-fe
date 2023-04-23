import {
  IconArrowRight,
  IconClose,
  IconPlayVideo,
  IconQuote,
  IconStar,
  carBanner,
  carSellingPlatform,
  customerAvatar,
  whyGear,
} from "assets/images";
import { Modal, PrimaryButton } from "components";
import { maxStarRate } from "components/constants/common";
import LayoutFull from "components/Layout/LayoutFull";
import Slider from "components/Slider/Slider";
import breakPoints from "constants/breakPoints";
import useWindowDimensions from "hooks/useWindowDimensions";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

import {
  customSettingCustomers,
  customSettingJoinOthersSlider,
  customerList,
  joinOthersList,
  processList,
  serviceList,
} from "./data";

const HomePage = () => {
  const { t } = useTranslation("home");
  const [vinId, setVinId] = useState<string>();

  const [showVideoModal, setShowVideoModal] = useState(false);

  const dimensions = useWindowDimensions();


  return (
    <>
      <div className="pt-[68px] laptop:pt-[72px]">
        <LayoutFull className="bg-background-1 py-8 laptop:pb-20 laptop:pt-32">
          <div className="flex flex-col items-center justify-between gap-y-14 laptop:flex-row">
            <div className="laptop:max-w-[482px]">
              <div className="mb-5 tablet:mb-8 laptop:mb-16">
                <div className="mb-5 border-l-8 border-primary pl-3 text-3xl font-bold tablet:mb-8 laptop:mb-10 laptop:text-5xl laptop:font-black">
                  <div>{t("title1")}</div>
                  <div>{t("title2")}</div>
                </div>
                <p className="text-lg font-medium text-[#141C1E]">{t("description")}</p>
              </div>
              <div className="mb-5 tablet:mb-6">
                <input
                  type="text"
                  placeholder="Product"
                  className="w-full max-w-[558px] border border-[rgba(0,0,0,0.23)] bg-white px-3 py-4 font-black text-[rgba(0,0,0,0.6)]"
                  onChange={e => setVinId(e.currentTarget.value)}
                  value={vinId}
                />
              </div>
              <div>
                <PrimaryButton
                  className="h-[56px] max-w-[558px] text-xl"
                  text={t("getValuation")}
                />
              </div>
            </div>
            <div className="mb-10 scale-[0.9] tablet:mb-0 tablet:scale-[0.8] laptop:scale-100 desktop:-mr-32">
              <img src={carBanner} alt="" />
            </div>
          </div>
        </LayoutFull>
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-x-6 gap-y-6 tablet:grid-cols-2 laptop:grid-cols-4">
            {serviceList.map((item, index) => (
              <div
                key={index}
                className="flex h-[329px] flex-col justify-between px-5 py-5 shadow-[0_2.31px_2.72px_0_rgba(0,0,0,0.024),0_15.38px_18.09px_0_rgba(0,0,0,0.0456)] tablet:h-[393px] laptop:py-8"
              >
                <div className="flex h-[193px] flex-col justify-between">
                  <div className="flex h-[100px] items-center justify-center">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="flex text-lg font-bold text-text-10 tablet:h-[56px] tablet:text-2xl">
                    {item.title}
                  </div>
                </div>
                <div className="flex text-lg font-medium text-text-8 tablet:h-[122px]">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col items-center justify-between gap-x-8 gap-y-8 tablet:mt-20 tablet:gap-y-12 laptop:mt-28 laptop:flex-row desktop:mt-32">
          <div className="dekstop:pb-0 w-full laptop:max-w-[450px] laptop:pb-8 desktop:max-w-[538px]">
            <div className="mb-5 text-[28px] font-bold leading-10 text-text-10 tablet:mb-8 laptop:mb-10 laptop:text-4xl laptop:font-black">
              {t("whyGear.title")}
            </div>
            <div className="mb-5 tablet:mb-8 laptop:mb-10">
              <div className="mb-4 text-text-6">{t("whyGear.description1")}</div>
              <div className="mb-4 text-text-6">{t("whyGear.description2")}</div>
              <div className="text-text-6">{t("whyGear.description3")}</div>
            </div>
            <PrimaryButton text={t("learnMore")} className="h-[42px] max-w-[161px] font-bold" />
          </div>
          <div className="relative laptop:-mr-20 desktop:-mr-80 desktop:shrink-0">
            <div className="flex justify-center laptop:justify-end">
              <img
                src={whyGear}
                alt=""
                className="w-full tablet:w-[75%] laptop:w-[80%] desktop:ml-auto desktop:w-full"
              />
            </div>
            <div
              className="group absolute left-[50%] top-[50%] h-28 w-28 translate-x-[-50%] translate-y-[-50%] cursor-pointer rounded-full bg-[rgba(255,255,255,0.3)] tablet:h-36 tablet:w-36 laptop:h-48 laptop:w-48 desktop:h-56 desktop:w-56"
              onClick={() => setShowVideoModal(true)}
            >
              <div className="flex h-full w-full items-center justify-center group-hover:opacity-80">
                <IconPlayVideo
                  width={
                    dimensions.width < breakPoints.tablet ? 50 : dimensions.width < breakPoints.desktop ? 80 : undefined
                  }
                  height={
                    dimensions.width < breakPoints.tablet ? 50 : dimensions.width < breakPoints.desktop ? 80 : undefined
                  }
                />
              </div>
            </div>
            <Modal
              isOpen={showVideoModal}
              setOpen={setShowVideoModal}
              className="aspect-video max-h-[720px] max-w-[1280px] px-0 py-0 focus-within:outline-none"
            >
              <iframe
                src={"https://www.youtube.com/embed/YAWt-gktZqM" + "?autoplay=1"}
                title="Video sell car"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute left-0 top-0 h-full w-full"
              />
              <div
                className="absolute bottom-[100%] right-0 cursor-pointer bg-text-3 p-3 hover:opacity-80"
                onClick={() => setShowVideoModal(false)}
              >
                <IconClose />
              </div>
            </Modal>
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
                    <div className="flex items-center justify-center gap-x-5 px-3 py-3.5">
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
        <div
          className="py-8 tablet:pb-10 tablet:pt-12 laptop:pb-20 laptop:pt-24 desktop:pb-28 desktop:pt-32"
          id="how-gear-works"
        >
          <div className="mb-10 text-center text-3xl font-semibold text-text-10 tablet:mb-16 laptop:mb-24 laptop:text-4xl laptop:font-black">
            {t("process.title")}
          </div>
          <div className="mb-10 flex flex-wrap gap-x-20 gap-y-20 tablet:mb-14 laptop:mb-20 laptop:flex-nowrap laptop:gap-x-11">
            {processList.map((item, index) => (
              <div
                key={index}
                className={twMerge(
                  "w-full tablet:w-[calc(50%-40px)]",
                  index === 1 ? "laptop:w-[31%]" : "laptop:w-[23%]",
                )}
              >
                <div className="mb-4 flex h-[190px] justify-center">
                  <img src={item.image} alt="" />
                </div>
                <div className="mb-4 text-lg font-bold text-text-10 laptop:text-2xl">{item.title}</div>
                <p className="whitespace-pre-line text-sm font-medium text-text-9 laptop:text-lg">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/faq" className="flex items-center justify-center gap-3.5 hover:opacity-80">
              <span className="text-lg font-semibold text-text-8 underline">Find out more in our FAQs section</span>
              <div>
                <IconArrowRight />
              </div>
            </Link>
          </div>
        </div>
        <LayoutFull className="bg-text-2">
          <div className="py-8 tablet:py-12 laptop:py-24 desktop:py-32">
            <div className="mb-10 text-center text-3xl font-semibold tablet:mb-14 tablet:font-bold laptop:mb-20 laptop:text-4xl laptop:font-black">
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
            <div className="scale-100 tablet:scale-[0.8] laptop:scale-100">
              <img src={carSellingPlatform} alt="" />
            </div>
            <div className="w-full max-w-[566px]">
              <div className="mb-4 text-2xl font-semibold tablet:mb-8 tablet:font-bold laptop:mb-11 laptop:text-3xl laptop:font-black">
                {t("carSellingPlatform.title")}
              </div>
              <div className="mb-10">
                <p className="mb-6 font-medium">{t("carSellingPlatform.description1")}</p>
                <p className="mb-4 font-medium">{t("carSellingPlatform.description2")}</p>
                <p className="font-medium">{t("carSellingPlatform.description3")}</p>
              </div>
              <PrimaryButton text={t("learnMore")} className="h-[42px] max-w-[162px] font-black" />
            </div>
          </div>
        </LayoutFull>
      </div>
    </>
  );
};

export default HomePage;
