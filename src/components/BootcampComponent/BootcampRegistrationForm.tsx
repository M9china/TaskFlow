import React, { useState } from "react";
import { BootcampInterest, Form } from ".";
import { useRef } from "react";

export const BootcampRegistrationForm: React.FC<Form> = ({
  userData,
  onFormSubmit,
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    educationLevel: "",
    bootcampInterest: "",
    message: "",
  });

  const formRef = useRef<HTMLFormElement>(null);

  const [isModalOpen, setIsModalOpen] = useState(true);
  const [currentSection, setCurrentSection] = useState(1);
  const sectionSize = 4;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "radio" && e.target instanceof HTMLInputElement
          ? e.target.value
          : value,
    }));
  };

  const handlePreviousSection = () => {
    const prevSection = currentSection - 1;
    setCurrentSection(prevSection);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onFormSubmit(userData);
    closeModal();
    console.log("Form data submitted:", formData);
  };

  return (
    <div>
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center bg-shadow-2xl justify-center z-50"
          style={{ background: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-container bg-white w-full max-w-md mx-auto rounded shadow-lg p-4">
            <div className="flex justify-between border-b-2 my-2 items-center">
              <h1 className="text-gray-700 font-semibold text-lg mb-3">
                Personal Information
              </h1>
              <button
                onClick={closeModal}
                className="hover:bg-gray-200 text-white mb-3 p-1 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="gray"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <form ref={formRef} onSubmit={handleSubmit} className="">
              {Object.keys(formData)
                .slice(
                  (currentSection - 1) * sectionSize,
                  currentSection * sectionSize
                )
                .map((field) => (
                  <div key={field} className="mb-4">
                    <label
                      htmlFor={field}
                      className="block text-sm font-medium text-gray-800"
                    >
                      {field
                        .replace(/([A-Z])/g, " $1")
                        .replace(/^\w/, (c) => c.toUpperCase())}
                      :
                    </label>
                    {field === "bootcampInterest" && (
                      <div className="mt-2">
                        <label >
                          {Object.values(BootcampInterest).map((option) => (
                            <label key={option} htmlFor={option}
                            className="block text-sm font-medium text-gray-800">
                              <input
                                type="radio"
                                name="bootcampInterest"
                                value={option}
                                checked={formData.bootcampInterest === option}
                                onChange={handleInputChange}
                                className="mr-2 my-2"
                              />
                              {option}
                            </label>
                          ))}
                        </label>
                      </div>
                    )}

                    {field !== "bootcampInterest" && field !== "message" ? (
                      <input
                        type="text"
                        required
                        id={field}
                        name={field}
                        placeholder={`Enter your ${field.replace(
                          /([A-Z])/g,
                          " $1"
                        )}`}
                        onChange={handleInputChange}
                        style={{ borderRadius: "5px" }}
                        className="form-input mt-1 block text-black w-full rounded-lg border-gray-300 shadow-xl focus:ring focus:ring-indigo-300"
                      />
                    ) : null}
                    {field === "message" && (
                      <textarea
                        id={field}
                        name={field}
                        placeholder={`Enter your ${field.replace(
                          /([A-Z])/g,
                          " $1"
                        )}`}
                        onChange={handleInputChange}
                        style={{ height: "100px", borderRadius: "10px" }}
                        className="form-input mt-1 block text-black w-full h-[3rem] rounded-lg shadow-sm focus:ring focus:ring-blue-200"
                      ></textarea>
                    )}
                  </div>
                ))}

              <div className="">
                {currentSection * sectionSize >
                  Object.keys(formData).length && (
                  <div className=" flex justify-between">
                    <div>
                      <button
                        type="button"
                        onClick={handlePreviousSection}
                        className="bg-indigo-900 text-white px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                      >
                        Previous
                      </button>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="bg-indigo-900 text-white px-3 py-1 rounded-md hover-bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <div>
                    {currentSection > 1 && currentSection <= 3 && (
                      <button
                        type="button"
                        onClick={handlePreviousSection}
                        className="bg-indigo-900 text-white px-3 py-1 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                      >
                        Previous
                      </button>
                    )}
                  </div>
                  <div>
                    {currentSection * sectionSize <
                      Object.keys(formData).length && (
                      <div className="">
                        <button
                          type="button"
                          onClick={() => {
                            if (formRef.current?.checkValidity()) {
                              setCurrentSection(currentSection + 1);
                            } else {
                              formRef.current?.reportValidity();
                            }
                          }}
                          className="bg-indigo-900 text-white px-4 py-1 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
                        >
                          Next
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
