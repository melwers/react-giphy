import React, { Component } from 'react';
import giphy from 'giphy-api';

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
    giphy('h2T2AwoSUFidhnUgan1RQctr6rjIMr6r').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (error,result) => {
      this.setState({
        gifs: result.date
      });
    });
  }


  render() {
    return (
      <div>
        <div className="left-scene" />
        <SearchBar searchFunction={this.search} />
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
