import { Icon } from "@iconify/react";
import Image from "next/image";
import Amazon from "../assets/amazon.svg";
import NoBS from "../assets/nobs.png";
import GetStartedBtn from "./GetStartedBtn";

const About = () => {
  return (
    <div className="w-full">
      <div className="bg-dotted-spacing-6 bg-dotted-gray-300 py-12">
        <div className="w-full lg:max-w-5xl mx-auto box-border">
          <div className="px-4 lg:px-0 w-full lg:max-w-5xl text-base lg:text-xl box-border flex flex-col gap-6">
            <p className="text-2xl lg:text-5xl font-semibold font-sans">
              Learning how to code is{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 bg-[length:100%_3px] lg:bg-[length:100%_5px] bg-no-repeat bg-bottom">
                actually very hard.
              </span>{" "}
            </p>
            <ul className="flex gap-4 py-4 text-base lg:text-xl">
              <li className="flex-1 border-2 flex items-center border-gray-400/10 rounded-md p-1 text-center">
                <span>
                  There's <span className="font-bold">so much</span> to learn.
                  So many{" "}
                  <span className="italic">
                    languages, frameworks, technologies.
                  </span>
                </span>
              </li>
              <li className="flex-1 border-2 flex items-center border-gray-400/10 rounded-md p-1 text-center">
                <span>
                  I don't understand{" "}
                  <span className="bg-gradient-to-r from-pink-400 via-fuchsia-500-500 to-red-700 bg-[length:100%_2px] bg-no-repeat bg-bottom">
                    Data Structures and Algorithms.
                  </span>
                </span>
              </li>
              <li className="flex-1 border-2 flex items-center border-gray-400/10 rounded-md p-1 text-center">
                Everyone else seems to know so much more.
              </li>
            </ul>
            <div className="text-base lg:text-xl font-medium">
              If you've felt the same, You are not alone. Learning how to code
              can be{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 bg-[length:100%_3px]  bg-no-repeat bg-bottom">
                very overwhelming
              </span>
              .{" "}
              <ul className="font-light italic px-4">
                <li>What to study for interviews ? </li>
                <li>What projects to build ? </li>
                <li>How to get referrals ? </li>
              </ul>
            </div>
            <p className="text font-medium">
              What you need is a step by step guide to go from ABSOLUTE BEGINNER
              TO EXPERT.
            </p>
            <p className="text font-medium">
              I'm combining my experience of working at
              <Icon
                className="inline mx-2"
                height="1.1rem"
                icon="logos:google"
              />
              and
              <Image
                className="h-4 inline select-none mx-2"
                height={16}
                src={Amazon}
                alt="Amazon"
              />
              and interviewing for several top tech companies to help you{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 bg-[length:100%_2px] bg-no-repeat bg-bottom">
                kickstart your coding journey today !
              </span>
            </p>

            <span className="flex flex-row items-center align-middle">
              <span>No Filler. No Frills.</span>
              <Image
                className="invert"
                width={100}
                height={100}
                src={NoBS}
                alt="no bullshit"
              />{" "}
              . Just the most important topics.
            </span>
            <GetStartedBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
