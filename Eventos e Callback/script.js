"use strict";
/* const button = document.querySelector('button')

 function handleClick(event:Event) {
    console.log(event);
    
}
function handleClick(event:PointerEvent) {
    console.log(event);
    
}

button?.addEventListener('pointerdown',handleClick) */
//                       O Event pode ser usado aqui para simplificar todos eles
function ativarMenu(event) {
    console.log(event);
}
document.documentElement.addEventListener('mousedown', ativarMenu);
document.documentElement.addEventListener('touchstart', ativarMenu);
document.documentElement.addEventListener('keydown', ativarMenu);
//Eventos e Callback 2
/* const button = document.querySelector('button');
function handleClick(this: HTMLButtonElement, event:MouseEvent) {
    console.log(this);
}

button?.addEventListener('click',handleClick) */
const button = document.querySelector('button');
function handleClick(event) {
    console.log(this);
}
button?.addEventListener('click', handleClick);
