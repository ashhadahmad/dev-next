import { Icon } from "@iconify/react";

const Courses = () => {
  return (
    <div className="px-4 my-4 lg:px-0 w-full lg:max-w-5xl mx-auto box-border">
      <div className="bg-gradient-to-b from-yellow-400 from-60% p-4 lg:text-xl rounded-xl box-border flex items-center gap-2 flex-col">
        <div className="mt-8 text-sm font-semibold inline-block p-2 rounded-2xl bg-white">
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
        <div className="pt-4 text-center px-4 text-lg font-light">
          Learn Python completely from scratch. Maybe this is your first time
          learning how to code, or you're someone who already has expreience
          working with programming. Don't worry, this course starts with python
          from scracth. We'll only study whats relevant in the market todat.
          We'll start with intro to programming, then learn the syntax of
          python. Once you're comfortable in writing simple apps in python,
          we'll move to Data Structures and Algorithms. And lastly we'll end the
          course with a capstone project encompassing Machine Learning and Web
          Development with Python.
        </div>
      </div>
    </div>
  );
};

export default Courses;
