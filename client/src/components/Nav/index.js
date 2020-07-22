import React from 'react'
import {Container, Nav} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import './style.css'

function Navigator() {

    return(
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">Google Books</Navbar.Brand>
                <Navbar.Brand href="/search">Search</Navbar.Brand>
                <Navbar.Brand href="/saved">Saved</Navbar.Brand>
            </Navbar>
        </Container>
    )

}

export default Navigator
