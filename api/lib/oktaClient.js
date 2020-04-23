const okta = require('@okta/okta-sdk-nodejs');

const client = new okta.Client({
  orgUrl: 'https://{dev-513527.okta.com}',
  token: '{00X6cWH06Jy-Px6kHije8qXNAx3y-WgMnUwR5ffOVK}'
});

module.exports = client;