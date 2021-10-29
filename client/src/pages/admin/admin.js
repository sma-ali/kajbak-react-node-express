import { Button, Table, Card } from "react-bootstrap";
import React, { useState, useEffect, useContext, useRef } from "react";
import NavBar from "../../component/navbar/navbar";
//import { v4 as uuidv4 } from "uuid";
import "./admin.css";
import Axios from "axios";

const Admin = () => {
  // initialisation des hooks

  const [products, setProducts] = useState([]);
  const [product_name, setName] = useState("");
  const [product_leading, setLeading] = useState("");
  const [product_img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Intérieur");
  const [price, setPrice] = useState(null);

  // on définit des réf pour pouvoir réinitialiser
  // le formulaire d'ajout de produit une fois confirmé

  const priceRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const leadingRef = useRef(null);
  const urlRef = useRef(null);

  Axios.defaults.withCredentials = true;

  // création produit

  const createProduct = () => {
    Axios.post("http://localhost:3001/insert-products", {
      product_name: product_name,
      product_leading: product_leading,
      category: category,
      description: description,
      price: price,
      product_img: product_img,
    }).then((response) => {
      setProducts(response.data);
    });
  };

  // récupération produits existants

  const getProducts = () => {
    Axios.get("http://localhost:3001/select-products").then((response) => {
      setProducts(response.data);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  // suppression produit

  const deleteProduct = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setProducts(
        products.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };

  return (
    <>
      <NavBar />
      <div className="back-office-container" id="back-office">
        <h1 id="top">Back-office</h1>
        <div className="inputBox">
          <h3>Ajouter un produit</h3>
          <Card
            style={{
              width: "20rem",
              margin: "10px",
              backgroundColor: "#faf6ee",
              display: "block",
              marginBottom: "1em",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Card.Body>
              <Card.Title>
                <input
                  type="text"
                  // value={product_name}
                  onChange={(e) => setName(e.target.value)}
                  //ref={titleRef}
                  placeholder="Entrez un nom"
                  style={{
                    width: "100%",
                  }}
                />
              </Card.Title>
              <Card.Text>
                <input
                  // value={price}
                  type="number"
                  onChange={(e) => setPrice(e.target.value)}
                  //ref={priceRef}
                  placeholder="Entrez un prix"
                  style={{
                    width: "100%",
                  }}
                />
              </Card.Text>
              <Card.Text>
                <select
                  id="choose-category"
                  // value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  style={{
                    width: "100%",
                  }}
                >
                  <option value="Intérieur" label="Intérieur"></option>
                  <option value="Extérieur" label="Extérieur"></option>
                </select>
              </Card.Text>
              <Card.Text>
                <textarea
                  // value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  //ref={descRef}
                  placeholder="Entrez une description"
                  style={{
                    width: "100%",
                  }}
                />
              </Card.Text>
              <Card.Text>
                <textarea
                  // value={product_leading}
                  onChange={(e) => setLeading(e.target.value)}
                  //ref={leadingRef}
                  placeholder="Entrez l'entête"
                  style={{
                    width: "100%",
                  }}
                />
              </Card.Text>
              <input
                type="file"
                onChange={(e) => {
                  setImg(e.target.value);
                  // handleUpload(e.target.files[0]);
                }}
                //ref={urlRef}
                placeholder="Ajouter une image"
                style={{
                  width: "100%",
                  marginBottom: "20px",
                }}
              ></input>
              <Button
                onClick={() => createProduct()}
                style={{ backgroundColor: "#0f6860" }}
              >
                Ajouter le produit
              </Button>
            </Card.Body>
          </Card>
        </div>
        {/* Tableau des produits existants. */}
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Description</th>
              <th>Entête</th>
              <th>Image</th>
              <th>Prix</th>
              <th>Catégorie</th>
              <th>Gestion</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.product_id}>
                <td>{product.product_id}</td>
                <td>
                  {product.product_name}
                  <input
                    className="df"
                    type="text"
                    //onChange={(e) => setTitle(e.target.value)}
                    placeholder="Modifier le nom"
                  />
                </td>
                <td>
                  {product.description}
                  <textarea
                    className="df"
                    //onChange={(e) => setDesc(e.target.value)}
                    placeholder="Modifier la description"
                  />
                </td>
                <td>
                  {product.product_leading}
                  <textarea
                    className="df"
                    //onChange={(e) => setLeading(e.target.value)}
                    placeholder="Modifier l'entête"
                  />
                </td>
                <td>
                  <img
                    src={`products_img/${product.product_img}`}
                    width="100"
                    height="100"
                  />
                  <input
                    type="file"
                    onChange={(e) => {
                      //handleUpload(e.target.files[0]);
                    }}
                    placeholder="Ajouter une image"
                  ></input>
                </td>
                <td>
                  {product.price} €
                  <input
                    //onChange={(e) => setPrice(e.target.value)}
                    placeholder="Entrez un prix"
                  />
                </td>
                <td>
                  {product.category}
                  <input
                    //onChange={(e) => setCategory(e.target.value)}
                    placeholder="Entrez une catégorie"
                  />
                </td>
                <td>
                  <button /*onClick={() => editProduct(product)}*/>
                    Modifier
                  </button>
                  <button /*onClick={() => deleteProduct(product)}*/>
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Admin;
