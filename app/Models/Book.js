"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Book extends Model {
  static get table() {
    return "book";
  }

  static get fillable() {
    return ["judul", "tahun_terbit", "deskripsi"];
  }

  static get dates() {
    return super.dates;
  }

  static get hidden() {
    return ["created_at", "updated_at"];
  }
}

module.exports = Book;
