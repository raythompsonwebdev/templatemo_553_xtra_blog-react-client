//import fs from "fs";
import express from 'express';
import { createServer } from 'http';
import history from 'connect-history-api-fallback';
import webpack from 'webpack';
import middleware from 'webpack-dev-middleware';
import webmiddleware from 'webpack-dev-middleware';
import path from 'path';
import config from './webpack.config.dev.js';

const compiler = webpack(config);

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const PORT = process.env.PORT || 3000;
const app = express();

// integrate webpack with express using middleware
app.use(
  webmiddleware(compiler, {
    // noInfo: true,
    publicPath: config.output.publicPath,
  })
);

// content to be served from
const publicPath = path.join(__dirname, '/public');

app.use(
  history({
    verbose: true,
  })
);

app.use(middleware(compiler));

// Static assets
const staticMiddleware = express.static(publicPath);

app.use(staticMiddleware);

// Serve index on homepage
app.get('/', (req, res) => {
  res.sendFile(publicPath + '/index.html');
});

const httpServer = createServer(app);

httpServer.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
