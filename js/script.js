/*======================
 header section start
 =======================*/

const menu = document.querySelector('.menu');
const icon = document.querySelector('.menu-icon');
const cross_bar = document.querySelector('.cross-bar');
icon.addEventListener('click', () => {
    menu.classList.add('d-menu')
    cross_bar.classList.add('d-cross')
});
cross_bar.addEventListener('click', () => {
    menu.classList.remove('d-menu')
    cross_bar.classList.remove('d-cross')
});

/*======================
 counter section start
 =======================*/

const counter = document.querySelectorAll('.counter');
let speed = 200;
counter.forEach((currElem) => {
    const updateCounter = () => {
        const dataTarget = parseInt(currElem.dataset.num)
        const initialValue = parseInt(currElem.innerText)
        const incrNum = Math.trunc(dataTarget/speed)
        if(initialValue < dataTarget){
            currElem.innerText = `${ initialValue + incrNum}+`
            setTimeout(updateCounter, 10)
        }
    }
    updateCounter();
});