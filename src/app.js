const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 5000;
const staticPath = path.join(__dirname, '../public');
const template_path = path.join(__dirname, '../templates/views');
const partials_path = path.join(__dirname, '../templates/partials');
app.use(express.static(staticPath));
app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/weather', (req, res) => {
  res.render('weather');
});
app.get('*', (req, res) => {
  res.render('404ERROR', {
    errormsg: 'page not found',
  });
});
app.listen(port, () => {
  console.log(`this server is running on port no ${port}`);
});
