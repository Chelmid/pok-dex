
import './App.css';
import Home from './components/home/home'
import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
//import createHistory from "history/createBrowserHistory";

/*
<Router history={browserHistory}>
        <Route path="/" component={ Home }></Route>
      </Router>
*/

const App = () => {
  
  //const browserHistory = createHistory();
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
