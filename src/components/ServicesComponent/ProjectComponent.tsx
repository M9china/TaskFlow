import React from "react";
import { ServicesDto } from "./ServicesDto";

export const ProjectComponent: React.FC<ServicesDto> = ({ title, description, image }) => {

    return (
        <>
            <div className="flex flex-col justify-center items-center mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32">
    
                <div className="mt-8  sm:w-[56rem]">
                    <img src={image} className="max-w-full" alt="Project Image" />
                </div>
    
                <div className="text-gray-800 mt-14 font-bold text-4xl sm:text-5xl text-center">
                    {title}
                </div>
                
                <div className="text-lg text-center mt-8 sm:mx-auto leading-6 sm:w-full lg:w-[45rem] text-gray-600">
                    {description}
                </div>
    
                <button className="bg-blue-700 mt-8 px-5 py-2 rounded-3xl text-white">
                    Start a Project
                </button>
    
            </div>
        </>
    );
    }    