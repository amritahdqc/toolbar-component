const trueexpress = require('express'),
    bodyParser      = require('body-parser'),
    methodOverride  = require('method-override'),
    path = require('path');
app = express();

app.get('/', (request, response) => {
    console.log(response); //('Hello from Express!');
});

app.set('port', process.env.PORT || 3002);

app.listen(app.get('port'), function () {
console.log('Express server listening on port ' + app.get('port'));
});

  app.set('client', path.join(__dirname, 'src/client'))
