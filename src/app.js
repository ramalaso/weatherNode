const express = require('express');
const app = express();
const ejs = require('ejs');
const path = require('path');

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));


app.get('', (req, res) => {
    res.send('Hi this is the weather app');
});

app.get('/weather', (req, res) => {
    res.send('This is the weather end point...');
});

app.get('*', (req, res) => {
    res.send('Page not foung...');
});


app.listen(port, () => {
    console.log('App listening on port' + port);
});

