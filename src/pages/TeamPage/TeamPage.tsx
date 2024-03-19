import { GetInTouch, ProjectComponent, ServicesComponent, TeamComponent } from "../.."

export const TeamPage = () => {
    return (
        <>
            <div className=" justify-center items-center w-full">

                <div className=" justify-center items-center w-full">
                    <ServicesComponent title={"Our Team"}
                        description={"Meet the amazing people that make the magic happen!"}
                        backgroundImage={"/bgimage.png"} />
                </div>
                <div>
                    <TeamComponent />
                </div>

                <div className="">
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