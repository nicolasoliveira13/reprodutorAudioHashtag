const botaoPlayPause = document.getElementById('play-pause');
const botaoAvancar = document.getElementById('proximo');
const botaoVoltar = document.getElementById('anterior');
const audioCapitulo = document.getElementById('audio-capitulo');
const nomeCapitulo = document.getElementById('capitulo')


const numeroCapitulos = 10;
let taTocando = 0;
let capituloAtual = 1

function tocarFaixa() {
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle');
    botaoPlayPause.classList.add('bi-pause-circle');
}

function pausarFaixa() {
    audioCapitulo.pause();
    botaoPlayPause.classList.remove('bi-pause-circle');
    botaoPlayPause.classList.add('bi-play-circle');
}

function tocarOuPausar() {
    if (taTocando === 0) {
        tocarFaixa();
        taTocando = 1;
    } else {
        pausarFaixa();
        taTocando = 0;
    }
}

function avancarFaixa() {
    if(capituloAtual == numeroCapitulos){
    capituloAtual = 1;
    }else{
        capituloAtual++;
    }

    audioCapitulo.src = './books/dom-casmurro/' + capituloAtual + '.mp3';
    tocarFaixa();
    taTocando = 1;
    nomeCapitulo.innerHTML = 'Capítulo ' + capituloAtual;
}

function voltarFaixa() {
    if(capituloAtual == 1){
    capituloAtual = numeroCapitulos;
    }else{
        capituloAtual--;
    }

    audioCapitulo.src = './books/dom-casmurro/' + capituloAtual + '.mp3';
    tocarFaixa();
    taTocando = 1;
    nomeCapitulo.innerHTML = 'Capítulo ' + capituloAtual;
}


botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', avancarFaixa);
botaoVoltar.addEventListener('click', voltarFaixa);