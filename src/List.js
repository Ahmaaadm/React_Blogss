import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
 
const List = ({Blogs,auth,title}) => {
    const [filterBlogs, setFilterBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [dataTaille,setDataTaile] = useState()
    setTimeout(()=>{
        setIsLoading(true)
        const realData = Blogs.filter((blogF) => blogF.author === auth);
        setFilterBlogs(realData)
        setDataTaile(realData.length)
        console.log(filterBlogs,auth)
        setIsLoading(false)
    },2000)
    

    return(
        <div style={{display:"flex",flexDirection:"column"}}>
            {dataTaille == 0 && <p style={{display:"flex",flexDirection:"row"}}><div style={{color:"red"}}>Sorry</div>, we dont have a blogs for this auther</p>}
            {isLoading && <div style={{display:'flex',alignItems:"center",justifyContent:"center"}}> <div class="loader"><div class="loader-inner"><div class="loader-block"></div><div class="loader-block"></div> <div class="loader-block"></div><div class="loader-block"></div><div class="loader-block"></div><div class="loader-block"></div><div class="loader-block"></div><div class="loader-block"></div></div></div></div>}
            {filterBlogs.length != 0 && <h1>{title}:</h1>}
            {filterBlogs.map((blog=>(
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
export default List;