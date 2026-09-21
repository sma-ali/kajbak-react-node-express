# Kajbak

Boutique en ligne de mobilier réalisée dans le cadre de mon projet de Bachelor
(2021) : catalogue de produits, fiche produit, création de compte, connexion, et
un back-office minimal pour ajouter et supprimer des produits.

Le dépôt réunit un client React et une API REST Express adossée à une base
MySQL. Le projet n'est pas déployé : il tourne en local, le client sur le port
3000 et l'API sur le port 3001.

## Stack

| Partie   | Technologies                                                        |
| -------- | ------------------------------------------------------------------- |
| Client   | React 17, React Router 5, React-Bootstrap, Axios, Create React App   |
| Serveur  | Node.js, Express 4, MySQL (pilote `mysql`)                           |
| Sécurité | bcrypt (hachage des mots de passe), jsonwebtoken, express-session    |

## Structure

```
client/   Application React (Create React App)
server/   API Express, tout tient dans index.js
```

## Prérequis

- Node.js 14 ou plus
- Un serveur MySQL accessible en local

## Installation

### 1. Base de données

Créer la base puis les deux tables. Ce schéma est reconstitué à partir des
requêtes de `server/index.js` :

```sql
CREATE DATABASE kajbak;
USE kajbak;

CREATE TABLE users (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  firstname   VARCHAR(100),
  lastname    VARCHAR(100),
  email       VARCHAR(255) NOT NULL UNIQUE,
  password    VARCHAR(255) NOT NULL,   -- hachage bcrypt, jamais le mot de passe en clair
  address     VARCHAR(255),
  city        VARCHAR(100),
  zip         VARCHAR(20),
  phonenumber VARCHAR(20)
);

CREATE TABLE products (
  product_id      INT AUTO_INCREMENT PRIMARY KEY,
  product_name    VARCHAR(255) NOT NULL,
  product_leading TEXT,                -- entête affichée sur la fiche produit
  category        VARCHAR(100),        -- « Intérieur » ou « Extérieur »
  description     TEXT,
  price           DECIMAL(10,2),
  product_img     VARCHAR(255),        -- nom de fichier dans client/public/products_img/
  state           TINYINT DEFAULT 1    -- 1 = visible au catalogue
);
```

### 2. Serveur

```bash
cd server
npm install
cp .env.example .env   # puis renseigner les valeurs
npm start
```

`.env` attend six variables, décrites dans `.env.example` : `DB_HOST`,
`DB_USER`, `DB_PASS`, `DB_NAME`, `SESSION_SECRET` et `JWT_SECRET`. Les deux
secrets sont des chaînes aléatoires que vous générez vous-même :

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Le serveur s'arrête au démarrage si l'un des deux secrets manque.

### 3. Client

Dans un second terminal :

```bash
cd client
npm install
npm start
```

L'application s'ouvre sur `http://localhost:3000`. Les deux serveurs doivent
tourner en même temps : les URL de l'API sont écrites en dur sur
`http://localhost:3001`.

## API

| Méthode  | Route                   | Rôle                                        |
| -------- | ----------------------- | ------------------------------------------- |
| `POST`   | `/register`             | Crée un compte (mot de passe haché bcrypt)  |
| `POST`   | `/login`                | Connecte l'utilisateur, renvoie un JWT      |
| `GET`    | `/login`                | Indique si une session est ouverte          |
| `GET`    | `/isUserAuth`           | Vérifie le JWT (via le middleware `verifyJWT`) |
| `GET`    | `/select-products`      | Liste les produits visibles (`state = 1`)   |
| `GET`    | `/single-products/:id`  | Détail d'un produit                         |
| `POST`   | `/insert-products`      | Ajoute un produit                           |
| `DELETE` | `/delete-products/:id`  | Supprime un produit                         |

## Contexte

Projet de formation réalisé en 2021. Repris depuis pour corriger quelques bugs
et sortir les secrets du code. Tourne en local, pas déployé.
