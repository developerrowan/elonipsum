const express = require('express');

const app = express();

const routes = require('./router');

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../public'));

app.use(routes);

app.listen(PORT, () => {
    console.log(`Always listening, but this time it's at http://localhost:${PORT}/`)
})