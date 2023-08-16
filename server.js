import express from 'express';
import ViteExpress from 'vite-express';
import connectDB from './config/db.js';
import cors from 'cors';

import router from './routes/api/posts.js';

const app = express();

connectDB();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));

app.use('/api/posts', router);

ViteExpress.listen(app, 3000, () =>
  console.log('server listening on port 3000')
);
