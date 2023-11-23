import { Link } from "react-router-dom/cjs/react-router-dom";
import React from "react";

const NotFound = () => {
    return(
        <div>
            <h2>Sorry, that Page not found</h2>
            <div className="links">
             <Link className="Bhover" to='/'>Home</Link>
            </div>
            
        </div>
    );
}

export default NotFound;