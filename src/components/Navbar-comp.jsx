import { Container, Nav, Navbar } from "react-bootstrap"

const Navbarcomp = () => { 

 return(
    <Navbar className="Navbar">
        <Container>
            <Navbar.Toggle aria-controls='main-navbar'/>
            <Navbar.Collapse id='main-navbar'>
                <Nav>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#home">Creative</Nav.Link>
                    <Nav.Link href="#home">Educator</Nav.Link>
                    <Nav.Link href="#home">About</Nav.Link>
                    <Nav.Link href="#home">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
)
}

export default Navbarcomp