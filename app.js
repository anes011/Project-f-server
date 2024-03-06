const http = require('http');
const express = require('express');
const cors = require('cors');
const port = 4000;

//Imported routes:
const emailVerification = require('./routes/emailVerification');
//

const app = express();

app.use(express.json());
app.use(cors());

//Activating Routes:
app.use('/emailVerification', emailVerification);
//

const server = http.createServer(app);

server.listen(port);