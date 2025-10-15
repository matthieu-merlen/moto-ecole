const images = ["moto1.jpg", "moto2.jpg", "moto3.jpg",];
let index = 0;
const photo = document.getElementById("photo");

function changeImage(){
    index = (index + 1) % images.length;
    photo.style.opacity = 0;

    setTimeout(() => {
        photo.src = images[index];
        photo.style.opacity = 1;
    }, 500);
}


setInterval(changeImage, 3000);
