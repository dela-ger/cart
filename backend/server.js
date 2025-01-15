const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const { user, database, password, port } = require('pg/lib/defaults');

const app = express();
app.use(express.json());
app.use(cors());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'cart',
    password: 'thebest867',
    port: 5432,
})

// get all products
app.get('/api/products', async (req, res) => {
    const  result = await pool.query('SELECT * FROM products');
    res.json(result.rows)
})

// Increase count
app.post('/api/buy/:id', async (req, res) => {
    const { id } = req.params;
    await pool.query('UPDATE products SET count = count + 1 WHERE id = $1', [id]);
    res.send({ succes: true })
})

// Get checkout items
app.get('/api/checkout', async (req, res) => {
    const result = await pool.query('SELECT * FROM products WHERE count > 0');
    res.json(result.rows)
})

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
