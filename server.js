const express = require('express');
const axios = require('axios');
const fs = require('fs');

const app = express();
const PORT = 8080;


app.get('/api/scrape', (req, res) => {
  let offset = 0;
  let promises = [];
  const promiseBuilder = () => {
    let url = 'https://api.coinranking.com/v1/public/coins?offset='
    if (offset < 250) {
      promises.push(axios.get(`${url}${offset}`));
      offset += 50;
      return promiseBuilder();
    }
    return promises;
    }
  Promise.all(promiseBuilder())
  .then((response) => {
    let master = [];
      for (r of response) {
        master.push(...r.data.data.coins);
      };
      master = master.map(coin => {
        const { id, symbol, name, color, iconType, iconUrl } = coin;
        return {
          id,
          symbol,
          name,
          color,
          iconType,
          iconUrl,
          label: name
        }
      });
      const json = JSON.stringify(master, null, 2);
      fs.writeFileSync('coins.json', json);
    })
    .catch(err => console.log(err));
  });

app.listen(PORT, () => {
  console.log(`🚀  Server is listening on ${PORT}`);
});
