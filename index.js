const express = require('express');

const app = express(); // Instancie une nouvelle application Express.js

app.set('view engine', 'pug'); // Indique a Express que le moteur de templating sera "Pug"
app.set('views', './views'); // Indique à Express que le dossier contenant les fichiers .pug s'appelle "./views/"

const blogRouter = require('./blog.router');

const PORT = 9000;
const HOST = 'localhost';

app.use('/', blogRouter);

app.listen(PORT, HOST, () => {
    console.log(`[Express.js] - L'application a démarré sur http://${HOST}:${PORT}`);
});