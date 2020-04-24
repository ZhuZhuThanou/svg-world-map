const express = require('express');
const app = express();
app.use(express.static('public'));
app.listen(3000, () => console.log('SVG World Map App is ready! URL: http://localhost:3000'));