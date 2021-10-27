import React, { useState } from 'react';
import './team.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  Container,
  Row,
  Col,
  Image,
  Button,
} from 'react-bootstrap';
import NavBar from '../../component/navbar/navbar'
import Footer from '../../component/footer/footer'
import ModalPopUp from '../../component/modal/modal'


function Team() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
return(
  <div>
    <NavBar />
    <div className="banniere-team">
      <img className="banniere" src="https://www.akg-images.fr/Docs/AKG/Media/TR3_WATERMARKED/6/a/b/e/AKG159937.jpg" fluid />
    </div>
    <div id="t1">
      <Container className="sitesize">
        <h1>Qui sommes-nous ?</h1>
        <p className="description-part">
          Nous proposons de racheter d'anciens meubles encombrants ou de recupérer des meubles non
          désirés, destinés à la déchetterie. L'idée est de récupérer des matériaux ou des produits
          dont on ne se sert plus pour créer des objets ou produits de qualité supérieure.
        </p>
        <hr />
        <Row >
          <Col xs={12} md={6}>
            <Image className="img-left" alt="Argent" src="https://frizbizovh.s3.amazonaws.com/system/pictures/photos/000/062/759/large/03c4503d206d72ce52ddee86fc6b8f4a.jpg?1503653389" rounded />
          </Col>
          <Col xs={12} md={6}>
            <h3 className="title">Nous récupérons vos meubles</h3>
            <p>Upcycling s’inscrit dans une démarche écologique, offrir une seconde vie à vos meubles et objets de la maison. 
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
            </p>
            <Button id="estimation-team"  onClick={() => setShow(true)}>
              Estimez votre meuble &gt;
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
    <div id="t2">
      <Container className="sitesize">
        <Row >
          <Col className="team-img" xs={12} md={6}>
            <h3 className="title">Conception</h3>
            <p>Upcycling s’inscrit dans une démarche écologique, offrir une seconde vie à vos meubles et objets de la maison. 
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
            </p>
          </Col>
          <Col xs={12} md={6}>
            <Image className="img-right" alt="Argent" src="https://image.freepik.com/photos-gratuite/menuisier-femme-emballe-travail_1098-14196.jpg" rounded />
          </Col>
        </Row>
      </Container>
    </div>
    <div id="banniere-bordure">
      <img className="banniere" src="https://www.mefl.fr/ressources/images/4e9a5e922e69.jpg" fluid />
    </div>
    <div id="t3">
      <Container className="sitesize">
        <h1>Création, Upcycling, Design</h1>
        <p className="description-part">
          C'est parti dans l'atelier de création, nos méthodes, nos produits utilisé <b>100% écologique</b> (peinture, bois, outils...)
        </p>
        <hr />
        <Row >
          <Col xs={12} md={6}>
            <Image className="img-left" alt="Argent" src="https://img.freepik.com/photos-gratuite/outils-sciure-bois-atelier_23-2148679128.jpg?size=626&ext=jpg" rounded />
          </Col>
          <Col xs={12} md={6}>
            <h3 className="title">Réalisation dans nos ateliers</h3>
            <p>Upcycling s’inscrit dans une démarche écologique, offrir une seconde vie à vos meubles et objets de la maison. 
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
            </p>
          </Col>
        </Row>
        <hr />
        <Row >
          <Col xs={12} md={6}>
            <Image className="img-left" alt="Argent" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlCREkIir-6nLEl9uEP6v2fGTJzkeZ894Kkj5jQCxEkVr-MD-Ea4IgA4-1dZD9yC9F3MU&usqp=CAU" rounded />
          </Col>
          <Col xs={12} md={6}>
            <h3 className="title">Désigner, recustomisé</h3>
            <p>Upcycling s’inscrit dans une démarche écologique, offrir une seconde vie à vos meubles et objets de la maison. 
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
            </p>
          </Col>
        </Row>
        <hr />
        <Row>
          <Image className="img-center" alt="Argent" src="https://www.menuiserie-bcm.com/modules/slideshow/images/1/slide1-large.jpg" rounded />
          <h2 className="title" >Et, voici le résultat</h2>
          <p>Upcycling s’inscrit dans une démarche écologique, offrir une seconde vie à vos meubles et objets de la maison. 
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make 
          </p>
        </Row>
      </Container>
    </div>
    <div id="t4">
      <Container className="sitesize white-txt">
        <h1 className="white-txt">On est aussi présent sur les réseaux sociaux</h1>
        <p className="description-part">
          Très actif dans l'écologie, nous sommes également très actif sur les réseaux sociaux :
        </p>
        <Row>
          <Col className="team-img center-element">
            <Image className="reseaux-sociaux" alt="Facebook" to="https://www.facebook.com" src="/medias/icons9-facebook.svg" rounded />
            <Image className="reseaux-sociaux" alt="Instagram" src="/medias/icons9-instagram.svg" rounded />
            <Image className="reseaux-sociaux" alt="Pinterest" src="/medias/icons9-pinterest.svg" rounded />
            <Image className="reseaux-sociaux" alt="Twitter" src="/medias/icons9-twitter.svg" rounded />
          </Col>
        </Row>
        <Row>
          <Image className="iphone" alt="iPhone" src="/medias/iphone.png" rounded />
        </Row>
      </Container>
    </div>
    <Footer />
  </div> 
)
};

export default Team