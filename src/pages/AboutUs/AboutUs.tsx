import { ImgCar, ImgInvestor, ImgInvestorMobile, ImgMember, ImgTechnology, ImgTick } from "assets/images/aboutUs";
import { PrimaryButton } from "components";
import breakPoints from "constants/breakPoints";
import useWindowDimensions from "hooks/useWindowDimensions";

const members = [1, 2, 3, 4, 78, 5, 5, 8];

function AboutUs() {
  const dimensions = useWindowDimensions();
  return (
    <div>
      <div className="layout-full bg-background-1 pt-[68px] laptop:pt-[72px]">
        <div className="layout-padding">
          <div className="pb-5 pt-11 tablet:pt-14 laptop:pb-[120px] laptop:pt-[60px]">
            <div className="flex">
              <p className="text-sm text-text-6 tablet:text-base ">Home</p>
              <span className="mx-2 text-base text-[rgba(0,0,0,0.6)]">/</span>
              <p className="text-sm text-text-10 tablet:text-base">About us</p>
            </div>
            <div className="mt-3 text-2xl font-bold text-secondary-5 tablet:text-3xl laptop:mt-6 laptop:text-4xl">
              About Us
            </div>
            <div className="mt-6 flex flex-col items-center justify-between gap-y-10 laptop:flex-row laptop:items-start">
              <p className="w-full text-base text-text-8 laptop:w-[420px]">
              Cosmetica Technologies is a newly founded company that aims to revolutionize the way people buy and sell cosmetics. We believe that everyone should have access to high-quality cosmetic products without having to break the bank. That's why we provide a platform that utilizes the power of technology to make buying and selling cosmetics much easier, faster, and affordable. Our innovative approach allows us to offer a wide range of cosmetics from the world's top brands, all in one place. We want to create a better shopping experience that will save you time, reduce stress, and allow you to shop from the comfort of your home. With Cosmetic Technologies, you can be confident that you're getting the best products at the best prices.
              </p>
              <div className="w-full max-w-[588px] tablet:w-[70%] laptop:w-[50%]">
                <img className="rounded-[10px]" src={ImgCar} alt="car" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-between py-8 tablet:py-16 laptop:py-[120px]">
        <div className="flex w-full flex-col items-center justify-between gap-y-10 laptop:flex-row laptop:items-start ">
          <div className="relative w-full max-w-[588px] tablet:w-[70%] laptop:w-[50%]">
            <img className="h-[auto] w-full rounded-[10px]" src={ImgTechnology} alt="technology" />
            <img
              className="absolute bottom-[-25px] right-[-22px] h-[54px] w-[54px] laptop:bottom-[-34px] laptop:right-[-30px] laptop:h-[80px] laptop:w-[80px]"
              src={ImgTick}
              alt=""
            />
          </div>
          <div className="w-full laptop:w-[420px]">
            <div className="text-2xl font-semibold text-text-9 laptop:text-3xl">
            Cosmetica is a game-changer in the beauty industry, connecting you with a network of cosmetic brands and sellers nationwide.
            </div>
            <p className="mt-5 text-base text-text-8 laptop:mt-6 ">
 
            Our platform offers a seamless and convenient way for you to buy and sell cosmetic products online, with a focus on quality and affordability.
            We work closely with our network of sellers to ensure that they are able to offer the best products to our customers, while also growing their businesses.
            With Cosmetica, you can complete a purchase or sale 100% online, in just a few clicks. 
            We are committed to making the cosmetic buying and selling experience as easy and hassle-free as possible, 
            so that you can focus on looking and feeling your best.
            </p>
          </div>
        </div>
      </div>

      <div className="pb-8 tablet:pb-16 laptop:pb-[120px]">
        <div className="mb-5 text-2xl font-semibold tablet:mb-8 laptop:mb-14 laptop:text-3xl">Our members</div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 px-0 tablet:grid-cols-3 tablet:gap-x-16 tablet:gap-y-8 tablet:px-8 laptop:grid-cols-4 laptop:gap-x-24 laptop:gap-y-14 laptop:px-12">
          {members.map((member, index) => (
            <div key={index} className="flex-col text-center">
              <div className="mb-8 flex justify-center">
                <img className="h-[206px] w-[206px]" src={ImgMember} alt="member" />
              </div>
              <div className="flex flex-col items-center justify-center ">
                <p className="text-lg font-bold text-text-8">Nguyen Van A</p>
                <span className="mt-2 text-lg font-normal text-text-6 ">CEO</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="layout-full bg-background-1 py-10 tablet:py-20 laptop:py-[120px]">
        <div className="layout-padding">
          <div className="text-2xl font-semibold text-text-9 laptop:text-3xl">Careers</div>
          <div className="mt-5 tablet:mt-8 laptop:mt-[60px]">
            <p className="text-base text-text-8 ">
              We value people and are always searching for talent who are driven to be a part of the Cosmetica Technologies
              team. Whether you’re a cosmetic fanatic, believe in what we’re offering and want to be a part of it. Get in
              touch with us about joining the team, or check out our careers page to see current positions available.
            </p>
          </div>
          <div className="mt-[30px] flex justify-center ">
            <PrimaryButton text="Contact us" className="h-[42px] w-[145px] text-base font-medium" />
          </div>
        </div>
      </div>

      <div className="py-8 tablet:py-16 laptop:py-[120px]">
        <div>
          <div className="text-2xl font-semibold text-text-9 laptop:text-3xl">Our investors</div>
        </div>
        <div className="mb-[30px] mt-5 tablet:mt-8 laptop:mt-[60px]">
          <p className="text-text-8">Cosmetica is grateful to be supported by some leading investors.</p>
        </div>
        <div>
          {dimensions.width > breakPoints.tablet ? (
            <img className="w-full" src={ImgInvestor} alt="investor" />
          ) : (
            <img className="w-full" src={ImgInvestorMobile} alt="investor" />
          )}
        </div>
      </div>

      <div className="layout-full bg-background-1 py-8 tablet:py-16 laptop:py-[120px]">
        <div className="layout-padding">
          <div>
            <div className="text-2xl font-semibold text-text-9 laptop:text-3xl">More about Cosmetica</div>
          </div>
          <div className="flex flex-col items-center justify-between laptop:flex-row">
            <div className="mt-5 w-full border-t-[12px] border-t-primary bg-white px-5 pb-8 pt-5 tablet:mt-8 laptop:mr-20 laptop:mt-[60px] laptop:w-auto laptop:px-[30px] laptop:pb-[46px] laptop:pt-8">
              <div className="text-2xl font-bold text-secondary-4">Are you a buyer?</div>
              <p className="mb-4 mt-4 text-lg font-normal text-text-8 tablet:mb-8 laptop:mb-[43px] laptop:text-base">
                Cut the fuss and middleman by connecting with private sellers directly. Better invest in your time
                and accelerate your reach nationwide and grow your dealership.
              </p>
              <div>
                <PrimaryButton text="Learn more" className="h-[42px] w-[160px] font-medium laptop:w-[145px] " />
              </div>
            </div>
            <div className="mt-20 w-full border-t-[12px] border-t-primary bg-white px-5 pb-8 pt-5 laptop:mt-[60px] laptop:w-auto laptop:px-[30px] laptop:pb-[46px] laptop:pt-8">
              <div className="text-2xl font-bold text-secondary-4">News, press and publications</div>
              <p className="mb-4 mt-4 text-lg font-normal text-text-8 tablet:mb-8 laptop:mb-[43px] laptop:text-base">
                We would be happy to comment and provide information on vehicle purchasing, industry updates or trends
                to local, nationwide and global news publishers.
              </p>
              <div>
                <PrimaryButton text="Contact us" className="h-[42px] w-[160px] font-medium laptop:w-[145px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
