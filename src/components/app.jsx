import React, { Component } from 'react';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';


// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {  
  render() {
    const gifs = [

    ];

    return (
      <div>
        <div className="left-scene" />
        <SearchBar />
        <div className="selected-gif">
          <Gif id=""/>
        </div>
        <div className="right-scene" />
          <GifList gifs={}/>
      </div>
    );
  }
}

export default App;
