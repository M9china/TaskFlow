import { useState } from "react";
import { Bootcamp, RegistrationFormData, initialFormData } from "./BootcampDto";
import React from "react";
import { useEffect } from "react";
import { BootcampRegistrationForm } from ".";

export const BootcampComponent: React.FC<Bootcamp> = ({ data }) => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [showList, setShowList] = useState(false);

  const handleFormSubmit = (formData: RegistrationFormData) => {
    console.log("Form data submitted:", formData);

    setShowRegistrationForm(false);
  };

  const openRegistrationForm = () => {
    setShowRegistrationForm(true);
  };

  const handleSectionClick = () => {
    setShowList(true);
  };

  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const timeRemaining = data.targetDate - currentTime;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
    <>
      {new Date(data.targetDate).getTime() <= currentTime ? (
        <div className="flex flex-col py-20 items-center shadow-md rounded-md bg-gray-50 h-[20rem]">
          <h1 className="text font-semibold text-indigo-500 text-center text-4xl">
            We Currently Don't Have Any Open Bootcamps!
          </h1>
          <p className="mt-5 sm:px-0 px-2 text-center text-lg">
            Ongoing Bootcamp startdate will be listed in this : {""}
            <button
              onClick={handleSectionClick}
              className="text-indigo-600 text-center"
            >
              section
            </button>
          </p>

          {showList && (
            <div className="mt-5">
              <p className="text-red-500">
                {new Date(data.targetDate).toLocaleString()}
              </p>
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="">
            <div
              className="relative flex flex-col items-center bg-cover justify-center sm:w-full w-screen sm:h-[80vh] h-[65vh]"
              style={{
                backgroundImage: `linear-gradient(rgba(56, 29, 219, 1), rgba(0, 0, 0, 0.2)), url(${data.backgroundImage})`,
              }}
            >
 <svg
            width="100%"
            height="161"
            viewBox="0 0 1439 161"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=" absolute top-[-4.95rem] sm:top-[-4.45rem] "
          >
            <path
              d="M281.212 107.772L0 160.5V0L1439 70.076L1301.84 107.772H933.113L568.324 131.453L281.212 107.772Z"
              fill="white"
            />
              </svg>
              <svg
                width="100%"
                height="161"
                viewBox="0 0 1446 161"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-[-4.7rem] sm:bottom-[-3.7rem] "
              >
                <path
                  d="M1159.32 52.8922L1446 0V161L0.5 104L118.834 52.8922L494.73 52.8922L866.618 29.1376L1159.32 52.8922Z"
                  fill="white"
                />
              </svg>


              <div className="text-center text-white  max-w-xlg text-4xl font-bold  sm:text-5xl">
                {data.title}
              </div>
              <div className=" text-gray-100 sm:text-lg text-md text-center sm:mt-8 mt-4 leading-6 sm:px-0 px-6 sm:w-[45rem]">
                {data.description}
              </div>
              <button
                className="bg-blue-700 mt-8 px-3 text-white sm:px-5 py-2 rounded-3xl transition-transform hover:scale-110"
                onClick={openRegistrationForm}
              >
                Enroll Today
              </button>

              {showRegistrationForm && (
                <div className="modal">
                  <div className="modal-content">
                    <BootcampRegistrationForm
                      userData={initialFormData}
                      onFormSubmit={handleFormSubmit}
                    />
                  </div>
                </div>
              )}
              <div className="sm:mt-16 mt-8 sm:block">
                <div className="text-white">
                  <div className="flex justify-center gap-5 sm:gap-[5rem] text-lg">
                    <div className="time-cell">
                      <span className="font-semibold sm:w-full text-3xl sm:text-[7rem]">
                        {days}d
                      </span>
                    </div>
                    <div className="time-cell">
                      <span className="font-semibold sm:w-full text-3xl sm:text-[7rem]">
                        {hours}h
                      </span>
                    </div>
                    <div className="time-cell">
                      <span className="font-semibold sm:w-full text-3xl sm:text-[7rem]">
                        {minutes}m
                      </span>
                    </div>
                    <div className="time-cell">
                      <span className="font-semibold sm:w-full text-3xl sm:text-[7rem]">
                        {seconds}s
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default BootcampComponent;
