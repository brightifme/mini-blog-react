import React from 'react'
import './App.css';
import {Navbar, Nav } from 'react-bootstrap';


class App extends React.Component {

  render() {
    return(
    <div className="center">
  <Navbar bg="success" variant="light">
    <Navbar.Brand href="/">Bright Blog</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="#">Dev Session</Nav.Link>
      <Nav.Link href="/portfolio">Portfolio</Nav.Link>
      <Nav.Link href="#pricing">About Me</Nav.Link>
      <Nav.Link href="#pricing">Contact</Nav.Link>
      <Nav.Link href="/design">Design</Nav.Link>
      
    </Nav>
  </Navbar>



 
    </div>
    );

  }
}
export default App;