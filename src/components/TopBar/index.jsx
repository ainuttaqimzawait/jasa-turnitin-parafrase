import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import WhatsApp from '../WhatsApp';

function TopBar() {
    return (
        <div>
            <Navbar expand="sm" className="bg-body-tertiary mb-3" style={{ position: "fixed", width: "100vw" }}>
                <Container fluid>
                    <Navbar.Brand href="#">Turnitin.id</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-expand`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-expand`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-expand`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-expand`}>
                                Offcanvas
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">Layanan Kami</Nav.Link>
                                <Nav.Link href="#action2">Kontak</Nav.Link>
                                <NavDropdown
                                    title="FAQ"
                                    id={`offcanvasNavbarDropdown-expand-expand`}
                                >
                                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action4">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                        Something else here
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <WhatsApp />
        </div>
    );
}

export default TopBar;