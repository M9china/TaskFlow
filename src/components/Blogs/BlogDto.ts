export declare interface BlogProps {
  data: IBlogs[];
}
export declare interface IBlogs {
  author: string;
  image: string;
  date: string;
  content: string;
}

export declare interface BlogPost {
    id: number;
    title: string;
    description: string;
    date: string;
    image: string;
    body: string;
  }

  export declare interface BlogPostProps{
    data: BlogPost;
  }
  



