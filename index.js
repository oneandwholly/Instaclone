const express = require('express');
const http = require('http');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const router = require('./router');


// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/json' }));
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
router(app);

const port = process.env.PORT || 1080;
const server = http.createServer(app);
server.listen(port);

console.log(`listening on ${port}`);
