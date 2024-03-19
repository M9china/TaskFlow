export const History: React.FC = () => {
  const timelineImages = [
    {
      year: "2021",
      image: "/2021.webp",
    },
    {
      year: "2022",
      image: "/2022.webp",
    },
    {
      year: "2023",
      image: "/2023.webp",
    },
  ];

  return (
    <div className="sm:w-full w-screen">
      <h1 className="sm:text-5xl text-center text-3xl sm:mt-0 mt-4 font-bold text-gray-800 sm:mb-5 ">
        Our History
      </h1>
      <p className="text-gray-700 sm:mt-0 mt-2 sm:text-lg text-center px-6 sm:px-[16rem]">
        We’ve been there, done that, and we’ve got the t-shirt to prove it. Take
        a look at the work that has defined our journey of excellence. Come
        along as we chart a course through the unknown and bring dreams into
        reality.
      </p>
      <div className="flex justify-center sm:mt-[4rem] sm:mb-0 mb-4">
        {timelineImages.map((frame, index) => (
          <div key={index} className={index >= 1 ? "z-10 sm:ml-[-2rem] ml-[-15rem]" : ""}>
            <div className="text-center sm:px-0 px-[3rem]">
              <img
                src={frame.image}
                className="h-[15rem] sm:h-[28rem] w-screen sm:w-full rounded-2xl sm:rounded-xl "
                alt={`Image for ${frame.year}`}
              />
              <div className="mt-1 font-semibold sm:block hidden">{frame.year}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
