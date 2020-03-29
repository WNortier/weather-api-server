const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./utility/database');

const app = express();

const locationRoutes = require('./api/locations')

const adminRoutes = require('./routes/admin');
const weatherRoutes = require('./routes/weather');


//db.execute('INSERT INTO locations (id, province, city) VALUES (2, North, Rustenburg)');

db.execute('SELECT * FROM locations')
.then((result) => {
    console.log(result[0])
})
.catch((err) => {
    console.log(err)
});

app.use(bodyParser.urlencoded({extended: false}));  // x-www-form-urlencoded <form>
app.use(bodyParser.json()); // application/json

//CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/locations', locationRoutes)

app.use('/admin', adminRoutes);
app.use(weatherRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);

