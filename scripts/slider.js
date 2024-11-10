const images = [
   'images/slider/1920/main1.png',
   'images/slider/1920/main2.png',
   'images/slider/1920/main3.png'
];

let currentIndex = 0; 
const backgroundDiv = document.querySelector('.page__hero-background'); 


function changeBackgroundImage() {
   currentIndex = (currentIndex + 1) % images.length; 
   backgroundDiv.style.backgroundImage = `url(${images[currentIndex]})`;
}

window.onload = function() {
   setInterval(changeBackgroundImage, 5000);
};

