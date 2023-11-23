import Image from "next/image";
import logo from "../assets/logo_dark.svg";
import GetStartedBtn from "./GetStartedBtn";

const Header = () => {
  return (
    <div className="w-full lg:max-w-5xl mx-auto box-border">
      <div className="my-6 px-4 lg:px-0 overflow-hidden select-none ">
        <div className="flex flex-row justify-between">
          <a href="/">
            <div className="flex hover:bg-black hover:bg-opacity-5 rounded-xl p-2 cursor-pointer transition-all ease-in-out del">
              <Image
                src={logo}
                className="h-10"
                width={40}
                height={40}
                alt="logo"
              />
              <h1 className="text-4xl font-mono font-bold">TheCompleteDev</h1>
            </div>
          </a>
          <div className="flex">
            <button
              type="button"
              className="text-black cursor-pointer font-medium rounded-lg px-3 mx-2 hover:bg-slate-500/10  transition-all ease-in-out"
            >
              Log In
            </button>
            <GetStartedBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
