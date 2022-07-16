import React from "react";
import  ReactDOM  from "react-dom";

import Router from "./Route";
import './index.css';
  
import Navbar from './Navbar';
import Footer from './Footer';
ReactDOM.render(
  <>
  <Navbar/>

  <Router/>

  
  <Footer/>
  </>,
  document.getElementById("root")
);