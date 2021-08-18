// Soal 1

var pertama = "saya sangat senang hari ini";
var kedua = "belajar javascript itu keren";

var subPertama = pertama.substring(0, 5);
var subKedua = pertama.substring(12, 19);
var subKetiga = kedua.substring(0, 8);
var subKeempat = kedua.substring(8, 18).toUpperCase();

var jawaban1 = subPertama.concat(subKedua, subKetiga, subKeempat);

console.log(jawaban1);

// Soal 2

var kataPertama = "10";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "6";

var intPertama = Number(kataPertama);
var intKedua = Number(kataKedua);
var intKetiga = Number(kataKetiga);
var intKeempat = Number(kataKeempat);

var jawaban2 = intPertama + intKedua * intKetiga + intKeempat

console.log(jawaban2);

// Soal 3

var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4, 14); 
var kataKetiga = kalimat.substring(15, 18); 
var kataKeempat = kalimat.substring(19, 24); 
var kataKelima = kalimat.substring(25); 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);
