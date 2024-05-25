import React from 'react'
import '../header/header.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Header = () => {
  return (
    <div>
    <BasicExample />
    </div>
  )
}

function BasicExample() {
  const navigate = useNavigate();
  const token = Cookies.get('jwt');
  
  const logoff = ()=>{
    if (token) {
      Cookies.remove('jwt');
      navigate('/login');
    }
  }

    return (
      <Navbar expand="lg" className=" navbar">
        <Container>
          <Navbar.Brand as={Link} to='/' >Jobby</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/' >Home</Nav.Link>
              <Nav.Link as={Link} to='/jobs' >jobs</Nav.Link>
              <Nav.Link as={Link} to='/login' onClick={logoff} >{token ? 'Logout' : 'Login'}</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

export default Header