import Image from "next/image";
import HeroImage from "../assets/AshhadHero.png";
import GetStartedBtn from "./GetStartedBtn";
import HeroFooter from "./HeroFooter";

const Hero = () => {
  return (
    <div className="w-full lg:max-w-5xl mx-auto box-border">
      <div className=" mt-16 lg:mt-14 flex flex-col gap-4 lg:flex-row w-full justify-center content-center">
        <div className="flex-1 text-center lg:text-start flex flex-col justify-center">
          <div className="mx-4 lg:mx-0 box-border">
            <h1 className="text-3xl lg:mt-0 mt-6 lg:text-6xl font-bold">
              Let's learn programming,{" "}
              <a className="underline decoration-red-500/30">together.</a>
            </h1>
            <h3 className="text-lg text-gray-950 my-6">
              From{" "}
              <span className="font-bold underline decoration-blue-500/30">
                Data Structures and Algorithms
              </span>{" "}
              to{" "}
              <span className="font-bold underline decoration-blue-500/30">
                Industry level development
              </span>
              . Learn everything you need to be{" "}
              <span className="font-bold bg-gradient-to-r from-yellow-300 from-50%">
                The Complete Developer.
              </span>
            </h3>
            <div className=" ">
              <GetStartedBtn />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="mx-4 max-w-full lg:mx-0">
            <Image
              src={HeroImage}
              width={640}
              className="box-border max-w-xl w-full block m-auto select-none pointer-events-none"
              alt="ashhad ahmad"
            />
          </div>
        </div>
      </div>
      <HeroFooter />
    </div>
  );
};

export default Hero;
