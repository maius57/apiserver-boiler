/**
 * Created by Markus on 30.11.2016.
 */

const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const config = require('./config');

// DB setup
mongoose.connect(config.mongodb);

// App setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log(`Server listening on: ${port}`);