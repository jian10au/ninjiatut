import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  state = {
    name:'Ryu',
    age:30
  }

  render() {
    
    return (
      <div className='app-content'>
        <h1>Hi Ninjas</h1>
      <p>{this.state.name}</p>
      </div>
    )
  }

}

export default App;
