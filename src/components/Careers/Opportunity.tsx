import React from "react";
import { OpportunityProps } from "./OpportunityDto";

export const Opportunity: React.FC<OpportunityProps> = ({data}) => {
    return(
        <>
        <div className="sm:px-[16rem]">
            <h1 className="text-center text-4xl sm:mt-4 font-semibold">Explore Your Career at Opherlabs</h1>
            <p className="sm:mt-4 text-gray-700 text-center ">At Opherlabs, we believe in fostering a workplace where innovation meets passion. 
            Join our dynamic team and embark on a journey that not only builds cutting-edge solutions but also nurtures professional growth.</p>
        </div>
        <div className="grid grid-cols-3 space-x-5 sm:w-full w-screen sm:mt-10">
            {data.map((opportunity, index) => (
                    <div key={index} className="flex flex-col rounded-lg items-center bg-gray-50 shadow-md px-6 py-10">
                    <img src={opportunity.image} className="w-32 h-32 object-cover rounded-full mb-4" />
                    <h2 className="text-2xl sm:mt-5 font-bold mb-2">{opportunity.title}</h2>
                    <p className="text-gray-600 text-center">{opportunity.description}</p>
                  </div>

            ))}

        </div>
        </>
    )
}