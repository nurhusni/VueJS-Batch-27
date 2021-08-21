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

// Soal 2
// Judul : Function Penghasil Tanggal Hari Esok

console.log("Soal 2");

function next_date(tanggal, bulan, tahun) {
  // Array untuk nama bulan
  arrBulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  // Menentukan jumlah hari
  if (
    bulan == 1 ||
    bulan == 3 ||
    bulan == 5 ||
    bulan == 7 ||
    bulan == 8 ||
    bulan == 10 ||
    bulan == 12
  ) {
    var jumlahHari = 31;
  } else if (bulan == 4 || bulan == 6 || bulan == 9 || bulan == 11) {
    var jumlahHari = 30;
  } else if (bulan == 2) {
    // Menentukan jumlah hari untuk Februari
    if (tahun % 4 == 1 || (tahun % 100 == 0 && tahun % 400 == 1)) {
      var jumlahHari = 28;
    } else if (tahun % 4 == 0) {
      var jumlahHari = 29;
    }
  }

  // Menentukan perubahan tanggal di akhir bulan
  if (tanggal == jumlahHari) {
    tanggal = 1;
    // Menentukan perubahan bulan di akhir tahun
    if (bulan == 12) {
      bulan = 1;
      tahun++;
    } else {
      bulan++;
    }
  }

  // Mengonversi integer bulan ke string bulan
  var strBulan = arrBulan[bulan - 1];

  console.log(tanggal, strBulan, tahun);
}

// Contoh 1

var tanggal = 29;
var bulan = 2;
var tahun = 2020;

next_date(tanggal, bulan, tahun);

// Contoh 2

var tanggal = 28;
var bulan = 2;
var tahun = 2021;

next_date(tanggal, bulan, tahun);

// Contoh 3

var tanggal = 31;
var bulan = 12;
var tahun = 2020;

next_date(tanggal, bulan, tahun);
