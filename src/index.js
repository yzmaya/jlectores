const express = require('express');
const expbhbs = require('express-handlebars');
const path = require('path');

//inizializations
const app = express();

//settings
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', expbhbs({
    default: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'

}));
app.set('view engine', '.hbs');
//middleware
//app.arguments(express.urlencoded({extended: false}));
//app.arguments(express.json());

//routes
app.use(require('./routes/index'));

//static files
app.use(express.static(path.join(__dirname, 'public')));

//start server
app.listen(3000, () =>{
    console.log('esta corriendo en el server on port 3000');
});