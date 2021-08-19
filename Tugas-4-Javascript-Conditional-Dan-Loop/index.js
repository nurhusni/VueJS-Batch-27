// Soal 1
// =======================================================

var nilai = 92;

if (nilai >= 85) {
  indeks = "A";
} else if (nilai >= 75 && nilai < 85) {
  indeks = "B";
} else if (nilai >= 65 && nilai < 75) {
  indeks = "C";
} else if (nilai >= 55 && nilai < 65) {
  indeks = "D";
} else if (nilai < 55) {
  indeks = "E";
}

console.log("Soal 1");
console.log("Nilai " + nilai + " Mendapatkan " + indeks);
console.log("\n");

// Soal 2
// =======================================================

var tanggal = 6;
var bulan = 3;
var tahun = 1999;

switch (bulan) {
  case 1:
    strBulan = "Januari";
    break;
  case 2:
    strBulan = "Februari";
    break;
  case 3:
    strBulan = "Maret";
    break;
  case 4:
    strBulan = "April";
    break;
  case 5:
    strBulan = "Mei";
    break;
  case 6:
    strBulan = "Juni";
    break;
  case 7:
    strBulan = "Juli";
    break;
  case 8:
    strBulan = "Agustus";
    break;
  case 9:
    strBulan = "September";
    break;
  case 10:
    strBulan = "Oktober";
    break;
  case 11:
    strBulan = "November";
    break;
  case 12:
    strBulan = "Desember";
    break;
  default:
    break;
}

console.log("Soal 2");
console.log(tanggal + " " + strBulan + " " + tahun);
console.log("\n");

// Soal 3
// =======================================================

console.log("Soal 3");

var n = 5;
var tag = "";

for (var i = 1; i <= n; i++) {
  for (var j = 1; j <= i; j++) {
    tag += "#";
  }
  console.log(tag);
  tag = "";
}

console.log("\n");

// Soal 4
// =======================================================

console.log("Soal 4");

var m = 11;
var tag = "";

var pertama = "I love programming";
var kedua = "I love Javascript";
var ketiga = "I love VueJS";

for (var i = 1; i <= m; i++) {
  tag += "#";

  if (i % 3 == 1) {
    console.log(i + " - " + pertama);
  } else if (i % 3 == 2) {
    console.log(i + " - " + kedua);
  } else if (i % 3 == 0) {
    console.log(i + " - " + ketiga);
    console.log(tag);
  }
}
