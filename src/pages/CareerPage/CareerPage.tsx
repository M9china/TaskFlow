import React from "react";
import { Holder, IOpportunity, Opportunity } from "../..";
import { NavLink } from "react-router-dom";
const careerData: IOpportunity[] = [
{
  title: 'Backend Development',
  description: 'Backend development involves building and maintaining the server-side of a web application. Backend developers work with server-side languages like Python, Ruby, Java, or Node.js. ',
  image: '',
},
{
  title: 'Product Design',
  description: 'Product design is a multidisciplinary field that encompasses the entire process of creating a product, from ideation to development. ',
  image: '',
},{
  title: 'Frontend Development',
  description: 'Frontend development refers to the process of creating the user interface and user experience of a website or web application.',
  image: '',
}
];

const CareerPage: React.FC = () => {
  return (
    <div className="container mx-auto  sm:mt-[6rem]">
      <div
        className="flex items-center space-x-10 sm:py-[3rem] sm:px-6"
        style={{
          background:
            "linear-gradient(rgba(56, 29, 219, 0.7), rgba(0, 0, 0, 0.2))",
        }}
      >
        <img className="h-[16rem]" src="career.png" />
        <div>
          <h1 className="text-4xl text-white font-semibold mb-10">
            Career Opportunities at Opherlabs
          </h1>
          <p className="text-md mb-6 sm:w-[48rem]">
            Welcome to Opherlabs, where innovation meets collaboration. At
            Opherlabs, we believe in building a team of passionate individuals
            who are committed to pushing the boundaries of technology and making
            a real impact.
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-10">
        <div>
          <h2 className="text-5xl font-semibold  mb-4">Our Culture</h2>
          <p className="text-lg mb-6 text-gray-600 sm:w-[40rem]">
            At the heart of Opherlabs is a culture that fosters creativity,
            continuous learning, and collaboration. We value diversity,
            inclusivity, and the unique perspectives each team member brings to
            the table. Here, every idea is heard, and every contribution
            matters.
          </p>
        </div>
        <div className="relative sm:my-[10rem]">
          <img className="rounded-md h-[15rem] w-[10rem]" src="culture3.jpeg" />
          <img
            className="rounded-md absolute right-[-14rem] top-[-7rem] h-[15rem] w-[10rem]"
            src="culture3.jpeg"
          />
          <img
            className="rounded-md h-[15rem] absolute right-[-14rem]  w-[10rem]"
            src="culture3.jpeg"
          />
          <img
            className="rounded-md h-[15rem] absolute top-[0rem] right-[-28rem]  w-[10rem]"
            src="culture3.jpeg"
          />
        </div>
      </div>
      {careerData.length > 0 ? (
        <div className="flex flex-wrap sm:my-[7rem]">
          <Opportunity data={careerData} />
        </div>
      ) : (
        <div className="mt-[6rem]">
        <Holder title={"Career updates are not available"} /></div>
      )}

      <p className="mt-[5rem] text-center">
        <NavLink to={"#"} className="text-indigo-500 underline">
          Learn more about our company values and culture.
        </NavLink>
      </p>
    </div>
  );
};

export default CareerPage;
