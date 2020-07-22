import React, { useState } from 'react';
import SearchInput from '../components/SearchInput';
import BookList from '../components/BookList';
import API from '../utils/API';
import { Container, Row, Col } from 'react-bootstrap';


export default function Search() {

    const [search, setSearch] = useState('');
    const[books, setBooks] = useState([])

    const onDelete = API.deleteBook

    const onSearch = async (evt) => {
        evt.preventDefault();

        const result = await API.getBooks();
        console.log(result);
       
        // const books = result.map((book) => ({
        //     id: book.id,
        //     title: book.volumeInfo.title,
        //     description: book.volumeInfo.description,
        //     author: book.volumeInfo.authors,
        //     link: book.volumeInfo.infoLink,
        //     image: book.volumeInfo.imageLinks.thumbnail,
        //     onDelete,
        // }))
        // setBooks(books)
    }

    return (
        <Container>
            <Row>
                <Col>
                    <SearchInput 
                    search={search} 
                    onSearchChange={setSearch} 
                    onSearch={onSearch}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <BookList books={books}/>
                </Col>
            </Row>
        </Container>
    )

}