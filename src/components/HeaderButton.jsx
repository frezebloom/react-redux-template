import React from 'react';
import { connect } from "react-redux";

const handleShowBlock = (event) => {
  if(event.target.id === 'showBlock'){
   
    this.props.showBlock(true);
  }

}

const HeaderButton = ({name, value, id, data}) => {
  return(
    <div className="headerButton" id={id} onClick={handleShowBlock} name={name}>{value}</div>
  )
}


export default connect(
  state => ({
    data: state
  }),
  dispatch => ({
    showBlock: state => {
      dispatch({ type: "SHOW_BLOCK", payload: state });
    },
  })
)(HeaderButton);
