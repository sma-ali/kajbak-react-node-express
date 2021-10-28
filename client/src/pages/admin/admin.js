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
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Intérieur");
  const [price, setPrice] = useState(null);
  //const [product_img, setUrl] = useState("");

  // on définit des réf pour pouvoir réinitialiser
  // le formulaire d'ajout de produit une fois confirmé

  const priceRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const leadingRef = useRef(null);
  const urlRef = useRef(null);

  // définition des chemins vers firestore / storage

  // const ref = firebase.firestore().collection("products");
  // const userRef = firebase.firestore().collection("users_info");
  // const storage = firebase.storage();

  // début fonction vérification utilisateur

  // function checkUserRole() {
  //   // si utilisateur connecté
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       userRef
  //         // cherche où l'id de l'user connecté correspond dans les users existants
  //         .where("id", "==", user.uid)
  //         .get()
  //         .then((querySnapshot) => {
  //           if (!querySnapshot.empty) {
  //             // récupère les données de l'user
  //             const userInfo = querySnapshot.docs[0].data();
  //             // si role de l'user = 0 ou nul, accès refusé
  //             if (userInfo.role == 0 || userInfo.role == null) {
  //               alert("Accès refusé, vous n'avez pas la permission requise.");
  //               window.location.href = "/";
  //             } else if (userInfo.role == 1) {
  //               // si role = 1, le back office apparait devant l'administrateur
  //               document.getElementById("back-office").style.display = "block";
  //               // puis on liste tous les produits pour le back office
  //               getProducts();
  //             }
  //           } else {
  //             alert("Accès refusé");
  //             window.location.href = "/";
  //           }
  //         });
  //     } else {
  //       alert("Accès refusé, vous n'êtes pas connecté.");
  //       window.location.href = "/";
  //     }
  //   });
  // }

  Axios.defaults.withCredentials = true;

  const createProduct = () => {
    Axios.post("http://localhost:3001/insert-products", {
      product_name: product_name,
      product_leading: product_leading,
      category: category,
      description: description,
      price: price,
      //product_img: product_img,
    }).then((response) => {
      setProducts(response.data)
    });
  };

  const getProducts = () => {
    Axios.get("http://localhost:3001/select-products").then((response) => {
      setProducts(response.data)
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  // useEffect(() => {
  //   checkUserRole();
  // }, []);

  // // début fonction ajout produit
  // function addProduct() {
  //   // on définit l'id via uuidv4
  //   const id = uuidv4();
  //   // on enregistre les données rentrées par l'admin
  //   ref
  //     .doc(id)
  //     .set({
  //       title,
  //       desc,
  //       id,
  //       url,
  //       price,
  //       category,
  //       leading,
  //     })
  //     // puis on réinitialise les inputs
  //     .then(() => {
  //       priceRef.current.value = "";
  //       titleRef.current.value = "";
  //       descRef.current.value = "";
  //       leadingRef.current.value = "";
  //       urlRef.current.value = "";
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }

  // function deleteProduct(product) {
  //   ref
  //     .doc(product.id)
  //     .delete()
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }

  // function editProduct(product) {
  //   ref
  //     .doc(product.id)
  //     .update({
  //       id: product.id,
  //       // si l'input de title n'est pas vide
  //       // alors prends sa valeur rentrée et update le title du produit dans la bdd.
  //       // si l'input de title est vide, alors tu l'updates en lui attribuant la valeur
  //       //qu'il a déjà dans la base de donnée. donc ça met à jour mais ça ne modifie rien.
  //       title: title ? title : product.title,
  //       desc: desc ? desc : product.desc,
  //       url: url ? url : product.url,
  //       price: price ? price : product.price,
  //       category: category ? category : product.category,
  //       leading: leading ? leading : product.leading,
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }

  // //fonction d'upload d'image
  // const handleUpload = (image) => {
  //   const uploadTask = storage.ref(`images/${image.name}`).put(image);
  //   uploadTask.on("state_changed", async () => {
  //     await storage
  //       .ref("images")
  //       .child(image.name)
  //       .getDownloadURL()
  //       .then((url) => {
  //         setUrl(url);
  //       });
  //   });
  // };

  return (
    <>
      <NavBar />
      <div
        className="back-office-container"
        id="back-office"
      >
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
                  value={product_name}
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
                  value={price}
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
                  value={category}
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
                  value={description}
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
                  value={product_leading}
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
                // onChange={(e) => {
                //   handleUpload(e.target.files[0]);
                // }}
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
              <tr>
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
                  <img src={`products_img/${product.product_img}`} width="100" height="100" />
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
                  <button /*onClick={() => editProduct(product)}*/>Modifier</button>
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
