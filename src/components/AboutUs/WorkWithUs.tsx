export const WorkWithUs: React.FC = () => {
  return (
    <div className="flex flex-col items-center sm:w-full w-screen sm:mb-0 mb-8">
      <div className="">
        <h1 className="sm:text-5xl text-3xl font-bold sm:mb-5 text-center text-gray-900"
        >
          {" "}
          Come Work With Us
        </h1>
        <p className="text-center text-md px-6 sm:mt-0 mt-2 sm:text-lg sm:leading-8 sm:px-[22rem] text-gray-700">
          Take the next step on your way to that ultimate goal. Start building
          your platform, game, website, or business solution today. From
          ideation to completion, we’ve got you covered every step of the way.
          Join our family of winners today!
        </p>
      </div>
      <div className="flex justify-center mt-2 sm:mt-8">
          {" "}
          <button className="sm:px-5 px-3 rounded-3xl sm:py-2 py-1 bg-blue-700 text-white text-center hover:scale-105">
            Start a Project
          </button>
        </div>
      <div className="sm:mt-[4rem] mt-[2rem]">
        <img src="/Screens.webp" className="sm:h-[26rem]"/>
      </div>
    </div>
  );
};
