const express = require('express');
const enforce = require('express-sslify');

const app = express();

if(process.env.NODE_ENV === 'production') {
  console.log('Redirecting to TLS endpoint.');
	app.use(enforce.HTTPS({
    // Required for proper use under a reverse proxy (Heroku, etc.).
    trustProtoHeader: true
  }));
}

app.use('/', express.static('dist/'));

app.listen(process.env.PORT || 3000, function() {
	console.log('Started.');
});
