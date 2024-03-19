import { BlogPost, DisplayBlog } from ".";

export const blogPosts:BlogPost[] = [
    {
      id: 1,
      title: "Getting Started in Software Engineering",
      description:
        "In this post, we discuss the skills and qualifications needed to pursue a career in software engineering.",
      date: "2023-05-05",
      image: "https://i.pinimg.com/564x/90/c1/ca/90c1ca3f7cd58fb3e04422542b40a2a4.jpg",
      body: 
         `Software engineering presents challenges like keeping up with technology, meeting deadlines, effective communication, and debugging, but also provides opportunities like innovation, collaboration, career advancement, and flexibility.
        Software engineers need to stay updated, manage their time, communicate effectively, and troubleshoot efficiently. The field offers endless opportunities to create new and exciting software solutions, work with other professionals, advance in one's career, and have flexibility in work arrangements.`
      
    },
    {
      id: 2,
      body: 
         `A software engineer's day is dynamic, involving planning and communication, coding and testing, collaboration, learning and growth, breaks and self-care, as well as documentation and maintenance. It is a constantly evolving field with opportunities for creativity and innovation, and demands strong collaboration, problem-solving and technical skills. Pursuing a career in software engineering can be rewarding and exciting for those passionate about the field.`
      ,
      title: "The Day-to-Day Life of a Software Engineer",
      description:
        "In this post, we describe a typical day in the life of a software engineer and discuss the various tasks and responsibilities involved.",
      date: "2023-05-05",
      image: "https://i.pinimg.com/564x/8f/23/c5/8f23c5fc86be8bf1fe71751221012eed.jpg",
    },
    {
      id: 3,
      body: 
         `Software engineering presents challenges like keeping up with technology, meeting deadlines, effective communication, and debugging, but also provides opportunities like innovation, collaboration, career advancement, and flexibility. Software engineers need to stay updated, manage their time, communicate effectively, and troubleshoot efficiently. The field offers endless opportunities to create new and exciting software solutions, work with other professionals, advance in one's career, and have flexibility in work arrangements.`
      ,
      title: "Challenges and Opportunities in Software Engineering",
      description:
        "In this post, we explore the various challenges and opportunities that software engineers face in their careers, including the rapid pace of technological change and the need to continuously learn and adapt.",
      date: "2023-05-05",
      image: "https://i.pinimg.com/564x/0f/61/11/0f611111edf1d3451a2f5f3e75849d09.jpg",
    },
  ];

export const WeeklyBlogs: React.FC = () => {

  return (
    <div>
      {blogPosts.length > 0 ? (
        <div className="sm:mt-[6rem]">
          <h1 className="font-semibold text-2xl mt-12 mb-5 text-gray-900 font-sans">Checkout Our Weekly Updates</h1>

          <div className="">
            {blogPosts.map((blog) => (
              <div key={blog.id} className=" mb-5 w-30 h-84 mr-4">
                <DisplayBlog data={blog}   />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="shadow-lg rounded-lg sm:mt-[3rem]">
        <p className="sm:py-10 text-center text-lg ">No Weekly updates have been published yet</p></div>
      )}
    </div>
  );
};
