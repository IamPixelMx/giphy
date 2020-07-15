import React from 'react';
import { Form, FormGroup, Label, Input, InputGroup, InputGroupAddon, Button } from 'reactstrap';

import { giphy } from 'assets/giphy';

const SearchInput = props => {
  return (
    <Form>
      <FormGroup>
        <div className='text-center mt-5 mb-4'>
          <Label for='input-search'>
            <img src={giphy} className='label-search' alt='logo' />
          </Label>
        </div>
        <InputGroup>
          <Input
            type='search'
            name='search'
            id='input-search'
            placeholder='Encuentra todos los GIFs...🔎'
          />
          <InputGroupAddon addonType='append'>
            <Button color='primary'>Buscar</Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

export default SearchInput;
