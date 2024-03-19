import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { HeroComponentProps } from ".";
import "./hero.scss";

export const HeroComponent: React.FC<HeroComponentProps> = ({ data }) => {
    const { title, description, cta, image } = data;

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const autoAdvanceCarousel = () => {
      if (image.type === "carousel" && image.images) {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % image.images.length);
      }
    };
  
    useEffect(() => {
      const intervalId = setInterval(autoAdvanceCarousel, 3000); 
  
      return () => clearInterval(intervalId);
    }, []);

  return (
    <div className="bg-white sm:w-full w-screen mt-[5rem] ">
      
        <div className="mx-auto items-center sm:grid grid grid-cols-1 sm:grid-cols-5">
          <div className="mx-auto sm:col-span-2 col-span-1 lg:mx-0 sm:px-0 px-4 ">
            <h1 data-aos="fade-up" className="sm:mt-24  mt-10 text-3xl sm:pr-0  leading-tight font-bold tracking-tight text-gray-900 sm:text-4xl">
              {title}
            </h1>
            <p  data-aos="zoom-out" className="sm:mt-6 mt-4 sm:text-lg text-md overflow-hidden  sm:mr-8 leading-6 sm:leading-8 text-gray-600">
              {description}
            </p>
            <div className="mt-10 flex justify-center sm:justify-start gap-x-6">
              <NavLink
                to={cta?.url as string}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {cta?.label}
              </NavLink>
            </div>
          </div>
          <div data-aos="fade-up" className={`${image.imageOrder} sm:mt-0 mt-10 col-span-1 sm:col-span-3 sm:mr-0  rounded-bl-3xl`}>
            {image.type === "image" && (
              <img className={`h-full w-full ${image?.styles}`} src={image.src} />
            )}

            {image.type === "carousel" && image.images && (
              <div className="carousel px-16 pt-0 pb-0 sm:pt-48 sm:pb-16">
                <img
                  className={` ${image.style}`}
                  src={image.images[currentImageIndex]}
                  alt={`Image ${currentImageIndex}`}
                />
              </div>
            )}

            {image.type === "video" && image.src && (
              <video className={`px-16 pt-0 pb-0 sm:pt-48 sm:pb-16 ${image.style}`} controls>
                <source src={image.src} type="video/mp4" />
                No selected videos.
              </video>
            )}

          </div>
        </div>
     
    </div>
  );
};
