require('dotenv').config();
// app principal
const express = require('express');
const app = express();
const mainRoutes = require('./src/routes/mainRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const authRoutes = require('./src/routes/authRoutes');
const storeRoutes = require('./src/routes/storeRoutes');
const path = require('path');

const session = require('express-session')


//override para habilitar metodos put y delete
const methodOverride = require('method-override');

const port = process.env.PORT;

//Configuracion de mototr de plantilla
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));

app.use(session({
    secret: 'S3cr3t01H@sh',
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: false
    }
}));

app.use((req, res, next) => {
    res.locals.user = req.session.user || null;
    next();
});

/*app.use(initSession());*/


app.use(methodOverride('__method'));
app.use(express.urlencoded());
app.use(express.json());
//app.use(express.static('public'));
app.use(express.static(__dirname + '/public'))
app.use('/', mainRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);
app.use('/shop', storeRoutes);

// middleware para manejar error 404
app.use((req, res, next) => {
    res.render('home/not_found');
});


app.listen(port, () => {
    console.log(`Puerto escuchando en localhost:${port}`);
});

