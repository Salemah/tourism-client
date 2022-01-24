import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hook/UseAuth';

import './Header.css';

const Header = () => {
 const{user,logOut} = useAuth();
    return (
        <>
  <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark" >
    <Container className='navv'>
    <Navbar.Brand href="#home">Travel World</Navbar.Brand>
    <Navbar.Collapse className="justify-content-end">
      <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/home#packege">Packege</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
       {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}

      {user?.email && <NavDropdown title="Dashboard" id="basic-nav-dropdown">
          <NavDropdown.Item as={HashLink} to="/dashboard">Admin</NavDropdown.Item>
          
          
          
        </NavDropdown>} 
      <Navbar.Text>
        Signed in as: {user.displayName}</Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>

</>
    );
};

export default Header;