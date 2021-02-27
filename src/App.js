import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Nav from './components/Nav/Nav';
import Portfolio from './components/Portfolio/Portfolio';

function App() {

  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='wrapper'>
          <Nav />
          <div className='innerwrapper'>
            <Switch>
              <Route path='/portfolio'>
                <Portfolio />
              </Route>

              {/* <Route path='/portfolio'>
                <Portfolio />
              </Route>

              <Route path='/portfolio'>
                <Portfolio />
              </Route>

              <Route path='/portfolio'>
                <Portfolio />
              </Route> */}
            </Switch>
          </div>
        </div>

      </div>
    </Router>
    );
}

export default App