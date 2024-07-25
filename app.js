const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));

app.listen(process.env.PORT || 3000, () => console.log('Escuchando en el puerto 3000'));


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})

app.get('/ofertas', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/ofertas.html'));
})

app.get('/ayuda', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/ayuda.html'));
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
})

app.get('/ingresar', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/ingresar.html'));
})

app.get('/mis-compras', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/mis-compras.html'));
})

app.get('/tiendas-oficiales', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/tiendas-oficiales.html'));
})

app.get('/vender', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/vender.html'));
})

//NEW COMMENTTTTT

