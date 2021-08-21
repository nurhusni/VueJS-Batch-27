// Soal 1
// Judul : Function Penghitung Jumlah Kata

console.log("Soal 1");

var kalimat_1 = " Halo nama saya Muhammad Iqbal Mubarok ";
var kalimat_2 = "Saya Iqbal";

function jumlah_kata(kalimat) {
  var arrKalimat = kalimat.split(" ");

  // Menghapus spasi di awal kalimat
  if (arrKalimat[0] == "") {
    arrKalimat.shift();
  }

  // Menghapus spasi di akhir kalimat
  if (arrKalimat[arrKalimat.length - 1] == "") {
    arrKalimat.pop();
  }

  console.log(arrKalimat.length);
}

jumlah_kata(kalimat_1);
jumlah_kata(kalimat_2);
