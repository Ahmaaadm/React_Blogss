import Home from "./Home";
import Navbar from "./Navbar";
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import Contact from "./Contact";
import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="side">
          
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/Create">
              <Create/>
            </Route>
            <Route path="/Blogs/:id">
              <BlogDetails/>
            </Route>
            <Route path="/contact">
              <Contact/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
