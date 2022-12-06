const express = require('express');
const app = express();

const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
const adminRoutes = require("./routes/admin");
const blogRoutes = require("./routes/blog");

app.set('view engine', 'ejs'); // set template extension for express(ejs, pug, handleBar)
app.set('views', 'views'); // set template folder as views


//adminRoutes middleware//
app.use('/admin', adminRoutes);

//blogRoutes middleware//
app.use(blogRoutes);

//404 page not found middleware//
app.use((req, res) =>{
    // res.sendFile(path.join(__dirname, 'views', '404.html'));  
    res.render('404', {pageTitle:"404 not found", content: "404 page not found"});
});

app.listen(3000);