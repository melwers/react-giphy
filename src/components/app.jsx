import React, { Component } from 'react';

import SearchBar from './search_bar';
import Gif from './gif';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div>
        <div className="left-scene" />
        <SearchBar />
        <div className="selected-gif">
          <Gif />
        </div>
        <div className="right-scene" />
      </div>
    );
  }
}

export default App;
