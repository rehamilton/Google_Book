import React from 'react';
import SearchInput from '../components/SearchInput'
import BookList from '../components/BookList'

import { Container, Row, Col } from 'react-bootstrap';

export default function Search() {

    return (
        <Container>
            <Row>
                <Col>
                    <SearchInput />
                </Col>
            </Row>
            <Row>
                <Col>
                    <BookList />
                </Col>
            </Row>
        </Container>
    )

}