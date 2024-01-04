const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

// Import our sequelize connection
const sequelize = require('./config/connection');

// Import Routes
const api_routes = require('./routes/api_routes');

// Allow json to be sent from the client
app.use(express.json());

// localhost:3001/
// Middleware used to load our routes and prefix them with '/api'
app.use('/api', api_routes);

// Connection to our db and sync our tables (create them if not already created, using the models)
sequelize.sync()
  .then(() => {
    console.log('db synced');

    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`)
    });
  });




// // Our model is used to interact with the db table




// const data = {
//   name: 'JD',
//   age: 44,
//   haveBirthday: function() {

//   }
// }

// data.haveBirthday();

// function someFunc() {

// }

// if (true) {

// }

// function someFunc(str, num) {
//   console.log(num.type);
// }

// someFunc('some string', {
//   color: 'blue',
//   type: 'sky'
// });

// const fruits = ['JD', 44];

// fruits[0]

// const data = {
//   name: 'JD',
//   age: 44
// }

// data.age // 'JD'