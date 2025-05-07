# B2S Application

Une application de gestion d'utilisateurs avec une architecture B2S (Backend-to-Service) utilisant FastAPI, PostgreSQL et React.

## Structure du Projet

```
.
├── backend/
│   ├── Dockerfile
│   ├── requirements.txt
│   └── main.py
├── frontend/
│   ├── Dockerfile
│   ├── package.json
│   └── src/
│       ├── App.js
│       └── App.css
└── docker-compose.yml
```

## Prérequis

- Docker
- Docker Compose

## Installation et Démarrage

1. Clonez ce dépôt :
```bash
git clone <repository-url>
cd <repository-name>
```

2. Démarrez l'application avec Docker Compose :
```bash
docker-compose up --build
```

L'application sera accessible aux adresses suivantes :
- Frontend : http://localhost:3000
- Backend API : http://localhost:8000
- Base de données PostgreSQL : localhost:5432

## Fonctionnalités

- Création d'utilisateurs
- Liste des utilisateurs
- Suppression d'utilisateurs
- Interface utilisateur moderne et responsive

## API Endpoints

- `GET /users/` - Liste tous les utilisateurs
- `POST /users/` - Crée un nouvel utilisateur
- `GET /users/{user_id}` - Récupère un utilisateur spécifique
- `DELETE /users/{user_id}` - Supprime un utilisateur

## Configuration de la Base de Données

La base de données PostgreSQL est configurée avec les paramètres suivants :
- Utilisateur : postgres
- Mot de passe : postgres
- Base de données : b2s_db
- Port : 5432 