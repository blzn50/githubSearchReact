import React from 'react';
import { Button, Form, Input } from 'reactstrap';

const Search = ({ handleSearch, handleKeyPress }) => {
  return (
    <div className="search">
      <Form onSubmit={handleSearch} onKeyPress={handleKeyPress}>
        <Input
          type="text"
          name="search"
          placeholder="Search profile in github..."
          className="mb-2"
        />
        <Button style={{ width: '30%' }} color="success">
          Search
        </Button>
      </Form>
    </div>
  );
};

export default Search;
