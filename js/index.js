const buttons = document.getElementsByClassName('button')
const divs = document.getElementsByClassName('skills')
const arrayDivs = [...divs]
console.log(divs)

function sobre() {
    arrayDivs.forEach(element => {
        element.classList.remove('active')
        divs[0].classList.add('active')
    });
};

function hard(){
    arrayDivs.forEach(element => {
        element.classList.remove('active')
        divs[1].classList.add('active')
    });
}

function soft(){
    arrayDivs.forEach(element => {
        element.classList.remove('active')
        divs[2].classList.add('active')
    });
}

