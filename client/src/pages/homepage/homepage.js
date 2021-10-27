import React, { useState } from "react";
import "./homepage.css";
//import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap";
import NavBar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import ModalPopUp from "../../component/modal/modal";

function HomePage() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <NavBar />
      <div className="espace-video">
        <video
          className="video"
          loop
          autoplay="autoPlay"
          src="/medias/presentation.MP4"
          controls
        />
      </div>
      <Container id="e1">
        <br />
        <h1 className="bigtitle">Que faisons-nous ?</h1>
        <p className="description">
          Nous proposons de racheter d'anciens meubles encombrants ou de
          recupérer des meubles non désirés, destinés à la déchetterie. L'idée
          est de récupérer des matériaux ou des produits dont on ne se sert plus
          pour créer des objets ou produits de qualité supérieure.
        </p>
        <Row className="homepage-img-qfn">
          <Col xs={12} md={2}>
            <img
              className="img-size"
              alt="Economie"
              src="medias/euros.svg"
              fluid="true"
            />
            <p>
              L'achat responsable tout en étant économe pour son porte-feuille.
            </p>
          </Col>
          <Col xs={12} md={2}>
            <img
              className="img-size"
              alt="Ecologie"
              src="medias/ecologie.svg"
              fluid
            />
            <p>
              Upcycling s’inscrit dans une démarche écologique, offrir une
              seconde vie à vos meubles et objets de la maison.
            </p>
          </Col>
          <Col xs={12} md={2}>
            <img
              className="img-size"
              alt="Echange"
              src="medias/echange.svg"
              fluid
            />
            <p>
              Nous donnons une seconde vie à votre meuble et il est revendu à
              une personne qui en a besoin.
            </p>
          </Col>
        </Row>
        <br />
        <Row>
          <Button id="estimation" onClick={() => setShow(true)}>
            Estimez votre meuble &gt;{" "}
          </Button>
          <ModalPopUp show={show} handleClose={handleClose} />
        </Row>
        <br />
      </Container>
      <Container id="e2">
        <h1 className="bigtitle">Nos dernières créations</h1>
        <p className="description">
          Venez découvrir les produits recyclés, le design est dans notre ADN.
        </p>
        <Row className="justify-content-center">
          <Card
            style={{
              width: "18rem",
              margin: "10px",
              backgroundColor: "#faf6ee",
            }}
          >
            <Card.Img
              variant="top"
              width={171}
              height={280}
              src="https://firebasestorage.googleapis.com/v0/b/kajbak-c17ad.appspot.com/o/images%2Fbuffet.jpg?alt=media&token=9c89ac5a-a6e0-47c2-b855-b8d749b2617b"
            />
            <Card.Body>
              <Card.Title>Meuble 1</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="success" style={{ backgroundColor: "#0f6860" }}>
                Je découvre &gt;
              </Button>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "18rem",
              margin: "10px",
              backgroundColor: "#faf6ee",
            }}
          >
            <Card.Img
              variant="top"
              width={171}
              height={280}
              src="https://firebasestorage.googleapis.com/v0/b/kajbak-c17ad.appspot.com/o/images%2Fcanap%C3%A9_ext%C3%A9rieur.jpg?alt=media&token=b9c9ea98-8739-4d9b-ba42-b45bdebcdb99"
            />
            <Card.Body>
              <Card.Title>Meuble 2</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="success" style={{ backgroundColor: "#0f6860" }}>
                Je découvre &gt;
              </Button>
            </Card.Body>
          </Card>
          <Card
            style={{
              width: "18rem",
              margin: "10px",
              backgroundColor: "#faf6ee",
            }}
          >
            <Card.Img
              variant="top"
              width={171}
              height={280}
              src="https://firebasestorage.googleapis.com/v0/b/kajbak-c17ad.appspot.com/o/images%2Ftiroir_asym%C3%A9trique.jpg?alt=media&token=328cfa92-5076-4789-9e84-8bcdb5e8e968"
            />
            <Card.Body>
              <Card.Title>Meuble 3</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="success" style={{ backgroundColor: "#0f6860" }}>
                Je découvre &gt;
              </Button>
            </Card.Body>
          </Card>
        </Row>
      </Container>
      <Container id="e3">
        <h1 className="bigtitle">Ils nous font confiance</h1>
        <p className="description">Pourquoi pas vous ?</p>
        <br />
        <Row>
          <Col xs={12} md={{ span: 2, offset: 2 }}>
            <div className="avis">
              <p className="avis-consommateur">
                "J'ai découvert Kajbak et cela a révolutionner ma façon de pensé
                sur le recyclage des meubles. Je remercie profondémment l'équipe
                de Kajbak pour ces meubles que vous avez désigné, au top."
              </p>
            </div>
            <hr />
            <p>
              Laurent P.
              <br /> 24 ans, Etudiant
            </p>
          </Col>
          <Col xs={12} md={{ span: 2, offset: 1 }}>
            <div className="avis">
              <p className="avis-consommateur">
                "Vraiment super ce concept, nous devrions suivre l'exemple,
                sauvons la planete et donner une seconde vie à ces meubles
                oubliés. Mercio Kajbak pour vos conseils."
              </p>
            </div>
            <hr />
            <p>
              Mathieu N.
              <br /> 38 ans, Juriste
            </p>
          </Col>
          <Col xs={12} md={{ span: 2, offset: 1 }}>
            <div className="avis">
              <p className="avis-consommateur">
                "Avec Kajbak, j'ai réalisé beaucoup d'économie en achetant des
                meubles reconditionnés. Avec mon budget etudiant, j'ai pu me
                meubler correctement."
              </p>
            </div>
            <hr />
            <p>
              Nadia C.
              <br /> 21 ans, Etudiante
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default HomePage;
