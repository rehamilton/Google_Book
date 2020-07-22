import React from 'react';

import { Form, Button } from 'react-bootstrap';



function SearchInput({ search, onSearchChange, onSearch }) {

    return (

        <Form onSubmit={onSearch}>
            <Form.Group controlId="book-title">
                <Form.Label>Book</Form.Label>
                <Form.Control 
                    value={search} 
                    onChange={evt => onSearchChange(evt.target.value)} 
                    placeholder="Enter book title" 
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Search
            </Button>
        </Form>
    )

}

export default SearchInput