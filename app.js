const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./utility/database');
const axios = require('axios');

const app = express();

const usersRoutes = require('./api/users');
const weatherRoutes = require('./api/weather-api');

const locationRoutes = require('./api/locations');
const adminRoutes = require('./routes/admin');


//db.execute('INSERT INTO locations (id, province, city) VALUES (2, North, Rustenburg)');

// db.execute('SELECT * FROM locations')
// .then((result) => {
//     console.log(result[0])
// })
// .catch((err) => {
//     console.log(err)
// });

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

app.use('/users', usersRoutes);
app.use('/weather', weatherRoutes);

app.use('/locations', locationRoutes);
app.use('/admin', adminRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

const port = 3000;

app.listen(port);
console.warn(`Server starting on port ${port}`)

