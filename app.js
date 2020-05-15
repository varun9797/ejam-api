const db = require('./config/db');
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;
const deploymentRouter = require('./src/components/deployments/deployment.router');

// API calls
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())

app.use("/deployment",deploymentRouter);

if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
  
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }
  
app.listen(port, () => console.log(`Listening on port ${port}`));
