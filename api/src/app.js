const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
/* const moment = requiere('moment'); */


morgan.token('date', (req, res, tz) => {
  return new Date().toISOString();
});

app.use(morgan(':date :method :url :status :res[content-length] - :response-time ms'));


/* morgan.token('date', (req, res, tz) => {
    return moment().format('YYYY-MM-DD HH:mm:ss');
});

const customFormat = ':date :method ":url" :status :res[content-length] - :response-time ms';

app.use(morgan(customFormat)); */


//Setings:
app.set('port', 8000);
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

//Middleware:
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// app.use('/public', express.static(path.join(__dirname, './public')))

//Routes:
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});