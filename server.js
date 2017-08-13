const express = require('express'),
    bodyParser = require('body-parser'),
    expressSession= require('express-session'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    connection = require('./server/config/db'),
    webRoutes = require('./server/routes/webRoutes'),
    apiRoutes = require('./server/routes/apiRoutes');

const app = express();

//session
app.use(expressSession({
    secret: 'mytoken',
    saveUninitialized: true,
    resave: true
}));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/api', apiRoutes);
app.use('/', webRoutes);

let port = process.env.PORT || 1300;
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});