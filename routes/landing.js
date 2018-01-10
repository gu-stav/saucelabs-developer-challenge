const { isUri } = require('valid-url');
const shortid = require('shortid');

const { models } = require('../lib/database');

module.exports = {
  get: (req, res) => {
    res.render('form');
  },

  /* Lot's of room for enhancements
     - check whether a URL was posted should be part of the model definition
     - there should be a check, if the created <slug> already exists
     - it shoudln't be possible to submit the page twice, when reloading
  */

  post: (req, res) => {
    const { url } = req.body;
    const slug = shortid.generate();

    if (!url || !isUri(url)) {
      res.status(400).send('Nice try. Please provide a valid URL :)');
    }

    models.Url.create({
      slug,
      url
    }).then(created => {
      const data = created.get({ plain: true });

      res.render('success', {
        data,
        shortUrl: `${req.headers.host}/${data.slug}`
      });
    });
  }
};
