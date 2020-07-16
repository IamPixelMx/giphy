import React, { useState } from 'react';
// use react-resize-observer to adapt and resize grid
import ResizeObserver from 'react-resize-observer';
import { Gif, Grid } from '@giphy/react-components';
import { useSelector } from 'react-redux';
import { getTargetGifs, getTrendingGifs } from 'store/sagas/api';
import { getTargetValue } from 'selectors';

const GiphyGrid = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [modalGif, setModalGif] = useState();
  const targetValue = useSelector(getTargetValue);

  const onClick = (gif, e) => {
    e.preventDefault();
    setModalGif(gif);
  };

  const onSubmit = () => {};

  const fetchedGifs = targetValue ? getTargetGifs(targetValue) : getTrendingGifs;

  return (
    <React.Fragment>
      <div className='mx-2 pt-md-4'>
        <Grid
          onGifClick={(gif, e) => onClick(gif, e)}
          fetchGifs={fetchedGifs}
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

export default GiphyGrid;
