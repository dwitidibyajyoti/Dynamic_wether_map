const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;
const staticPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.use(express.static(staticPath));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/weather', (req, res) => {
  res.send('well come to wether page');
});
app.listen(port, () => {
  console.log(`this server is running on port no ${port}`);
});
