import React, { useEffect, useState } from "react";
import { HeroComponentProps } from "..";

export const ClientsComponent: React.FC<HeroComponentProps> = ({ data }) => {
  const { image } = data;
  const clientData = [
    {
      title: "Saphokazi Tiki",
      subTitle:
        "Perfect, very good job! Thank you for the amazing work. Really impressed with the high quality and quick turnaround time. Highly recommend.",
    },
    {
      title: "Nkateko Hlungwane",
      subTitle:
        "Perfect, very good job! Thank you for the amazing work. Really impressed with the high quality and quick turnaround time. Highly recommend.",
    },
    {
      title: "Daniel Velour Peter's",
      subTitle:
        "Perfect, very good job! Thank you for the amazing work. Really impressed with the high quality and quick turnaround time. Highly recommend.",
    },
    {
      title: "Nobuhle Ngobese",
      subTitle:
        "Perfect, very good job! Thank you for the amazing work. Really impressed with the high quality and quick turnaround time. Highly recommend.",
    },
    {
      title: "Daniel Mokoena",
      subTitle:
        "Perfect, very good job! Thank you for the amazing work. Really impressed with the high quality and quick turnaround time. Highly recommend.",
    },
    {
      title: "Mvundlela Nqobile",
      subTitle:
        "Perfect, very good job! Thank you for the amazing work. Really impressed with the high quality and quick turnaround time. Highly recommend.",
    },
    {
      title: "Kagisho Pitsi",
      subTitle:
        "Perfect, very good job! Thank you for the amazing work. Really impressed with the high quality and quick turnaround time. Highly recommend.",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % clientData.length);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="sm:mb-8 sm:mt-24 mt-0 sm:w-full w-screen">
      <div className="font-bold sm:text-center sm:mx-0 mx-8 sm:mt-16">
        <h1 className="sm:text-4xl text-2xl  sm:text-center  font-bold">
          What Our Happy Clients Say
        </h1>
        <p className="sm:text-center sm:text-lg text-gray-500 mt-3">
          Several selected clients, who already believe in our service
        </p>
      </div>

      <div className="sm:flex justify-between mt-5 sm:mt-[5rem] items-center relative">
        <div className="border-blue-500 flex items-center sm:ml-[4rem]">
          <img
            src="/Dot.webp"
            className="sm:block hidden absolute left-[14.3rem] top-[-2.5rem]"
          />
          <img
            src="/gbenga.webp"
            className="sm:block hidden absolute bottom-[1.5rem] left-[1.5rem]"
          />
          <div className="relative sm:h-[20rem] sm:w-[20rem] h-[25rem] w-screen sm:z-10">
            <div
              className="absolute inset-0 sm:hidden block"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(56, 29, 219, 2))`,
              }}
            ></div>
            <img
              className={`w-full h-full sm:h-[20rem] sm:w-[20rem] object-cover ${image?.styles}`}
              src={image.src}
            />
          </div>
          <div className="absolute sm:static bottom-[5rem] z-10 pl-4  sm:w-[27.75rem] sm:pl-14">
            <p className="text-xl sm:text-black text-white  sm:text-left font-semibold ">
              {clientData[currentIndex].title}
            </p>
            <p className="sm:text-gray-600 sm:mr-0 mr-8 sm:text-left text-white mt-3">
              {clientData[currentIndex].subTitle}
            </p>
          </div>
        </div>
        <div className="relative sm:block hidden mt-10 mr-[3rem] mb-32 w-[25rem] h-full ">
          <img
            src="Ellipse 93.png"
            className="absolute top-[-2rem] left-[6rem] h-[11rem] w-[11rem]"
          />
          <img
            className="absolute rounded-full h-[7rem] w-[7rem]  left-[48%]"
            src={`/clients/client${(currentIndex % clientData.length) + 1}.png`}
          />
          {clientData.map((_, index) => {
            const angle =
              ((index - currentIndex) / clientData.length) * 2 * Math.PI;
            const radius = 8;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            return (
              <img
                src={`/clients/client${
                  ((index + currentIndex) % clientData.length) + 1
                }.png`}
                className="absolute rounded-full sm:w-[5rem] sm:h-[5rem] w-[3rem] h-[3rem]"
                style={{
                  top: `calc(50% - ${y}rem)`,
                  left: `calc(50% + ${x}rem)`,
                  width: "",
                  height: "",
                }}
                key={index}
              />
            );
          })}
        </div>
        <div className="relative block sm:hidden sm:my-0 my-5">
          <div className="carousel-container mx-4 flex justify-between">
            {clientData.map((_, index) => {
              return (
                <img
                  src={`/clients/client${
                    ((index + currentIndex) % clientData.length) + 1
                  }.png`}
                  className="rounded-full w-[3rem] h-[3rem] "
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsComponent;
