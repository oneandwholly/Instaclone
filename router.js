const path = require('path');
const Authentication = require('./controllers/authentication');

module.exports = (app) => {
  // Put all API endpoints under '/api'
  app.post('/api/v1/signup', Authentication.signup);

  // The "catchall" handler: for any request that doesn't
  // match one above, send back React's index.html file.
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });
}
