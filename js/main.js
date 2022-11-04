"use strict";
let btn = document.querySelector("#btn-share");
let btnActive = document.querySelector("#btn-share-active");
let share = document.querySelector(".article__content__share");
let imgBtn = document.querySelector("#img-btn");

//Exibir/Remover campo de compartilhar (redes sociais)
btn.addEventListener("click", () => {
    share.classList.toggle("show");
    alterarImgBtn();
});
btnActive.addEventListener("click", () => {
    share.classList.toggle("show");
    alterarImgBtn();
});

//Alterando imagem da seta de compartilhar quando clicada (Desktop)
function alterarImgBtn() {
    if(share.classList.contains("show")){
        imgBtn.setAttribute('src', "img/share-active.svg");
    } else {
        imgBtn.setAttribute('src', "img/share.svg");
    }
}