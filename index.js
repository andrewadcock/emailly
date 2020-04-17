const express = require('express');
require('./services/passport')
const authRoutes = require('./routes/authRoutes')

const app = express();

require('./routes/authRoutes')(app);


// Add heroku port via env var, else resolve to static value
const PORT = process.env.PORT || 5000
app.listen(PORT);