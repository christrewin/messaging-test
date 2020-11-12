import '@babel/polyfill';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express()
const port = 3000

const corsOptions = {
  origin: '*',
  methods: 'GET,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())

app.use(function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  console.log(new Date(), req.method, req.url, JSON.stringify(req.body, null, 2))
  res.send(JSON.stringify(req.body, null, 2))
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
