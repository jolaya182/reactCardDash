const express = require('express');

const app = express();
const fs = require('fs');

const transactions = JSON.parse(fs.readFileSync('./backend/mainData.json'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

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
  spending_limit: 55000
};

let CardInfo = {
  userData,
  card,
  transactions
};

const getChunk = (pageIndex) => {
  const { RECORDSPERPAGE, data } = transactions;
  const start = pageIndex * RECORDSPERPAGE;
  const end = start + RECORDSPERPAGE;
  const chunck = data.slice(start, end);
  return chunck;
};

const sumOfTransactionsAndAverage = () => {
  const { data, TOTALRECORDS } = transactions;
  const finalSum = data.reduce((acc, record) => {
    const sumAmount = Number(record.amount) + Number(acc);
    return Number(sumAmount).toFixed(2);
  }, 0);
  const average = Number(finalSum / TOTALRECORDS).toFixed(2);
  return { finalSum, average };
};

app.get('/', (req, res, next) => {
  const averageSum = sumOfTransactionsAndAverage();
  const { finalSum, average } = averageSum;
  const newTransactions = { ...CardInfo.transactions };
  newTransactions.sum = finalSum;
  newTransactions.average = average;
  newTransactions.data = getChunk(0);

  const newCardInfo = { ...CardInfo, transactions: newTransactions };
  res.send(JSON.stringify(newCardInfo));
  next();
});

app.post('/getPageIndex', (req, res, next) => {
  const { pageIndex } = req.body;
  const newChunck = getChunk(pageIndex);
  res.send(JSON.stringify(newChunck));
  next();
});

const sortCreation = (metaType, toggleAscOrder) => {
  const { RECORDSPERPAGE, data } = transactions;
  const newData = data.sort((a, b) => {
    const dateA =
      metaType === 'created_at' ? new Date(a[metaType]) : a[metaType];
    const dateB =
      metaType === 'created_at' ? new Date(b[metaType]) : b[metaType];
    if (dateA === dateB) return dateA;
    // return dateA < dateB ? -1 : 1;
    if (toggleAscOrder) {
      return dateA > dateB ? 1 : -1;
      // eslint-disable-next-line no-else-return
    } else {
      return dateA < dateB ? 1 : -1;
    }
  });

  const newTransactions = { ...transactions, data: newData };
  CardInfo = { ...CardInfo, transactions: newTransactions };
  return newData.slice(0, RECORDSPERPAGE);
};

app.post('/sort', (req, res, next) => {
  const { metaType, toggleAscOrder } = req.body;

  const newChunck = sortCreation(metaType, toggleAscOrder);
  res.send(JSON.stringify(newChunck));
  next();
});

module.exports = app;
