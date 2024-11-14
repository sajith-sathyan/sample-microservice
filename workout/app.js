// workout/app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello from the Workout Microservice!');
});

app.listen(PORT, () => {
  console.log(`Workout service is running on port ${PORT}`);
});
