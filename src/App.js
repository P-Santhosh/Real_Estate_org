/*import React, { Component } from "react";
import './App.css';
import Header from "./Components/Header.js";

import Footer from "./Components/Footer.js";


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
       
       <Footer />
      </div>
    );
  }
}
export default App;*/
import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Dropdown from "./Components/Dropdown";
import Blogs from "./Components/Blogs";
import Gallery from "./Components/Gallery";
import Sembadapalayam from "./Components/Sembadapalayam";
import Arthanaripalayam from "./Components/Arthanaripalayam";
import Pattasukadi from "./Components/Pattasukadai";
import Munnur from "./Components/Munnur";
import Nanaparappu from "./Components/Nanaparappu";
import Aravakurichi from "./Components/Aravakurichi";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log("i resized");
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <>
    <Router>
      <div>
      <Header toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      

      <Switch>
        <Route  exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/contact" component={Contact} />
        <Route path="/sembadapalayam" component={Sembadapalayam} />
        <Route path="/arthanaripalayam" component={Arthanaripalayam} />
        <Route path="/pattasukadi" component={Pattasukadi} />
        <Route path="/munnur" component={Munnur} />
        <Route path="/nanaparappu" component={Nanaparappu} />
        <Route path="/aravakurichi" component={Aravakurichi} />
      </Switch>

      </div>
      </Router>
    </>
  );
}

export default App;
