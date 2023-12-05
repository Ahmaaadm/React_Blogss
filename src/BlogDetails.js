import { Link, useParams } from "react-router-dom/cjs/react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails = () => {

    const history  = useHistory()
    const{ id } = useParams()
    const{data: blog, loading, errors} = useFetch('http://localhost:8000/blogs/' + id);

    const handleDelete = () => {
        fetch('http://localhost:8000/blogs/'+blog.id, {
            method: 'DELETE',
        }).then(()=>{
            history.push('/');
        })
    }


    return(
        <div className="blog-details">
            <h1>Blog Details</h1><br></br>
            {errors && {errors}}
            {loading&& <div style={{display:'flex',alignItems:"center",justifyContent:"center"}}> <div class="loader"><div class="loader-inner"><div class="loader-block"></div><div class="loader-block"></div> <div class="loader-block"></div><div class="loader-block"></div><div class="loader-block"></div><div class="loader-block"></div><div class="loader-block"></div><div class="loader-block"></div></div></div></div>}
            {!loading && <h2 className="blog-titles">{blog.title}</h2>}
            {!loading && <p>{blog.body}</p>}
            {!loading && <h4>Written By: {blog.author}</h4>}
            <div style={{display:"flex",flexDirection:"row-reverse"}}>
                <button onClick={handleDelete} class="button type1"></button>
            </div>
        </div>
    );
}

export default BlogDetails;