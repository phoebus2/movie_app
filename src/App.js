import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navi from "./components/Navi";

function App() {
  return (
    <HashRouter>
      <Navi />
      <Route path="/" exact={true} component={Home}/>
      <Route path="/about" component={About}/>
    </HashRouter>
  )
}

export default App;