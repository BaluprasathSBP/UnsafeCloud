// ./src/index.js

// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { startDatabase } = require('./DB/mongodb');
const { insertComment, getComments } = require('./Service/comment');
var swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./Specification/swagger.json');
const commentAPI = require('./Controllers/Comment/comment');

const PORT = 3000;
const HOST = '0.0.0.0';

// defining the Express app
const app = express();

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));



// Add Swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Register routers
app.use('/comments', commentAPI);


// Intital API
app.get('/', function (req, res) {
  res.send('You are in the Unsafecloud comments API');
});

// start the in-memory MongoDB instance
startDatabase().then(async () => {
  // await insertComment({ comment: 'Hello, now from the in-memory database!', parentId: 'eadf-ghtere121kj-j212kjk', blogId: 'eadf-ghtere121kj-j212kjk' });
  // Global error handler
  const handleErrors = (err, req, res, next) => {
    return res.status(500).json({
      status: 'error',
      message: err.message
    });
  }

  app.use(handleErrors);
  // start the server
  app.listen(PORT, HOST);
});