import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import ProjectsComponent from "./components/ProjectsComponent";
import {BrowserRouter as Router, HashRouter, Route, Routes} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Sustainability from "./components/Sustainability";
import Contact from "./components/Contact";
import Plus from "./components/Plus";

 

function App() {
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/sustainability" element={<Sustainability/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/plus" element={<Plus/>}/>
          <Route path="/projects/:simplePath" element={<ProjectsComponent/>}/>
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
