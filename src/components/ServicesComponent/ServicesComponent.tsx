import React from "react";
import { ServicesDto } from "./ServicesDto";

export const ServicesComponent: React.FC<ServicesDto> = ({ title, description, backgroundImage }) => {

    return (
        <>
            <div
                className="justify-center bg-cover sm:px-[10rem] flex-col text-white px-[1rem] sm:w-full sm:mt-[5rem] w-screen flex mt-[4rem] sm:h-[70vh] h-[60vh] items-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${backgroundImage})`,
                }}
            >

                <div className="sm:mx-auto max-w-xlg text-4xl font-bold sm:text-5xl">
                    {title}
                </div>
                <div className="text-gray-100 text-lg text-center mt-5 sm:mx-auto leading-6 sm:w-full ">
                    {description}
                </div>

            </div>
        </>
    );
}      