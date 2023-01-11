let check = document.querySelector('.check');
let input = document.querySelector('.input');
let title = document.querySelector('.title h1');
let boxs = document.querySelectorAll('.boxs .box');
let prices = document.querySelectorAll('.box h2');
let overviewTitle = document.querySelector('.overview h2')
check.onclick = ()=>{
check.classList.toggle('toggleCheck');
input.classList.toggle('toggleInput');
document.body.classList.toggle('toggleBackground');
title.classList.toggle('toggleTitle');
boxs.forEach(box=>{
    box.classList.toggle('toggleBoxs');
})
prices.forEach(price=>{
    price.classList.toggle('toggleTitle');
})
overviewTitle.classList.toggle('toggleTitle');
}