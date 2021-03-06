import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/portfolio";
import AboutMe from "./pages/aboutme";
import Resume from "./pages/resume";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Wrapper from "./components/Wrapper";
import Contact from "./pages/contact";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
          <Route exact path="/" component={AboutMe} />
          <Route exact path="/about" component={AboutMe} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
