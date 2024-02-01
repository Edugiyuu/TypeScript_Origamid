/* const video = document.querySelector('video');
const video2 = document.querySelector('#videoprincipal');

if (video instanceof HTMLVideoElement){
    console.log(video.volume);
}
video2?.volume; */

const links = document.querySelectorAll('.link')
//Não é um array


links.forEach((link)=>{
    if (link instanceof HTMLAnchorElement) {
        //porque não usar typeof??
        console.log(link.href);
    }
})
//Array<string>
//NodeListOf<Element>
//Oque é nodeList?

//Não é um array

function ativarElementoAnchor(elemento: HTMLAnchorElement) {
    elemento.style.color = 'red';
    elemento.style.border = '2px solid red'
}
function ativarElementoButton(elemento: HTMLButtonElement) {
    elemento.style.color = 'red';
    elemento.style.border = '2px solid red'
}
links.forEach((link)=>{
   if (link instanceof HTMLAnchorElement) {
    ativarElementoAnchor(link)
   }
   if (link instanceof HTMLButtonElement) {
    ativarElementoButton(link);
   }
})