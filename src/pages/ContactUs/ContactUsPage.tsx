import { PrimaryButton } from "components";
import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ContactUsPage = () => {
  const { t } = useTranslation("contactUs");

  const [vinId, setVinId] = useState<string>();

  const onSubmitVinId = () => {
    if (!vinId) {
      return;
    }
  };

  return (
    <div className="mt-28">
      <p className="text-4xl font-bold">{t("contactUs")}</p>
      <div className="grid grid-cols-1 gap-y-10 py-14 tablet:grid-cols-2 tablet:gap-x-20 tablet:py-20 laptop:gap-x-36 laptop:py-32">
        <div className="flex-1">
          <p className="mb-3 text-xl font-semibold text-text-9 tablet:mb-5 laptop:text-2xl">{t("submitQuestion")}</p>
          <p className="text-text-7">
            <Trans t={t} i18nKey="submitQuestionDescription">
              If you have any questions, or would like to get in touch with us, our team at Cosmetica would be more than
              happy to help you. Please contact us at
              <a className="text-secondary-4 underline" href="mailto:hello@gear.co.nz">
                hello@Cosmetica.co.nz
              </a>
            </Trans>
          </p>
        </div>
        <div className="flex-1">
          <p className="mb-3 text-xl font-semibold text-text-9 tablet:mb-5 laptop:text-2xl">{t("areCarDealership")}</p>
          <p className="text-text-7">
            <Trans t={t} i18nKey="areCarDealershipDescription">
              If you’re a buyer interested in cosmetic stock direct from private sellers, view our products here at our
              <a className="text-secondary-4 underline" href="https://cosmetica.teklabs.vn" target="_blank" rel="noreferrer">
                website
              </a>
              site here.
            </Trans>
          </p>
        </div>
        <div className="flex-1">
          <p className="mb-3 text-xl font-semibold text-text-9 tablet:mb-5 laptop:text-2xl">{t("viewFaq")}</p>
          <p className="text-text-7">
            <Trans t={t} i18nKey="viewFaqDescription">
              If you haven’t yet checked out our
              <Link className="text-secondary-4 underline" to="faq" target="_blank">
                FAQ Help Page
              </Link>
              , we may be able to help answer your questions there. If you still need support from us, you can reach our
              Customer Service Support Team who will aim to respond to all customer enquiries within 2 working days.
            </Trans>
          </p>
        </div>
        <div className="flex-1">
          <p className="mb-3 text-xl font-semibold text-text-9 tablet:mb-5 laptop:text-2xl">{t("newsAndPress")}</p>
          <p className="text-text-7">
            <Trans t={t} i18nKey="newsAndPressDescription">
              We would be happy to comment and provide information on vehicle purchasing, industry updates or trends to
              local, nationwide and global news publishers. For press related questions, email
              <a className="text-secondary-4 underline" href="mailto:hello@gear.co.nz">
                hello@Cosmetica.co.nz
              </a>
            </Trans>
          </p>
        </div>
      </div>
      <div className="layout-full flex flex-col items-center bg-background-1 px-6 py-10 tablet:py-16 laptop:px-0 laptop:py-32">
        <p className="mb-8 text-center text-2xl font-bold text-secondary-5 tablet:mb-5 tablet:text-[36px] tablet:leading-[48px]">
          Complete your  purchase 100% online within 24 hours at Cosmetica Technologies.
        </p>
        <p className="mb-8 text-lg font-medium tablet:mb-14">
        Complete your  purchase 100% online within 24 hours at Cosmetica{" "}
        </p>
        <div className="mb-8 w-full tablet:mb-6 tablet:w-[485px]">
          <input
            type="text"
            placeholder="Send a message"
            className="w-full max-w-[558px] border border-[rgba(0,0,0,0.23)] bg-white px-3 py-4 font-extrabold text-[rgba(0,0,0,0.6)]"
            onChange={e => setVinId(e.currentTarget.value)}
            value={vinId}
          />
        </div>
        <div className="w-full tablet:w-auto">
          <PrimaryButton
            className="h-[56px] w-full text-xl font-black tablet:w-[485px]"
            text={t("getValuation")}
            onClick={onSubmitVinId}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
