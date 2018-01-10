const bodyParser = require('body-parser');
const express = require('express');
const process = require('process');

const { sync } = require('./lib/database');
const { landing, detail } = require('./routes');

const app = express();

app.set('view engine', 'pug');
app.use(express.static(`${__dirname}/static`));

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.get('/', landing.get);
app.post('/', landing.post);
app.get('/:slug', detail.get);

sync().then(() => {
  const { PORT } = process.env;

  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`app is running on http://localhost:${PORT}/`);
  });
});
