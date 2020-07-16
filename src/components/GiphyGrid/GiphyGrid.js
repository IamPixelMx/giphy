import React, { useState } from 'react';
// use react-resize-observer to adapt and resize grid
import ResizeObserver from 'react-resize-observer';
import { Gif, Grid } from '@giphy/react-components';
import { useSelector } from 'react-redux';
import { getTrendingGifs } from 'store/sagas/api';
import { getTargetValue } from 'selectors';

import { giphyFetch } from 'utils';

// fetch 10 gifs at a time as the user scrolls (offset is handled by the grid)

const GiphyGrid = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [modalGif, setModalGif] = useState();
  const targetValue = useSelector(getTargetValue);
  const getTargetGifs = offset => giphyFetch.search(targetValue, { offset, lang: 'es', limit: 10 });
  const fetchGifs = targetValue ? getTargetGifs : getTrendingGifs;

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
