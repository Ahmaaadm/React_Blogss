import Home from "./Home";
import Navbar from "./Navbar";
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import Contact from "./Contact";
import NotFound from "./NotFound";
import LastOne from "./LastOne";
import ByAuthor from "./ByAuthor";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="side">
          <LastOne/>
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
            <Route path="/search">
              <ByAuthor/>
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
