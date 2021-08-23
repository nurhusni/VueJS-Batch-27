// Soal 1

const luas_persegi_panjang = (panjang, lebar) => panjang * lebar;
const keliling_persegi_panjang = (panjang, lebar) => 2 * (panjang + lebar);

// Soal 2

const newFunction = (firstName, lastName) => {
  return {
    firstName,
    lastName,
    fullName: () => console.log(`${firstName} ${lastName}`),
  };
};

newFunction("William", "Inoh").fullName();

// Soal 3

const newObject = {
  firstName: "Muhammad",
  lastName: "Iqbal Mubarok",
  address: "Jalan Ranamanyar",
  hobby: "playing football",
};

const { firstName, lastName, address, hobby } = newObject;

console.log(firstName, lastName, address, hobby);

// Soal 4

const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];

const combined = [...west, ...east];

console.log(combined);

// Soal 5

const planet = "earth";
const view = "glass";

const before = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet}`;

console.log(before);
