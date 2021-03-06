/* eslint-disable import/extensions */
/**
 * @title: initData.jsx
 * @author: Javier Olaya
 * @date: 6/23/2021
 * @description: data initalizer for mocking the data
 */
const fs = require('fs');
const {
  categoriesMerchant,
  status,
  TOTALRECORDS,
  RECORDSPERPAGE,
  TOTALNUMCHUNKS,
  currentIndex
} = require('./constants.js');

// export main function that initiates the mock data
module.exports = () => {
  const numberGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const getCategoriesMerchant = () => {
    return categoriesMerchant[numberGenerator(0, 9)];
  };
  const createAmount = () => {
    return `${numberGenerator(0, 9)}${numberGenerator(0, 9)}.${numberGenerator(
      0,
      9
    )}${numberGenerator(0, 9)}`;
  };
  const createNewDate = (day) => {
    const newDate = new Date();
    newDate.setDate(newDate.getDate() + day);
    return newDate.toLocaleDateString();
  };

  const getStatus = () => {
    return status[numberGenerator(0, 3)];
  };

  // eslint-disable-next-line prefer-const
  let data = [];
  let rec = null;

  for (let indx = -TOTALRECORDS; indx < 0; indx += 1) {
    const cateMerch = getCategoriesMerchant();
    const { category, merchant } = cateMerch;
    rec = {
      id: Math.abs(indx),
      card: 1234567891011121,
      amount: createAmount(),
      status: getStatus(),
      merchant,
      category,
      created_at: createNewDate(indx)
    };
    data.push(rec);
  }
  const f = new Date();
  console.log('done', f);

  const jsonObj = {
    data,
    totalRecords: data.length,
    TOTALRECORDS,
    RECORDSPERPAGE,
    TOTALNUMCHUNKS,
    currentIndex
  };

  // write jsonObj to the file
  const stringifiedJson = JSON.stringify(jsonObj);
  fs.writeFileSync('./backend/mainData.json', stringifiedJson);
};
