console.log('JS OK')

const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];


const thumbClick = document.querySelector('thumb');
// L'utente clicca su una thumb per visualizzare l'immagine
thumbClick.addEventListener('click', thumbActive)

if (thumbClick == true) {
    const thumbActive = document.querySelector('active');
    document.querySelector('thumb') = thumbActive;
}


//cambio immagine ogni 3 secondi
const CHANGE_IMAGE_DELAY = 3;

let idInterval = setInterval(automaticImageChange, CHANGE_IMAGE_DELAY * 1000);

function manageTimeInterval() {
    idInterval = setInterval(automaticImageChange, CHANGE_IMAGE_DELAY * 1000);
}


//mouseover slideBlock
slideBlock = document.querySelector('slider-wrapper');

slideBlock.addEventListener("mouseover", changeDef);

function changeDef() {
    if (slideBlock == true) {
        clearInterval(idInterval);
    } else {
        idInterval == true;
    }
}