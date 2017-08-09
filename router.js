const path = require('path');
const Authentication = require('./controllers/authentication');
const Users = require('./controllers/users');
const passportService = require('./services/passport');
const passport = require('passport');
const Photos = require('./controllers/photos');
const Comments = require('./controllers/comments');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

module.exports = (app) => {
  // Put all API endpoints under '/api'
  app.post('/api/v1/signup', Authentication.signup);
  app.post('/api/v1/login', requireLogin, Authentication.login);
  app.get('/api/v1/users', requireAuth, Users.getUsers);
  app.get('/api/v1/users/:id', requireAuth, Users.getOneById);
  app.get('/api/v1/photos/:id/comments', requireAuth, Comments.getCommentsByPhotoId);
  app.post('/api/v1/photos', requireAuth, Photos.upload);
  app.get('/api/v1/photos/:id', requireAuth, Photos.getOneById);
  app.get('/api/v1/users/:id/photos', requireAuth, Photos.getPhotosByUserId);
  app.post('/api/v1/comments', requireAuth, Comments.save);
  app.get('/api/v1/comments/:id', requireAuth, Comments.getOneById);

  // The "catchall" handler: for any request that doesn't
  // match one above, send back React's index.html file.
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
  });
}
