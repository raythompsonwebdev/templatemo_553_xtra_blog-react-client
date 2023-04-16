// import fs from "fs";
import express from 'express';
import { createServer } from 'http';
import history from 'connect-history-api-fallback';
import webpack from 'webpack';
import serveStatic from 'serve-static';
import webmiddleware from 'webpack-dev-middleware';
import path from 'path';
import { fileURLToPath } from 'url';
// import rateLimit from 'express-rate-limit';
import config from './webpack.config.dev.js';

const compiler = webpack(config);

// set up file paths for static files.
// eslint-disable-next-line no-underscore-dangle
// const __dirname = path.dirname(new URL(import.meta.url).pathname);

const PORT = process.env.PORT || 3000;
const app = express();

// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000, // 15 minutes
//   max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
//   standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
//   legacyHeaders: false, // Disable the `X-RateLimit-*` headers
// });

// // Apply the rate limiting middleware to all requests
// app.use(limiter);

// set up file paths for static files - updated.
// eslint-disable-next-line no-underscore-dangle
const __filename = fileURLToPath(import.meta.url);

// eslint-disable-next-line no-underscore-dangle
const __dirname = path.dirname(__filename);

// integrate webpack with express using middleware.
app.use(
  webmiddleware(compiler, {
    // noInfo: true,
    publicPath: config.output.publicPath,
  })
);

// content to be served from
const publicPath = path.join(__dirname, 'public');

// eslint-disable-next-line no-console
console.log(publicPath);
app.use(
  history({
    verbose: true,
  })
);

// Static assets
app.use('/', serveStatic(publicPath));
// serve static files
// const staticHandler = express.static(publicPath);
// app.use(staticHandler);

// Serve index on homepage
app.get('/', (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});

const httpServer = createServer(app);

httpServer.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
