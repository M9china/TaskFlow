import { Link } from "react-router-dom";
import { BlogPostProps } from ".";

export const DisplayBlog: React.FC<BlogPostProps> = ({ data}) => {
    return (
      <>
        <div className="flex flex-col center mb-5 ">
          <Link to={`/blog/${data.id}`} className="flex">
            <div className="sm:hidden">
            <img className="h-64 w-64 object-cover sm:hidden rounded-md" src={data.image} alt={data.title} />
            <div className="border-l-2 border-r-2 border-t-2 border-b-2 ml-10 border-gray-300 h-64 pl-4 flex flex-col justify-between w-96 overflow-hidden">
              <p className="bg-gray-700 text-white px-2 py-1 text-sm self-end">{data.date}</p>
              <div className="h-full flex-grow flex flex-col justify-between">
                <h1 className="text-xl mx-auto mb-2 justify-center bold font-bold">{data.title}</h1>
                <p className="h-full md:my-4 justify-center font-sans pr-2">{data.description}</p>
              </div>
            </div>
            </div>
            <p className="text-indigo-700 hover:text-indigo-500">{data.title}</p>
          </Link>
        </div>
      </>
    );
  };