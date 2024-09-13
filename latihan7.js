let count = prompt("Masukan jumlah angka:");

for(let i = 0; i<count; i++){
    console.log("Saya sedang belajar javascript dengan for urutan ke-" + i);
}

console.log("\n");

let j = 0;
while(j<count){
    console.log("Saya sedang belajar javascript dengan while urutan ke-" + j);
    j=j+1;
}

console.log("\n");

let k=0
do{
    console.log("Saya sedang belajar javascript dengan do while urutan ke-" + k);
    k=k+1;
}while(k<count);