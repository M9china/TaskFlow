import React from "react";
import { Cards, HeroComponentProps } from "..";

export const Purpose: React.FC<HeroComponentProps> = ({ data }) => {
  const { title, description, image } = data;

  return (
    <div className="bg-white isolate sm:relative sm:mt-[8rem] sm:mb-[6rem] sm:w-full w-screen z-0 ">
      <div className=" ">
        <div className={`${image.imageOrder}  mt-0 relative`}>
          {image.type === "image" && (
            <div className="flex justify-between ">
              <div className="">
                <div className="absolute top-[40%] z-10 left-0 sm:w-full w-screen sm:ml-0 ml-10">
                  <h1 className="text-3xl font-bold w-[22.38rem] tracking-tight sm:text-4xl">
                    {title}
                  </h1>
                  <p className="mt-6 sm:text-lg text-md  leading-8 text-gray-700 w-[19rem] sm:w-[26.63rem]">
                    {description}
                  </p>
                </div>
              </div>
              <div>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 178 178"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute sm:h-[11.125rem] h-[9rem] w-[6.5rem] sm:w-[9.6875rem] sm:left-[-1.5rem] left-[1rem] top-[-3.3rem] sm:top-[9.8rem] z-0"
                >
                  <path
                    d="M178 178L0 178L6.81898e-06 100C1.16472e-05 44.7715 44.7715 -1.16472e-05 100 -6.81898e-06L178 0L178 178Z"
                    fill="#FFF5DB"
                  />
                </svg>
              </div>
              <div className=" ">
                <img
                  src="/dots.webp"
                  className="absolute z-0 sm:bottom-[-2rem] sm:left-0 bottom-[-14rem] left-[8rem] sm:w-[25rem] sm:h-[9.625rem] w-[15rem] h-[6rem]"
                />
              </div>
              <div>
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="
              sm:right-[8rem] sm:bottom-[-4rem] sm:absolute hidden sm:block"
                >
                  <circle
                    cx="60"
                    cy="60"
                    r="55.6"
                    stroke="#5200FF"
                    stroke-width="8.8"
                  />
                </svg>
              </div>

              <img
                className={` ${image?.styles} z-0 hidden sm:block`}
                src={image.src}
                alt={title}
              />
            </div>
          )}
        </div>
      </div>
      <div className="sm:static flex overflow-x-auto bg-gray-100 sm:mt-0 mt-[14rem] sm:py-0 py-5 sm:px-0 px-5 sm:space-x-0 space-x-5">
      <div className="sm:absolute top-[-15%] right-[40%]">
        <Cards
          data={{
            image: "/card1.webp",
            cardSubtitle:
              "Efficiently extract essential information from business certificates using DataMorphAI.",
            cardTitle: "Business Certificates",
            backgroundColor: "#F4F9FF",
          }}
        />
      </div>
      <div className="sm:absolute top-[-25%] right-[15%]">
        <Cards
          data={{
            image: "/card2.webp",
            cardSubtitle:
              "Simplify financial data analysis with DataMorphAI's bank statement extraction feature",
            cardTitle: "Bank Statements",
            backgroundColor: "#FFF5DB",
          }}
        />
      </div>
      <div className="sm:absolute bottom-[-15%] right-[40%]">
        <Cards
          data={{
            image: "/card3.webp",
            cardSubtitle:
              "Our advanced data extraction capabilities parse through CVs to extract candidate information",
            cardTitle: "Curriculum Vitae",
            backgroundColor: "#F0E0FF",
          }}
        />
      </div>
      <div className="sm:absolute bottom-[-5%] right-[15%]">
        <Cards
          data={{
            image: "/card4.webp",
            cardSubtitle:
              "Extract vital information from contracts and agreements effortlessly with DataMorphAI.",
            cardTitle: "Contracts & Agreements",
            backgroundColor: "#DEFFEE",
          }}
        />
      </div>
      </div>

    </div>
  );
};
