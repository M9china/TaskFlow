import { GetInTouch, Hero, WorkWithUs, History } from "../..";

export const AboutPage = () => {
  return (
    <div className="sm:w-full w-screen">
      <section className="sm:my-6 sm:py-8 my-0 py-0">
        <Hero
          data={{
            backgroundImage: "/abhero.webp",
            title: "About Us",
          }}
        />
      </section>
      <section className="sm:my-6 sm:py-8 my-0 py-0">
        <History/>
      </section>
      <section className="sm:my-6 sm:py-8 my-0 py-0">
        <WorkWithUs />
      </section>
      <section className="sm:my-6 sm:py-8 my-0 py-0">
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
