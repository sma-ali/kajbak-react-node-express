import React, { useState } from 'react';
import { Button, Col, Container, Row, Image } from 'react-bootstrap'
import './footer.css';
import ModalPopUp from '../modal/modal';

function Footer () {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="footer">
            <Container>
                <Row className="position">
                    <Col sm={6} className="bloc-footer-1">
                        <span className="darkgreen">Tous - droits - réservés - Kajbak 2021</span>
                        <div className="footer-links">
                            <a href="#">Mentions légales</a>
                            <a href="#">Plan du site</a>
                        </div>
                        <div className="footer-social-network">
                            <span className="darkgreen">Vous pouvez nous retrouver également sur:</span>
                            <div>
                                <Image className="footer-logo" src="/medias/icons8-facebook.svg" style={{ width: '64px', height: '64px' }}></Image>
                                <Image className="footer-logo" src="/medias/icons8-instagram.svg" style={{ width: '64px', height: '64px' }}></Image>
                                <Image className="footer-logo" src="/medias/icons8-pinterest.svg"></Image>
                                <Image className="footer-logo" src="/medias/icons8-twitter.svg"></Image>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6} className="bloc-footer-2">
                        <div>        
                            <Button variant="success" id="estimation-nav" onClick={() => setShow(true)}>Estimez votre meuble &gt; </Button>
                            <ModalPopUp show={show} handleClose={handleClose} />
                        </div>
                        <div className="footer-contact darkgreen">
                            <span>Contactez-nous:</span>
                            <span><strong>Tél:</strong> 01 40 40 40 40</span>
                            <span><strong>Email:</strong> kajbak@ecologique.com</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default Footer

/* <div className="footer">
<div className="bloc-footer-1">
    <span>Tous - droits - réservés - Kajbak 2021</span>
    <div className="footer-links">
        <a href="#">Mentions légales</a>
        <a href="#">Plan du site</a>
    </div>
</div>
<div className="bloc-footer-2">
    <div><Button id="estimation-nav" >Estimez vos produits</Button></div>
    <div className="footer-contact">
        <span>Contactez-nous:</span>
        <span>Tél: 01 40 40 40 40</span>
        <span>Email: kajbak@ecologique.com</span>
    </div>
</div>
</div> */



// const Footer = () => (
//     <>
//     <Container className="footer">
//         <Row className="position">
//             <Col sm={5}>
//                 <span>Tous - droits - réservés - Kajbak 2021</span>
//                 <div className="footer-links">
//                     <a href="#">Mentions légales</a>
//                     <a href="#">Plan du site</a>
//                 </div>
//             </Col>
//             <Col sm={5}>
//                 <div><Button id="estimation-nav" >Estimez vos produits</Button></div>
//                 <div className="footer-contact">
//                     <span>Contactez-nous:</span>
//                     <span>Tél: 01 40 40 40 40</span>
//                     <span>Email: kajbak@ecologique.com</span>
//                 </div>
//             </Col>
//         </Row>
//     </Container>

// </>
// );