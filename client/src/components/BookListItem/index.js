import React from 'react';

import { Row, Col, ListGroup, Image, Button } from 'react-bootstrap'


function BookListItem( { _id, id, title, description, link, author, image, onSave, onDelete }) {

    return( 

        <ListGroup.Item >
            <Row>
                <Col md={9}>
                    <h2>{title}</h2>
                </Col>
                <Col>
                    {link && <Button as="a" href={link} className = "float-right m-1" target="_blank">View</Button>}
                    {onSave && (
                        <Button 
                        className = "float-right m-1"
                        onClick={() => {onSave({title, description, image, link, author})}}>
                            Save
                        </Button>
                    )}
                    {onDelete && (<Button className = "float-right m-1" onClick={() => onDelete({_id})} 
                        variant="danger">Delete</Button>
                    )}
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