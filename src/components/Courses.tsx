import { Icon } from "@iconify/react";

const Courses = () => {
  return (
    <div className="px-4 my-4 lg:px-0 w-full lg:max-w-5xl mx-auto box-border">
      <div className="bg-gradient-to-b from-teal-400 from-60% p-4 lg:text-xl rounded-xl box-border flex items-center gap-2 flex-col">
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
          <p className="opacity-70">
            Become a{" "}
            <span className="bg-gradient-to-r from-black  to-black/40 bg-[length:100%_3px] lg:bg-[length:100%_5px] bg-no-repeat bg-bottom">
              PRO
            </span>{" "}
            in
          </p>
          <p>C++</p>
        </div>
        <div>This is a new post</div>
      </div>
    </div>
  );
};

export default Courses;
