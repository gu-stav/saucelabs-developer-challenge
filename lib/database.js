const Sequelize = require('sequelize');

/* Ideally all these options are read from config files or ENV variables */
const sequelize = new Sequelize('shorturl', '', '', {
  host: 'localhost',
  dialect: 'sqlite',
  storage: './shorturl.sqlite'
});

const Url = sequelize.import('../models/url');

const sync = () => Url.sync();

module.exports = {
  sync,
  models: {
    Url
  }
};
