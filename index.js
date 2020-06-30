const express = require('express');
const cors = require('cors');
const port = 4200;
const app = express();

app.use(cors());

app.use(express.static('dist'));

app.listen(port, function () {
  console.log("Server is running on "+ port +" port");
});
