import React from 'react'
import { Row, Container, Card} from 'react-bootstrap'

function Header() {

    return (
        <Container className="mt-4">

            <Card>
                <h1 align = "center" className="pt-5">(React) Google Books Search</h1>
                <h4 align = "center" className="pb-5">Search and Save Books of Interest</h4>

            </Card>

        </Container>

    )

}

export default Header