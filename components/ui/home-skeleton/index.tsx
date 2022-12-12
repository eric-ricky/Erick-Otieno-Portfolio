const HomeSkeleton = () => {
  return (
    <section className="bg-slate-900 h-screen grid place-items-center">
      <div className="flex flex-col items-center space-y-4">
        <div
          className={`w-24 h-24 p-1 grid place-items-center border-b-4 border-orange-500 rounded-full animate-spin`}
        >
          <div
            className={`w-16 h-16 p-1 grid place-items-center border-t-4 border-yellow-500 rounded-full`}
          >
            <div
              className={`w-8 h-8 border-b-4 border-blue-500 rounded-full`}
            ></div>
          </div>
        </div>
        <div className="text-center headingmd animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          eric-ricky
        </div>
      </div>
    </section>
  );
};

export default HomeSkeleton;
