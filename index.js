import express from 'express';
import path from 'path';

const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT || 8800;
const HOST = 'localhost';

app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(PORT, HOST, () => {
  console.log(`Server start on: http://${HOST}:${PORT}`);
});
