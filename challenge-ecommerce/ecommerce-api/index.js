const express = require('express');
require('dotenv').config();
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/products', async (req, res) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    const products = response.data;
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});