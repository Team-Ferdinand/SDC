const express = require('express');
const app = express();
const port = 3000;
const axios = require('axios');

app.use(express.json());

// Listening
app.listen(port, () => {
  console.log(`App listening at Port:${port}`);
});

app.get('/', (req, res) => {
  res.send('Welcome to the Master Server');
})

//Products
app.get('/products', (req, res) => {
  res.redirect('http://ec2-18-224-153-242.us-east-2.compute.amazonaws.com:80/products');
});

app.get('/products/*', (req, res) => {
  res.redirect(`http://ec2-18-224-153-242.us-east-2.compute.amazonaws.com:80${req.url}`);
});


// Reviews
const reviewAddress = 'http://ec2-18-224-94-161.us-east-2.compute.amazonaws.com:80';
app.get('/reviews', (req, res) => {
  res.redirect(`${reviewAddress}${req.url}`);
});

app.get('/reviews/meta', (req, res) => {
  res.redirect(`${reviewAddress}${req.url}`);
});

app.post('/reviews', (req, res) => {
  axios.post(`${reviewAddress}${req.url}`, req.body)
    .then((response) => {
      res.status(201).json(response.data)
    })
    .catch((err) => {
      res.status(500).send(err);
    })
});

app.put('/reviews/*', (req, res) => {
  axios.put(`${reviewAddress}${req.url}`)
    .then((response) => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log(`error: ${err}`);
    })
});


// Q&A
const qaAddress = 'http://ec2-3-144-186-10.us-east-2.compute.amazonaws.com:80';
app.get('/qa/*', (req, res) => {
  res.redirect(`${qaAddress}${req.url}`);
});

app.post('/qa/*', (req, res) => {
  axios.post(`${qaAddress}${req.url}`, req.body)
    .then((response) => {
      console.log(response.data)
      res.status(201).json(response.data);
    })
    .catch((err) => {
      console.log(`error: ${err}`);
    })
});

app.put('/qa/*', (req, res) => {
  axios.put(`${qaAddress}${req.url}`)
    .then((response) => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.log(`error: ${err}`);
    })
});