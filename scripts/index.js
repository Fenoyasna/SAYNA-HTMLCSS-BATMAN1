
let bouton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('veuiller saisir votre nom');
    localStorage.setItem('nom', myName);
    myHeading.textContent = ' Mozila est cool,' + myName;
}
alert('salut'); 
