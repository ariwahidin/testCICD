const express = require('express');
const dotenv = require('dotenv');
const app = express();

// Use the PORT from .env or default to 3000
const PORT = process.env.PORT || 3100;

// Route untuk halaman utama
app.get('/', (req, res) => {
    res.send('Hello, World2!');
});

// Mulai server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
