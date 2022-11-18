const express = require('express');
const app = express();
const port = 8081;
const knex = require('knex')(require('../knexfile')['development']);

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Application lives')
});

app.get('/pets', (req, res) => {
  knex('pet')
    .select('*')
    .then(pets => {
      let petNames = pets.map(pet => pet.name);
      res.json(petNames);
    })
});

app.listen(port, () => {
  console.log(`Knex/Express app running on port ${port}`);
})