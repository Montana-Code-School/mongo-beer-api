import React from 'react';
import ReactDOM from 'react-dom';

export default class Stylefyle extends React.Component {

const columnStyle = {
  width: "50px",
  height: "50px",
  backgroundColor: "red";
}

  render(){
    return (
    <div>
      <div style = {columnStyle}>

      </div>
    </div>
    )
  }
}
