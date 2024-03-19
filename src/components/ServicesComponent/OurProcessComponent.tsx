import React from "react";
import { ServicesDto } from "./ServicesDto";

export const OurProcessComponent: React.FC<ServicesDto> = ({ title, description, image }) => {

    return (
        <>
            <div className="flex flex-col justify-center items-center mx-auto max-w-screen-lg">

                <div className="mt-8">
                    <img src={image} alt="Image" className="h-[16rem] sm:h-[27rem]" />
                </div>

                <div className="w-full text-gray-800 mt-14 font-bold text-5xl text-center">
                    {title}
                </div>

                <div className="text-lg text-center mt-8 sm:mx-auto mx-[0.5rem] leading-6 sm:w-full lg:w-[45rem] text-gray-600">
                    {description}
                </div>

                <button className="bg-blue-700 mt-8 px-5 py-2 rounded-3xl text-white">
                    Learn More
                </button>

            </div>
        </>
    );
}      