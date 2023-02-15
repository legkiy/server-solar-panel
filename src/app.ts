import express, { Express, Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import axios from 'axios';
import { parse } from 'fast-csv';
import { getData, nativeGetData, nativeGetData2 } from './utils/dataFetch';
import setCors from './middlewares/cors';
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
const app: Express = express();

const port: string = process.env.PORT || '8484';
const host = 'localhost';

app.use(setCors);

app.get('/', (req: Request, res: Response) => {
  res.json({ greeting: 'Hello world!' });
});

app.use('/day', async (req: Request, res: Response) => {
  //@ts-ignore
  res.json(getData(0));
});

app.listen(port, () => {
  try {
    console.log(`Server start on: http://${host}:${port}`);
  } catch (err) {
    console.log('Not Start: ' + err);
  }
});
