import React, { useState, useEffect, useContext } from "react";
import "./product.css";
import { Container, Row, Button, Col, Breadcrumb, Card } from "react-bootstrap";
import NavBar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";



function Product () {

  var pathArray = window.location.pathname.split("/");
  const productID = pathArray[2];
  const { currentUser } = useContext();
  console.log(currentUser);

  // const [product, setProduct] = useState("");
  // const ref = firebase.firestore().collection("products");
  // const userRef = firebase.firestore().collection("users_info");

  // function getProduct() {
  //   ref
  //     .where("id", "==", productID)
  //     .get()
  //     .then((querySnapshot) => {
  //       if (!querySnapshot.empty) {
  //         const product = querySnapshot.docs[0].data();
  //         setProduct(product);
  //       }
  //     });
  // }

  // useEffect(() => {
  //   getProduct();
  // }, []);

  // function addProductToUserCart(product) {
  //   const userId = currentUser.uid;
  //   userRef.doc(userId).update({
  //     cart: firebase.firestore.FieldValue.arrayUnion(product.id),
  //   });
  // }

    return(
    <div>
    <NavBar />
    <Container fluid className="product-content" >
      <Row>
        <Col lg={{span: 6,offset: 2}}>
          <Breadcrumb className="title-product">
            <Breadcrumb.Item href="/">Accueil</Breadcrumb.Item>
            <Breadcrumb.Item href="/products">
              Nos Produits
            </Breadcrumb.Item>
            <Breadcrumb.Item active></Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col lg={{span: 4, offset: 2, }}>
          <img className="img-style-product" alt="Partage" fluid="true" />
        </Col>
        <Col lg={3} className="product-info">
          <p className="title-product"></p>
          <p></p>
          <p className="price">€</p>
          <Button variant="success" className="add-to-cart" /*onClick={() => addProductToUserCart(product)} style={{backgroundColor: "#bcdcbd"}}*/>Ajouter au panier</Button>
        </Col>
      </Row>
      <Row>
        <Col lg={{span: 5, offset: 2, }}>
        <p className="title-product">Description du produit</p>
        <p></p>
        </Col>
      </Row>
      <Row>
        <Col lg={{span: 5, offset: 2, }}>
        <p className="title-product">Ça pourrait vous intéresser</p>
        </Col>
      </Row>
    </Container>
    <Footer />
    </div>
)};

export default Product

/*
<Row>
        <Col lg={{span: 2, offset: 2, }} >
          <Card style={{ width: '18rem', margin: '10px', backgroundColor: '#faf6ee'}}>
            <Card.Img variant="top" width={171} height={280} src="https://www.cdiscount.com/pdt2/e/0/1/1/700x700/babette01/rw/meuble-tv-scandinave-pieds-en-bois-gris-fonce-et-b.jpg" />
            <Card.Body>
              <Card.Title>Meuble TV moderne</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="success" style={{backgroundColor: "#0f6860"}}>Je découvre</Button>
            </Card.Body>
          </Card>
          </Col>
          <Col  lg={{span: 2}} >
          <Card style={{ width: '18rem', margin: '10px', backgroundColor: '#faf6ee'}}>
            <Card.Img variant="top" width={171} height={280} src="http://i.ebayimg.com/images/g/FqMAAOSwZ95df0BE/s-l640.jpg" />
            <Card.Body>
              <Card.Title>Meuble 2</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="success" style={{backgroundColor: "#0f6860"}}>Je découvre</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
       */
