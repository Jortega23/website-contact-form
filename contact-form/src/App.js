import React, { Component } from 'react';
import Form from './components/Form'
import HeaderBar from './components/HeaderBar'

import './App.css';


class App extends Component {
  render(){
  return (
    <div className="App" >
      <HeaderBar />
      <div className='AppBody'>
        <h1>Contact Us</h1>
        <p>Questions, Bug Reports, Feedback - we are here for you.</p>
      </div>
      <Form />
    </div>
    );
  }
}

export default App;
