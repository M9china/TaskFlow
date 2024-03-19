
import { CardsComponent, GetInTouch, OurProcessComponent, ProjectComponent, ServicesComponent, YouThinkItComponent } from "../.."



export const ServicesPage = () => {
    return (
        <>
            <div className=" justify-center items-center w-full">
                <ServicesComponent title={"Our Services"}
                    description={"Here at Opherlabs, we are committed to delivering premium service. Our track record of consistent winners, driven by market-proven, first-principle techniques, has placed us at the zenith of the digital solutions market-industry. We guarantee you’ll be having the best-in-class for quality and diversity of service."}
                    backgroundImage={"/bgimage.png"} />

                <div className="mt-10">
                    <OurProcessComponent title={"Our Process"}
                        description={"We adhere to first principles thinking and are constantly upskilling to drive the industry standard forward. As we grow and learn, we refine our process to cater for an ever-changing market. Within our libraries are held many ancient techniques, earned through persistent practice. "}
                        image={"/Services.png"} />
                </div>

                <div className="mt-20">
                    <CardsComponent />
                </div>

                <div className="">
                    <YouThinkItComponent title={"You THINK it, We BUILD it!"}
                        description={"No matter what the challenge, we are able and willing to deliver a satisfactory solution that meets any and all requirements that you may have. We’ve built many other solutions in-house to optimize our process and are committed to helping you do the same."}
                        image={""} />

                </div>

                <div className="mt-14">
                    <ProjectComponent title={"Start a project with Us"}
                        description={"Take the next step on your way to that ultimate goal. Start building your platform, game, website, or business solution today. From ideation to completion, we’ve got you covered every step of the way. Join our family of winners today! "}
                        image={"/Project.png"} />
                        
                </div>

                <div className="sm:my-6 py-8 mt-1" >
                    <GetInTouch data={{
                        title: "Get In touch",
                        description:
                            "Rest assured, we will reach out to you within a 24-hour timeframe.",
                        image: {
                            type: "image",
                            imageOrder: "order-first",
                        },
                    }} />

                </div>


            </div>
        </>
    )
}