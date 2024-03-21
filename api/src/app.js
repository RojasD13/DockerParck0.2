const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const connectDB = require('./db/conn')
connectDB()
const cors = require('cors');
const morgan = require('morgan');


morgan.token('date', (req, res, tz) => {
  return new Date().toISOString();
});

app.use(morgan(':date :method :url :status :res[content-length] - :response-time ms'));


//Setings:
app.set('port', 8000);

//Middleware:
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

//Routes:
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);



app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});