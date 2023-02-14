import express from 'express';
import path from 'path';

const app = express();

const port: string = process.env.PORT || '8405';
const host = 'localhost';

app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server start on: http://${host}:${port}`);
});
