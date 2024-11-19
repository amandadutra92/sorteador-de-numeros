function sortear(){
    let quantidadeDeNumeros = parseInt(document.getElementById('quantidade').value);
    let doNumero = parseInt(document.getElementById('de').value);
    let ateONumero = parseInt(document.getElementById('ate').value);
    let intervaloDoAte = ateONumero - doNumero + 1;//Foi adicionado 1 para garantir que o último número esteja incluso.

    if (ateONumero <= doNumero){
        alert('O número inicial deve ser menor que o final');
        return;
    }

    if (intervaloDoAte < quantidadeDeNumeros){
        alert('Ops! Não é possível sortear tantos números nesse intervalo. Diminua a quantidade de números ou aumente o intervalo.');
        return;
    }

    let sorteados = [];
    let numero;

    while(sorteados.length <  quantidadeDeNumeros){
        numero = obterNumeroAleatorio(doNumero,ateONumero);
     
        if(!sorteados.includes(numero)){
            sorteados.push(numero)
        }
        
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`
    condicaoBotaoReiniciar();
    condicaoBotaoSortear();
}

function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function condicaoBotaoReiniciar(){
    let botaoReiniciar = document.getElementById('btn-reiniciar');
    if(botaoReiniciar.classList.contains('container__botao-desabilitado')){
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
    }else{
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
    }
}

function condicaoBotaoSortear(){
    let botaoSortear = document.getElementById('btn-sortear');
    if(botaoSortear.classList.contains('container__botao-desabilitado')){
        botaoSortear.classList.remove('container__botao-desabilitado');
        botaoSortear.classList.add('container__botao');
    }else{
        botaoSortear.classList.remove('container__botao');
        botaoSortear.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value ='';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    condicaoBotaoReiniciar();
    condicaoBotaoSortear();
}

