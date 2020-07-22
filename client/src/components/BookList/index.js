import React from 'react';
import BookListItem from '../BookListItem'

import { ListGroup, Card } from 'react-bootstrap';

function BookList() {

    return(

        <Card >
            <Card.Title>Results</Card.Title>
            <Card.Body>
                <ListGroup>
                    <BookListItem />
                </ListGroup>
            </Card.Body>
        </Card>

    )

}

export default BookList