import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'reactstrap';

const SPINNER_COLORS = ['danger', 'primary', 'success', 'warning', 'dark', 'info'];
const Loader = ({ type }) => {
  return (
    <div className='text-center mt-5'>
      {SPINNER_COLORS.map(color => (
        <Spinner key={`${color}-spinner`} type={type} color={color} className='m-2' />
      ))}
    </div>
  );
};

Loader.defaultProps = {
  type: 'grow',
};

Loader.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Loader;
