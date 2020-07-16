import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Label, Input, InputGroup, InputGroupAddon, Button } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { fetchGifs } from 'actions';

import { giphy } from 'assets/giphy';

const SearchInput = ({ buttonText, placeholder }) => {
  const [valueInput, setValueInput] = useState(undefined);
  const dispatch = useDispatch();

  const onEnter = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      dispatch(fetchGifs({ value: valueInput, trending: false }));
    }
  };
  const onClick = e => {
    if (e.key === 'Enter') {
      alert(e.value);
    }
    e.preventDefault();
    dispatch(fetchGifs({ value: valueInput, trending: false }));
  };

  return (
    <div className='container my-4'>
      <div className='text-center'>
        <Label for='input-search'>
          <img src={giphy} className='label-search' alt='logo' />
        </Label>
      </div>
      <InputGroup>
        <Input
          value={valueInput}
          type='search'
          name='search'
          id='input-search'
          placeholder={placeholder}
          onChange={e => {
            setValueInput(e.target.value);
          }}
          onKeyPress={e => onEnter(e)}
        />
        <InputGroupAddon addonType='append'>
          <Button onClick={e => onClick(e)} color='primary'>
            {buttonText}
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
};

SearchInput.defaultProps = {
  buttonText: 'Buscar',
  placeholder: 'Encuentra los mejores GIFs... 🔎',
};

SearchInput.propTypes = {
  buttonText: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default SearchInput;
