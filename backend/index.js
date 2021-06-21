const express = require('express');

const app = express();
const port = 3000;
const fs = require('fs');
const initData = require('./initData');

const transactions = JSON.parse(fs.readFileSync('./backend/mainData.json'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

//  initData();
const userData = {
  user: 'superSpringfieldLegend182',
  name: 'Bart Simpson',
  email: 'eatMyShorts182@duffBeer.com'
};
const card = {
  id: 1234,
  user: 'superSpringfieldLegend182',
  number: 1234567891011121,
  last_four: 4182,
  speding_limit: 55000
};

const CardInfo = {
  userData,
  card,
  transactions
};

const getChunk = (pageIndex) => {
  const { RECORDSPERPAGE, data } = transactions;
  const start = pageIndex * RECORDSPERPAGE;
  const end = start + RECORDSPERPAGE;
  const chunck = data.slice(start, end);
  console.log('start', start, 'end', end);
  return chunck;
};

app.get('/', (req, res, next) => {
  res.send(JSON.stringify(CardInfo));
  next();
});

app.post('/getPageIndex', (req, res, next) => {
  const { pageIndex } = req.body;
  const newChunck = getChunk(pageIndex);
  res.send(JSON.stringify(newChunck));
  next();
});

app.listen(port, () => console.log(`listening to port ${port}`));
