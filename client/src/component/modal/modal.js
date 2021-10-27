import { Button, Modal, Form, Col } from "react-bootstrap";
import React from "react";
import "./modal.css";

const ModalPopUp = ({ show, handleClose }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Bienvenue pour votre estimation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Informations du meuble dont vous souhaitez vous en débarassez ?</p>
        <Form>
          <b>Taille du meuble</b>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check inline type="checkbox" label="Volumineux" />
            <Form.Check inline type="checkbox" label="Moyen" />
            <Form.Check inline type="checkbox" label="Petit" />
            <Form.Check inline type="checkbox" label="Objet de décoration" />
          </Form.Group>
          <Form.Group>
            <b>Indiquez le nom du meuble</b>
            <Form.Control type="text" placeholder="Exemple: Chaise" />
          </Form.Group>
          <b>Etat</b>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check inline type="checkbox" label="Neuf" />
            <Form.Check inline type="checkbox" label="Convenable" />
            <Form.Check inline type="checkbox" label="Inutilisable" />
            <Form.Check inline type="checkbox" label="En morceau" />
          </Form.Group>
          <Form.Group>
            <input type="file" name="file" />
          </Form.Group>
          <b>Informations personnelles</b>
          <Form>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="name" placeholder="Nom" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Prénom</Form.Label>
              <Form.Control type="name" placeholder="Prénom" />
            </Form.Group>
          </Form>

          <Form.Group controlId="formGridAddress">
            <Form.Label>Adresse</Form.Label>
            <Form.Control placeholder="Adresse" />
          </Form.Group>

          <Form.Group controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control placeholder="Adresse e-mail" />
          </Form.Group>

          <Form.Group controlId="formGridPhone">
            <Form.Label>Numéro</Form.Label>
            <Form.Control placeholder="Numéro de téléphone" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="btn-suivant"
          style={{ backgroundColor: "#bcdcbd" }}
          onClick={handleClose}
        >
          Suivant &gt;
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalPopUp;
