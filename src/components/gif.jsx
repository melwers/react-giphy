import React, { Component } from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Gif extends Component {
  render() {
    const src = "https://media2.giphy.com/media/id.gif";
    return (
      <img src={src} alt="" className="gif" />
    );
  }
}

export default Gif;
