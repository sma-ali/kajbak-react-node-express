import React, { useState, useEffect } from "react";
import "./cart.css";
import { Container, Row, Button, Col, Table, Card } from "react-bootstrap";
import NavBar from "../../component/navbar/navbar";
import Footer from "../../component/footer/footer";

function Cart() {
  const [cartProducts, setCartProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    //getCart();
  }, []);

  return (
    <div>
      <NavBar />
      <Container fluid className="cart-content">
        <Row className="cart-top">
          <Col>
            <div>
              <h1>Recapitulatif du panier</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                hendrerit vehicula ligula ut lacinia. Nullam ac vulputate diam,
                quis pulvinar erat.
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 6, offset: 2 }}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Photo produit</th>
                  <th>Nom produit</th>
                  <th>Prix</th>
                  <th>Page produit</th>
                </tr>
              </thead>
              <tbody>
                {cartProducts.map((product) => {
                  {
                    // console.log(product);
                  }
                  return (
                    <tr key={product.id}>
                      <td>
                        <img
                          className="cart-img"
                          alt="Partage"
                          src={product.url}
                          fluid="true"
                        />
                      </td>
                      <td>{product.title}</td>
                      <td>{product.price}€</td>
                      <td>
                        <Button
                          variant="success"
                          href={`product/${product.id}`}
                          style={{ backgroundColor: "#0f6860" }}
                        >
                          Page produit
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
          <Col lg={2}>
            <Card style={{ backgroundColor: "#faf6ee" }}>
              <Card.Body>
                <Card.Title>Total du panier</Card.Title>
                <Card.Text id="cart-total">
                  Nombre d'articles: {cartProducts.length} <br />
                  Prix:
                </Card.Text>
                <Button
                  variant="success"
                  style={{ backgroundColor: "#0f6860" }}
                >
                  Valider le panier
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Cart;
