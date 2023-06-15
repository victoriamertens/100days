import express from 'express';
import { createServer as createViteServer } from 'vite';
import pg from 'pg';

let pool = new pg.Pool({
  host: 'localhost',
  port: 5432,
  database: 'auth_shelf',
});

async function createServer() {
  const app = express();

  // Create Vite server in middleware mode and configure the app type as
  // 'custom', disabling Vite's own HTML serving logic so parent server
  // can take control
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  // Use vite's connect instance as middleware. If you use your own
  // express router (express.Router()), you should use router.use
  app.use(vite.middlewares);

  app.use('*', async (req, res) => {
    // serve index.html - we will tackle this next
    pool.query();
  });

  app.listen(5173);
}

createServer();
