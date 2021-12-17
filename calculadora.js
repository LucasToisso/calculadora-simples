
function verificaSoma(){
    //calculo.innerHTML = +document.getElementById('primeiro').value + +document.getElementById('segundo').value;
    calculo.innerHTML = Number(document.getElementById('primeiro').value) + Number(document.getElementById('segundo').value);
}

function verificaSubt(){
    calculo.innerHTML = document.getElementById('primeiro').value - document.getElementById('segundo').value;
}

function verificaDivi(){
    calculo.innerHTML = document.getElementById('primeiro').value / document.getElementById('segundo').value;
}

function verificaMult(){
    calculo.innerHTML = document.getElementById('primeiro').value * document.getElementById('segundo').value;
}
