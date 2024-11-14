// user/app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from the User Microservic....!');
});

app.listen(PORT, () => {
  console.log(`User service is running on port ${PORT}`);
});
