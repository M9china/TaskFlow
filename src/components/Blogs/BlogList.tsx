import { WeeklyBlogs } from ".";
import { BlogProps } from "./BlogDto";

export const BlogList: React.FC<BlogProps> = ({ data }) => {
  return (
    <>
      <div className=" grid-cols-3 rounded-lg flex justify-between  items-center">
        <div className="col-span-2">
          <h2 className="text-4xl  font-semibold sm:w-full">
            OpherLabs Insider: Exploring the Heartbeat of Technological
            Advancement
          </h2>
        </div>
        <div className="col-span-1">
          <img src="/blogicon.webp" className=" rounded-md" />
        </div>
      </div>
      <div
        className=" sm:mt-24 grid grid-cols-3 
     sm:space-x-[2rem] sm:w-full w-screen"
      >
        <div className=" w-full  border-t col-span-1 border-gray-900/10  lg:mx-0  lg:border-t-0">
          <div className="-my-12 divide-y  divide-gray-900/10">
            {data.map((post) => (
              <article className="py-12">
                <div className="group relative max-w-xl">
                  <time
                    dateTime={post.date}
                    className="block text-sm leading-6 text-gray-600"
                  >
                    {post.date}
                  </time>
                  <div className="mt-4 flex space-x-4 items-center">
                    <img
                      src={post.image}
                      alt=""
                      className="h-6 w-6 flex-none rounded-full bg-gray-50"
                    />
                    <div>{post.author}</div>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {post.content}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="">
            <WeeklyBlogs />
          </div>
        </div>
        <div className="mx-auto grid   col-span-2  gap-y-12 px-6  ">
          <article className="mx-auto w-full ">
            <h2
              id="featured-post"
              className=" text-3xl font-bold relative tracking-tight text-gray-900 sm:text-4xl"
            >
              Discover the Depths: Opherlabs Blog Hub
            </h2>
            <div>
              <p className="text-gray-700 sm:mt-5">
                Welcome to the world of OpherLabs, where innovation meets
                excellence, and technology takes a leap into the future. In this
                blog post, we'll take you on a journey through the corridors of
                OpherLabs, a company that has been at the forefront of shaping
                the digital landscape with its groundbreaking solutions.
              </p>
              <h1 className="text-3xl sm:my-5 font-semibold">
                Unveiling the Vision
              </h1>
              <p className="text-gray-700">
                OpherLabs, a name synonymous with innovation, was founded with a
                vision to redefine the possibilities of technology. From its
                humble beginnings, the company set out to create solutions that
                not only meet the current needs but also anticipate the future
                demands of the ever-evolving digital era.
              </p>
              <h1 className="text-3xl sm:my-5 font-semibold">
                Trailblazing Technologies
              </h1>
              <p className="text-gray-700">
                At OpherLabs, the commitment to pushing boundaries is evident in
                every project undertaken. The company has been a pioneer in
                developing cutting-edge technologies that span a diverse range
                of industries. Whether it's artificial intelligence, blockchain,
                or the Internet of Things (IoT), OpherLabs has left an indelible
                mark on each domain.
              </p>
              <h1 className="text-3xl sm:my-5 font-semibold">
                Signature Solutions
              </h1>
              <p className="text-gray-700">
                One of the hallmarks of OpherLabs is its ability to turn
                visionary ideas into tangible solutions. The company's portfolio
                boasts a myriad of signature products and services that have
                transformed the way businesses operate. From streamlining
                complex processes to enhancing user experiences, OpherLabs'
                solutions are designed to make a meaningful impact.
              </p>
              <h1 className="text-3xl sm:my-5 font-semibold">
                Tech Alchemy in Action
              </h1>
              <p className="text-gray-700">
                What sets OpherLabs apart is its commitment to what we like to
                call "tech alchemy." The fusion of creativity, expertise, and
                cutting-edge technology results in solutions that not only meet
                industry standards but set new benchmarks. The OpherLabs team
                comprises some of the brightest minds in the tech world, working
                collaboratively to turn challenges into opportunities.
              </p>
              <h1 className="text-3xl sm:my-5 font-semibold">
                Impact on the Digital Landscape
              </h1>
              <p className="text-gray-700">
                OpherLabs has played a pivotal role in shaping the digital
                landscape. The company's contributions have not only driven
                technological advancements but have also empowered businesses to
                thrive in the digital age. From startups to enterprises,
                OpherLabs has been a trusted partner in navigating the
                complexities of the tech-driven world.
              </p>
              <h1 className="text-3xl sm:my-5 font-semibold">
                A Glimpse into the Future
              </h1>
              <p className="text-gray-700">
                As we look ahead, OpherLabs remains dedicated to its mission of
                transforming ideas into reality. The company continues to invest
                in research and development, exploring emerging technologies and
                anticipating the needs of tomorrow. OpherLabs envisions a future
                where technology not only solves problems but also enriches
                lives and experiences.
              </p>
              <p className="sm:mt-5 text-gray-600">
                In conclusion, OpherLabs stands as a beacon of innovation, a
                company that dares to dream and turns those dreams into reality.
                The journey doesn't end here; it evolves with each project, each
                breakthrough, and each stride towards a tech-driven tomorrow.
                Stay tuned as OpherLabs continues to write the next chapters in
                the story of technological advancement.
              </p>
              <p className="text-gray-600 sm:mt-5">
                Thank you for joining us on this insider's tour of OpherLabs.
                The future is exciting, and OpherLabs is at the forefront,
                leading the way.
              </p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};
