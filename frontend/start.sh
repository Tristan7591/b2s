#!/bin/sh

# Démarrer l'application React
npm start &

# Garder le conteneur en vie
tail -f /dev/null 