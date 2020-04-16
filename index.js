const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({hi : 'there'});
});


// Add heroku port via env var, else resolve to static value
const PORT = process.env.PORT || 5000
app.listen(PORT);