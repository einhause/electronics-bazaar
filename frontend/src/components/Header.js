import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaOpencart } from 'react-icons/fa';
import { BiLogInCircle } from 'react-icons/bi';

const Header = () => {
  return (
    <header>
      <Navbar bg='primary' variant='light' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>Electronics Bazzar</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='/cart'>
                <FaOpencart /> Cart
              </Nav.Link>
              <Nav.Link href='/login'>
                <BiLogInCircle /> Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
