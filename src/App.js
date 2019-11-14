import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {


  render() {
    return (
      <div className='app-content'>
        <h1>Hi Ninjas</h1>
    <p>{Math.random()*10}</p>
      </div>
    )
  }

}

export default App;
