import { twMerge } from "tailwind-merge";

import { SupportCategory } from "../SupportPage";
import SectionPrivacyContent from "./SectionPrivacyContent";

interface PrivacyProps {
  selectedSupport: SupportCategory;
  showMoreContent: {
    cookies: boolean;
    personalInformation: boolean;
    purposes: boolean;
    rights: boolean;
  };
  setShowMoreContent: React.Dispatch<
    React.SetStateAction<{
      cookies: boolean;
      personalInformation: boolean;
      purposes: boolean;
      rights: boolean;
    }>
  >;
  setActiveCategory: React.Dispatch<React.SetStateAction<number>>;
}

const Privacy = ({ selectedSupport, showMoreContent, setShowMoreContent, setActiveCategory }: PrivacyProps) => {
  return (
    <div>
      <div className="mb-5 text-2xl font-semibold text-text-10 tablet:mb-8 laptop:mb-10">
        {selectedSupport.category}
      </div>
      <SectionPrivacyContent title={""} isTopTitle>
        <span className="mb-3 block laptop:mb-5">
        This Privacy Policy was last updated on XXXXX. At Cosmetica, we value your privacy and are committed to protecting your personal information.
         As a provider of cosmetic products, we collect certain information from you to provide you with the best possible experience.
          We understand that you entrust us with your personal information, and we take this responsibility seriously.
           This policy outlines the types of personal information we collect, how we use it, who we share it with, and your rights regarding your personal information.
            Please read this policy carefully and contact us if you have any questions.
        </span>
        <span className="mb-3 block laptop:mb-5">
          In order to provide these Services, we require certain information about you and your cosmetic. This privacy policy
          sets the types of personal information we collect and process about you, what we use them for, how we use
          them, who we share them with and why. Please read this policy carefully and contact us if you have any
          questions as set out below. If you disagree with any of the ways in which we might use your personal data in
          this privacy policy, you should not use our Services.
        </span>
      </SectionPrivacyContent>
      <SectionPrivacyContent title="Our use of cookies">
        <span>
          When you take up our Services or use the Website, we will collect certain information about you, such as:
        </span>
        <ul className="ulWithDotListStyle">
          <li>basic contact information which you provide to us;</li>
          <li>
            information to enable our Cosmetic Buying Partners and/or any third party transport providers to collect and
            inspect your Cosmetic;
          </li>
          <li>your account details and account profile; images, technical, and/or model information of your Cosmetic;</li>
          <li>
            photographs or scans of documents relating to the ownership and history of your Cosmetic; records of how you use
            our Services and/or your account;
          </li>
          <li>information we obtain from public sources (such as the NZTA);</li>
          <li>
            information we receive from third parties (e.g., business partners, service providers, advertising networks,
            analytics providers, automotive data providers, search information providers or social networks);
          </li>
          <li>records of communications you have with us (e.g., emails, texts, call recordings);</li>
          <li>other information you provide to us voluntarily, including as part of a survey or promotion;</li>
          <li>
            technical information about your device and website usage, including cookies (see our{" "}
            <span
              className="cursor-pointer font-semibold text-secondary-4 hover:underline"
              onClick={() => setActiveCategory(1)}
            >
              Cookies Policy
            </span>
            ).
          </li>
        </ul>
        <span
          className={twMerge(
            "cursor-pointer font-semibold text-secondary-4 hover:underline",
            showMoreContent["cookies"] && "hidden",
          )}
          onClick={() =>
            setShowMoreContent(pre => {
              return {
                ...pre,
                cookies: true,
              };
            })
          }
        >
          Find out more…
        </span>
      </SectionPrivacyContent>
      <div
        className={twMerge(
          "invisible max-h-0 overflow-hidden opacity-0 transition-all duration-300",
          showMoreContent["cookies"] && "visible max-h-[9999px] opacity-100",
        )}
      >
        <SectionPrivacyContent title="Basic contact information you provide to us">
          If you decide to complete a valuation of your Cosmetic (even if you don’t end up proceeding with a sale through our
          platform), we will collect your name, postcode, email address, telephone number and information about your
          Cosmetic(see also ‘General vehicle information’ below). We also will use this information to create an account for
          you so you can come back to your valuation at any time. Your postcode will be used to generate an approximate
          location for you to enable us and our buying partners to estimate costs of collection.
        </SectionPrivacyContent>
        <SectionPrivacyContent title="Your account details">
          Once we have created your account, you may also provide us with certain additional information about yourself
          which forms part of your account, such as other vehicles you own, and other services you may be interested in.
        </SectionPrivacyContent>
        <SectionPrivacyContent title="General vehicle information">
          Whether you are planning on selling your Cosmetic through our platform or are merely looking to track the value of
          your Cosmetic through our valuation tracker, we will ask for certain information about your Cosmetic.
        </SectionPrivacyContent>
        <SectionPrivacyContent title="Your bank account details">
          Once a sale is complete, we or the Cosmetic Buying Partner will transfer sale proceeds to you using your name,
          account number and sort code which we will acquire from you using our document capture feature.
        </SectionPrivacyContent>
        <SectionPrivacyContent title="Records of how you use our Services">
          This may include details of your use of our website (captured through cookies and similar tracking
          technologies), your Cosmetic make, model and mileage, its valuations over time and, if you complete a sale
          through our platform, a record of that sale.
        </SectionPrivacyContent>
        <SectionPrivacyContent title="Information we obtain from public sources">
          We obtain information about your Cosmetic and its ownership from the NZTA, such as WOF records.
        </SectionPrivacyContent>
        <SectionPrivacyContent title="Records of communications you have with us">
          If you contact us with a question or query, or to provide us with feedback, we will keep a record of your
          communications with us.
        </SectionPrivacyContent>
        <SectionPrivacyContent title="Other information you provide to us voluntarily, including as part of a survey or promotion">
          This may include data that you provide to us if you enter a competition or prize draw on our Website or the
          details of any feedback that you provide to one of our online or in-person surveys or focus groups. Typically,
          we will obtain your consent before you participate in any surveys or focus groups.
        </SectionPrivacyContent>
        <SectionPrivacyContent title="Technical information about your device and website usage">
          <span>When you use our Website, we collect certain technical information including:</span>
          <ul className="ulWithDotListStyle">
            <li>details about your device, such as your IP address, device type, operating system and browser;</li>
            <li>
              information relating to use of the Website, such as the pages you visit and elements of the page you
              interact with. We do this through the deployment of cookies and similar technologies on your device. For
              further information about how we make use of cookies, please refer to our{" "}
              <span
                className="cursor-pointer font-semibold text-secondary-4 hover:underline"
                onClick={() => setActiveCategory(1)}
              >
                Cookie policy.
              </span>
            </li>
          </ul>
        </SectionPrivacyContent>
      </div>
      <SectionPrivacyContent title="How we use your personal information">
        <span>We use personal information about you for various purposes connected with our Services, including:</span>
        <ul className="ulWithDotListStyle">

          <li>to provide you with up-to-date valuations of your Cosmetic;</li>
          <li>for internal management, administrative and organisational reasons;</li>
          <li>
            to share information with our suppliers and other third parties in order to provide you with the Services
            which you have requested of us;
          </li>
          <li>
            to develop and improve our business, through the use of data analytics and benchmarking. In order to use
            your personal information, we must have a legal basis for doing so. The legal bases that we rely upon are
            explained further in the “find out more” section below. We will only use your personal information where it
            is necessary:
          </li>
          <li>to fulfil our obligation to provide our Services to you;</li>
          <li>to comply with a legal obligation to which we are subject;</li>
          <li>
            for our legitimate business interests, so long as our interest does not conflict with your own interests,
            rights, and freedoms under applicable data protection laws. .
          </li>
          <span className="block">
            Where none of the above reasonably applies, we will request your consent (which we will ask for before we
            use your information).
          </span>
          <span
            className={twMerge(
              "cursor-pointer font-semibold text-secondary-4 hover:underline",
              showMoreContent["personalInformation"] && "hidden",
            )}
            onClick={() =>
              setShowMoreContent(pre => {
                return {
                  ...pre,
                  personalInformation: true,
                };
              })
            }
          >
            Find out more…
          </span>
        </ul>
      </SectionPrivacyContent>
      <div
        className={twMerge(
          "invisible max-h-0 overflow-hidden opacity-0 transition-all duration-300",
          showMoreContent["personalInformation"] && "visible max-h-[9999px] opacity-100",
        )}
      >
        <p className="mb-3 text-sm text-text-8 laptop:mb-5 laptop:text-base">
          The table below sets out further information about the purposes for which we use information about you, with
          the corresponding methods of collection and legal basis that we rely upon for its use.
        </p>
        <SectionPrivacyContent title="Information we obtain from third parties">
          We may also work with third parties (including, for example, business partners, service providers, advertising
          networks, analytics providers, automotive data providers, search information providers or social networks) and
          may receive information about you from them to make sure our Services are as effective as possible.
        </SectionPrivacyContent>
        <div className="my-5 bg-text-1 px-6 pb-5 pt-5 tablet:my-8 tablet:px-10 tablet:pb-8 laptop:my-10 laptop:px-16 laptop:pb-16 laptop:pt-9">
          <div className="mb-6 flex gap-12 tablet:mb-10 tablet:gap-16 laptop:mb-14 laptop:gap-28">
            <div className="w-[50%] text-2xl font-semibold text-text-10">Purpose</div>
            <div className="w-[50%] text-2xl font-semibold text-text-10">
              Method of collection and legal basis for processing
            </div>
          </div>
          <div className="mb-6 flex gap-12 tablet:mb-10 tablet:gap-16 laptop:mb-14 laptop:gap-28">
            <div className="flex w-[50%]">
              <SectionPrivacyContent title="To facilitate your use of our Services and to create and manage your account">

              </SectionPrivacyContent>
            </div>
            <div className="flex w-[50%] flex-col gap-14">
              <div>
                <SectionPrivacyContent title="Method of collection">
                  <span className="font-medium text-text-9">
                    This information will be provided by you directly when you either (i) first complete a Cosmetic valuation
                    request, (ii) subscribe to our valuation tracker tool, (iii) set up an account with us, (iv) and
                    then during the course of using our Services. Some of this information will be collected via our
                    valuation app (in the form of basic information and photos of your Cosmetic), and via our document
                    capture feature, through which you will provide photographs or scans of documents relating to you
                    and the Cosmetic for which you are using our Services.
                  </span>
                </SectionPrivacyContent>
                <SectionPrivacyContent title="Legal basis">
                  <span className="font-medium text-text-9">
                    We use this information because it is necessary for us to do so in order to provide the Services
                    which you have requested. In all other cases, it is in our legitimate business interest to provide
                    efficient Services and to verify details relating to the Cosmetic being sold via our Services.
                  </span>
                </SectionPrivacyContent>
              </div>
            </div>
          </div>
          <div className="mb-6 flex gap-12 tablet:mb-10 tablet:gap-16 laptop:mb-14 laptop:gap-28">
            <SectionPrivacyContent
              title="To confirm your authority to sell your Cosmetic and to prevent fraud"
              className="w-[50%]"
            >
              <span className="font-medium text-text-9">
                In some cases, we will use the photographs or scans of documents which you submit to us to ascertain
                your right to sell a given Cosmetic, and to prevent fraud.
              </span>
            </SectionPrivacyContent>
            <div className="w-[50%]">
              <SectionPrivacyContent title="Method of collection">
                <span className="font-medium text-text-9">
                  This information is collected via our document capture feature
                </span>
              </SectionPrivacyContent>
              <SectionPrivacyContent title="Legal basis">
                <span className="font-medium text-text-9">
                  It is in our legitimate business interest to ensure sellers have the right to sell their Cosmetic via our
                  Services, and to prevent fraudulent activity on our platform.
                </span>
              </SectionPrivacyContent>
            </div>
          </div>
          <div className="mb-6 flex gap-12 tablet:mb-10 tablet:gap-16 laptop:mb-14 laptop:gap-28">
            <SectionPrivacyContent title="To facilitate payment to you" className="w-[50%]">
              <span className="font-medium text-text-9">
                We will collect and share your bank account details with either the relevant Cosmetic Buying Partner or our
                third party payments provider, in order to facilitate payment to you of the proceeds of the sale of your
                Cosmetic.
              </span>
            </SectionPrivacyContent>
            <div className="w-[50%]">
              <SectionPrivacyContent title="Method of collection">
                <span className="font-medium text-text-9">
                  Your bank account details will be collected via our document capture feature, when you set up your
                  account.
                </span>
              </SectionPrivacyContent>
              <SectionPrivacyContent title="Legal basis">
                <span className="font-medium text-text-9">
                  This information is necessary for us to perform the contract we have with you where you have sold your
                  Cosmetic to a Cosmetic Buying Partner through our platform.
                </span>
              </SectionPrivacyContent>
            </div>
          </div>
          <div className="mb-6 flex gap-12 tablet:mb-10 tablet:gap-16 laptop:mb-14 laptop:gap-28">
            <SectionPrivacyContent title="To communicate with you" className="w-[50%]">
              <span className="font-medium text-text-9">
                We will provide confirmation of Cosmetic Buying Partners’ offers by email and text message after you complete
                a valuation. We will remind you about your offers from Cosmetic Buying Partners for a set period following a
                valuation, if you haven’t sold your Cosmetic through our platform (note that offers expire after 7 days so
                you will need to re-value your Cosmetic to receive up-to-date offers).If you haven’t sold your Cosmetic through
                our platform, we will sometimes remind you to re-value your Cosmetic, if we consider there to be preferential
                offers or times to sell your Cosmetic. If you have signed up for our valuation tracker, we will provide you
                with regular updates as to the value of your Cosmetic, including when might be a great time to sell. We will
                provide you with customer support and answers and/or respond to any queries or feedback that you send to
                us. To assist you with any technical problems you have with the Services or Website. To collect reviews
                of our Services and those of our Cosmetic Buying Partners in order to improve our business. To update you
                with any changes to our terms and conditions / other policies.
              </span>
            </SectionPrivacyContent>
            <div className="w-[50%]">
              <SectionPrivacyContent title="Method of collection">
                <span className="font-medium text-text-9">
                  This information is collected any time when we communicate with you or you communicate with us.
                </span>
              </SectionPrivacyContent>
              <SectionPrivacyContent title="Legal basis">
                <span className="font-medium text-text-9">
                  It is our legitimate business interest to inform you of relevant information in relation to the
                  Services that we provide, respond to your communications and to improve our business.
                </span>
              </SectionPrivacyContent>
            </div>
          </div>
          <div className="mb-6 flex gap-12 tablet:mb-10 tablet:gap-16 laptop:mb-14 laptop:gap-28">
            <SectionPrivacyContent
              title="Internal management, administrative and organisational reasons"
              className="w-[50%]"
            >
              <span className="font-medium text-text-9">
                We will provide confirmation of Cosmetic Buying Partners’ offers by email and text message after you complete
                a valuation. We will remind you about your offers from Cosmetic Buying Partners for a set period following a
                valuation, if you haven’t sold your Cosmetic through our platform (note that offers expire after 7 days so
                you will need to re-value your Cosmetic to receive up-to-date offers).If you haven’t sold your Cosmetic through
                our platform, we will sometimes remind you to re-value your Cosmetic, if we consider there to be preferential
                offers or times to sell your Cosmetic. If you have signed up for our valuation tracker, we will provide you
                with regular updates as to the value of your Cosmetic, including when might be a great time to sell. We will
                provide you with customer support and answers and/or respond to any queries or feedback that you send to
                us. To assist you with any technical problems you have with the Services or Website. To collect reviews
                of our Services and those of our Cosmetic Buying Partners in order to improve our business. To update you
                with any changes to our terms and conditions / other policies.
              </span>
            </SectionPrivacyContent>
            <div className="w-[50%]">
              <SectionPrivacyContent title="Method of collection">
                <span className="font-medium text-text-9">
                  This information is collected from you both directly and indirectly.
                </span>
              </SectionPrivacyContent>
              <SectionPrivacyContent title="Legal basis">
                <span className="font-medium text-text-9">
                  It is our legitimate business interest to manage and properly administer our Services and our Website.
                  It is our legitimate business interest to retain information to be able to bring or defend actual or
                  potential legal claims. In other instances, we may be required to keep or process personal data to
                  comply with laws and regulations to which we are subject.
                </span>
              </SectionPrivacyContent>
            </div>
          </div>
          <div className="mb-6 flex gap-12 tablet:mb-10 tablet:gap-16 laptop:mb-14 laptop:gap-28">
            <SectionPrivacyContent title="To share information with service providers" className="w-[50%]">
              <span className="font-medium text-text-9">
                Please refer to the section ‘Who do we share your information with, and for what purposes?’ for more
                detail.
              </span>
            </SectionPrivacyContent>
            <div className="w-[50%]">
              <SectionPrivacyContent title="Method of collection">
                <span className="font-medium text-text-9">
                  This may include any of the information we hold about you, whether collected by direct or indirect
                  means.
                </span>
              </SectionPrivacyContent>
              <SectionPrivacyContent title="Legal basis">
                <span className="font-medium text-text-9">
                  We rely on trusted third party service providers in order for us to provide you with the Services
                  which you have requested.
                </span>
              </SectionPrivacyContent>
            </div>
          </div>
          <div className="flex gap-12 tablet:gap-16 laptop:gap-28">
            <SectionPrivacyContent title="To improve and develop our Services and Website" className="w-[50%]">
              <span className="font-medium text-text-9">
                We conduct data analytics and benchmarking in order to understand, for example, the best performing Cosmetic
                Buying Partners and the most relevant Cosmetic Buying Partner for given vehicles and customer types. This
                enables us to improve our Services and offer the best and most relevant offers to you and our other
                customers. We conduct data analytics and benchmarking to understand how our Website and Services are
                used; for example, which pages are visited and which elements of the page are interacted with. This
                enables us to improve our Website and Services. We conduct data analytics on the vehicle data we
                collect, for example to understand the most popular makes, models or fuel types of vehicle and their
                values. This enables us to release information into the public domain about trends and changes in Cosmetic
                ownership.
              </span>
            </SectionPrivacyContent>
            <div className="w-[50%]">
              <SectionPrivacyContent title="Method of collection">
                <span className="font-medium text-text-9">
                  This information is collected across your interactions with the Website and your use of our Services.
                </span>
              </SectionPrivacyContent>
              <SectionPrivacyContent title="Legal basis">
                <span className="font-medium text-text-9">
                  It is our legitimate business interest to identify ways to develop and improve our Services, Website
                  and business.
                </span>
              </SectionPrivacyContent>
            </div>
          </div>
        </div>
        <div className="mb-10 text-text-8">
          In some instances, we may use your personal information in ways that are not described above. We will inform
          you before doing so and, if necessary, seek your consent to do so.
        </div>
      </div>
      <SectionPrivacyContent title="Who do we share your information with and for what purposes?">
        <span>We may share your personal information with:</span>
        <ul className="ulWithDotListStyle">
          <li>our Cosmetic Buying Partners;</li>
          <li>
            service providers, such as data storage providers, content and data providers and customer management and
            support providers.
          </li>
        </ul>
        <span
          className={twMerge(
            "cursor-pointer font-semibold text-secondary-4 hover:underline",
            showMoreContent["purposes"] && "hidden",
          )}
          onClick={() =>
            setShowMoreContent(pre => {
              return {
                ...pre,
                purposes: true,
              };
            })
          }
        >
          Find out more…
        </span>
      </SectionPrivacyContent>
      <div
        className={twMerge(
          "invisible max-h-0 overflow-hidden opacity-0 transition-all duration-300",
          showMoreContent["purposes"] && "visible max-h-[9999px] opacity-100",
        )}
      >
        <SectionPrivacyContent title="Our Cosmetic Buying Partners">
          <p>
            When you request a Cosmetic valuation, we share information about your vehicle (such as its registration number,
            make, model and mileage) together with your postal code with our Cosmetic Buying Partners in order to provide you
            with a valuation. This valuation is valid for 7 days. If you select a valuation offer provided by a Cosmetic
            Buying Partner, we will also share your name, email address and telephone number to enable them to contact
            you about your Cosmetic, so that you can proceed with your sale should you wish to do so. Further, if the
            selected Cosmetic Buying Partner is a Dealer Partner, we will also share with them the information we collect via
            the document capture feature (see ‘Sales Documentation’ and ‘Your bank account details’ in ‘Information we
            process about you’ above), in order to facilitate your sale to them. If the selected Cosmetic Buying Partner is
            an Online Cosmetic Buyer, they will inform you of any further information required from you in order for them to
            progress the sale.
          </p>
          <p>
            We also will share your information with our Cosmetic Buying Partners for analysis, reporting, billing and
            debugging purposes. If you proceed with the sale of your Cosmetic, we will receive certain information about your
            transaction from the relevant Cosmetic Buying Partner, such as the date of your Cosmetic sale and the final price you
            were paid, for billing and reporting purposes.
          </p>
          <p>
            We work with several Cosmetic Buying Partners. Each of these partners is a controller for any personal
            information we share with them. We recommend that you refer to the relevant Cosmetic Buying Partner’s Privacy
            Policy for more information on how your information will be handled by them.
          </p>
          <p>
            If you would like to receive a current list of our Cosmetic Buying Partners then you can get in touch with us
            using the details provided in the section <strong>‘Contact Information’</strong>, below.
          </p>
        </SectionPrivacyContent>
        <SectionPrivacyContent title="Our Service Providers">
          <span>
            We use carefully selected service providers, which process personal information about you on our behalf, as
            described below:
          </span>
          <ul className="ulWithDotListStyle">
            <li>
              Data storage providers: Such providers help operate the functionality of the Website and enable us to
              provide user accounts. They also provide backup, debugging and logging purposes.
            </li>
            <li>
              Content and data providers: Such providers assist us to, for example, verify your email address and
              telephone number, use your town / city to calculate routes between you and our Cosmetic Buying Partners, obtain
              your WOF records, and use your postcode to geocode your approximate location.
            </li>
            <li>
              Customer management and support providers: Such providers may support you with the sales process for your
              Cosmetic, over the phone. They may also deliver personalised email or SMS reminders to you in relation to your
              Cosmetic valuation, and collect customer reviews of our Services.
            </li>
            <li>
              Transport providers: Such providers may be engaged by us and/or our Cosmetic Buying Partners to carry out the
              collection and transport of your Cosmetic. In order to provide the transportation services, they will receive
              your address, your contact details, details of the condition and appraisal of your vehicle, photographs of
              your vehicle, and scans of any vehicle-related documents.
            </li>
            <li> Payment providers: Such providers ensure you receive the proceeds from the sale of your Cosmetic.</li>
          </ul>
          <div>
            If you would like to receive a full list of our suppliers and other third parties who we share your
            information with, then you can get in touch with us using the details provided in the section{" "}
            <strong>Contact Information</strong>.
          </div>
          <span>We may also share your personal information with third parties in other circumstances:</span>
          <ul className="ulWithDotListStyle">
            <li>
              in the event that we sell or buy any part of our business or its assets, in which case we may disclose
              your personal information to the prospective seller or buyer of such business or assets, along with its
              professional advisers;
            </li>
            <li>
              if required, in order to obtain professional advice concerning a complaint, claim or potential claim
              relating to you;
            </li>
            <li>
              where we are required to comply with certain legal and regulatory requirements, and may process your
              personal information for compliance with such legal or regulatory obligation, to which we or regulators or
              law enforcement agencies are subject.
            </li>
          </ul>
        </SectionPrivacyContent>
        <SectionPrivacyContent title="Storage of your personal information">
          <p>
            Information about you may be transferred outside  Viet Nam to a country, territory or international
            organisation that may not have Viet Nam equivalent data protection standards.
          </p>
          <p>
            This may be when we transfer your personal information to our trusted third party service providers (for the
            purposes described above) outside of Viet Nam.
          </p>
          <p>
            In such cases, we will ensure that your personal information is protected by implementing appropriate
            safeguards. This includes assessing the risk and protections afforded by laws in any third country, having
            in place appropriate technical and organisational measures to protect your personal information, and
            enforcing strong contractual commitments with our third party service providers. assessing the. If you would
            like more information about any of the transfer safeguards on which we rely please contact us using the
            details set out in this privacy policy.
          </p>
        </SectionPrivacyContent>
        <SectionPrivacyContent title="How do we protect your personal information?">
          We implement appropriate technical and organisational measures to protect personal information that we hold
          from unauthorised disclosure, use, alteration or destruction. Where appropriate, we use encryption and other
          technologies that can assist in securing the information you provide. We also require our service providers to
          comply with strict data privacy requirements.
        </SectionPrivacyContent>
        <SectionPrivacyContent title="How long will your personal information be kept?">
          The period for which we may retain information about you will depend on the purposes for which the information
          was collected, whether you have requested the deletion of the information, and whether any legal obligations
          require the retention of it (for example, for regulatory compliance). We will not retain information about you
          for longer than is necessary to fulfil the purposes for which it was collected.
        </SectionPrivacyContent>
      </div>
      <SectionPrivacyContent title="Your rights">
        <span>
          You may have some or all of the following rights in respect of the information about you that we process:
        </span>
        <ul className="ulWithDotListStyle">
          <li>the right to request us to give you access to your personal information;</li>
          <li>the right to request us to rectify it, update it, or erase it;</li>
          <li>the right to request us to restrict our using it, in certain circumstances;</li>
          <li>the right to object to our using it, in certain circumstances;</li>
          <li>the right to withdraw your consent to our using it;</li>
          <li>the right to have your personal data transferred to a third party, in certain circumstances;</li>
          <li>the right to opt out from our using it for direct marketing;</li>
          <li>
            the right to lodge a complaint with the Privacy Commissioner’s Office, which is responsible for upholding
            your data protection rights in  Viet Nam.
          </li>
        </ul>
        <div>
          You are able to exercise these rights by contacting us using the details set out in the section{" "}
          <strong>Contact Information.</strong>
        </div>
        <span
          className={twMerge(
            "cursor-pointer font-semibold text-secondary-4 hover:underline",
            showMoreContent["rights"] && "hidden",
          )}
          onClick={() =>
            setShowMoreContent(pre => {
              return {
                ...pre,
                rights: true,
              };
            })
          }
        >
          Find out more…
        </span>
      </SectionPrivacyContent>
      <div
        className={twMerge(
          "invisible max-h-0 overflow-hidden opacity-0 transition-all duration-300",
          showMoreContent["rights"] && "visible max-h-[9999px] opacity-100",
        )}
      >
        <div>You have the rights set out in the table below:</div>
        <div className="my-5 bg-text-1 px-6 pb-5 pt-5 tablet:my-8 tablet:px-10 tablet:pb-8 laptop:my-10 laptop:px-16 laptop:pb-16 laptop:pt-9">
          <div className="mb-6 flex gap-12 tablet:mb-10 tablet:gap-16 laptop:mb-14 laptop:gap-28">
            <SectionPrivacyContent title="Right in respect of the information we hold about you" className="w-[50%]">
              <span className="font-medium text-text-9">
                Right to information about who we are and how we use your personal information
              </span>
            </SectionPrivacyContent>
            <SectionPrivacyContent
              title="Further detail (note: certain legal limits to all these rights apply)"
              className="w-[50%]"
            >
              <span className="font-medium text-text-9">
                This is included in this privacy policy. In particular: our name and contact details; the purposes of
                our processing; the categories of personal information which we process and why; the categories of
                persons with whom we share the information and, where any person is outside  Viet Nam, the appropriate
                safeguards for protecting the information; the sources of personal information, where we do not collect
                it from you; and the criteria for determining the period for which we will store the information.
              </span>
            </SectionPrivacyContent>
          </div>
          <div className="mb-6 flex gap-12 font-medium text-text-9 tablet:mb-10 tablet:gap-16 laptop:mb-[76px] laptop:gap-28">
            <div className="w-[50%]">Right to access copies of the information which we process about you</div>
            <div className="w-[50%]">
              At your request, we will provide you with a copy of the personal information which we hold about you.
              Where records also contain personal information about other individuals, sensitive business or
              confidential information, or anything which might be covered by legal protections, these may be redacted
              from our response to your request.
            </div>
          </div>
          <div className="mb-6 flex gap-12 font-medium text-text-9 tablet:mb-10 tablet:gap-16 laptop:mb-[76px] laptop:gap-28">
            <div className="w-[50%]">
              Right to ask that we rectify information or records about you where they are inaccurate of incomplete
            </div>
            <div className="w-[50%]">
              This applies if the information we hold is inaccurate or incomplete and you believe it requires updating.
            </div>
          </div>
          <div className="mb-6 flex gap-12 font-medium text-text-9 tablet:mb-10 tablet:gap-16 laptop:mb-[76px] laptop:gap-28">
            <div className="w-[50%]">Right to request erasure or deletion of your personal data</div>
            <div className="w-[50%]">
              This applies if: the personal information we hold about you is no longer necessary in relation to the
              purposes for which we use it; we use the personal information on the basis of your consent and you
              withdraw your consent (in this case, we will remember not to contact you again, unless you tell us you
              want us to delete all information about you, in which case we will respect your wishes);we use the
              personal information on the basis of legitimate interest and we find that, following your objection, we do
              not have an overriding interest in continuing to use it; the personal information was unlawfully obtained
              or used; or to comply with a legal obligation. Please note, the right to have your data erased is not
              absolute. We may have legal reasons to retain your information. For example, where we are required to
              retain it in order to comply with a legal obligation, where it has been truly anonymised, or where we
              might need it to defend or commence legal proceedings.
            </div>
          </div>
          <div className="mb-6 flex gap-12 font-medium text-text-9 tablet:mb-10 tablet:gap-16 laptop:mb-[76px] laptop:gap-28">
            <div className="w-[50%]">Right to ask that we restrict the way in which we use your personal data</div>
            <div className="w-[50%]">
              This right applies, temporarily while we look into your case, if you: contest the accuracy of the personal
              information we use; or have objected to our using the personal information on the basis of legitimate
              interest. If you make use of your right in these cases, we will tell you before we use the personal
              information again. This right applies also if: our use is unlawful and you oppose the erasure of the
              personal information; or we no longer need the personal information, but you require it to establish a
              legal case.
            </div>
          </div>
          <div className="mb-6 flex gap-12 font-medium text-text-9 tablet:mb-10 tablet:gap-16 laptop:mb-[76px] laptop:gap-28">
            <div className="w-[50%]">Right to object to our processing of your personal data</div>
            <div className="w-[50%]">
              You have two rights here: If we use your personal information for direct marketing, you can “opt out”
              (without the need to justify it) and we will comply with your request. If we use your personal information
              on the basis of legitimate interest for purposes other than direct marketing, you can object to our using
              it for those purposes, giving an explanation of your particular situation, and we will consider your
              objection.
            </div>
          </div>
          <div className="mb-6 flex gap-12 font-medium text-text-9 tablet:mb-10 tablet:gap-16 laptop:mb-[76px] laptop:gap-28">
            <div className="w-[50%]">Right to withdraw your consent to our using your personal data</div>
            <div className="w-[50%]">
              This right applies to any personal information which we have collected and processed based on your
              consent. You have the right at any time to withdraw the consent you have provided to us.
            </div>
          </div>
          <div className="flex gap-12 font-medium text-text-9 tablet:gap-16 laptop:gap-28">
            <div className="w-[50%]">
              Right to have your personal data transferred to a third party (also known as the right to data
              portability)
            </div>
            <div className="w-[50%]">
              This right applies: to personal information that you have provided to us; and if we use that personal
              information on the basis either of your consent, or on the basis of discharging our contractual
              obligations to you. If both parts (i) and (ii) above apply, you have the right to receive the information
              back from us in a commonly used format (such as .csv, PDF, Word etc).
            </div>
          </div>
        </div>
      </div>
      <SectionPrivacyContent title="Contact information">
        For the purpose of  Viet Nam data protection laws, the controller of your personal information when you use
        our Website and/or Services is Cosmetica Technologies Ltd (Company Number 8140473 or NZBN 9429048794084). If you have
        any questions, or wish to exercise your rights, please contact us at any time on privacy@Cosmetica.co.nz.
      </SectionPrivacyContent>
    </div>
  );
};

export default Privacy;
