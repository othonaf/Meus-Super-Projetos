import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageContext } from './LanguageContext';
import bandSpn from './bandSpn.png'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse
} from 'reactstrap';

export default function Header(args) {
  const location = useLocation();
  const { texts, setLanguage } = useContext(LanguageContext);

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location,]);

  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Navbar {...args} className='Header responsive-navbar' fixed="top" height='80px' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <NavbarToggler>{texts.navbar.start}</NavbarToggler>
        <div>
          <button onClick={() => setLanguage('en')}><img src='https://uploads-ssl.webflow.com/633c3ed2fab2dc95e0de5322/633c407d5f0413042686ada5_language.png' alt='' className='Brasil' /></button>
          <button onClick={() => setLanguage('pt')}><img src='https://uploads-ssl.webflow.com/633c3ed2fab2dc95e0de5322/633c407d5f0413753386ada7_language%20(1).png' alt='' className='Brasil' loading='lazy' /></button>
          <button onClick={() => setLanguage('es')}>
            <img src={bandSpn} alt='' className='Brasil' loading='lazy' />
          </button>
        </div>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavbarBrand className='Header'><Link className='submenu' to="/#sobre-mim">{texts.navbar.aboutMe}</Link></NavbarBrand>
            <NavItem>
              <NavLink className='submenu'><Link className='submenu' to="/trabalhos">{texts.navbar.worksAndExperiences}</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='submenu'><Link className='submenu' to="#background-footer">{texts.navbar.contact}</Link></NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='submenu' href='/curriculumOthon.pdf' download>{texts.navbar.curriculum}</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}