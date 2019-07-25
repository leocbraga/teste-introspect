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
        console.log("/oauth");
    
        res.send('{}');
   })
   .post('/token', (req, res) => {
        console.log(req.body);   
        console.log("/token"); 

        res.send('{}');
    })
    .post('/oauth2/token', (req, res) => {

        console.log("/oauth2/token");
        console.log(req.body);    

        res.send('{}');
    })
.listen(PORT, () => console.log(`Listening on ${ PORT }`))