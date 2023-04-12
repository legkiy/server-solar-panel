import express, { Express, Request, Response } from 'express';
import { PORT } from '../config';
import path from 'path';
import fs from 'fs';
import axios from 'axios';
import { parse } from 'fast-csv';
import { getData, nativeGetData, nativeGetData2 } from './utils/dataFetch';
import setCors from './middlewares/cors';
//@ts-ignore
import Stream from 'node-rtsp-stream';
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

const port: number = PORT || 8484;
const host = 'localhost';
const source = 'rtsp://admin:Password@192.168.31.53:554/';
app.use(setCors);

app.use('/day', async (req: Request, res: Response) => {
  res.json(getData(0));
});
app.use('/test', (req: Request, res: Response) => {
  res.json({ test: 'from back' });
});

app.post('/data', (req: Request, res: Response) => {
  res.send(getData(0));
});

app.get('/', (req: Request, res: Response) => {
  res.json({ greeting: 'Server start on PORT  = ' + port });
});

app.listen(port, () => {
  try {
    console.log(`Server start on: http://${host}:${port}`);
  } catch (err) {
    console.log('Not Start: ' + err);
  }
});
