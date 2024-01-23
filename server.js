const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

const products = [
    { id: 1, category: 'Electronics', name: 'Laptop' },
    { id: 2, category: 'Clothing', name: 'T-Shirt' },
];

app.get('/', (req, res) => {
    res.render('index', { products });
});

app.get('/search', (req, res) => {
    const query = req.query.q;
    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    res.render('search', { query, products: filteredProducts });
});

app.listen(port, () => {
    console.log('Server is running');
});