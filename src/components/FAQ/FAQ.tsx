import React, { useState } from "react";
const faqs = [
  {
    question: 'How can your technology solution integrate with our existing systems?',
    answer: 'Many businesses want to ensure that any new technology they adopt can seamlessly integrate with their current infrastructure to minimize disruptions and enhance efficiency.',
  },
  {
    question: 'What measures do you have in place to ensure data security and privacy?',
    answer: `Given the increasing concerns around data breaches and privacy issues, potential clients often inquire about
     the robustness of a tech company's security protocols to safeguard sensitive information.`,
  },
  {
    question: 'What kind of support and maintenance services do you offer?',
    answer: `Clients are often interested in the ongoing support and maintenance that a tech company provides. This can include troubleshooting, 
    updates, and general assistance to ensure smooth operation and quick issue resolution.`,
  },
 
 
];
export const FAQ: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({});
 
  const toggleItem = (index: string) => {
    setExpandedItems(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };
 
  return (
    <div className=" w-full">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-black/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-800">Frequently asked questions</h2>
          <dl className="mt-8">
            {faqs.map((faq, index) => (
              <div key={index}>
                <dt>
                  <button
                    onClick={() => toggleItem(String(index))}
                    type="button"
                    className="flex w-full justify-between text-left text-gray-700"
                    aria-controls={`faq-${index}`}
                    aria-expanded={expandedItems[String(index)] ? "true" : "false"}
                  >
                    <span className="text-base leading-7">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <svg
                        className={`h-6 w-6 ${expandedItems[String(index)] ? "hidden" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                      </svg>
                      <svg
                        className={`h-6 w-6 ${expandedItems[String(index)] ? "" : "hidden"}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                      </svg>
                    </span>
                  </button>
                </dt>
                {expandedItems[String(index)] && (
                  <dd className="mt-2">
                    <p>{faq.answer}</p>
                  </dd>
                )}
                <hr className="my-4 border-gray-300" />
              </div>
            ))}
          </dl>
 
        </div>
      </div>
    </div>
  );
};