/*Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione
Creare un carosello come nella foto allegata.

Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.

BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.

BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.*/

//array di oggetti
const images = [
     {
         image: 'img/01.webp',
         title: 'Marvel\'s Spiderman Miles Morale',
         text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
     }, 
     {
         image: 'img/02.webp',
         title: 'Ratchet & Clank: Rift Apart',
         text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
     }, 
     {
         image: 'img/03.webp',
         title: 'Fortnite',
         text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
     }, 
     {
         image: 'img/04.webp',
         title: 'Stray',
         text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
     }, 
     {
         image: 'img/05.webp',
         title: "Marvel's Avengers",
         text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
     }
];

for(let i = 0; i < images.length; i++){
     console.log(images[i])

     let singoloOggetto = images[i]

     let imgSingola = './assets/'

     //creo le card
     document.querySelector('.container-card').innerHTML += `
          <div class="card active position-relative ">
               <img src="${imgSingola}${singoloOggetto.image}" class="" alt="...">
               <div class="position-absolute bottom-0 end-0 text-end text-white m-2">
                    <h5 class="card-title">${singoloOggetto.title}</h5>
                    <p class="card-text">${singoloOggetto.text}</p>
               </div>
          </div>
          `
}


// al click l'immagine va avanti o indietro
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

let active = 0

next.addEventListener( 'click', function(){

     let activeFoto = document.querySelector('.card.active')
     console.log(activeFoto)

     let fotoToActive = activeFoto.nextElementSibling
     console.log(fotoToActive)

    if( active == images.length - 1){
        active = 0
    }else{
        active++;
    }

    activeFoto.classList.remove('active')

    fotoToActive.classList.add('active')

})

prev.addEventListener( 'click', function(){

    let activeFoto = document.querySelector('.card.active')
    console.log(activeFoto)

    let fotoToActive = activeFoto.previousElementSibling
    console.log(fotoToActive)

    if( active == 0){
        active == images.length - 1
    }else{
        active--;
    }

    activeFoto.classList.remove('active')

    fotoToActive.classList.add('active')

})





