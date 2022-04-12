import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import ProjectsComponent from "./components/ProjectsComponent";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Sustainability from "./components/Sustainability";
import Contact from "./components/Contact";
import Plus from "./components/Plus";

 

function App() {
  return (
    <Router basename={window.location.pathname || ""}>
      <ScrollToTop>
        <Routes>
          <Route basename={window.location.pathname || ""} path="/" element={<Home/>}/>
          <Route basename={window.location.pathname || ""} path="/about" element={<About/>}/>
          <Route basename={window.location.pathname || ""} path="/projects" element={<Projects/>}/>
          <Route basename={window.location.pathname || ""} path="/sustainability" element={<Sustainability/>}/>
          <Route basename={window.location.pathname || ""} path="/contact" element={<Contact/>}/>
          <Route basename={window.location.pathname || ""} path="/plus" element={<Plus/>}/>
          <Route basename={window.location.pathname || ""} path="/projects/:simplePath" element={<ProjectsComponent/>}/>
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
