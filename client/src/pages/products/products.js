import React, { useState, useEffect } from "react";
import "./products.css";
import {
  Container,
  Row,
  Form,
  Col,
  Dropdown,
  DropdownButton,
  Card,
  Button,
} from "react-bootstrap";
import NavBar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";

function Products() {
  // on initialise les hooks

  // const [products, setProducts] = useState([]);
  // const [categoryFilter, setCategoryFilter] = useState("");
  // const [req, setReq] = useState("");

  // référence à la collection products

  // const ref = firebase.firestore().collection("products");

  // récupère tous les produits si req est vide par défaut

  // function getProducts() {
  //   if (req == "") {
  //     ref.onSnapshot((querySnapshot) => {
  //       const items = [];
  //       querySnapshot.forEach((doc) => {
  //         items.push(doc.data());
  //       });
  //       setProducts(items);
  //     });
  //   } else {
  //     // si la requete n'est pas vide alors cherche les produits dont le titre correspond à la requete

  //     ref.where("title", "==", req).onSnapshot((querySnapshot) => {
  //       const items = [];
  //       querySnapshot.forEach((doc) => {
  //         items.push(doc.data());
  //       });
  //       setProducts(items);
  //     });
  //   }
  // }

  // useEffect(() => {
  //   getProducts();
  // }, []);

  return (
    <div>
      <NavBar />
      <Container fluid>
        <Row className="products-intro">
          <Col>
            <div>
              <h1>Bienvenue dans notre boutique!</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                hendrerit vehicula ligula ut lacinia. Nullam ac vulputate diam,
                quis pulvinar erat.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="row-filter-products">
          <Col className="products-filter" lg={3}>
            <input type="checkbox" id="id1" />
            <label htmlFor="id1" className="title-col">
              Affiner votre recherche
            </label>
            <div id="filter-follow">
              <Form>
                <Form.Group>
                  <Form.Label>Recherche</Form.Label>
                  <Form.Control
                    type="search"
                    placeholder="Que cherchez-vous?"
                    // onChange={(e) => setReq(e.target.value)}
                  />
                </Form.Group>
                <hr />
                <Form.Group>
                  <Form.Label>Prix</Form.Label>
                  <Form.Control type="range" />
                </Form.Group>
                <hr />
                <Form.Group>
                  <Dropdown>
                    <Dropdown.Toggle
                      style={{ backgroundColor: "#0f6860" }}
                      id="dropdown-basic"
                    >
                      Catégories
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item value="Intérieur">Intérieur</Dropdown.Item>
                      <Dropdown.Item value="Extérieur">Extérieur</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Form.Group>
                <hr />
                <Button
                  // onClick={getProducts}
                  style={{ backgroundColor: "#0f6860" }}
                >
                  Trier les produits
                </Button>
              </Form>
            </div>
          </Col>
          <Col className="products-content">
            <p className="title-col">Les derniers produits</p>
            <div>
              <Row className="justify-content-around">
                {/* {products.map((product) => { 
                  return ( */}
                    <Card
                      style={{
                        width: "18rem",
                        margin: "10px",
                      }}
                      // key={product.id}
                    >
                      <Card.Img
                        variant="top"
                        width={171}
                        height={280}
                        // src={product.url}
                      />
                      <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text></Card.Text>
                        <Button
                          // href={`product/${product.id}`}
                          style={{ backgroundColor: "#0f6860" }}
                        >
                          Voir le produit &gt;
                        </Button>
                      </Card.Body>
                    </Card>
                   {/* );
                 })} */}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Products;
