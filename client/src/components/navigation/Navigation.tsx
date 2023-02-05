import React, { FC } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

interface ModalProps {
  openLoginModal: () => void;
}

const Navigation: FC<ModalProps> = (props: ModalProps) => {
  return (
    <Navbar expand="lg" className="navigation sticky-top">
      <Container>
        <Navbar.Brand className="navigation__title">Recipe Vault</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me_auto">
            <Nav.Link href="#" className="navigation__link">
              Home
            </Nav.Link>
            <Nav.Link href="#" className="navigation__link">
              Features
            </Nav.Link>
            <Nav.Link href="#" className="navigation__link">
              <button
                className="navigation__button"
                onClick={() => props.openLoginModal()}
              >
                Get started!
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
