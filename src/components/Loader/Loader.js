import React from 'react';
import { Spinner } from 'reactstrap';

const Loader = props => {
  return (
    <div className='text-center mt-5'>
      {SPINNER_COLORS.map(color => (
        <Spinner key={`${color}-spinner`} type='grow' color={color} className='m-2' />
      ))}
    </div>
  );
};

const SPINNER_COLORS = ['danger', 'primary', 'success', 'warning', 'dark', 'info'];

export default Loader;
