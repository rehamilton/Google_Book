import React from 'react';

import { Row, Col, ListGroup, Image, Button } from 'react-bootstrap'


function BookListItem( { title, description, link, author, image }) {

    return( 

        <ListGroup.Item>
            <Row>
                <Col md={9}>
                    <h2>{title}</h2>
                </Col>
                <Col>
                    <Button>View</Button>
                    <Button>Save</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>{link}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>{author}</p>
                </Col>
            </Row>
            <Row>
                <Col md={3}>
                    <Image src={image} alt={title} />
                </Col>
                <Col>
                    <p>{description}</p>
                </Col>
            </Row>
        </ListGroup.Item>

    )

}

export default BookListItem