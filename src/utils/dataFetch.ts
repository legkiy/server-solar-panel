import fs from 'fs';
import { parse } from 'fast-csv';

export const getCsvData = () => {
  fs.createReadStream('./public/2022-09.csv')
    .pipe(parse({ headers: true }))
    .on('data', function (row) {
      console.log(row);
    })
    .on('error', function (error) {
      console.log(error.message);
    });
};
