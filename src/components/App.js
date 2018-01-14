import React, { Component } from 'react';

import { connect } from "react-redux";

import Header from './Header'
import Button from './Button'


class App extends Component {
  render() {
    
    return (
      <div>
        <Header />
        <Button />
      </div>
    );
  }
}

export default App;
