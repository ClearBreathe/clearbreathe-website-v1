const app = require('./app');
const config = require('./config');

app.listen(config.PORT, function(){
  console.log('Server listening to ' + config.PORT + '...');
});
