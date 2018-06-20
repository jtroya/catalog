const { MOBILE_LIST } = require('./constants');

module.exports = app => {
  app.get('/api/phones', (req, res) => {
    setTimeout(() => {
      res.json(MOBILE_LIST)
    }, 3000);
  });

  app.get('*', (req, res) => {
    res.sendStatus(404);
  });
}
