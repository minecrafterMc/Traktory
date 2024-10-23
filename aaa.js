//zadanie 1
var n = 7;
var suma = 0;
//wersja z for
for (let i = 0; i <= n; i++){
  suma += i;
}
console.log(suma);
//wersja z while
let i = 0;
var suma = 0;
var n = 7;
while (i <= n){
  suma += i;
  i++;
}
console.log(suma);
//zadanie 2
var elementy = document.getElementsByTagName("td");
for (let i = 0;i<elementy.length;i++){
  elementy[i].style.color = "green";
}
//zadanie 3
var text = prompt("podaj text");
if (text === "1234"){
  console.log("teksty są identyczne");
}
else{
  console.log("teksty nie są identyczne");
}