// Soal 1
// =========================================================================

console.log("Soal 1");

var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];
var sortedDaftarHewan = daftarHewan.sort();

for (var i = 0; i < daftarHewan.length; i++) {
  console.log(sortedDaftarHewan[i]);
}

console.log("\n");

// Soal 2
// =========================================================================

console.log("Soal 2");

function introduce(identitas) {
  console.log(
    "Nama saya " +
      identitas.name +
      ", umur saya " +
      identitas.age +
      " tahun, alamat saya di " +
      identitas.address +
      ", dan saya punya hobby yaitu " +
      identitas.hobby
  );
}

var data = { name: "Panji", age: 22, address: "Tangerang", hobby: "Gaming" };
var perkenalan = introduce(data);
console.log("\n");

// Soal 3
// =========================================================================

console.log("Soal 3");

function hitung_huruf_vokal(kalimat) {
  var count = 0;
  var arrVokal = ["a", "i", "u", "e", "o"];

  var hurufKalimat = kalimat.toLowerCase().split("");

  for (var huruf of hurufKalimat) {
    for (var vokal of arrVokal) {
      if (huruf == vokal) {
        count++;
        break;
      }
    }
  }

  return count;
}

var hitung_1 = hitung_huruf_vokal("Panji");
var hitung_2 = hitung_huruf_vokal("Ahmad");
var hitung_3 = hitung_huruf_vokal("Nurhusni");

console.log(hitung_1, hitung_2, hitung_3);
console.log("\n");

// Soal 4
// =========================================================================
// Menggunakan persamaan y = mx + c
// Sehingga y = 2*x - 2 = 2*(x - 1)

console.log("Soal 4");

function hitung(nilai) {
  return 2 * (nilai - 1);
}

console.log(hitung(0));
console.log(hitung(1));
console.log(hitung(2));
console.log(hitung(3));
console.log(hitung(5));
