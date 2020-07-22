import React from 'react';
import BookListItem from '../BookListItem'

import { ListGroup, Card, Row } from 'react-bootstrap';

function BookList({ books, onDelete }) {



    return(

        <Card >
            <Card.Title>Results</Card.Title>

            <Card.Body>
                <ListGroup>
                    {books.map((book) => (
                        <BookListItem key={book.id || book._id} {...book} onDelete={onDelete} />
                    ))}
                </ListGroup>
            </Card.Body>
        </Card>

    )

}

export default BookList