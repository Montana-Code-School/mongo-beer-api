import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

export default class Beer extends React.Component {
  constructor(){
    super();
    this.state = {beers : []};
  }
  // componentDidMount(){
  // //  axios.get('localhost:3000/beers')
  //   .then(function(response) {
  //     this.setState({beers: response})
  //   })
  // }
  render(){
    return (
    <div>
      <h3>
        Beer
        <ul>{this.state.beers.map((beer)=> <li>beer.name</li>)}</ul>
      </h3>
    </div>
    )
  }
}
