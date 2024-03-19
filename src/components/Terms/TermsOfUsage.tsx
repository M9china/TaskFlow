import React from "react";

export const TermsOfUsage: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-2 sm:px-6 space-x-10 sm:mt-[7rem]">
        <div className="col-span-1">
            <img src="/terms.webp" className="sm:mb-6"/>
        </div>
        
          <div className="col-span-1">
            <h1 className="text-2xl sm:mb-5">1. Acceptance of Terms</h1>{" "}
            <p className="text-gray-600 sm:mb-5">
              {" "}
              By accessing or using OpherLabs' services, you acknowledge that
              you have read, understood, and agree to comply with these Terms of
              Use. If you do not agree with any part of these terms, please
              refrain from using our services.
            </p>
          </div>{" "}
          <div className="col-span-1">
            <h1 className="text-2xl sm:mb-5">2. User Eligibility</h1>
            <p className="text-gray-600 sm:mb-5">
              {" "}
              You must be at least 18 years old to use OpherLabs' services. By
              using our services, you represent and warrant that you are of
              legal age and have the capacity to enter into a legally binding
              agreement.{" "}
            </p>
          </div>
          <div className="col-span-1" >
            <h1 className="text-2xl sm:mb-5">3. Account Registration</h1>
            <p className="text-gray-600 sm:mb-5">
              {" "}
              To access certain features of our services, you may be required to
              register for an account. You agree to provide accurate, current,
              and complete information during the registration process. You are
              responsible for maintaining the confidentiality of your account
              and password and for restricting access to your account.
            </p>
          </div>
          <div className="col-span-1">
            <h1 className="text-2xl sm:mb-5">4. Code of Conduct</h1>
            <p className="text-lg text-gray-700 sm:mb-5">
              When using OpherLabs' services, you agree to:
            </p>
            <li className="sm:mb-5 sm:ml-[1rem]">
              <ul className="text-black sm:mb-5">
                <p>Respect the intellectual property rights of others.</p>{" "}
              </ul>
              <li className="text-black sm:mb-5">
                Refrain from engaging in any unlawful or harmful activities.
              </li>
              <li className="text-black sm:mb-5">
               
                Avoid any behavior that may disrupt or impair the functionality
                of our services.
              </li>
              <li className="text-black">
             
                Respect the privacy of other users.
              </li>
            </li>
          </div>{" "}
          <div className="col-span-1">
            <h1 className="text-2xl sm:mb-5">5. Payment and Refund Policy</h1>
            <p className="text-gray-600 sm:mb-5">
              {" "}
              If you choose to enroll in any of our paid programs, you agree to
              the payment terms specified during the registration process.
              Refund policies for our training programs are outlined separately
              and are accessible on our website.
            </p>
          </div>{" "}
          <div className="col-span-1">
            <h1 className="text-2xl sm:mb-5">6. Intellectual Property</h1>
            <p className="text-gray-600 sm:mb-5">
              {" "}
              All content provided by OpherLabs, including but not limited to
              course materials, software, and documentation, is the property of
              OpherLabs and is protected by intellectual property laws. You
              agree not to reproduce, distribute, modify, or create derivative
              works based on our content without explicit permission.
            </p>
          </div>{" "}
          <div className="col-span-1">
            <h1 className="text-2xl sm:mb-5">7. Termination of Services</h1>
            <p className="text-gray-600 sm:mb-5">
              {" "}
              OpherLabs reserves the right to terminate or suspend your access
              to our services at any time, without notice, for conduct that we
              believe violates these Terms of Use or is harmful to other users
              or to OpherLabs.{" "}
            </p>
          </div>
          <div className="col-span-1">
            <h1 className="text-2xl sm:mb-5">8. Changes to Terms</h1>
            <p className="text-gray-600 sm:mb-5">
              {" "}
              OpherLabs may update these Terms of Use from time to time. Any
              changes will be effective immediately upon posting. We encourage
              you to review these terms regularly to stay informed about our
              practices.
            </p>
          </div>{" "}
          <div className="col-span-1">
            <h1 className="text-2xl">9. Contact Information </h1>
            <p className="text-gray-600">
              {" "}
              If you have any questions or concerns about these Terms of Use,
              please contact us at <p className="text-indigo-700 sm:mt-3">hello@opherlabs.com.{" "}</p>
            </p>
            <p className="mt-5">
              Thank you for choosing OpherLabs for your software engineering
              training journey!
            </p>
          </div>
        
      </div>
    </>
  );
};
