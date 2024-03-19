import React from "react";
import { ServicesDto, } from "./ServicesDto";


export const YouThinkItComponent: React.FC<ServicesDto> = ({ title, description, }) => {

    return (
        <>
          <div className="flex flex-col justify-center items-center">
            <div className="w-full text-gray-800 mt-14 font-bold text-5xl text-center">
              {title}
            </div>
            <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 text-gray-600 text-lg text-center mt-8">
              {description}
            </div>
          </div>
        </>
      );
    }      