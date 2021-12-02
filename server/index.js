const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Listening
app.listen(port, () => {
  console.log(`App listening at Port:${port}`);
});

//Products
app.get('/products', (req, res) => {
  res.redirect('http://ec2-18-224-153-242.us-east-2.compute.amazonaws.com:3000')
    .catch((err) => {
      console.log(err);
    });
});

app.get('/products/*', (req, res) => {
  res.redirect('http://ec2-18-224-153-242.us-east-2.compute.amazonaws.com:3000')
    .catch((err) => {
      console.log(err);
    });
});


// Reviews
app.get('/products', (req, res) => {

});


// Q&A
app.get('/products', (req, res) => {

});