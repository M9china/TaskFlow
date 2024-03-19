import React, { useState, useRef } from "react";
import { EventFormDto, HeroComponentProps } from "..";

export const GetInTouch: React.FC<HeroComponentProps> = ({ data }) => {
  const { title, description } = data;

  const [email, setEmail] = useState("");
  const [isValidEmail] = useState(true);
  const [showEmailTextArea, setShowEmailTextArea] = useState(false);
  const [showTextArea, setShowTextArea] = useState(false);
  const [sendEmail, setSendEmail] = useState(false);
  const [, setHandleContactClick] = useState(false);
  const [trigger, setrigger] = useState(true);
  const [formData, setFormData] = useState<EventFormDto>();
  const textAreaRef = useRef(null);

  const handleContactNowClick = (e: any) => {
    e.preventDefault();
    if (isValidEmail) {
      console.log({
        ...formData,
      });
      setShowEmailTextArea(true);
      setrigger(false);
    } else {
      console.log("Email is not valid:", email);
    }
  };

  const handleform = (e: any) => {
    const { id, value } = e.target;

    setFormData({
      ...(formData as any),
      [id]: value,
    });
  };

  const handleNextClick = () => {
    setShowEmailTextArea(false);
    setHandleContactClick(false);
    setShowTextArea(true);
    setSendEmail(false);
    setEmail("");
  };

  const handleSendEmailClick = () => {
    setSendEmail(true);
    setShowEmailTextArea(false);
    setHandleContactClick(false);
    setShowTextArea(false);
    setEmail("");
  };

  const handleBackButtonClick = () => {
    setShowEmailTextArea(false);
  };

  const handleSubmit = () => {
    setShowEmailTextArea(false);
  };

  return (
    <>
      <div className="relative sm:flex items-center mt-16 hidden z-0">
        <img src="/intouch.webp" className="z-10" />
        <div className="absolute top-[40%] left-20 z-50">
          <p className="text-4xl font-semibold">{title}</p>
          <p className="text-gray-600 mt-2 w-[22rem]">{description}</p>
        </div>
        <img className="absolute right-0 top-[-3.5rem]" src="/emaildot.webp" />
        <img
          className="absolute left-[-1.5rem] bottom-[-2rem] z-0"
          src="/intouchbl.webp"
        />

        <img className="absolute right-0 z-50" src="/touch2.webp" />

        <form
          className="absolute right-[15%] z-50 space-x-2 flex border-none outline-none rounded-3xl bg-white items-center"
          onSubmit={handleContactNowClick}
        >
          {showEmailTextArea ? null : (
            <input
              required
              type="email"
              id="email"
              onChange={handleform}
              className="border-none focus:outline-none focus:ring-0 rounded-3xl py-3 w-[25rem]"
              placeholder="Enter your email address "
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
            />
          )}

          <div className="px-1">
            {showEmailTextArea ? (
              <div className="">
                <textarea
                  ref={textAreaRef}
                  id="message"
                  onChange={handleform}
                  className="border-none rounded-2xl text-gray-600 focus:outline-none focus:ring-0 bg-white"
                  style={{resize: "none", border: "none", outline: "none", width: "27rem", margin: "0", height: "9rem", paddingLeft: "1rem", paddingTop: "2rem",}}
                  placeholder="Write your email..."
                />

                <div
                  className="absolute bottom-0 w-full left-0 right-0 bg-gray-300 border-b-rounded-md border-gray-200 flex justify-between px-4 py-2 "
                  style={{borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px",}}
                >
                  <button
                    className="bg-blue-700 py-[0.4rem] px-3 text-white mb-0 text-xs rounded-md"
                    onClick={handleBackButtonClick}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-700 py-[0.4rem] px-3 text-white text-xs rounded-md"
                    onClick={handleSubmit}
                  >
                    Contact us now
                  </button>
                </div>
              </div>
            ) : (
              <button
                type="submit"
                className="bg-blue-700 py-2 px-2 text-white rounded-3xl"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </button>
            )}
          </div>
        </form>

        <button
          className="bg-blue-700 py-2 px-3 text-white rounded-3xl"
          onClick={handleContactNowClick}
        >
          {showEmailTextArea ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          ) : (
            "Contact Now"
          )}
        </button>
      </div>
      <div className="sm:hidden block bg-blue-50 py-5 w-screen">
        <div>
          <p className="text-4xl text-center font-semibold">{title}</p>
          <p className="text-gray-600 text-center mt-2 px-[4.9rem]">
            {description}
          </p>
        </div>

        <div className="flex justify-center mt-8">
          {trigger && (
            <button
              className="bg-blue-700 py-2 px-5  font-bold text-white rounded-3xl"
              onClick={handleContactNowClick}
            >
              Contact Us
            </button>
          )}
        </div>
        <div className=" mt-4">
          {showEmailTextArea && (
            <div className="flex flex-col items-center">
              <input
                type="email"
                placeholder="Enter your email address ..."
                className="rounded-full px-4 shadow-2xl py-4 border-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="bg-blue-700 pt-1 px-6 flex h-[2.7rem] items-center font-bold text-xl  mt-8 text-white rounded-3xl"
                onClick={handleNextClick}
              >
                Next

                <svg
                  width="30"
                  height="28"
                  viewBox="0 0 31 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 mb-[0.4rem]"
                >
                  <path
                    d="M6.69049 17.2961L11.6905 22.2961L24.1905 9.79614"
                    stroke="white"
                    stroke-width="5.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
        <div>
          {showTextArea && (
            <div className="flex flex-col items-center">
              <textarea
                placeholder="Type your message ..."
                className="rounded-2xl px-4 shadow-2xl py-3 border-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ outline: "none" }}
              />
              <button
                className="bg-blue-700 pt-1 px-6 flex h-[2.7rem] items-center font-bold text-xl  mt-8 text-white rounded-3xl"
                onClick={handleSendEmailClick}
              >
                Send
                
                  <svg
                    width="30"
                    height="28"
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1 mb-[0.4rem]"

                  >
                    <path
                      d="M6.69049 17.2961L11.6905 22.2961L24.1905 9.79614"
                      stroke="white"
                      stroke-width="5.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                
              </button>
            </div>
          )}
        </div>

        <div className="flex flex-col items-center">
          {sendEmail && (
            <>
              <h1 className="text-2xl font-semibold">Sent</h1>
              <p className="text-gray-600 w-1/2 text-center">
                Your message was sent successfully!
              </p>
              <div className="bg-pink-50 rounded-full mt-4">
                <svg
                  width="127"
                  height="127"
                  viewBox="0 0 127 127"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27 69.4507L48 90.4507L100.5 37.9507"
                    stroke="#33823B"
                    stroke-width="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
