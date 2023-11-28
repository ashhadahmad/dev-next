import { Icon } from "@iconify/react";
import { GetStartedBtn, InfiniteSlider } from ".";

const Courses = () => {
  return (
    <div className="px-4 my-4 lg:px-0 w-full lg:max-w-5xl mx-auto box-border">
      <div className="bg-gradient-to-b from-cyan-400 from-60% lg:text-xl rounded-xl box-border ">
        <div className="flex flex-col lg:flex-row p-4 gap-4">
          <div className="lg:max-w-lg flex items-center gap-2 flex-col">
            <div className="mt-8 text-sm lg:text-md font-semibold inline-block p-2 rounded-2xl bg-white">
              <div className="flex items-center select-none gap-1">
                <Icon
                  className="inline-block"
                  height="1rem"
                  icon="ph:student-bold"
                />
                For Beginners
              </div>
            </div>
            <div className="text-5xl font-extrabold text-center">
              {" "}
              <p className="">
                Become a{" "}
                <span className="bg-gradient-to-r from-black  to-black/20 bg-[length:100%_3px] lg:bg-[length:100%_5px] bg-no-repeat bg-bottom">
                  PRO
                </span>{" "}
                in
              </p>
              <p>Python</p>
            </div>
            <div className="pt-4 lg:text-xl text-center px-4 text-lg font-light">
              Maybe this is your first time learning how to code, or you're
              someone who already has expreience with programming. Don't worry,
              this course will take you from the basics of programming with
              python to Intro to Machine Learning and Web Development. We'll
              start with intro to programming, then learn the syntax of python.
              Once you're comfortable in writing simple apps in python, we'll
              move to Data Structures and Algorithms. And lastly we'll end with
              intro to Machine Learning and Web Development with Python.
            </div>
          </div>
          <div className="lg:mt-4">
            <InfiniteSlider />
          </div>
        </div>
        <div className="px-12 font-black text-5xl">Rs. 2,999</div>
        <div className="px-12 py-4 flex gap-4">
          <GetStartedBtn text="I want to learn Python" />
          <GetStartedBtn text="More Info" />
        </div>
      </div>
    </div>
  );
};

export default Courses;
