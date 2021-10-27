import { Button, Table, Card } from "react-bootstrap";
import React, { useState, useEffect, useContext, useRef } from "react";
import NavBar from "../../component/navbar/navbar";
import { v4 as uuidv4 } from "uuid";
import "./admin.css";

const Admin = () => {
  // initialisation des hooks

  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("Intérieur");
  const [price, setPrice] = useState(null);
  const [leading, setLeading] = useState("");
  const [url, setUrl] = useState("");

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

  // function getProducts() {
  //   ref.onSnapshot((querySnapshot) => {
  //     const items = [];
  //     querySnapshot.forEach((doc) => {
  //       items.push(doc.data());
  //     });
  //     setProducts(items);
  //   });
  // }

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

  // fonction d'upload d'image
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
        style={{ display: "none" }}
        className="back-office-container"
        id="back-office"
      >
        <h1 id="top">Back-office</h1>
        <div className="inputBox">
          <h3>Ajouter un produit</h3>
          <Card
            style={{
              width: "18rem",
              margin: "10px",
              backgroundColor: "#faf6ee",
            }}
          >
            <Card.Body>
              <input
                type="file"
                onChange={(e) => {
                  //handleUpload(e.target.files[0]);
                }}
                ref={urlRef}
                placeholder="Ajouter une image"
              ></input>
              <Card.Title>
                <input
                  type="text"
                  //onChange={(e) => setTitle(e.target.value)}
                  ref={titleRef}
                  placeholder="Entrez un nom"
                />
              </Card.Title>
              <Card.Text>
                <input
                  //onChange={(e) => setPrice(e.target.value)}
                  ref={priceRef}
                  placeholder="Entrez un prix"
                />
              </Card.Text>
              <Card.Text>
                <select
                  id="choose-category"
                  //onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="Intérieur" label="Intérieur"></option>
                  <option value="Extérieur" label="Extérieur"></option>
                </select>
              </Card.Text>
              <Card.Text>
                <textarea
                  //onChange={(e) => setDesc(e.target.value)}
                  ref={descRef}
                  placeholder="Entrez une description"
                />
              </Card.Text>
              <Card.Text>
                <textarea
                  //onChange={(e) => setLeading(e.target.value)}
                  ref={leadingRef}
                  placeholder="Entrez l'entête"
                />
              </Card.Text>
              <Button
                //onClick={() => addProduct()}
                style={{ backgroundColor: "#0f6860" }}
              >
                Ajouter le produit
              </Button>
            </Card.Body>
          </Card>
        </div>
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
                <td>{product.id}</td>
                <td>
                  {product.title}
                  <input
                    className="df"
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Modifier le nom"
                  />
                </td>
                <td>
                  {product.desc}
                  <textarea
                    className="df"
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder="Modifier la description"
                  />
                </td>
                <td>
                  {product.leading}
                  <textarea
                    className="df"
                    onChange={(e) => setLeading(e.target.value)}
                    placeholder="Modifier l'entête"
                  />
                </td>
                <td>
                  <img src={product.url} width="100" height="100" />
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
