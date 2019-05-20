const express = require('express');
const axios = require('axios');
const fs = require('fs');

const app = express();
const PORT = 8080;

app.get('/api/scrape', (req, res) => {
    axios.get('https://api.coinranking.com/v1/public/coins')
    .then(response => {
      const { status, data } = response;
      if (status === 200) {
        fs.appendFile('coins.json', JSON.stringify(data.data.coins), (err) => {
          if (err) throw err;
          console.log('The file has been saved!')
        })
      }
    })
});

app.listen(PORT, () => {
  console.log(`🚀  Server is listening on ${PORT}`);
});
