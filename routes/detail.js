const { models } = require('../lib/database');

module.exports = {
  get: (req, res) => {
    const { slug } = req.params;

    models.Url.find({
      where: {
        slug
      }
    }).then(instance => {
      if (!instance) {
        res.status(404).send('URL does not exist');
      } else {
        res.redirect(instance.get({ plain: true }).url);
      }
    });
  }
};
