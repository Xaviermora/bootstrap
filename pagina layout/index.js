const img = document.getElementsByClassName('ampliar-img');
const containerImgAmpliada = document.getElementById('container-img-ampliada');
const body = document.getElementsByTagName('body');
const resultadoImgAmpliada = document.getElementById('img-zoom');

for(let i=0; i<img.length; i++){
    img[i].addEventListener('click', ampliarImg);
}

containerImgAmpliada.addEventListener('click', imgAmpliadaCerrar);

function ampliarImg(e){
    resultadoImgAmpliada.src = e.path[0].src;
    containerImgAmpliada.classList.remove('d-none');
    containerImgAmpliada.classList.add('d-flex');
    body[0].style.overflowY = "hidden";
}

function imgAmpliadaCerrar(){
    containerImgAmpliada.classList.remove('d-flex');
    containerImgAmpliada.classList.add('d-none');
    body[0].style.overflowY = "";
}