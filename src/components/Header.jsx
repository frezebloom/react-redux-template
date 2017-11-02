import React from 'react';
import { connect } from "react-redux";

import HeaderButton from './HeaderButton'

const style = {
  width: '100%',
  background: '#01A9DB',
  float: 'left',
}

const Header = () => {
  return(
    <div className="header" style={style}>
      <HeaderButton id="home" name="home" value="Home" />
      <HeaderButton id="main"name="main" value="Main" />
      <HeaderButton id="about"name="about" value="Abaut" />
      <HeaderButton id="showBlock" name="showBlock" value="Show Block" />
    </div>
  )
}

export default connect(
  state => ({
    data: state
  }),
  dispatch => ({ })
)(Header);
