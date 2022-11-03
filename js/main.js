"use strict";
let btn = document.querySelector("#btn-share");
let btnActive = document.querySelector("#btn-share-active");
let share = document.querySelector(".article__content__share");

btn.addEventListener("click", () => {
    share.classList.toggle("show");
});

btnActive.addEventListener("click", () => {
    share.classList.toggle("show");
});