import React, { useState } from 'react';
import './App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Headers(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='Header'>
      <Navbar {...args}>
        <NavbarBrand className="navbar-brand" href="/">Sobre o Desenvolvedor</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="https://www.linkedin.com/in/abra%C3%A3o-fontenele-5a4433102/">Linkedin</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/othonaf">
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Headers;