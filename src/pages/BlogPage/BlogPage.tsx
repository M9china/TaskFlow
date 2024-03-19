import { BlogList,Holder,IBlogs } from "../..";
const blogPost: IBlogs[] = [
  {
    image: '',
    author: "Nqobile Mvundela",
    date: "21 November 2023",
    content: "Nqobile is a Technical writer at opherlabs with more than 3 years of experince in IT",
  },  
];

export const BlogPage = () => {
  return (
    <>
      {blogPost.length > 0 ? (
        <div className="sm:mt-[6rem]">
        <BlogList data={blogPost} />
        </div>
      ) : (
        <div className="sm:w-full w-screen sm:mt-[6rem]">
        <Holder title={"Currently there are no blog posts"}/></div>
      )}
    </>
  );  
};
