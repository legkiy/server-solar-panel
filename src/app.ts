import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import axios from 'axios';
import { parse } from 'fast-csv';
import { getCsvData, nativeGetData, nativeGetData2 } from './utils/dataFetch';
interface ICSVData {
  date: string;
  time: string;
  amp1: number;
  amp2: number;
  amp3: number;
  v1: number;
  v2: number;
  v3: number;
}
const app = express();

const port: string = process.env.PORT || '8415';
const host = 'localhost';

// app.use(express.static(path.resolve(__dirname, 'public')));

app.use('/day', async (req: Request, res: Response) => {
  nativeGetData2();
  res.json({ data: nativeGetData2() });
});

app.get('/', (req: Request, res: Response) => {
  res.json({ greeting: 'Hello world!' });
});
app.listen(port, () => {
  console.log(`Server start on: http://${host}:${port}`);
});
