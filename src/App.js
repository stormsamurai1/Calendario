import React from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom'
import './App.css';

import Calendario from './Components/Calendario/Calendario'
import Teste from './Components/Teste/Teste'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/teste" component={Teste}/>
        <Route exact path="/" component={Calendario}/>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
