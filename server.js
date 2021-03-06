
const express = require('express');
const hbs = require('hbs');
const fs = require('fs');
const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine','hbs');

app.use(express.static(__dirname + '/public'));


app.use((req,res,next) => {
    var now = new Date().toString();
    var log = `${now} : ${req.method} ${req.url}`;
    fs.appendFile('server.log', log + '\n', (err) => {
        if(err) {
            console.log('Unable to append to log file.');
        }
    });
    next();
});


hbs.registerHelper('getCurrentYear' , () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIT', (text) => {
  return text.toUpperCase();
});

app.get('/' , (req, res) => {
    //res.send('Hellow Express !');
    res.render('home.hbs', {
      welcomeHomeMessage: 'Welcome To Home Message',
    });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
