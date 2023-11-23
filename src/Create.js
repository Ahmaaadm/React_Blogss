import React, { useEffect, useState } from "react";
import {useHistory} from 'react-router-dom'
import {
    AwesomeButton,
    AwesomeButtonProgress,
    AwesomeButtonSocial,
  } from 'react-awesome-button';
const Create = () => {

    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('');

    const [isLoading,setIsLoading] = useState(false);

    const history = useHistory();

    const handleSubmit = (e) =>{
        setIsLoading(true);
        e.preventDefault();
        const blog = {title, body, author};
        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog),
        }).then(()=>{
            console.log("blog:"+blog.title+"has been added");
            setIsLoading(false);
            setAuthor('');
            setBody('');
            setTitle('');
            history.push('/')
        })
    }

    

    return(
        <div className="add-blog-cont">
            <div className="add-blog-title">
                <h2>Add Blogs</h2>
            </div>
            <form style={{display:"flex",flexDirection:"column"}} onSubmit={handleSubmit}>
              <label >Blog title:</label>
              <input value={title} onChange={(e)=>setTitle(e.target.value)} required type="text"/>

              <label>Blog body:</label>
              <textarea value={body} onChange={(e)=>setBody(e.target.value)} required></textarea>

              <label>Blog Author:</label>
              <input value={author} onChange={(e)=>setAuthor(e.target.value)} required type="text"/>
              { !isLoading &&<div style={{display:"flex",justifyContent:'center'}}><button className="button2">Add Blog</button></div>}
              { isLoading && <div style={{display:"flex",justifyContent:'center'}}><button className="button2">Adding...</button></div>}

              
            </form>
        </div>
        
        
    );
}
export default Create;