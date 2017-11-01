import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Beer from './components/Beer';
import Brewery from './components/Brewery';
import Stylefyle from './components/Stylefyle';

class App extends React.Component {
  render(){
    return (
    <div>
      <Beer/>
      <Stylefyle/>
      <Brewery/>
    </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
