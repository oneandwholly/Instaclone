const express = require('express');
const http = require('http');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const router = require('./router');
const db = require('./db');


// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/json' }));
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
router(app);

const port = process.env.PORT || 1080;

db.connect(db.MODE_PRODUCTION, (err) => {
  if (err) {
    console.log('Unable to connect to MySQL.');
    process.exit(1);
  } else {
    const server = http.createServer(app);
    server.listen(port, (err) => {
      console.log(`listening on ${port}`);
    });
  }
})
