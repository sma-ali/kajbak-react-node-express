import React, { useState, useEffect, useContext } from "react";
import "./product.css";
import { Container, Row, Button, Col, Breadcrumb, Card } from "react-bootstrap";
import NavBar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";
import Axios from "axios";


function Product () {

  var pathArray = window.location.pathname.split("/");
  const productID = pathArray[2];
  const { currentUser } = useContext();
  console.log(currentUser);

  Axios.defaults.withCredentials = true;
  const [product, setProducts] = useState("");

  //Obtention des produits
  const getSingleProduct = () => {
    Axios.get("http://localhost:3001/single-products").then((response) => {
      setProducts(response.data)
    });
  };

  useEffect(() => {
    getSingleProduct();
  }, []);

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
            <Breadcrumb.Item active>{product.product_name}</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
        <Col lg={{span: 4, offset: 2, }}>
          <img className="img-style-product" alt="Partage" fluid="true" />
        </Col>
        <Col lg={3} className="product-info">
          <p className="title-product">{product.product_name}</p>
          <p>{product.product_leading}</p>
          <p className="price">{product.price}€</p>
          <Button variant="success" className="add-to-cart" /*onClick={() => addProductToUserCart(product)} style={{backgroundColor: "#bcdcbd"}}*/>Ajouter au panier</Button>
        </Col>
      </Row>
      <Row>
        <Col lg={{span: 5, offset: 2, }}>
        <p className="title-product">Description du produit</p>
        <p>{product.description}</p>
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