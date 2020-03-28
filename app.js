const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const locationRoutes = require('./API/locations')

const adminRoutes = require('./routes/admin');
const weatherRoutes = require('./routes/weather');

app.use(bodyParser.urlencoded({extended: false}));  // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json

app.use(express.static(path.join(__dirname, 'public')));

app.use('/locations', locationRoutes)

app.use('/admin', adminRoutes);
app.use(weatherRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);

