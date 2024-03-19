import React from "react";
import { PurposeProps } from ".";

export const Cards: React.FC<PurposeProps> = ({ data }) => {
  const { image, cardTitle, cardSubtitle, backgroundColor } = data;

  const cardStyle = {
    backgroundColor: backgroundColor || "white", // Use the provided backgroundColor or default to white
  };

  return (
    <div className="rounded-3xl shadow-lg bg-white w-[17rem] h-full px-4 flex flex-col items-center">
      <div className="flex flex-col my-10 items-center">
        <img src={image} className="rounded-2xl  w-[6rem] h-[6rem]" style={cardStyle} />
        <div className="flex flex-col mt-8 items-center">
          <h1 className="text-2xl text-center">{cardTitle}</h1>
          <p className="text-center  leading-7 mt-2 text-gray-500">{cardSubtitle}</p>
        </div>
      </div>
    </div>
  );
};
