const Gradient = () => {
  return (
    <div className=" max-w-xl w-full mx-auto box-border">
      <div className="absolute left-0 right-0 top-0 mx-auto -z-50 blur-[200px] opacity-60">
        <div className="flex justify-center">
          <div className="w-96 h-96 hidden lg:inline bg-red-500 rounded-full overflow-none"></div>
          <div className="w-96 h-96 bg-pink-500 rounded-full overflow-none"></div>
          <div className="w-96 h-96 hidden lg:inline bg-purple-500 rounded-full overflow-none"></div>
        </div>
      </div>
    </div>
  );
};

export default Gradient;
