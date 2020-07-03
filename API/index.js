// ./src/index.js

// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const {startDatabase} = require('./DB/mongodb');
const {insertComment, getComments} = require('./Service/comment');
var swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./Specification/swagger.json');
const commentAPI = require('./Controllers/Comment/comment');
var methodOverride = require('method-override')


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
app.use('/comment', commentAPI);







  // start the in-memory MongoDB instance
startDatabase().then(async () => {    
    await insertComment({comment: 'Hello, now from the in-memory database!',parentId:'eadf-ghtere121kj-j212kjk',blogId:'eadf-ghtere121kj-j212kjk'});
    console.log(await getComments());
    const handleErrors = (err, req, res, next) => {
    
        debugger;
          return res.status(500).json({
            status: 'error',
            message: err.message
          });
        }
      
        app.use(handleErrors);
      // start the server
      app.listen(3001, async () => {
        console.log('listening on port 3001');
      });
    });