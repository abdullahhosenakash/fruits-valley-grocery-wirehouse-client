import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleUserSignOut = () => {
        signOut(auth);
    }
    return (
        <nav>
            <Navbar className='fixed-top' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/home' className='fs-4'><span className='text-warning'>Fruits</span>Valley</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/inventory'>Inventory</Nav.Link>
                            <Nav.Link as={Link} to='/manage-inventories'>Manage Inventories</Nav.Link>
                            {
                                user && <div className='d-flex flex-lg-row flex-column'>
                                    <Nav.Link as={Link} to='/my-items'>My Items</Nav.Link>
                                    <Nav.Link as={Link} to='/add-inventory'>Add New Item</Nav.Link>
                                </div>
                            }
                            <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ? <div className='d-flex'>
                                    <span className='text-white mt-2 me-2'>{user?.displayName}</span>
                                    <Nav.Link onClick={handleUserSignOut}>Sign Out</Nav.Link>
                                </div>
                                    :
                                    <div className="d-flex flex-lg-row flex-column">
                                        <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                                        <Nav.Link as={Link} to='/signup'>Sign Up</Nav.Link>
                                    </div>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>
    );
};

export default Header;