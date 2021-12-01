const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')

function isLampBroken () { // testar se a lampada esta quebrada
    return lamp.src.indexOf('quebrada') > -1
}
function lampOn(){
    if (!isLampBroken()){ //se não estiver quebrada ele troca a foto
        lamp.src = './img/ligada.jpg'
    }
}
function lampOff(){
    if (!isLampBroken()){ //se não estiver quebrada ele troca a foto
        lamp.src = './img/desligada.jpg'   
    }
}
function lampBroken(){
    lamp.src = './img/quebrada.jpg'
}

turnOn.addEventListener('click',lampOn);
turnOff.addEventListener('click',lampOff);
lamp.addEventListener('mouseover',lampOn); //quando o mouse passar
lamp.addEventListener('mouseleave', lampOff) // mouse sair
lamp.addEventListener('dblclick',lampBroken) //double click
