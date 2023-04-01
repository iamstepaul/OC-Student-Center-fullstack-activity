const express = require('express')
const mongoose = require('mongoose')
const app = express()

const Product = require('./models/products')

app.use(express.json())

mongoose.connect('add yours').then(() => {
    console.log('successfully connected to mongodb atlas')
})
.catch((error) => {
    console.log("Unable to connect to mongodb atlas")
})


// cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.get('/api/products', async (req, res) => {
    const products = await Product.find();
    res.json({ products });
  });
  
  app.get('/api/products/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.json({ product });
  });
  
  app.post('/api/products', async (req, res) => {
    const { name, description, price, inStock } = req.body;
    const product = new Product({ name, description, price, inStock });
    await product.save();
    res.json({ product });
  });
  
  app.put('/api/products/:id', async (req, res) => {
    const { name, description, price, inStock } = req.body;
    await Product.findByIdAndUpdate(req.params.id, { name, description, price, inStock });
    res.json({ message: 'Modified!' });
  });
  
  app.delete('/api/products/:id', async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted!' });
  });

module.exports = app;