"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class BookSchema extends Schema {
  up() {
    this.create("book", (table) => {
      table.increments();
      table.string("judul", 60).notNullable();
      table.integer("tahun_terbit", 4).notNullable();
      table.text("deskripsi").nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("book");
  }
}

module.exports = BookSchema;
