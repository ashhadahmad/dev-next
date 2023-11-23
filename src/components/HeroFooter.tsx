import { Icon } from "@iconify/react";

const HeroFooter = () => {
  return (
    <div className="lg:max-w-xl w-full mx-auto box-border">
      <div className="flex flex-row justify-center my-16 max-w-full">
        <div className="uppercase font-bold text-black/50 tracking-widest flex justify-center content-center">
          <span>Followed by over 100K people on</span>
          <span className="pl-2">
            <Icon height="1.5rem" icon="logos:youtube" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroFooter;
