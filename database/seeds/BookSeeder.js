"use strict";
const moment = require("moment");
/*
|--------------------------------------------------------------------------
| BookSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const Database = use("Database");

class BookSeeder {
  async run() {
    await Factory.get("book").createMany(50);
  }
}

module.exports = BookSeeder;
