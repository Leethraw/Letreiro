const letreiro = document.querySelector('.letreiro');
const container = document.querySelector('.container');
const barraVelocidade = document.getElementById('velocidade');
const campoFrase = document.getElementById('frase');
const botaoAtualizar = document.getElementById('atualizar');
const seletorCor = document.getElementById('cor');

let pos = 0;       // posição inicial
let direcao = 1;   // 1 = direita, -1 = esquerda
let velocidade = parseInt(barraVelocidade.value); // valor inicial da barra

// Atualiza a velocidade quando o usuário mexe na barra
barraVelocidade.addEventListener('input', () => {
    velocidade = parseInt(barraVelocidade.value);
});

// Atualiza a frase quando o usuário clica no botão
botaoAtualizar.addEventListener('click', () => {
    letreiro.textContent = campoFrase.value;
    pos = 0; // reinicia posição para começar da esquerda
    direcao = 1;
});

// Atualiza a cor do texto em tempo real
seletorCor.addEventListener('input', () => {
    letreiro.style.color = seletorCor.value;
});

function animar() {
    const larguraContainer = container.offsetWidth;
    const larguraTexto = letreiro.offsetWidth;

    pos += direcao * velocidade;

    // Inverter direção ao chegar nas bordas
    if (pos + larguraTexto >= larguraContainer) {
        direcao = -1;
    }
    if (pos <= 0) {
        direcao = 1;
    }

    letreiro.style.left = pos + 'px';
    requestAnimationFrame(animar);
}

animar();
