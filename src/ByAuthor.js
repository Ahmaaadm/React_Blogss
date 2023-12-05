import { useState } from "react";
import useFetch from "./useFetch";
import List from "./List";

const ByAuthor = ()=> {

    const [auther, setAuther] = useState('');

    const {data:defaultBlogs, loading, ers} = useFetch('http://localhost:8000/blogs');

    return(
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:'center'}} >
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:'center'}}>
              <form style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:'center'}} >
                 <label className="lblb">enter a Author to search their Blogs</label><br />
                 <input 
                 className="searchBar" type="text" required 
                 onChange={(e)=>setAuther(e.target.value)}
                 placeholder="search for an Author Blog"></input>
              </form>
            </div>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:'center'}}>
                {
                 auther && defaultBlogs &&  <List Blogs = {defaultBlogs} auth = {auther} title = "result"  />
                }                
            </div>
            
        </div>
    );
}
export default ByAuthor;