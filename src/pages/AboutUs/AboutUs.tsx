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
                Gear Technologies is founded in 2022 with a mission to provide New Zealanders with an alternative option
                to sell their vehicle online. We provide a new platform that utilises the power of technology to make
                selling your vehicle much easier, faster and for free. It’s a fresh approach which makes it accessible
                for everyone. Technology opens doors in how we can trade today, with minimal processes and contact. We
                can now offer a better selling experience that will bring back more time to your day, remove stress from
                your life and the entire process can be done without you having to leave your home.
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
              Gear Technologies is the future of selling and buying vehicles in New Zealand
            </div>
            <p className="mt-5 text-base text-text-8 laptop:mt-6 ">
              We connect you with a network of car dealers nationwide at your fingertips who bid daily on your listed
              vehicle. We have created a platform where our customers can complete a car sale 100% online within as
              quick as 24 hours. {<br />} Our strong relationships with car dealers in the country are also supported by
              us to ensure they grow their dealerships with new and the best vehicle stock possible.
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
                <p className="text-lg font-bold text-text-8">Brooklyn Simmons</p>
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
              We value people and are always searching for talent who are driven to be a part of the Gear Technologies
              team. Whether you’re a car fanatic, believe in what we’re offering and want to be a part of it. Get in
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
          <p className="text-text-8">Gear is grateful to be supported by some leading investors.</p>
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
            <div className="text-2xl font-semibold text-text-9 laptop:text-3xl">More about Gear</div>
          </div>
          <div className="flex flex-col items-center justify-between laptop:flex-row">
            <div className="mt-5 w-full border-t-[12px] border-t-primary bg-white px-5 pb-8 pt-5 tablet:mt-8 laptop:mr-20 laptop:mt-[60px] laptop:w-auto laptop:px-[30px] laptop:pb-[46px] laptop:pt-8">
              <div className="text-2xl font-bold text-secondary-4">Are you a car dealer?</div>
              <p className="mb-4 mt-4 text-lg font-normal text-text-8 tablet:mb-8 laptop:mb-[43px] laptop:text-base">
                Cut the fuss and middleman by connecting with private car sellers directly. Better invest in your time
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
