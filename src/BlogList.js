import { Link } from "react-router-dom/cjs/react-router-dom";

const BlogList = ({Blogs,Title}) => {
    
    
    return(
        <div>
            <h1>{Title}</h1>
            {Blogs.map((blog=>(
               <div className="blog-preview" key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                 <h2>{blog.title}</h2>
                 <p>Written by {blog.author}</p>
                </Link>
               </div>
            )))}
        </div>
    );
}

export default BlogList;