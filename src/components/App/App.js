import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';

function App() {

  return (

      <div className='App'>
        <Header />
          <div className='wrapper'>
            <Nav />
              <div className='innerwrapper'>
              <About />
              <Portfolio />
              </div>
            <Footer />
          </div>
      </div>

    );
}

export default App