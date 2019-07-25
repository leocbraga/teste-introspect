const express = require('express')
const path = require('path')
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000

express()
  .use(bodyParser.json())
  .get('/', (req, res) => {
      res.send('e ae!');

      console.log("log")
  })
  .post('/oauth', (req, res) => {
        console.log(req.body);    
    
        res.send('{}');
   })
   .post('/token', (req, res) => {
        console.log(req.body);    

        res.send('{}');
    })
.listen(PORT, () => console.log(`Listening on ${ PORT }`))