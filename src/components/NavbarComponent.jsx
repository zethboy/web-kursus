import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import {navLinks} from "../data/index"

const NavbarComponent = () => {
  return <div>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          {navLinks.map((link)=>{
              return(
              <div key={link.id}>
                <NavLink to={link.path}>{link.text}</NavLink>  
              </div>
               );
          })
          }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
}

export default NavbarComponent;