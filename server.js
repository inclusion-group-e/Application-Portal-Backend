const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const formsRouter = require('./routes/form');

// serve the homepage from here
app.use(express.static('public'));

// handle api calls from here
app.use('/form', formsRouter);

app.listen(port, () => {
  console.log(`Server app listening on port ${port}!`);
});
