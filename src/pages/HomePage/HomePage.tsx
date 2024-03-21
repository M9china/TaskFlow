import { useEffect, useState } from "react";
import { HeroComponent, Purpose, ClientsComponent, GetInTouch, BootcampComponent} from "../../components";

export const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 7);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="sm:mx-0">
      <section className="sm:mr-0">
        <HeroComponent
          data={{
            title: "Automating Data Extraction and Conversion",
            description:
              "Unlock the power of automation with DataMorphAI. Our platform empowers businesses to effortlessly extract and convert data from any type of forms and documents. Harnessing the cutting-edge capabilities of artificial intelligence.",
            cta: {
              label: "Try it for free!",
              url: "/get-started",
            },
            image: {
              type: "image",
              styles: " lab-radius-bl h-full w-full", // lab-radius-bl controls the left bottom radius
              src: "/hero/hero.webp",
              imageOrder: "order-last",
            },
          }}
        />
      </section>
      <section className="sm:my-6 sm:py-8 my-0 py-0">
        <HeroComponent
          data={{
            title: "We Are A Leading Technology Company",
            description:
              "SkillForge is a leading technology company specializing in research and development, creating cutting-edge tech products and mobile apps.",
            cta: {
              label: "Read more about us",
              url: "/about",
            },
            image: {
              type: "carousel",
              // lab-radius-bl controls the left bottom radius
              style: " h-[35rem] lab-radius-tr hidden sm:block",
              images: ["/black.webp", "/carousel.webp"],
              imageOrder: "order-first",
            },
          }}
        />
      </section>
      <section className="my-6 py-8">
        <BootcampComponent
          data={{
            backgroundImage: "/team.webp",
            title: "Next Bootcamp",
            description:
              "The next Bootcamp promises to be immersive journey where individuals come together to hone their skills, exchange knowledge, and forster innovation. From the moment you step throgh the door, you'll embark on a dynamic learning adventure",
            buttonText: "Enroll Today",
            targetDate: new Date("2023-11-16T20:03:00").getTime(),
          }}
        />
      </section>
      <section className="my-6 py-8">
        <Purpose
          data={{
            title: "What We do at OpherLabs",
            description:
              "SkillForge catalyzes breakthroughs and fosters an environment where the extraordinary becomes possible",
            image: {
              type: "image",
              styles: "h-[37.99rem]",
              src: "/sectionBackground.webp",
              imageOrder: "order-last",
            },
          }}
        />
      </section>
      <section className="my-6 py-8">
        <ClientsComponent
          data={{
            title: "",
            subTitle:
              "Perfect, very good job! Thank you for the amazing work on our projects. Really impressed with the high quality and quick turnaround time. Highly recommend.",
            image: {
              type: "image",
              styles:
                "sm:h-[20rem] sm:w-[20rem] w-[20rem] h-[20rem] circle-like ",
              src: `/clients/client${(currentIndex % 7) + 1}.png`,
              imageOrder: "order-last",
            },
          }}
        />
      </section>
      <section className="sm:my-6 py-8">
        <GetInTouch
          data={{
            title: "Get In touch",
            description:
              "Rest assured, we will reach out to you within a 24-hour timeframe.",
            image: {
              type: "image",
              imageOrder: "order-first",
            },
          }}
        />
      </section>
    </div>
  );
};
