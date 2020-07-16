import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, Button } from 'reactstrap';

import { giphy } from 'assets/giphy';

const SearchInput = ({ buttonText, placeholder }) => {
  const [valueInput, setValueInput] = useState(undefined);

  return (
    <Form className='container'>
      <FormGroup>
        <div className='text-center mt-5 pb-2'>
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
          />
          <InputGroupAddon addonType='append'>
            <Button color='primary'>{buttonText}</Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
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
