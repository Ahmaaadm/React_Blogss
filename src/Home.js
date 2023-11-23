import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    //const {data:Blogs, loading,ers} = useFetch('http://localhost:8000/blogs')
    const {data:Blogs, loading,ers} = useFetch('http://localhost:8000/blogs')
    
    

    return (
        <div className="home">
            {ers && <div>{ers}</div>}
            {loading && <div style={{display:'flex',alignItems:"center",justifyContent:"center"}}> <div class="loader"><div class="loader-inner"><div class="loader-block"></div><div class="loader-block"></div> <div class="loader-block"></div><div class="loader-block"></div><div class="loader-block"></div><div class="loader-block"></div><div class="loader-block"></div><div class="loader-block"></div></div></div></div>}
           {Blogs && <BlogList Blogs={Blogs} Title="All Blogs"  />}
        </div>
    );
}
export default Home;




