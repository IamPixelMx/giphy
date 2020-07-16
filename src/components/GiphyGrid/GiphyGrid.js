import React, { useState } from 'react';
// use react-resize-observer to adapt and resize grid
import ResizeObserver from 'react-resize-observer';
import { Gif, Grid } from '@giphy/react-components';
import { useSelector } from 'react-redux';

import { getTargetValue } from 'selectors';
import { getTrendingGifs } from 'store/sagas/api';
import { giphyFetch } from 'utils';

const GiphyGrid = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [modalGif, setModalGif] = useState();
  const targetValue = useSelector(getTargetValue);
  const fetchGifs = targetValue
    ? offset => giphyFetch.search(targetValue, { offset, lang: 'es', limit: 10 })
    : getTrendingGifs;

  const onClick = (gif, e) => {
    e.preventDefault();
    setModalGif(gif);
  };

  return (
    <React.Fragment>
      <div className='mx-2 pt-md-2'>
        <h5 className='text-muted pb-2'>
          {targetValue ? `Resultados para "${targetValue}"` : 'Top Choice'}
        </h5>
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

export default GiphyGrid;
