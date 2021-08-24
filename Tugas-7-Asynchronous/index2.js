// Soal 2

const readBooksPromise = require("./promise");

const books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
  { name: "Komik", timeSpent: 1000 },
];

// Jawab

readBooksPromise(10000, books[0])
  .then((sisaWaktu) => {
    return readBooksPromise(sisaWaktu, books[1]);
  })
  .then((sisaWaktu) => {
    return readBooksPromise(sisaWaktu, books[2]);
  })
  .then((sisaWaktu) => {
    return readBooksPromise(sisaWaktu, books[3]);
  })
  .then((sisaWaktu) => {
    console.log(`selesai membaca buku di sisa waktu ${sisaWaktu}`);
  })
  .catch((sisaWaktu) => {
    console.log("tidak selesai membaca buku");
  });
