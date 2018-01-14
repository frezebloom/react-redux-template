import React, { Component } from 'react';
import { connect } from "react-redux";

import { itemsFetchData } from '../actions/items';

import Block from './Block'


class Button extends Component {
  
  queryApi = () => {
    this.props.fetchData('http://599167402df2f40011e4929a.mockapi.io/items');
  }
  
  render() {
    return (
      <div>
        <div className="button" onClick={this.queryApi}>
          Загрузить данные
        </div>
          <Block value={this.props.items} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      items: state.items,
      hasErrored: state.itemsHasErrored,
      isLoading: state.itemsIsLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: (url) => dispatch(itemsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);
