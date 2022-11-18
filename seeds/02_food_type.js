/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('food_type').del()
  await knex('food_type').insert([
    {id: 1, name: 'Kibble', description: 'Dry crude protein'},
    {id: 2, name: 'Live Feed', description: 'Prey animal(s)'},
    {id: 3, name: 'Seed', description: 'Plant seed mix'}
  ]);
};
