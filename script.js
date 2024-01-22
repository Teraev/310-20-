let h1 = document.querySelector('.position h1')
let counter = 0
let first = document.querySelector('.first')

first.onclick = () => {
    if (counter > -10) {
        counter--
        h1.textContent = counter;
      }
}

let second = document.querySelector('.second')

second.onclick = () => {
    if (counter ) {
        counter = 0
        h1.textContent = counter;
      }
}

let third = document.querySelector('.third') 

third.onclick = () => {
    if (counter < 10) {
        counter++
        h1.textContent = counter;
      }
}





