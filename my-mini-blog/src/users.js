import React from 'react'
import './App.css'
import {Navbar, Nav} from 'react-bootstrap';


class Users extends React.Component {
  render() {
  	return (
   <div className="Users">
  <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">Bright Blog</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#">Home</Nav.Link>
      <Nav.Link href="#features">Dev Session</Nav.Link>
      <Nav.Link href="/portfolio">Portfolio</Nav.Link>
      <Nav.Link href="#pricing">About Me</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
      
    </Nav>
  </Navbar>



 
    </div>
    );

  }
}
export default Users;


