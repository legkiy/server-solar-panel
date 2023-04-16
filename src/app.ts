import express, { Express, Request, Response } from 'express';
import { PORT } from '../config';
import { getData } from './utils/dataFetch';
import setCors from './middlewares/cors';

const app: Express = express();

const port: number = PORT || 8484;
const host = 'localhost';
const source = 'rtsp://admin:Password@192.168.31.53:554/';
app.use(setCors);

let fileCSV: string;

app.get('/panel-:panleNumber/:CSV', (req: Request, res: Response) => {
  res.send(getData(+req.params.panleNumber, req.params.CSV));
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
