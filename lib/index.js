const mongoose = require('mongoose');

const app = require('./app');
const config = require('./config');

mongoose.connect(config.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB.'))
  .catch((err) => { throw err; });

app.listen(config.PORT, function(){
  console.log('Server listening to ' + config.PORT + '...');
});
