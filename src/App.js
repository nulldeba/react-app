import React, { Component } from 'react';
import './App.css';
import MyWallet from './Component/balance/MyWallet';

class App extends Component {



  render() {
    return (
      <div className="App">
        My money is my money, None of your money.
       
        <MyWallet  />
      </div>
    );
  }
}

export default App;
