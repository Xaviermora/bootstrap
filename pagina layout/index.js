const img = document.getElementsByClassName('ampliar-img');
const containerImgAmpliada = document.getElementById('container-img-ampliada');
const html = document.getElementsByTagName('html');
const resultadoImgAmpliada = document.getElementById('img-zoom');
const navbar = document.getElementsByClassName("navbar");

for(let i=0; i<img.length; i++){
    img[i].addEventListener('click', ampliarImg);
}

containerImgAmpliada.addEventListener('click', imgAmpliadaCerrar);

function ampliarImg(e){
    resultadoImgAmpliada.src = e.srcElement.src;
    containerImgAmpliada.classList.remove('d-none');
    containerImgAmpliada.classList.add('d-flex');
    html[0].style.overflowY = "hidden";
    navbar[0].classList.add('d-none');
    e.preventDefault();
}

function imgAmpliadaCerrar(){
    containerImgAmpliada.classList.remove('d-flex');
    containerImgAmpliada.classList.add('d-none');
    html[0].style.overflowY = "";
    navbar[0].classList.remove('d-none');
}