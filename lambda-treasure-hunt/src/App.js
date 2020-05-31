import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Welcome from "./views/welcome";
import Home from "./views/home";


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Welcome}/>
        <Route path="/home" component={Home} />
      </Router>
    </div>
  );
}

export default App;
