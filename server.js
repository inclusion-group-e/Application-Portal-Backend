const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const formsRouter = require('./routes/form');
const usersRouter = require('./routes/user');

// serve the homepage from here
app.use(express.static('public'));

// add `bodyParser` middleware which will parse JSON requests into
// JS objects before they reach the route files.
// The method `.use` sets up middleware for the Express application
app.use(bodyParser.json());
// this parses requests sent by `$.ajax`, which use a different content type
app.use(bodyParser.urlencoded({ extended: true }));

// handle api calls from here
app.use('/forms', formsRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
  console.log(`Server app listening on port ${port}!`);
});
