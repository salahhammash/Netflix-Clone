import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';


function Navbar1() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/faver">Fav</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )

}

export default Navbar1