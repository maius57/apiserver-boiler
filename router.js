/**
 * Created by Markus on 30.11.2016.
 */

const auth = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', {session: false });

module.exports = function(app){
    app.get('/', requireAuth, function(req, res){
        res.send({ message: 'Super secret code is ABC123'});
    });
    app.post('/signin', requireSignin, auth.signin);
    app.post('/signup', auth.signup);
};