const input = document.querySelector("input");

function totalMudou() {
    console.log('apertou');
    const value = Number(input.value)
    const p = document.querySelector('p')
    p.innerText = `ganho total:${value + 100 - input.value * 0.2}`
}

input.addEventListener("keyup",totalMudou)