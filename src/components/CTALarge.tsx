import { GetStartedBtn } from ".";

const CTALarge = () => {
  return (
    <div className="bg-black text-white">
      <div className="px-4 py-4 lg:px-0 w-full lg:max-w-5xl mx-auto box-border">
        <div className="flex flex-col items-center py-12">
          <div className="font-extrabold text-5xl lg:text-7xl text-center line-through text-white/30">
            Study Harder !
          </div>
          <div className="font-black text-5xl lg:text-7xl text-center">
            Study Smarter !
          </div>
          <div className="py-5 max-w-md lg:max-w-3xl lg:text-2xl text-center text-lg">
            Most interviews are not just a test of knowledge, but a test of
            personality, communication skills and analytical skills too. I'll
            help you learn the industry secrets on how to{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-700 bg-[length:100%_2px] lg:bg-[length:100%_3px] bg-no-repeat bg-bottom">
              interview effectively
            </span>
            !
          </div>
          <div className="flex justify-center">
            <GetStartedBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTALarge;
