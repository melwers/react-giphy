import React, { Component } from 'react';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';


// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: ""
    }
  }

  search = (query) => {
    // TODO: API Call
  }


  render() {
    const gifs = [

    ];

    return (
      <div>
        <div className="left-scene" />
        <SearchBar />
        <div className="selected-gif">
          <Gif id={this.state.selectedGifId}/>
        </div>
        <div className="right-scene" />
          <GifList gifs={this.state.gifs}/>
      </div>
    );
  }
}

export default App;
