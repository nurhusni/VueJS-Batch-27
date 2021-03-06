// Soal 2

const readBooksPromise = (time, book) => {
  console.log(`saya mulai membaca ${book.name}`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let sisaWaktu = time - book.timeSpent;
      if (sisaWaktu >= 0) {
        console.log(
          `saya sudah mulai membaca ${book.name}, sisa waktu saya ${sisaWaktu}`
        );
        resolve(sisaWaktu);
      } else {
        console.log(`saya sudah tidak punya waktu untuk baca ${book.name}`);
        reject(sisaWaktu);
      }
    }, book.timeSpent);
  });
};

module.exports = readBooksPromise;
