"use strict";
let btn = document.querySelector("#btn-share");
let btnActive = document.querySelector("#btn-share-active");
let share = document.querySelector(".article__content__share");
let imgBtn = document.querySelector("#img-btn");

btn.addEventListener("click", () => {
    share.classList.toggle("show");
    alterarBtnShare();
});

btnActive.addEventListener("click", () => {
    share.classList.toggle("show");
    alterarBtnShare();
});

function alterarBtnShare() {
    if(share.classList.contains("show")){
        imgBtn.setAttribute('src', "img/share-active.svg");
    } else {
        imgBtn.setAttribute('src', "img/share.svg");
    }
}