const express = require('express')
const path = require('path')
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000

express()
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .get('/', (req, res) => {
      res.send('e ae!');

      console.log(req);

      console.log("log")
  })
  .post('/oauth', (req, res) => {
        
        console.log("/oauth");

        console.log(req);    

        console.log("corpo")

        console.log(req.body)
    
        res.send('{active: true}');
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