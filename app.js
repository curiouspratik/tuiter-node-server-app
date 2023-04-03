// // require function search library and load it to the local source, like import function
// const express = require('express');
// // use ./ to find the js file we create
// const examplesController = require('./controllers/examples-controller')

// when set type to module in package.json, we are able to use ES6, instead of using require function above, we can use
// import statement.

// Express is one of the most popular Node.js libraries simplifying creating HTTP servers.
// use express to implement HTTP servers that can respond to HTTP requests from any HTTP client (e.g. browser)
import express from 'express';
// CORS stands for Cross Origin Resource Sharing. establishes the rules by which resources can be shared across domains (origins)
import cors from 'cors';

import HelloController from "./controllers/hello-controller.js"
import UserController from "./controllers/users/users-controller.js"
import TuitsController from "./controllers/tuits/tuits-controller.js";


// express function creates an instance of the express library
// developers use app instance to configure the server on what to do when various types of requests are received.
const app = express();

// Configure CORS in app.js by importing it and using it as the first middleware, right after instantiating express
app.use(cors());

// Express defines a JSON middleware to parse data from the body that can be registered as a middleware.
// All requests will first go through this middleware parsing the HTTP body into a JSON object added to the request
// object in a new body property that later HTTP handlers can access.
// parse JSON object from HTTP request body
app.use(express.json());

HelloController(app);
UserController(app);
TuitsController(app); // in assignment

// The server app listens to (wait at) port http://localhost:4000/, which does not collide with other web apps
app.listen(process.env.PORT || 4000)