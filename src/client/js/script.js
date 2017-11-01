import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, BrowserRouter} from 'react-router-dom';
import Beer from './components/Beer.js';
import Brewery from './components/Brewery.js';

class Container extends React.Component {


  render(){
    return (
    <div>
      <h1>
        Welcome to the Beer and Brewery API
      </h1>
      <nav>
      <ul>
      <li><Link to = '/beer'>Beer</Link></li>
      <li><Link to = '/brewery'>Brewery</Link></li>
      </ul>
      </nav>
      <div className = "content">
      <Route path= '/beer' component={Beer} />
      <Route path= '/brewery' component={Brewery}/>
      </div>
    </div>
    )
  }
}
ReactDOM.render(<BrowserRouter><Container /></BrowserRouter>, document.getElementById('root'))
