import React, { useState } from 'react';
import PropTypes from 'prop-types';
// use react-resize-observer to adapt and resize grid
import ResizeObserver from 'react-resize-observer';
import { Gif, Grid } from '@giphy/react-components';

const GiphyGrid = ({ fetchGifs }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [modalGif, setModalGif] = useState();

  const onClick = (gif, e) => {
    e.preventDefault();
    setModalGif(gif);
  };

  return (
    <React.Fragment>
      <div className='mx-2 pt-md-4'>
        <Grid
          onGifClick={(gif, e) => onClick(gif, e)}
          fetchGifs={fetchGifs}
          width={width}
          columns={3}
          gutter={6}
        />
        <ResizeObserver
          onResize={({ width }) => {
            setWidth(width);
          }}
        />
      </div>
      {modalGif && (
        <div className='overlay' onClick={e => onClick(undefined, e)}>
          <Gif gif={modalGif} width={width * 0.72} />
        </div>
      )}
    </React.Fragment>
  );
};

GiphyGrid.propTypes = {
  fetchGifs: PropTypes.func.isRequired,
};

export default GiphyGrid;
