import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class GifList extends Component {
  render() {
    this.props.gifs.map(gif => {
        return <Gif id={gif.id} />
    });
  }
}

export default GifList;
