import React from 'react';
import useFetch from './useFetch';
import { Link } from 'react-router-dom/cjs/react-router-dom';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faCoffee, faCode, faCheckCircle,faCircle,faDotCircle } from '@fortawesome/free-solid-svg-icons';



const LastOne = () => {
  const { data: Blogs, loading, ers } = useFetch('http://localhost:8000/blogs');
  const lastblog = Blogs ? Blogs.slice(-3).reverse() : [];

  return (
    <div className="last-one">
      {loading && <div style={{display:'flex',alignItems:"center",justifyContent:"center"}}> <div class="loader"><div class="loader-inner"><div class="loader-block"></div><div class="loader-block"></div> <div class="loader-block"></div><div class="loader-block"></div><div class="loader-block"></div><div class="loader-block"></div><div class="loader-block"></div><div class="loader-block"></div></div></div></div>}
      {ers && <div>Error: {ers}</div>}
      {lastblog.length > 0 && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <h1 style={{ color: '#f1356d' }}>What's New?</h1>
          </div>
          {lastblog.map(blog => (
            <div key={blog.id} className="lastC">
              <Link to={`/blogs/${blog.id}`}>
                <h4>{blog.title}</h4>
                <div>
                  <h5 style={{ color: '#f1356d' }}>Written By: {blog.author}</h5>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LastOne;
