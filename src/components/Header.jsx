import React from 'react';

import HeaderButton from './HeaderButton'

const style = {
  width: '100%',
  background: '#01A9DB',
  float: 'left',
}

const Header = () => {
  return(
    <div className="header" style={style}>
      <HeaderButton name="home" value="Home" />
      <HeaderButton name="main" value="Main" />
      <HeaderButton name="about" value="Abaut" />
    </div>
  )
}

export default Header;
