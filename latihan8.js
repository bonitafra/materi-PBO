let namaMahasiswa = ["Lisa", "Boni", "Dini", "Kayla", "Gizza"];

let namaBaru = prompt ("Masukan nama baru:")

namaMahasiswa.push(namaBaru);

for(let i = 0; i < namaMahasiswa.length; i++){
    console.log(namaMahasiswa[i]);
}