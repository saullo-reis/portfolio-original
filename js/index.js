const buttons = document.getElementsByClassName('button')
const buttonAbrir = document.getElementById('button-abrir')
const divs = document.getElementsByClassName('skills')
const projects = document.getElementsByClassName('section')
const arrayDivs = [...divs]
const arrayProjects = [...projects]
console.log(buttonAbrir)
let count = 0

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

function more(){
    arrayProjects.forEach((element)=> {
        if(element.classList.contains('active')){
            return
        }
        else{
            element.classList.add('active')
            count++
        }
    })
    console.log(count)
    if(arrayProjects.length <= count+1){
        buttonAbrir.style.opacity = '0.1'
    }
}