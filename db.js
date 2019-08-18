const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);

mongoose.connect('mongodb://localhost/addy', { useNewUrlParser: true })
  .then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));