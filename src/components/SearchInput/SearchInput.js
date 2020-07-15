import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, Button } from 'reactstrap';

import { giphy } from 'assets/giphy';

const SearchInput = ({ buttonText, placeholder }) => {
  return (
    <Form>
      <FormGroup>
        <div className='text-center mt-5 mb-4'>
          <Label for='input-search'>
            <img src={giphy} className='label-search' alt='logo' />
          </Label>
        </div>
        <InputGroup>
          <Input type='search' name='search' id='input-search' placeholder={placeholder} />
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
