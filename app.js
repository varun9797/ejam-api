const db = require('./config/db');
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const deploymentRouter = require('./src/components/deployments/deployment.router');

app.use(bodyParser.urlencoded({ extended: false }))
 
app.use(bodyParser.json())

app.use("/deployment",deploymentRouter);



app.listen(port, () => console.log(`app listening at http://localhost:${port}`))