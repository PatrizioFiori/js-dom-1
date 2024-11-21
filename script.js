const image = document.querySelector('.lampadina');
const button = document.getElementById('switchButton');


const img1 = './img/white_lamp.png'; 
const img2 = './img/yellow_lamp.png'; 

let isImg1 = true;
let isGray = true;
let isButtonOn = true;
let btnColor = true;


// EventListener del click
button.addEventListener('click', () => {
  // Cambia immagine
  if (isImg1) {
    image.src = img2;
  } else {
    image.src = img1;
  }
  isImg1 = !isImg1;



  // Cambia sfondo
  if (isGray) {
    document.body.style.backgroundColor = 'white';
  } else {
    document.body.style.backgroundColor = 'gray';
  }
  isGray = !isGray;
  
  if (isButtonOn) {
        button.textContent = "Spegni la luce"   
    } else {
        button.textContent = "Accendi la luce"
    }
    isButtonOn = !isButtonOn;    
    
});
