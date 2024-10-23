// if  
// if służy do sprawdzania czy dane wyrażenie jest prawdą
// np.
var a = 10;
var b = 5;
if (a < b)
{
  console.log("a jest mniejsze od b");
}
else
{
  console.log("b jest mniejsze od a");
}

// pętle:
// while:
// pętla while wykonuje się podczas kiedy jej warunek jest prawdą
// np.
var c = 10;
while (c > 5)
{
  console.log(c);
  c--;
}
// ten kod wypisze w konsoli
/*
10
9
8
7
6
*/


// do while:
// pętla do while działa podobnie do pętli while, tylko że zawsze wykonuje sie przynajmniej raz
// np.
var d = 10;
do {
  console.log(d);
  d--;
} while (d < 1);
//konsola wypisze:
/*
10
*/
//ponieważ warunek jest fałszywy pętla wykona się tylko raz

// for:
// pętle for pozwalają nam zdefiniować zmienną przed pierwszym wykonaniem, i dodać instrukcję, która wykonuje się po każdym zapętleniu
// np.
for (let i = 0;i < 10;i++){
  console.log(i);
}
// konsola wypisze:
/*
0
1
2
3
4
5
6
7
8
9
*/