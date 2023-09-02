import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

type Props = {}

const Header = (props: Props) => {
    return (
        <Navbar
            expand="lg"
            className="bg-body-tertiary"
            bg="dark"
            data-bs-theme="dark"
        >
            <Container>
                <Navbar.Brand><Link to="/">The Book Keeper</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link to="/" className='navbar-link'>Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/cart" className='navbar-link'>Other</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/cart" className='navbar-link'>About</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/cart" className='navbar-link'>Cart</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default Header
