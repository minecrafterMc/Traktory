// tablice:
// tablice pozwalają nam przechowywać wiele wartości w jednej zmiennej
const tablica = ["przykladowa wartosc 1","przykladowa wartosc 2"]; // itd
/*
wartości w tablicy:
[
0: "przykladowa wartosc 1",
1: "przykladowa wartosc 2"
]
*/
// aby zmienić / użyć wartości z tablicy używamy
tablica[0]= "nowa przykładowa wartosc 1";
// UWAGA: pierwsza wartość w tablicy jest pod numerem 0 a nie 1
/*
nowe wartości w tablicy:
[
0: "nowa przykladowa wartosc 1",
1: "przykladowa wartosc 2"
]
*/


// zapisywanie elementu HTML do zmiennej
// przykładowy element: <p id="paragraf1"> </p>
const element1 = document.getElementById("paragraf1");
//zmiana stylu elementu (dla przykładu zmieniam kolor czcionki)
element1.style.color = "red";
// zmiana "wnętrza" elementu (<p id="paragraf1">[wnętrze]</p>)
element1.innerHTML = "nowe wnętrze elementu";

// zapisywanie wszystkich elementów danego typu do zmiennej
const paragrafy = document.getElementsByTagName("p");
//teraz możemy nadać wszystkim elementom p jakiś styl używając pętli for
for (let i = 0;i < paragrafy.length;i++)
{
  paragrafy[i].style.color = "green";
}

//event listenery
// możemy sprawić żeby element reagował na interakcję od użytkownika
const element2 = document.getElementById("paragraf2"); 
// zapisujemy element:
//<p id="paragraf2">przykladowy tekst</p>
// do zmiennej element2
element2.addEventListener("mouseover", function(){
  this.style.color = "red";
});
// metoda [zmienna z elementem].addEventListener() dodaje event listener do tego elementu
// addEventListener([wydarzenie np. mouseover], [funkcja do wykonania])
// przykładowe wydarzenia:
// mouseover - najechanie myszką na element
// mouseout - zjechanie myszką z elementu
// mousedown - kliknięcie na element
// mouseup - "odkliknięcie" elementu