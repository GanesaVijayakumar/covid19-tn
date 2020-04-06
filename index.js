import React, { Component } from 'react';
import { render } from 'react-dom';
import Tamilnadu from './Tamilnadu';
import Kerala from './Kerala';
import Footer from './Footer';
import './style.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div>
          <p>
            <h2>Covid-19 - Top 10 cities</h2>
            <h5>Updated: 05/04/2020 01:30 PM</h5>
          </p>
        </div>
        <Tamilnadu />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
