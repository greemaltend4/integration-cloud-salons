const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Bienvenue dans l\'Intégration Cloud Salons !');
});

app.listen(port, () => {
    console.log(`Serveur en cours d\'exécution à http://localhost:${port}`);
});