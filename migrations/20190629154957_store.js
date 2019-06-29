exports.up = function(knex, Promise) {
  return knex.schema.createTable("store", function(table) {
    table.increments("id").primary;
    table.string("type");
    table.string("color");
    table.integer("price");
    table.string("size");
    table.string("image");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("store");
};
