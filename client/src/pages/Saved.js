import React, { useState, useEffect } from 'react';
import SearchInput from '../components/SearchInput';
import BookList from '../components/BookList';
import API from '../utils/API';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios'


export default function Search() {

    const[books, setBooks] = useState([])

    const onDelete = API.deleteBook

    function getBooks() {
        axios.get('/api/books')
        .then((results) =>  {
            console.log(results)
            setBooks(results.data)
        })
    }

    // listen to state changes
    useEffect(() => {
        //will only run once when component mounted
        getBooks()
    },[])

    


    return (
        <Container>
            <Row>
                <Col>
                    <BookList books={books} onDelete ={onDelete}/>
                </Col>
            </Row>
        </Container>
    )

}