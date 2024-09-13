function luasSegitiga(alas, tinggi){
    let luas = 1/2 * alas * tinggi;

    return luas;
}

let hitungLuas;

hitungLuas = luasSegitiga(10, 8);
alert("luas segitiga pertama adalah " + hitungLuas);

hitungLuas = luasSegitiga(8, 7);
alert("luas segitiga kedua adalah " + hitungLuas);

let a;
a = prompt("alas segitiga ke-3:")
let t;
t= prompt("tinggi segitiga ke-3:")

hitungLuas = luasSegitiga(a,t)
alert("luas segitiga ketiga adalah " + hitungLuas);