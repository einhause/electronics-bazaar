import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button, FormControl } from 'react-bootstrap';

const SearchBox = () => {
  const history = useHistory();

  const [keyword, setKeyword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push('/');
    }
  };

  return (
    <Form onSubmit={submitHandler} inline>
      <FormControl
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5'
      ></FormControl>
      <Button type='submit' variant='outline-light' className='p-2'>
        Search
      </Button>
    </Form>
  );
};

export default SearchBox;
