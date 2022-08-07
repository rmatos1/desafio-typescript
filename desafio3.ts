let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let resultado: number = 0;

function somarAoSaldo(soma: number): void {

    resultado += soma;

    if(campoSaldo)
        campoSaldo.innerHTML = resultado.toString();   
}

function limparSaldo(): void {

    if(campoSaldo)
        campoSaldo.innerHTML = '';
}

if(botaoAtualizar) {

    botaoAtualizar.addEventListener('click', function () {

        if(soma)
            somarAoSaldo(Number(soma.value));
    });
}

if(botaoLimpar) {

    botaoLimpar.addEventListener('click', function () {
        limparSaldo();
    });
}

/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */