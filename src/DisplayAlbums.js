import React from 'react';
import ImageLoop from './ImageLoop';

function displayAlbums(props) {
  return (
    <div>
      <h4>{props.albums}</h4>
      <ImageLoop artist={props.artist}/>
    </div>
  );
}

export default displayAlbums;
