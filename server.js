const express = require('express');
const cors = require('cors');
const http = require('http');
const app = express();
const jwt = require('jsonwebtoken');
const apolloConfig = require('./graphql/config/apolloConfig');
const { mongoDbConnection } = require('./mongodb');
require('dotenv').config();
app.use(cors());
mongoDbConnection();
// app.use((req, res, next) => {
//   const token = req.headers['x-auth-token'];
//   if (token && token !== 'null') {
//     try {
//       const activeUser = jwt.verify(token, 'shhhhh');
//       req.activeUser = activeUser;
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   next();
// });
apolloConfig(app)
  .then(res => console.log('-apollo started-'))
  .catch(e => console.log(e));
const httpServer = http.createServer(app);

httpServer.listen(5000, () => {
  console.log(`****server started 5000 ****`);
});
