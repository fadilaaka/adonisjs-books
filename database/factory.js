"use strict";
const moment = require("moment");
/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

Factory.blueprint("book", (faker) => {
  const judulBuku = [
    "Laskar Pelangi",
    "Bumi Manusia",
    "Tenggelamnya Kapal Van der Wijck",
    "Pulang",
    "Ronggeng Dukuh Paruk",
    "Sang Pemimpi",
    "Negeri 5 Menara",
    "Pramoedya: Kisah Hidupku",
    "Saman",
    "Burung-Burung Manyar",
    "Anak Semua Bangsa",
    "Jejak Langkah",
    "Rumah Kaca",
    "Edensor",
    "Perahu Kertas",
    "Dilan 1990",
    "Ayat-Ayat Cinta",
    "Supernova",
    "Cantik Itu Luka",
    "Lelaki Harimau",
    "Salah Asuhan",
    "Belenggu",
    "Atheis",
    "Si Jamin dan Si Johan",
    "Layar Terkembang",
    "Siti Nurbaya",
    "Laut Bercerita",
    "Seperti Dendam, Rindu Harus Dibayar Tuntas",
    "Rentang Kisah",
    "Orang-Orang Biasa",
    "Kerumunan Terakhir",
    "Madre",
    "Sergius Mencari Bacchus",
    "Gadis Kretek",
    "Gelombang",
    "Filosofi Kopi",
    "Sang Patriot",
    "Max Havelaar",
    "Jalan Raya Pos, Jalan Daendels",
    "Pangeran Diponegoro",
    "Kartini: Kisah yang Tersembunyi",
    "Dear Nathan",
    "Critical Eleven",
    "Komet",
    "Bumi Series",
    "Tentang Kamu",
    "Hujan",
    "5 cm",
    "Indonesia Etc",
    "Teknik Bercerita",
    "Tempo Doeloe",
    "Memahami Film",
    "Indonesia dalam Krisis",
    "Manusia Indonesia",
    "Tarian Bumi",
    "Cantik Itu Luka",
    "Beauty is a Wound",
    "Lelaki Harimau",
    "Kumpulan Budak Setan",
    "Perfect Storm",
    "Home",
    "Filosofi Kopi",
    "Sewu Dino",
    "Perempuan Patah Hati yang Kembali Menemukan Cinta Melalui Mimpi",
    "Catatan Seorang Demonstran",
    "Antologi Rasa",
  ];
  return {
    judul: faker.pickone(judulBuku),
    tahun_terbit: faker.year({ min: 1900, max: 2024 }),
    deskripsi: faker.paragraph(),
    created_at: moment().format("YYYY-MM-DD HH:mm:ss"),
    updated_at: moment().format("YYYY-MM-DD HH:mm:ss"),
  };
});
