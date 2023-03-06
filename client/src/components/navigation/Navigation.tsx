import React, { FC } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

type User = {
  email: string;
  name: string;
} | null;

export interface NavProps {
  openLoginModal: () => void;
  updateUser: (user: User) => void;
  user: User | null;
}

const Navigation: FC<NavProps> = (props: NavProps) => {
  return (
    <Navbar collapseOnSelect expand="lg" className="navigation sticky-top">
      <Container>
        <Navbar.Brand className="navigation__title">Recipe Vault</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me_auto">
            <Nav.Link as={Link} to="/" className="navigation__link">
              Home
            </Nav.Link>
            {props.user && (
              <Nav.Link as={Link} to="/create" className="navigation__link">
                Create
              </Nav.Link>
            )}
            {props.user && (
              <Nav.Link as={Link} to="/vault" className="navigation__link">
                Vault
              </Nav.Link>
            )}
            {props.user && (
              <Nav.Link href="#" className="navigation__link">
                <button
                  data-testid="buttonLogout"
                  className="navigation__button"
                >
                  Sign Out
                </button>
              </Nav.Link>
            )}
            {!props.user && (
              <Nav.Link as={Link} to="/features" className="navigation__link">
                Features
              </Nav.Link>
            )}
            {!props.user && (
              <Nav.Link href="#" className="navigation__link">
                <button
                  data-testid="button"
                  className="navigation__button"
                  onClick={() => props.openLoginModal()}
                >
                  Get started!
                </button>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
