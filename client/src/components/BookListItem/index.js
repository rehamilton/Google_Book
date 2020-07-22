import React from 'react';

import { Row, Col, ListGroup, Image, Button } from 'react-bootstrap'


function BookListItem( { id, title, description, link, author, image, onSave, onDelete }) {

    return( 

        <ListGroup.Item>
            <Row>
                <Col md={9}>
                    <h2>{title}</h2>
                </Col>
                <Col>
                    {link && <Button as="a" href={link} target="_blank">View</Button>}
                    {onSave && (
                        <Button 
                        onClick={
                        () => {
                            onSave({title, description, image, link, author})
                            }
                        }>
                            Save
                        </Button>
                    )}
                    {onDelete && (<Button onClick={onDelete} variant="danger">Delete</Button>)}
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>{link}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>{author && author.join(", ")}</p>
                </Col>
            </Row>
            <Row>
                <Col md={3}>
                    <Image src={image || ""} alt="cover" />
                </Col>
                <Col>
                    <p>{description}</p>
                </Col>
            </Row>
        </ListGroup.Item>

    )

}

export default BookListItem