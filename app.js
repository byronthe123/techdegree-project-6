const express = require('express');
const pug = require('pug');
const routes = require('./routes/index');
const path = require('path');
const data = require('./data.json');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

//View engine setup:
app.use(express.static(path.join(__dirname, 'views')))
app.set('view engine', 'pug');

//Static Middleware:
app.use(express.static('public'));

//Set app locals:
app.use((req, res, next) => {
    res.locals.projects = data.projects;
    next();
});

// Use routes:
app.use(routes);

//Error handling:
app.use((req, res, next) => {
    const err = new Error('Not found error');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    if (err.status >= 100 && err.status < 600) {
        res.status(err.status);
    } else {
        res.status(500);
    }
    res.render('error', {err});
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Byron's app is running on port ${port}`);
});