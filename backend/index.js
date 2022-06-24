const express = require('express');
const notes = require("./data/notes");
const app = express();
const dotenv = require('dotenv');
app.get('/', (req, res) => {

res.send("API is running.")
});

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, console.log(`server started on ${PORT}`));