const express = require('express');
const axios = require('axios');
const fs = require('fs');

const app = express();
const PORT = 8080;

app.get('/api/scrape', (req, res) => {
    axios.get('https://api.coinranking.com/v1/public/coins')
    .then(response => console.log(response))
    .then(res.send('Scape complete!'))
});

app.listen(PORT, () => {
  console.log(`🚀  Server is listening on ${PORT}`);
});
