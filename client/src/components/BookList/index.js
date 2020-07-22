import React from 'react';
import BookListItem from '../BookListItem'

import { ListGroup, Card } from 'react-bootstrap';

function BookList({ books }) {

    return(

        <Card >
            <Card.Title>Results</Card.Title>
            <Card.Body>
                <ListGroup>
                    {books.map((book) => (
                        <BookListItem key={book.id} {...book} />
                    ))}
                </ListGroup>
            </Card.Body>
        </Card>

    )

}

export default BookList