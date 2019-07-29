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
  .get('/metadata', (req, res) => {
      
    console.log("=============")
    console.log(req);
    console.log("=============")
    console.log("headers: ");
    console.log(req.headers);
    console.log("Enviando: ")
    console.log(req.body)
    res.set('API-OAUTH-METADATA-FOR-PAYLOAD', '{"teste": "teste2"}');
    res.set('API-OAUTH-METADATA-FOR-ACCESSTOKEN', '{"teste3": "teste4"}');

    res.send('{}');

  })
  .post('/oauth', (req, res) => {
        
        console.log("/oauth");

        console.log(req);    

        console.log("corpo")

        console.log(req.body)

        res.set('Content-Type', 'application/json');

    
        res.send('{"active": true}');
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