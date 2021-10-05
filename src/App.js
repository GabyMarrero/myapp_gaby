import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';

class App extends Component {
      constructor(props){
        super(props)

        this.state={
          color:"blue"

        }

        this.cambiarColor = this.cambiarColor.bind(this);

      }

      cambiarColor(){
        if(this.state.color == "blue"){
          this.setState({color:"red"})
        }else{
          this.setState({color:"blue"})
        }

      }

  render(){
    return (
      <div className="App">
        <button onClick={this.cambiarColor} style={{backgroundColor: this.state.color}}>
          Mi boton
        </button>
      </div>
    );
  }
  
}

export default App;
