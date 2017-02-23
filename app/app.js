
import React, { Component } from 'react';
import { render } from 'react-dom';

import MyComponent from './components/my-component';

class App extends Component {
  render() {
    return (
      <div>
        <MyComponent />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
