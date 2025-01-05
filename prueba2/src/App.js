// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Tienda from './pages/Tienda';
import Ubicacion from './pages/Ubicacion';
import './App.css'; // Importando los estilos globales

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/tienda" component={Tienda} />
        <Route path="/ubicacion" component={Ubicacion} />
      </Switch>
    </Router>
  );
};

export default App;
