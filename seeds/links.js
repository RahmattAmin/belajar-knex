/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  // await knex('table_name').del()
  // await knex('table_name').insert([
  //   {id: 1, colName: 'rowValue1'},
  //   {id: 2, colName: 'rowValue2'},
  //   {id: 3, colName: 'rowValue3'}
  // ]);
  await knex("links").del();
  await knex("links").insert([
    { id: 1, name: "binar", links: "https://www.binaracademy.com" },
    { id: 2, name: "fb", links: "https://www.facebook.com" },
  ]);
};
