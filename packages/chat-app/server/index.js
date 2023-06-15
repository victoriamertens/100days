import express from 'express';
import { createServer as createViteServer } from 'vite';
import pg from 'pg';

let pool = new pg.Pool({
  host: 'localhost',
  port: 5432,
  database: 'auth_shelf',
});

const port = 3000;

const app = express();

app.get('/api/v1/hello', (_req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.listen(port, () => {
  console.log('Server listening on port', port);
});
