import fs from 'fs';
import { parse } from 'fast-csv';
import readline from 'readline';

const dataWay = './public/2022-09.csv';

export const getCsvData = () => {
  fs.createReadStream(dataWay)
    .pipe(parse({ headers: true }))
    .on('data', function (row) {
      console.log(row);
    })
    .on('error', function (error) {
      console.log(error.message);
    });
};

export const nativeGetData = fs.readFile(dataWay, 'utf8', (err, data) => data);

export const nativeGetData2 = () => {
  const stream = fs.createReadStream(dataWay);
  const reader = readline.createInterface({ input: stream });
  let data: any = [];

  reader.on('line', (row: any) => {
    // 👇 split a row string into an array
    // then push into the data array
    data.push(row.split(','));
  });

  reader.on('close', () => {
    // 👇 reached the end of file
    console.log(data);
  });
};
