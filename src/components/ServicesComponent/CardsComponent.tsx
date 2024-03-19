import React from "react";
import { ServicesDto, cardData } from "./ServicesDto";


export const CardsComponent: React.FC<ServicesDto> = () => {

    return (
        <div className="flex sm:flex-nowrap flex-wrap justify-center ">
            {cardData.map((card, index) => (
                <div key={index} className="flex flex-col items-center rounded-lg py-8 mx-2 my-4 shadow-lg border w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
                    <div className="">
                        <img
                            src={card.image}
                            style={{ width: '100%', objectFit: 'cover', borderTopLeftRadius: '8px', borderTopRightRadius: '8px' }}
                            alt={card.title}
                        />
                    </div>

                    <div className="text-gray-800 mt-4 font-bold text-lg">{card.title}</div>
                    <div className="w-[16rem] text-gray-600 flex text-center text-md mt-4">{card.description}</div>
                </div>
            ))}
        </div>
    );
}