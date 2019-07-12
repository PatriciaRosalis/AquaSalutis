import React from 'react';
import './App.scss';
import Navbar from './Navbar';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import Books from './Books';
import Home from './Home';
import Packs from './Packs';
import SemDisponibilidade from './SemDisponibilidade';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Navbar /> */}
      </header>
      
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Sobre-nós" component={About} />
        <Route path="/Aqua-Card" component={Books} />
        <Route path="/Packages" component={Packs} />
        <Route path="/Reservas" component={SemDisponibilidade} />
        <Route render={() => <h2>404</h2>} />
      </Switch>
    </div>
  );
}

export default App;
