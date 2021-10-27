import { Button, Nav, Navbar, NavDropdown } from "react-bootstrap";
import React, { useState, useContext } from "react";
//import { AuthContext } from "../../auth/auth";
import "./navbar.css";
import ModalPopUp from "../modal/modal";
import Axios from "axios";

const NavBar = () => {
  const logOut = () => {};

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar expand="lg">
      <a href="/">
        <img src="/medias/logokajbak.png" width="100px" alt="KajBak logo" />
      </a>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto mr-auto">
          <Nav.Link href="/">Accueil</Nav.Link>
          <Nav.Link href="/team">Notre équipe</Nav.Link>
          <Nav.Link href="/products">Nos produits</Nav.Link>
          <NavDropdown title="Mon compte" id="basic-nav-dropdown">
            <NavDropdown.Item
              /*style={{ display: currentUser ? 'none' : 'block' }}*/ id="login"
              href="/login"
            >
              Login
            </NavDropdown.Item>
            <NavDropdown.Item
              /*style={{ display: currentUser ? 'none' : 'block' }}*/ id="register"
              href="/register"
            >
              Inscription
            </NavDropdown.Item>
            <NavDropdown.Item
              /*style={{ display: currentUser ? 'block' : 'none' }}*/ id="profile"
              href="/profile"
            >
              Mon profil
            </NavDropdown.Item>
            <NavDropdown.Item
              /*style={{ display: currentUser ? 'block' : 'none' }}*/ id="logout"
              href="/" /*onClick={logOut}*/
            >
              Déconnexion
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Button
          variant="success"
          id="estimation-nav"
          onClick={() => setShow(true)}
        >
          Estimez votre meuble &gt;{" "}
        </Button>
        <ModalPopUp show={show} handleClose={handleClose} />
        <a href="/cart">
          <img id="panier-logo" src="/medias/panier.png" alt="Panier" />
        </a>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
