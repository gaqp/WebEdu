import React from 'react';

import Routes from './routes.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./app.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


library.add(fab, faSearch,faArrowRight);

function App() {

  return (
    <div className="App" >
      <Routes/>
    </div>
  );
}

export default App;
