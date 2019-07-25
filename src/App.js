import React from 'react';
import Home from './components/Homepage/Home'
import About from './components/AboutME/About'
import {Route,BrowserRouter  as Router} from 'react-router-dom'
function App() {
  return (
    <div>
      <Router>
    <Route exact path="/" component={Home} />
       <Route exact path="/about" component={About} />
     </Router>
    </div>
  );
}

export default App;
