import React from 'react';

import { Form, Button } from 'react-bootstrap';



function SearchInput() {

    return (

        <Form>
            <Form.Group controlId="book-title">
                <Form.Label>Book</Form.Label>
                <Form.Control type="title" placeholder="Enter book title" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Search
            </Button>
        </Form>
    )

}

export default SearchInput