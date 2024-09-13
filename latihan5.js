let nilai;

nilai = prompt("Berapa nilai matematika Anda?")

if(nilai >90){
    alert("Predikat anda A")

}else if(nilai <=90 && nilai > 80){
    alert("Predikat anda B")
    
}else if(nilai <= 80 && nilai > 70){
    alert("Predikat anda C")

}else if(nilai <= 70 && nilai > 60){
    alert("Predikat anda D, disarankan mengulang!")

}else{
    alert("Anda tidak lulus, Predikat anda E!")
}