const express = require('express');

const port = 3000;
const app = express();

// Serve dist folder as web page root
app.use('/', express.static('dist'));

app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('dist/index.html', { root: __dirname });
});

app.listen(port, function () {
  console.log("Server is running on "+ port +" port");
});
