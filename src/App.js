import React, { Component } from 'react';
import './App.css';
import MyMapComponent from "./Componentes/Map"
import FavoriteContainer from "./Componentes/FavoriteContainer";
import cdmxstore from './images/cdmxstore.png'

class App extends Component {
  render() {
    return (
      
        <div className="App container">
          <nav className="navbar navbar-light " Style="background-color: #FFFFF;"> <img alt="storeicon" src={cdmxstore} width="250px" /></nav>
        <div className="row">
          
          <div className="col-8">
          <MyMapComponent isMarkerShown/>
          </div>
          <div className="col-3 favoriteContainer">
          
          <FavoriteContainer />
          </div>
        </div>
      
        
        
      </div>
    );
  }
}

export default App;
