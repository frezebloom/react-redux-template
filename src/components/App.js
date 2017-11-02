import React, { Component } from 'react';

import { connect } from "react-redux";

import Header from './Header'
import Block from './Block'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Block />
      </div>
    );
  }
}

export default connect(
  state => ({
    data: state
  }),
  dispatch => ({ })
)(App);
