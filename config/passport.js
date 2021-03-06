/**
 * Passport configuration
 *
 * This if the configuration for your Passport.js setup and it where you'd
 * define the authentication strategies you want your application to employ.
 *
 * I have tested the service with all of the providers listed below - if you
 * come across a provider that for some reason doesn't work, feel free to open
 * an issue on GitHub.
 *
 * Also, authentication scopes can be set through the `scope` property.
 *
 * For more information on the available providers, check out:
 * http://passportjs.org/guide/providers/
 */

module.exports.passport = {
  local: {
    strategy: require('passport-local').Strategy
  },

  sina: {
    name: 'sina',
    protocol: 'oauth2',
    strategy: require('passport-sina').Strategy,
    options: {
      clientID: '3059195985',
      clientSecret: '86ca239a09f518d2bd43307d762998c7',
      callbackURL: 'http://127.0.0.1:1337/auth/sina/callback'
    }
  }
};
