import React from 'react';

import { connect } from "react-redux";

const style = {
  display: 'inline-block',
  cursor: 'pointer'
}

const click = (event) =>{ 
  console.log(event.target.className);
}

const Block = ({value}) => {
  return(
    <div id="block" style={style}>
      {value.map((item, key) =>
      <div key={key}>
        <div className={key} onClick={click}>{item.label}</div>
      </div>
      )}
    </div>
);


}

export default Block;