import { FOOTER_DATA } from "./FooterData";

export const FooterComponent = () => {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 sm:pt-24 lg:px-8 lg:pt-32">
        <div className=" border-t-2 sm:border-t sm:pt-8 border-gray-900/10 pt-5 xl:grid xl:grid-cols-3 xl:gap-8">
          <div className=" xl:mt-0">
            <h3 className="text-2xl font-semibold leading-6 text-gray-900">
              SkillForge
            </h3>
            <p className="mt-6 text-sm leading-6 text-gray-600">
            At SkillForge, our core focus lies in software and app development. 
            We excel in crafting innovative and user-friendly software solutions as well as 
            mobile applications, tailored to meet the diverse needs of various industries. 
            Our team of developers is skilled in harnessing the latest technologies and industry 
            standards to turn ideas into practical, streamlined, and sophisticated software products. 
            We're dedicated to delivering 
            cutting-edge solutions that empower businesses and enhance user experiences.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div className="sm:mt-0 mt-4">
                <h3 className="text-md font-semibold leading-6 text-gray-300 sm:text-gray-900">
                  What We Do
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {FOOTER_DATA.solutions.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-md font-semibold leading-6 text-gray-300 sm:text-gray-900">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {FOOTER_DATA.company.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8 ">
              <div className="sm:mt-0 mt-4 ">
                <h3 className="text-md font-semibold leading-6 text-gray-300 sm:text-gray-900">
                  Support
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {FOOTER_DATA.support.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-[10.2rem] md:mt-0">
                <h3 className="text-md font-semibold leading-6 text-gray-300 sm:text-gray-900">
                  Contact
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {FOOTER_DATA.legal.map((item) => (
                    <li key={item.name}>
                      {item.name === "+27 22 000 0000" ? (
                        <a
                          href="tel:+27220000000"
                          className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      ) : item.name === "hello@opherlabs.co.za" ? (
                        <a
                          href="hello@opherlabs.co.za"
                          className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                          onClick={(e) => {
                            e.preventDefault();
                            const emailAddress ="hello@opherlabs.co.za";
                            if (emailAddress) {
                              window.location.href = "mailto:" + emailAddress;
                            }
                          }}
                        >
                          {item.name}
                        </a>
                      ) : (
                        <a
                          href={item.href}
                          className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                        >
                          {item.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 sm:border-t border-gray-900/10 pt-8 sm:mt-20 md:flex md:items-center md:justify-between lg:mt-24">
          <div className="flex space-x-6 md:order-2">
            {FOOTER_DATA.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="mt-8 text-xs leading-5 text-gray-500 md:order-1 md:mt-0">
            Copyright &copy; {new Date().getFullYear()} SkillForge, Inc. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
