// require dependencies
const   express             = require('express'),
        app                 = express(),
        bodyParser          = require('body-parser'),
        expressSanitizer    = require('express-sanitizer');

// require routes
const indexRoutes       = require('./routes/index');

// app setup
require('dotenv').config();
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// route setup
app.use('/', indexRoutes);

// server setup
app.listen(3000 || process.env.PORT, () => {
    console.log('WebServer listening...')
})