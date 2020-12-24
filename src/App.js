import React from 'react';
import Home from './Home';
import Registration from './Registration';
import Body from './Body';
import Footer from './Footer';
import {Route , BrowserRouter as Router , Switch } from 'react-router-dom';
import Update from './Update';
import Contact from './Contact';
import About from './About';


function App() {
  return (
    
      <Router>
        <div className="app">
          <Switch>
            <Route path="/update">
              <Update />
            </Route>
            <Route path = "/about">
              <About />
            </Route> 
            <Route path="/contact">
              <Contact />
              <Footer />
            </Route>
            <Route path="/">
                <Home />
                <Registration />
                <Body />
                <Footer />
            </Route>          
          </Switch>
        </div>
      </Router>
      
    
  );
}

export default App;
