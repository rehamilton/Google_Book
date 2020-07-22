import React from 'react'
import {Container, Nav} from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import './style.css'

function Navigator() {

    return(
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Navbar.Brand href="/">Google Books</Navbar.Brand>
                <Nav.Link>Link</Nav.Link>
              
            </Navbar>
        </Container>
    )

}

export default Navigator
