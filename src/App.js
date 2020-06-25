import React from 'react';
import {Route} from 'react-router-dom';
import Particles from 'react-particles-js';
import './App.css';
import 'tachyons';

import HomePage from './pages/homepage/homepage';
import Bio from './pages/bio/bio';
import Contact from './pages/contact/contact';

const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 1000
      }
    }
  }
}


function App() {
  return (
    <div>
    	 <Particles className='particles'
          params={particlesOptions}
        />

	    <Route exact path='/' component={HomePage} />
	    <Route exact path='/contact' component={Contact} />
	    <Route exact path='/bio' component={Bio} />
    </div>
  );
}

export default App;
