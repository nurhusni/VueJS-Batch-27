// Soal 1

const readBooks = require("./callback");

const books = [
  { name: "LOTR", timeSpent: 3000 },
  { name: "Fidas", timeSpent: 2000 },
  { name: "Kalkulus", timeSpent: 4000 },
  { name: "Komik", timeSpent: 1000 },
];

// Jawab

readBooks(10000, books[0], (sisaWaktu) => {
  readBooks(sisaWaktu, books[1], (sisaWaktu) => {
    readBooks(sisaWaktu, books[2], (sisaWaktu) => {
      readBooks(sisaWaktu, books[3], (sisaWaktu) => {
        console.log(`selesai membaca buku di sisa waktu ${sisaWaktu}`);
      });
    });
  });
});
