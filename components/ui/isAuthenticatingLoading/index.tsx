const IsAthenticatingLoadingComponent = () => (
  <div className="h-screen w-full fixed top-0 left-0 bg-[rgba(0,0,0,0.75)] z-50 grid place-items-center">
    <div className="flex items-center justify-center ">
      <div className="w-16 h-16 border-b-4 border-gray-100 rounded-full animate-spin"></div>
    </div>
  </div>
);

export default IsAthenticatingLoadingComponent;
