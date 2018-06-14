import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";



const App = () =>
<Router> 
  <div>
    <Navbar />
    <Wrapper>
    </Wrapper>  

  </div>
</Router>  

export default App;
