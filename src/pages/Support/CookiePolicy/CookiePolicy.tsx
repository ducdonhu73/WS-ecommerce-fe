import { SupportCategory } from "../SupportPage";

interface CookiePolicyProps {
  selectedSupport: SupportCategory;
}

const CookiePolicy = ({ selectedSupport }: CookiePolicyProps) => {
  return (
    <div>
      <div className="mb-5 text-2xl font-semibold text-text-10 tablet:mb-8 laptop:mb-10">
        {selectedSupport.category}
      </div>
      <div>
        <p className="mb-3 text-lg font-bold text-text-10 laptop:mb-5">Our use of cookies</p>
        <p className="mb-5 text-sm text-text-8 tablet:mb-8 laptop:mb-10 laptop:text-base">
          Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with
          a good experience when you use our website and also allows us to improve our site. By continuing to browse the
          site, you are agreeing to our use of cookies.
        </p>
        <p className="mb-3 text-lg font-bold text-text-10 laptop:mb-5">What is a cookie?</p>
        <p className="mb-5 text-sm text-text-8 tablet:mb-8 laptop:mb-10 laptop:text-base">
          At its simplest, a cookie is a small file that a website stores on your computer so it can recognise you when
          you return to the website and remember something about you at a later date.
        </p>
        <ul className="ulWithDotListStyle mb-5 tablet:mb-8 laptop:mb-10">
          <p className="mb-5 text-lg font-bold text-text-10">What kind of cookies does Gear use?</p>
          <div className="mb-5">
            <li className="mb-2.5 font-bold text-text-9">Strictly necessary cookies</li>
            <p className="text-text-8">
              These are cookies that are required for the operation of our website. They include, for example, cookies
              that enable you to sign into your Gear account and see your offers again.
            </p>
          </div>
          <div className="mb-5">
            <li className="mb-2.5 font-bold text-text-9">Analytical/performance cookies</li>
            <p className="text-text-8">
              These cookies allow us to recognise and count the number of visitors and to see how visitors move around
              our website when they are using it. This helps us to improve the way our website works, for example, by
              ensuring that users are finding what they are looking for easily.
            </p>
          </div>
          <div className="mb-5">
            <li className="mb-2.5 font-bold text-text-9">Functionality cookies</li>
            <p className="text-text-8">
              These are used to recognise you when you return to our website. This enables us to personalise our content
              for you, greet you by name and remember your preferences (for example, remembering the number plate you
              searched on Gear so you don’t have to type it every time).
            </p>
          </div>
          <div className="mb-5">
            <li className="mb-2.5 font-bold text-text-9">Targeting cookies</li>
            <p className="text-text-8">
              These cookies record your visit to our website, the pages you have visited and the links you have
              followed. We will use this information to make our website and the advertising displayed on it more
              relevant to your interests. We may also share this information with third parties for this purpose.
            </p>
          </div>
          <div>
            <li className="mb-2.5 font-bold text-text-9">Third party cookies</li>
            <p className="text-text-8">
              Please note that third parties (including, for example, advertising networks and providers of external
              services like web traffic analysis services) may also use cookies, over which we have no control. These
              cookies are likely to be analytical/performance cookies or targeting cookies.
            </p>
          </div>
        </ul>
        <p className="mb-3 text-lg font-bold text-text-10 laptop:mb-5">Opting-out of cookies</p>
        <p className="text-sm text-text-8 laptop:text-base">
          While continued use of the Gear website assumes compliance with our current cookie policy, you can change your
          privacy settings at any time.
        </p>
      </div>
    </div>
  );
};

export default CookiePolicy;
