const express = require('express');
const shopping = require('./api/shopping');
const cors = require('cors');

const app = express();

app.use(cors());

const PORT = process.env.PORT || 5000;

app.use('/shopping', shopping);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`));
